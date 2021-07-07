import { AuthCacheKeys } from './CacheKeys';

export const checkAppCreated = (): boolean => {
  const clientId = localStorage.getItem(AuthCacheKeys.ClientId);
  const clientSecret = localStorage.getItem(AuthCacheKeys.ClientSecret);

  return clientId !== null && clientSecret !== null;
};

export const checkUserAuthenticated = (): boolean => {
  const authKey = localStorage.getItem(AuthCacheKeys.AuthCode);

  return authKey !== null;
};

export const checkUserToken = (): boolean => {
  const accessToken = localStorage.getItem(AuthCacheKeys.AccessToken);

  return accessToken !== null;
};
