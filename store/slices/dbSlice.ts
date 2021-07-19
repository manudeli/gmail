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
          // DB에 새 Thread 생성
          state.threads[threadId] = {
            title,
            mails: [mailId],
            lastSender: from,
            lastSendTime: createdAt,
          };
          // DB에 새 Mail 생성
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
    sendReply: (state, { payload }) => {
      const { toEmails, from, content, threadId, mailId, createdAt } = payload;
      const to = {};

      Object.keys(state.users).forEach((userId) => {
        const indexOfToEmails = toEmails.indexOf(state.users[userId].email);
        if (indexOfToEmails !== -1) {
          toEmails[indexOfToEmails];
          to[userId] = true;
        }
      });

      // Thread 업데이트
      state.threads[threadId].mails.push(mailId);
      state.threads[threadId].lastSender = from;
      state.threads[threadId].lastSendTime = createdAt;

      // Mails에 추가
      state.mails[mailId] = {
        from,
        to,
        content,
        createdAt,
        threadId,
      };
    },
  },
});

export const { setAllDB, setStarThreadDB, sendEmail, sendReply } =
  userSlice.actions;

export const selectDB = (state: RootState) => state.db;

export default userSlice.reducer;
