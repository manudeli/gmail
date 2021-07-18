import { UserProfile, User } from './../../model/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState = {
  users: {},
  mails: {},
  threads: {},
};

export const userSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    setAllDB: (state, { payload }) => {
      state.users = payload.users;
      state.mails = payload.mails;
      state.threads = payload.threads;
    },
    setStarThreadDB: (state, { payload }) => {
      const { userId, threadId } = payload;
      state.users[userId].starThreads[threadId] = !state.users[userId]
        .starThreads[threadId]
        ? { isStar: true }
        : { isStar: false };
    },
  },
});

export const { setAllDB, setStarThreadDB } = userSlice.actions;

export const selectDB = (state: RootState) => state.db;

export default userSlice.reducer;
