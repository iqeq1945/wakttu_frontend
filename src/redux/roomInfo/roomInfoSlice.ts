import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Room } from '@/services/socket/socket';

const initialState: Room = {
  id: undefined,
  idx: undefined,
  title: '',
  password: undefined,
  type: 0,
  round: 8,
  time: 60000,
  total: 8,
  option: [],
  status: false,
  users: null,
};

export const roomInfoSlice = createSlice({
  name: 'roomInfo',
  initialState,
  reducers: {
    setRoomInfo: (state, action: PayloadAction<Room>) => {
      return action.payload;
    },
    clearRoomInfo: (state) => {
      return initialState;
    },
  },
});

export const { setRoomInfo, clearRoomInfo } = roomInfoSlice.actions;

export const selectRoomInfo = (state: { roomInfo: Room }) => state.roomInfo;

export default roomInfoSlice.reducer;
