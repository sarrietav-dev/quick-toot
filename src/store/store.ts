import { contentWarningSlice } from './reducers/content-warning.reducer';
import { configureStore } from '@reduxjs/toolkit';

export const reducers = {
  reducer: {
    contentWarning: contentWarningSlice.reducer,
  },
};

export const store = configureStore({
  reducer: {
    contentWarning: contentWarningSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
