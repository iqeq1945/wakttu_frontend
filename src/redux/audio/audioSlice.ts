import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Audio {
  bgmVolume: number;
  effectVolume: number;
  voiceVolume: number;
}

const initialState: Audio = {
  bgmVolume: 0.1,
  effectVolume: 0.1,
  voiceVolume: 0.5,
};

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setBgmVolume: (state, action: PayloadAction<number>) => {
      return { ...state, bgmVolume: action.payload };
    },
    setEffectVolume: (state, action: PayloadAction<number>) => {
      return { ...state, effectVolume: action.payload };
    },
    setVoiceVolume: (state, action: PayloadAction<number>) => {
      return { ...state, voiceVolume: action.payload };
    },
    setVolume: (state, action: PayloadAction<Audio>) => {
      return action.payload;
    },
    clearVolume: (state) => {
      return initialState;
    },
  },
});

export const { setBgmVolume, setEffectVolume, setVolume, clearVolume } =
  audioSlice.actions;

export const selectVolume = (state: { audio: Audio }) => state.audio;
export const selectBgmVolume = (state: { audio: Audio }) =>
  state.audio.bgmVolume;
export const selectEffectVolume = (state: { audio: Audio }) =>
  state.audio.effectVolume;
export const selectVoiceVolume = (state: { audio: Audio }) =>
  state.audio.voiceVolume;

export default audioSlice.reducer;
