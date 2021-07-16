import { ApiCacheKeys, ClientCredentials } from '../types/types.d';

export const checkAppCreated = (): boolean => {
  const clientCredentials = localStorage.getItem(
    ApiCacheKeys.ClientCredentials,
  );
  if (clientCredentials === null) return false;

  const { client_id, client_secret } = JSON.parse(
    clientCredentials,
  ) as ClientCredentials;

  return client_id !== null && client_secret !== null;
};

export const checkUserAuthenticated = (): boolean => {
  const authKey = localStorage.getItem(ApiCacheKeys.AuthCode);

  return authKey !== null;
};

export const checkUserToken = (): boolean => {
  const accessToken = localStorage.getItem(ApiCacheKeys.AccessToken);

  return accessToken !== null;
};
