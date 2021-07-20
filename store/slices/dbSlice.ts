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

      if (!state.users[userId].starThreads[threadId]) {
        state.users[userId].starThreads[threadId] = { isStar: true };
      } else {
        delete state.users[userId].starThreads[threadId];
      }
    },
    setImportantThreadDB: (state, { payload }) => {
      const { userId, threadId } = payload;
      if (!state.users[userId].importantThreads[threadId]) {
        state.users[userId].importantThreads[threadId] = { isImportant: true };
      } else {
        delete state.users[userId].importantThreads[threadId];
      }
    },
    sendEmail: (state, { payload }) => {
      const { toEmails, title, from, content, threadId, mailId, createdAt } =
        payload;

      const accesses = {};
      const toUserIds = {};

      // usersDB에서 검색
      Object.keys(state.users).forEach((userId) => {
        // toEmail이 있는지 검색
        const currentEmail = toEmails.indexOf(state.users[userId].email);
        if (currentEmail !== -1) {
          toUserIds[userId] = true;
          // UsersDB 해당 유저 threads에 thread 생성
          state.users[userId].threads.push(threadId);
          // 참여자에 나 추가
          accesses[userId] = true;
        }
      });

      // ThreadsDB에 새 Thread 생성
      state.threads[threadId] = {
        title,
        mails: [mailId],
        senders: [from],
        accesses,
        lastSendTime: createdAt,
        creator: from,
      };

      // MailsDB에 새 Mail 생성
      state.mails[mailId] = {
        from,
        content,
        createdAt,
        to: toUserIds,
        threadId,
      };

      // 없으면 생성
      if (!state.users[from].threads.includes(threadId)) {
        state.users[from].threads.push(threadId);
      }
    },
    sendReply: (state, { payload }) => {
      const { toEmails, from, content, threadId, mailId, createdAt } = payload;
      console.log(threadId);
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
      if (!state.threads[threadId].senders.includes(from)) {
        state.threads[threadId].senders.push(from);
        Object.keys(to).forEach((userId) => {
          state.threads[threadId].accesses[userId] = true;
        });
      }
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

export const {
  setAllDB,
  setStarThreadDB,
  setImportantThreadDB,
  sendEmail,
  sendReply,
} = userSlice.actions;

export const selectDB = (state: RootState) => state.db;

export default userSlice.reducer;
