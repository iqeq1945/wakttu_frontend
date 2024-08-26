import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Answer {
  success: boolean;
  answer: string;
  message: string;
  pause: boolean;
}

const initialState: Answer = {
  success: false,
  answer: '',
  message: '',
  pause: false,
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<Answer>) => {
      return action.payload;
    },
    clearAnswer: (state) => {
      return initialState;
    },
    setPause: (state, action: PayloadAction<boolean>) => {
      return { ...state, pause: action.payload };
    },
  },
});

export const { setAnswer, clearAnswer, setPause } = answerSlice.actions;

export const selectAnswer = (state: { answer: Answer }) => state.answer;
export const selectPause = (state: { answer: Answer }) => state.answer.pause;

export default answerSlice.reducer;
