import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Timer {
  roundTime?: string | number;
  turnTime?: string | number;
  remainTime?: string | number;
}

const initialState: Timer = {
  roundTime: undefined,
  turnTime: undefined,
  remainTime: undefined,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<Timer>) => {
      return action.payload;
    },
    clearTimer: (state) => {
      return initialState;
    },
    setRemainTime: (state, action: PayloadAction<any>) => {
      return (state.remainTime = action.payload);
    },
  },
});

export const { setTimer, clearTimer, setRemainTime } = timerSlice.actions;

export const selectTimer = (state: { timer: Timer }) => state.timer;
export const selectRemainTime = (state: { timer: Timer }) =>
  state.timer.remainTime;
export default timerSlice.reducer;
