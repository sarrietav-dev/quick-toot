export interface ClientCredentials {
	client_name: string;
	client_id: string;
	client_secret: string;
}

export enum AuthCacheKeys {
  ClientCredentials = 'client_credentials',
  AuthCode = 'auth_code',
  AccessToken = 'access_token',
  InstanceName = 'instance_name',
}
