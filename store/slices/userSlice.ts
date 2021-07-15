import { UserProfile, User } from './../../model/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: User = {
  userProfiles: [],
  userProfile: { uid: '', username: '', email: '' },
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
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
});

export const { logout, setUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
