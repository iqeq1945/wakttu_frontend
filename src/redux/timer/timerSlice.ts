import { createTimer } from '@/modules/Timer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Timer {
  [x: string]: any;
}

const initialState: Timer = {};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<any>) => {
      return createTimer(
        action.payload,
        (data: any) => console.log(data),
        () => {
          console.log('hihi');
        }
      );
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

export default timerSlice.reducer;
