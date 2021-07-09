export interface MastodonApplication {
  id?: string;
  name: string;
  website?: string;
  redirect_uri?: string;
  client_id: string;
  client_secret: string;
  vapid_key?: string;
  error?: string;
}

export interface MastodonTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
  error?: string;
  error_description?: string;
}
