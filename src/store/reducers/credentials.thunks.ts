import { ClientCredentials, AuthCacheKeys } from './../../types/types.d';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createMastodonApp = createAsyncThunk(
  'credentials/createMastodonApp',
  async (instance: string) => {
    const stringifiedCredential = localStorage.getItem(
      AuthCacheKeys.ClientCredentials,
    );
    if (stringifiedCredential !== null) {
      const { client_id, client_name, client_secret } = JSON.parse(
        stringifiedCredential,
      ) as ClientCredentials;
      return { client_id, client_secret, instance, client_name };
    }

    await setTimeout(() => console.log('Creating App'), 1000);
    return {
      instance,
      client_name: 'Test',
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
