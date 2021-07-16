import { Thread, ThreadBox } from './../../model/mails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: ThreadBox = {
  threads: [],
  sentThreads: [],
  checkedThreads: {},
};

export const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    clearInbox: (state) => {
      state = initialState;
    },
    setThreads: (state, { payload }: PayloadAction<Thread[]>) => {
      state.threads = payload;
    },
  },
});

export const { clearInbox, setThreads } = inboxSlice.actions;

export const selectInbox = (state: RootState) => state.inbox;

export default inboxSlice.reducer;
