import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export interface RootState {
    user: ReturnType<typeof userReducer>;
}

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
