import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharCounterState {
  maxChar: number;
  currentCount: number;
}

const initialState: CharCounterState = { maxChar: 500, currentCount: 500 };

const charCounterSlice = createSlice({
  name: 'charCounter',
  initialState,
  reducers: {
    changeCount(state, action: PayloadAction<number>) {
      state.currentCount = state.maxChar - action.payload;
    },
  },
});

export const { changeCount } = charCounterSlice.actions;
export default charCounterSlice.reducer;
