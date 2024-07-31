import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string | null;
  name: string | null;
  score: number | null;
  provider: string | null;
  password: string | null;
  roomId: string | null;
  keyboard: string[] | null;
  [x: string]: any;
}

const initialState: UserState = {
  id: null,
  name: null,
  score: null,
  provider: null,
  password: null,
  roomId: null,
  keyboard: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    clearUserId: (state) => {
      state.id = null;
    },
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    clearUserInfo: (state) => {
      return initialState;
    },
  },
});

export const { setUserId, clearUserId, setUserInfo, clearUserInfo } =
  userSlice.actions;
export const selectUserId = (state: { user: UserState }) => state.user.id;
export const selectUserName = (state: { user: UserState }) => state.user.name;
export const selectUserInfo = (state: { user: UserState }) => state.user;

export default userSlice.reducer;
