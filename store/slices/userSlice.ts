import { UserProfile } from './../../model/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UserState {
  jwtToken: string | null;
  userProfile: UserProfile;
  message: string;
}

const initialState: UserState = {
  jwtToken: null,
  userProfile: { uid: '', nickName: '', email: '' },
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.jwtToken = initialState.jwtToken;
      state.userProfile = initialState.userProfile;
      state.message = initialState.message;
    },
    setJwtToken: (state, action: PayloadAction<string>) => {
      state.jwtToken = action.payload;
    },
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
    SecondSaga: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { logout, setJwtToken, setUserProfile, SecondSaga } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
