import { MailBox } from './../../model/mails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: MailBox = {
  inboxMails: [],
  sentMails: [],
  checkedMails: {},
};

export const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {
    clearInbox: (state) => {
      state = initialState;
    },
  },
});

export const { clearInbox } = inboxSlice.actions;

export const selectInbox = (state: RootState) => state.inbox;

export default inboxSlice.reducer;
