import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Result {
  type: string;
  [x: string]: any;
}

const initialState: Result[] = [];

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<Result>) => {
      state.push(action.payload);
    },
    clearResult: (state) => {
      return initialState;
    },
  },
});

export const { setResult, clearResult } = resultSlice.actions;

export const selectResult = (state: { result: Result[] }) => state.result;

export default resultSlice.reducer;
