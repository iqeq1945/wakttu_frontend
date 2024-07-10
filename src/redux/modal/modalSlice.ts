import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  modalType: string;
  open: boolean;
}

const initialState: ModalState = {
  modalType: '',
  open: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.modalType = action.payload;
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: { modal: ModalState }) => state.modal;

export default modalSlice.reducer;
