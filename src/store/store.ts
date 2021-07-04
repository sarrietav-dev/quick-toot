import contentWarningSlice from './reducers/content-warning.reducer';
import { configureStore } from '@reduxjs/toolkit';
import charCounterReducer from './reducers/char-counter.reducer';

export const storeConfig = {
  reducer: {
    contentWarning: contentWarningSlice,
    charCounter: charCounterReducer,
  },
};

export const store = configureStore(storeConfig);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
