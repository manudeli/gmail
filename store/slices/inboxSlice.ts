import { Thread, ThreadBox } from './../../model/mails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: ThreadBox = {
  threads: [],
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
    clearCheckThreads: (state) => {
      state.checkedThreads = initialState.checkedThreads;
    },
    setCheckThread: (state, { payload }) => {
      console.log('hi');
      const { threadId } = payload;

      if (!state.checkedThreads[threadId]) {
        state.checkedThreads[threadId] = { isChecked: false };
      } else {
        delete state.checkedThreads[threadId];
      }
    },
  },
});

export const { clearInbox, setThreads, setCheckThread } = inboxSlice.actions;

export const selectInbox = (state: RootState) => state.inbox;

export default inboxSlice.reducer;
