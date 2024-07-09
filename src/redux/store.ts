import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import modalReducer from './modal/modalSlice';

export interface RootState {
  user: ReturnType<typeof userReducer>;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
