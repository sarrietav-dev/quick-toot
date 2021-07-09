import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  authorizeUser,
  createMastodonApp,
  obtainToken,
  revokeToken,
} from './credentials.thunks';

interface CredentialsState {
  instanceName: string;
  clientCredentials: {
    clientId: string;
    clientSecret: string;
  };
  redirectUri: string;
  authorizationCode: string;
  accessToken: string;
}

const initialState: CredentialsState = {
  instanceName: '',
  clientCredentials: {
    clientId: '',
    clientSecret: '',
  },
  redirectUri: '',
  authorizationCode: '',
  accessToken: '',
};

const CredentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setClientCredentials(
      state,
      action: PayloadAction<{ clientId: string; clientSecret: string }>,
    ) {
      state.clientCredentials.clientId = action.payload.clientId;
      state.clientCredentials.clientSecret = action.payload.clientSecret;
    },
    setAuthCode(state, action: PayloadAction<string>) {
      state.authorizationCode = action.payload;

      localStorage.setItem(AuthCacheKeys.AuthCode, state.authorizationCode);
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    revokeAccessToken(state) {
      state.accessToken = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMastodonApp.fulfilled, (state, action) => {
        const { client_id, instance, client_secret, client_name } =
          action.payload;
        state.clientCredentials.clientId = client_id;
        state.clientCredentials.clientSecret = client_secret;
        state.instanceName = instance;

        localStorage.setItem(AuthCacheKeys.InstanceName, instance);
        localStorage.setItem(
          AuthCacheKeys.ClientCredentials,
          JSON.stringify({ client_name, client_id, client_secret }),
        );
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.authorizationCode = action.payload.code;

        localStorage.setItem(AuthCacheKeys.AuthCode, state.authorizationCode);
      })
      .addCase(obtainToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;

        localStorage.setItem(AuthCacheKeys.AccessToken, state.accessToken);
      })
      .addCase(revokeToken.fulfilled, (state) => {
        state.authorizationCode = '';
        state.accessToken = '';

        localStorage.removeItem(AuthCacheKeys.AccessToken);
      });
  },
});

export const {
  revokeAccessToken,
  setAccessToken,
  setClientCredentials,
  setAuthCode,
} = CredentialsSlice.actions;
export default CredentialsSlice.reducer;
