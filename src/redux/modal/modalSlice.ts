import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isModal: boolean;
}

const initialState: ModalState = {
  isModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    },
    clearIsModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { setIsModal, clearIsModal } = modalSlice.actions;
export const selectIsModal = (state: { modal: ModalState }) =>
  state.modal.isModal;

export default modalSlice.reducer;
