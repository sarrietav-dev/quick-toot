import { ApiCacheKeys, ClientCredentials } from './../types/types.d';
import {
  MastodonTokenResponse,
  MastodonApplication,
} from './../types/mastodon-api-types.d';
import axios from 'axios';

export class MastodonApi {
  private static instance: MastodonApi;
  private instanceApiUrl = '';
  private clientCredentials!: ClientCredentials;
  private authCode = '';
  private accessToken = '';

  private constructor(instanceName?: string) {
    let instance;
    if (instanceName) {
      instance = instanceName;
    } else {
      // TODO: Throw error if instanceName is not passed.
      instance = ApiCacheStore.instanceName;
    }

    this.instanceApiUrl = `https://${instance}`;
    this.fetchData();
  }

  static getInstance(instanceName?: string): MastodonApi {
    if (this.instance === null) this.instance = new MastodonApi(instanceName);
    return this.instance;
  }

  private fetchData = async () => {
    this.clientCredentials = await this.getClientCredentials();
    this.authCode = this.getAuthCode() ?? '';
    if (this.authCode !== '') this.accessToken = await this.getAccessToken();
  };

  private getClientCredentials = async (): Promise<ClientCredentials> => {
    try {
      const clientCredentials = ApiCacheStore.clientCredentials;
      return clientCredentials;
    } catch (error) {
      const response = await axios.post<MastodonApplication>(
        `${this.instanceApiUrl}/api/v1/apps`,
        {
          client_name: 'Quick-Toot',
          redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
        },
      );
      // TODO: Handle errors
      const { client_id, client_secret, name } = response.data;

      // Save credentials to local storage
      ApiCacheStore.clientCredentials = {
        client_id,
        client_secret,
        client_name: name,
      };

      return {
        client_id,
        client_secret,
        client_name: name,
      };
    }
  };

  setAuthCode(authCode: string): void {
    // Save credentials to local storage
    ApiCacheStore.authCode = authCode;

    this.authCode = authCode;
  }

  getAuthCode = (): string | void => {
    try {
      const authCode = ApiCacheStore.authCode;
      return authCode;
    } catch (error) {
      axios.post<string>(`${this.instanceApiUrl}/oauth/authorize`, {
        response_type: 'code',
        client_id: this.clientCredentials.client_id,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      });
      // TODO: Handle errors
    }
  };

  getAccessToken = async (): Promise<string> => {
    try {
      const accessToken = ApiCacheStore.accessToken;
      return accessToken;
    } catch (error) {
      const response = await axios.post<MastodonTokenResponse>(
        `${this.instanceApiUrl}/oauth/token`,
        {
          client_id: this.clientCredentials.client_id,
          client_secret: this.clientCredentials.client_secret,
          redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
          code: this.authCode,
          grant_type: 'authorization_code',
        },
      );
      // TODO: Handle errors

      const { access_token } = response.data;

      return access_token;
    }
  };

  setAccessToken(accessToken: string): void {
    // Save credentials to local storage
    ApiCacheStore.accessToken = accessToken;

    this.authCode = accessToken;
  }
}

class ApiCacheStore {
  static get instanceName() {
    const instanceName = localStorage.getItem(ApiCacheKeys.InstanceName);
    // TODO: Make this error more specific.
    if (instanceName === null) throw Error();
    return instanceName;
  }

  static set instanceName(v: string) {
    localStorage.setItem(ApiCacheKeys.InstanceName, v);
  }

  static get clientCredentials(): ClientCredentials {
    const jsonable = localStorage.getItem(ApiCacheKeys.ClientCredentials);
    // TODO: Make this error more specific.
    if (jsonable === null) throw Error();

    const clientCredentials = JSON.parse(jsonable) as ClientCredentials;
    return clientCredentials;
  }

  static set clientCredentials(v: ClientCredentials) {
    localStorage.setItem(ApiCacheKeys.ClientCredentials, JSON.stringify(v));
  }

  static get authCode() {
    const authCode = localStorage.getItem(ApiCacheKeys.AuthCode);
    // TODO: Make this error more specific.
    if (authCode === null) throw Error();
    return authCode;
  }

  static set authCode(v: string) {
    localStorage.setItem(ApiCacheKeys.AuthCode, v);
  }

  static get accessToken() {
    const accessToken = localStorage.getItem(ApiCacheKeys.AccessToken);
    // TODO: Make this error more specific.
    if (accessToken === null) throw Error();
    return accessToken;
  }

  static set accessToken(v: string) {
    localStorage.setItem(ApiCacheKeys.AccessToken, v);
  }
}
