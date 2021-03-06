import { UserProfile, User } from './../../model/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: User = {
  userProfiles: [],
  userProfile: {
    id: '',
    username: '',
    email: '',
    image: '',
    starThreads: {},
    starMails: {},
    importantThreads: {},
    readThreads: {},
  },
  starThreads: {},
  starMails: {},
  importantThreads: {},
  snoozedThreads: {},
  deletedThreads: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userProfiles = initialState.userProfiles;
      state.userProfile = initialState.userProfile;
      state.starThreads = initialState.starThreads;
      state.starMails = initialState.starMails;
      state.importantThreads = initialState.importantThreads;
      state.snoozedThreads = initialState.snoozedThreads;
      state.deletedThreads = initialState.deletedThreads;
    },
    setUserProfiles: (state, { payload }) => {
      state.userProfiles = payload;
    },
    setUserProfile: (state, { payload }: PayloadAction<UserProfile>) => {
      state.userProfile = payload;
    },
    setLogin: (state, { payload }) => {
      state.userProfile = payload;
    },
    setStarThread: (state, { payload }) => {
      const { threadId } = payload;

      if (!state.userProfile.starThreads[threadId]) {
        state.userProfile.starThreads[threadId] = { isStar: true };
      } else {
        delete state.userProfile.starThreads[threadId];
      }
    },
    setImportantThread: (state, { payload }) => {
      const { threadId } = payload;

      if (!state.userProfile.importantThreads[threadId]) {
        state.userProfile.importantThreads[threadId] = { isImportant: true };
      } else {
        delete state.userProfile.importantThreads[threadId];
      }
    },
    readThread: (state, { payload }) => {
      const threadId = payload;
      state.userProfile.readThreads[threadId] = true;
    },
  },
});

export const {
  logout,
  setUserProfile,
  setUserProfiles,
  setLogin,
  setStarThread,
  setImportantThread,
  readThread,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
