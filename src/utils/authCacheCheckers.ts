import { AuthCacheKeys, ClientCredentials } from '../types/types.d';

export const checkAppCreated = (): boolean => {
  const clientCredentials = localStorage.getItem(
    AuthCacheKeys.ClientCredentials,
  );
  if (clientCredentials === null) return false;

  const { client_id, client_secret } = JSON.parse(
    clientCredentials,
  ) as ClientCredentials;

  return client_id !== null && client_secret !== null;
};

export const checkUserAuthenticated = (): boolean => {
  const authKey = localStorage.getItem(AuthCacheKeys.AuthCode);

  return authKey !== null;
};

export const checkUserToken = (): boolean => {
  const accessToken = localStorage.getItem(AuthCacheKeys.AccessToken);

  return accessToken !== null;
};
