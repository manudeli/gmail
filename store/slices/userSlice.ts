import { UserProfile, User } from './../../model/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: User = {
  userProfiles: [],
  userProfile: { id: '', username: '', email: '', image: '' },
  starThreads: {},
  starMails: {},
  importantMails: {},
  snoozedThreads: {},
  deletedThreads: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
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
  },
});

export const { logout, setUserProfile, setUserProfiles, setLogin } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
