import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UIState {
  currentTab:
    | 'inbox'
    | 'starred'
    | 'snoozed'
    | 'chats'
    | 'sent'
    | 'drafts'
    | 'notes';
  isLoading: boolean;
}

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
  },
});

export const { clearUI } = uiSlice.actions;

export const selectUI = (state: RootState) => state.ui;

export default uiSlice.reducer;
