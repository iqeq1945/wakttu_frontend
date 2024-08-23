import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Timer {
  roundTime: number;
  turnTime: number;
  countTime: number;
  timerId?: NodeJS.Timeout;
}

const initialState: Timer = {
  roundTime: 0,
  turnTime: 0,
  countTime: 0,
  timerId: undefined,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      state.roundTime = action.payload;
      state.turnTime = setTurnTime(action.payload);
      state.countTime = 0;
    },
    clearTimer: (state) => {
      return initialState;
    },
    tick: (state) => {
      state.countTime = state.countTime + 100;
    },
    setTimerId: (state, action: PayloadAction<NodeJS.Timeout>) => {
      state.timerId = action.payload;
    },
    setTurn: (state) => {
      state.roundTime = state.roundTime - state.countTime;
      state.turnTime = setTurnTime(state.roundTime);
      state.countTime = 0;
    },
  },
});

export const { setTimer, clearTimer, tick, setTimerId, setTurn } =
  timerSlice.actions;

export const selectTimer = (state: { timer: Timer }) => state.timer;
export const selectTimeId = (state: { timer: Timer }) => state.timer.timerId;

export default timerSlice.reducer;

const setTurnTime = (roundTime: number) => {
  let duration = 0;
  if (71000 <= roundTime && roundTime <= 120000) {
    duration = 20000;
  } else if (61000 <= roundTime && roundTime < 71000) {
    duration = 18000;
  } else if (51000 <= roundTime && roundTime < 61000) {
    duration = 15000;
  } else if (41000 <= roundTime && roundTime < 51000) {
    duration = 12000;
  } else if (31000 <= roundTime && roundTime < 41000) {
    duration = 9000;
  } else if (21000 <= roundTime && roundTime < 31000) {
    duration = 6000;
  } else if (11000 <= roundTime && roundTime < 21000) {
    duration = 4000;
  } else if (5100 <= roundTime && roundTime < 11000) {
    duration = 3000;
  } else if (1 <= roundTime && roundTime < 5100) {
    duration = 1000;
  } else {
    duration = 0;
  }
  return duration;
};
