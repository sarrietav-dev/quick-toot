import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthCacheKeys } from '../../utils/CacheKeys';

export const createMastodonApp = createAsyncThunk(
  'credentials/createMastodonApp',
  async () => {
    await setTimeout(() => console.log('Creating App'), 1000);
    return {
      name: 'Test',
      client_id: '1234567890',
      client_secret: '0987654321',
    };
  },
);

export const authorizeUser = createAsyncThunk(
  'credentials/authorizeUser',
  async () => {
    await setTimeout(() => console.log('Authorizing User'), 1000);
    return {
      code: '1234567890',
    };
  },
);

export const obtainToken = createAsyncThunk(
  'credentials/obtainToken',
  async () => {
    await setTimeout(() => console.log('Fetching token'), 1000);
    return {
      access_token: 'ZA-Yj3aBD8U8Cm7lKUp-lm9O9BmDgdhHzDeqsY8tlL0',
    };
  },
);

export const revokeToken = createAsyncThunk(
  'credentials/revokeToken',
  async () => {
    await setTimeout(() => console.log('Fetching token'), 1000);
    return {};
  },
);

interface CredentialsState {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  authorizationCode: string;
  accessToken: string;
}

const initialState: CredentialsState = {
  clientId: '',
  clientSecret: '',
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
      state.clientId = action.payload.clientId;
      state.clientSecret = action.payload.clientSecret;
    },
    setAuthCode(state, action: PayloadAction<string>) {
      state.authorizationCode = action.payload;
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
        state.clientId = action.payload.client_id;
        state.clientSecret = action.payload.client_secret;

        localStorage.setItem(AuthCacheKeys.ClientId, state.clientId);
        localStorage.setItem(AuthCacheKeys.ClientSecret, state.clientSecret);
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
        state.accessToken = '';

        localStorage.removeItem(AuthCacheKeys.AccessToken);
      });
  },
});

export const { revokeAccessToken, setAccessToken, setClientCredentials, setAuthCode } =
  CredentialsSlice.actions;
export default CredentialsSlice.reducer;
