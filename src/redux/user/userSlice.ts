import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userId: string | null;
}

const initialState: UserState = {
    userId: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
        clearUserId: (state) => {
            state.userId = null;
        },
    },
});

export const { setUserId, clearUserId } = userSlice.actions;
export const selectUserId = (state: { user: UserState }) => state.user.userId;

export default userSlice.reducer;
