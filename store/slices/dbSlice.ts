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
    sendEmail: (state, { payload }) => {
      const { toEmails, title, from, content, threadId, mailId, createdAt } =
        payload;

      Object.keys(state.users).map((userId) => {
        const objectUserIds = {};

        const currentEmailIndex = toEmails.indexOf(state.users[userId].email);
        if (currentEmailIndex !== -1) {
          objectUserIds[userId] = true;
          state.threads[threadId] = {
            title,
            mails: [mailId],
            lastSender: from,
            lastSendTime: createdAt,
          };
          state.mails[mailId] = {
            from,
            content,
            createdAt,
            to: objectUserIds,
            threadId,
          };
          state.users[userId].threads.push(threadId);
        }
        return state.users[userId];
      });
    },
  },
});

export const { setAllDB, setStarThreadDB, sendEmail } = userSlice.actions;

export const selectDB = (state: RootState) => state.db;

export default userSlice.reducer;
