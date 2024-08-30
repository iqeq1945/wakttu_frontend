import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface History {
  id: string;
  type: string;
  mean: string;
  [x: string]: any;
}

const initialState: History[] = [
  {
    id: '',
    type: '',
    mean: '',
  },
];

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<History>) => {
      state.push(action.payload);
    },
    clearHistory: (state) => {
      return initialState;
    },
  },
});

export const { setHistory, clearHistory } = historySlice.actions;

export const selectHistory = (state: { history: History[] }) => state.history;

export default historySlice.reducer;
