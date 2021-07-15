import { UIState, CurrentTab } from './../../model/ui';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: UIState = {
  currentTab: 'inbox',
  isLoading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    clearUI: (state) => {
      state = initialState;
    },
    setCurrentTab: (state, { payload }: PayloadAction<CurrentTab>) => {
      state.currentTab = payload;
    },
  },
});

export const { clearUI, setCurrentTab } = uiSlice.actions;

export const selectUI = (state: RootState) => state.ui;

export default uiSlice.reducer;
