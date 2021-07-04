import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

interface ContentWarningState {
  shown: boolean;
}

const initialState: ContentWarningState = {
  shown: false,
};

export const contentWarningSlice = createSlice({
  name: 'content-warning',
  initialState,
  reducers: {
    switchState(state) {
      state.shown = !state.shown;
    },
  },
});

export const { switchState } = contentWarningSlice.actions;
export const isContentWarningShown = (state: RootState): boolean =>
  state.contentWarning.shown;
export default contentWarningSlice.reducer;
