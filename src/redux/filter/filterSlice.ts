import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  time: string | undefined;
  type: number | undefined;
  start: boolean | undefined;
}

const initialState: FilterState = {
  time: undefined,
  type: undefined,
  start: undefined,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterState>) => {
      return action.payload;
    },
    clearFilter: (state, action: PayloadAction<FilterState>) => {
      return initialState;
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const selectFilter = (state: { filter: FilterState }) => state.filter;

export default filterSlice.reducer;
