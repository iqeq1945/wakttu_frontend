import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@/services/socket/socket';

const initialState: Game = {
  host: '',
  type: 0,
  round: 0,
  turn: 0,
  total: 0,
  users: [],
  keyword: undefined,
  target: '',
  option: undefined,
  chain: 0,
  roundTime: 0,
  turnTime: 0,
  mission: undefined,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<Game>) => {
      return action.payload;
    },
    clearGame: (state) => {
      return initialState;
    },
  },
});

export const { setGame, clearGame } = gameSlice.actions;

export const selectGame = (state: { game: Game }) => state.game;

export default gameSlice.reducer;
