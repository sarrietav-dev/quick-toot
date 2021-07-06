import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CredentialsState {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  accessToken: string;
}

const initialState: CredentialsState = {
  clientId: '',
  clientSecret: '',
  redirectUri: '',
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
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    revokeAccessToken(state) {
      state.accessToken = '';
    },
  },
});

export const { revokeAccessToken, setAccessToken, setClientCredentials } =
  CredentialsSlice.actions;
export default CredentialsSlice.reducer;
