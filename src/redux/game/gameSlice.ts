import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '@/services/socket/socket';

interface Users {
  id: string;
  userId: string;
  charactor: JSON;
  score: number;
}

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
    setReady: (state, action: PayloadAction<Users[]>) => {
      return { ...state, users: action.payload };
    },
  },
});

export const { setGame, clearGame, setReady } = gameSlice.actions;

export const selectGame = (state: { game: Game }) => state.game;
export const selectReadyUser = (state: { game: Game }) => state.game.users;
export const selectHost = (state: { game: Game }) => state.game.host;

export default gameSlice.reducer;
