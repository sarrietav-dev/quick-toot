import { AuthCacheKeys, ClientCredentials } from './../types/types.d';
import {
  MastodonTokenResponse,
  MastodonApplication,
} from './../types/mastodon-api-types.d';
import axios from 'axios';

export class MastodonApi {
  private instanceApiUrl = '';
  private clientCredentials!: ClientCredentials;
  private authCode = '';
  private accessToken = '';

  private fetchData = async () => {
    const instance = ApiCacheStore.getInstanceName();
    this.instanceApiUrl = `https://${instance}`;
    this.clientCredentials = await this.getClientCredentials();
    this.authCode = this.getAuthCode() ?? '';
    this.accessToken = await this.getAccessToken();
  };

  private getClientCredentials = async (): Promise<ClientCredentials> => {
    try {
      const clientCredentials = ApiCacheStore.getClientCredentials();
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
      return {
        client_id,
        client_secret,
        client_name: name,
      };
    }
  };

  private getAuthCode = () => {
    try {
      const authCode = ApiCacheStore.getAuthCode();
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

  private getAccessToken = async () => {
    try {
      const accessToken = ApiCacheStore.getAccessToken();
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
}

class ApiCacheStore {
  static getInstanceName() {
    const instanceName = localStorage.getItem(AuthCacheKeys.InstanceName);
    // TODO: Make this error more specific.
    if (instanceName === null) throw Error();
    return instanceName;
  }

  static getClientCredentials(): ClientCredentials {
    const jsonable = localStorage.getItem(AuthCacheKeys.ClientCredentials);
    // TODO: Make this error more specific.
    if (jsonable === null) throw Error();

    const clientCredentials = JSON.parse(jsonable) as ClientCredentials;
    return clientCredentials;
  }

  static getAuthCode() {
    const authCode = localStorage.getItem(AuthCacheKeys.AuthCode);
    // TODO: Make this error more specific.
    if (authCode === null) throw Error();
    return authCode;
  }

  static getAccessToken() {
    const accessToken = localStorage.getItem(AuthCacheKeys.AccessToken);
    // TODO: Make this error more specific.
    if (accessToken === null) throw Error();
    return accessToken;
  }
}
