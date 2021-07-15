import {
  checkAppCreated,
  checkUserAuthenticated,
  checkUserToken,
} from './../utils/authCacheCheckers';
import { ApiCacheKeys, ClientCredentials } from './../types/types.d';
import {
  MastodonTokenResponse,
  MastodonApplication,
  MastodonStatus,
} from './../types/mastodon-api-types.d';
import axios, { AxiosResponse } from 'axios';

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
      ApiCacheStore.instanceName = instanceName;
    } else {
      // TODO: Throw error if instanceName is not passed.
      instance = ApiCacheStore.instanceName;
    }

    this.instanceApiUrl = `https://${instance}`;

    if (checkAppCreated()) {
      this.clientCredentials = ApiCacheStore.clientCredentials;
    }

    if (checkUserAuthenticated()) {
      this.authCode = ApiCacheStore.authCode;
      if (checkUserToken()) {
        this.accessToken = ApiCacheStore.accessToken;
      }
    }
  }

  static getInstance(instanceName?: string): MastodonApi {
    if (!this.instance) this.instance = new MastodonApi(instanceName);
    return this.instance;
  }

  getClientCredentials = async (): Promise<ClientCredentials> => {
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
  };

  setClientCredentials(clientCredentials: ClientCredentials): void {
    ApiCacheStore.clientCredentials = clientCredentials;
    this.clientCredentials = clientCredentials;
  }

  setAuthCode(authCode: string): void {
    // Save credentials to local storage
    ApiCacheStore.authCode = authCode;

    this.authCode = authCode;
  }

  // This exist because a normal http response, at this specific endpoint doesn't seem to work.
  getAuthCodeUrl = (): string =>
    `${this.instanceApiUrl}/oauth/authorize?response_type=code&client_id=${this.clientCredentials.client_id}&redirect_uri=urn:ietf:wg:oauth:2.0:oob&scope=read+write`;

  getAccessToken = async (): Promise<string> => {
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
  };

  setAccessToken(accessToken: string): void {
    // Save credentials to local storage
    ApiCacheStore.accessToken = accessToken;

    this.authCode = accessToken;
  }

  postStatus = async (status: MastodonStatus): Promise<AxiosResponse> => {
    const response = await axios.post(
      `${this.instanceApiUrl}/api/v1/statuses`,
      status,
      {
        headers: {
          Authorization: this.accessToken,
        },
      },
    );
    return response;
  };

  logout = (): void => ApiCacheStore.logout();
}

class ApiCacheStore {
  static get instanceName(): string {
    const instanceName = localStorage.getItem(ApiCacheKeys.InstanceName);
    // TODO: Make this error more specific.
    if (instanceName === null) throw Error();
    return instanceName;
  }

  static set instanceName(v: string | null) {
    if (v) localStorage.setItem(ApiCacheKeys.InstanceName, v);
    else localStorage.removeItem(ApiCacheKeys.InstanceName);
  }

  static get clientCredentials(): ClientCredentials {
    const jsonable = localStorage.getItem(ApiCacheKeys.ClientCredentials);
    // TODO: Make this error more specific.
    if (jsonable === null) throw Error();

    const clientCredentials = JSON.parse(jsonable) as ClientCredentials;
    return clientCredentials;
  }

  static set clientCredentials(v: ClientCredentials | null) {
    if (v)
      localStorage.setItem(ApiCacheKeys.ClientCredentials, JSON.stringify(v));
    else localStorage.removeItem(ApiCacheKeys.ClientCredentials);
  }

  static get authCode(): string {
    const authCode = localStorage.getItem(ApiCacheKeys.AuthCode);
    // TODO: Make this error more specific.
    if (authCode === null) throw Error();
    return authCode;
  }

  static set authCode(v: string | null) {
    if (v) localStorage.setItem(ApiCacheKeys.AuthCode, v);
    else localStorage.removeItem(ApiCacheKeys.AuthCode);
  }

  static get accessToken(): string {
    const accessToken = localStorage.getItem(ApiCacheKeys.AccessToken);
    // TODO: Make this error more specific.
    if (accessToken === null) throw Error();
    return accessToken;
  }

  static set accessToken(v: string | null) {
    if (v) localStorage.setItem(ApiCacheKeys.AccessToken, v);
    else localStorage.removeItem(ApiCacheKeys.AccessToken);
  }

  static logout() {
    this.accessToken = null;
    this.authCode = null;
    this.clientCredentials = null;
    this.instanceName = null;
  }
}
