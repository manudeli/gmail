import router from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/userSlice';
import LoginList from '../LoginList/LoginList';
import { ProfileImage } from '../ProfileImage';
import Button from '../UI/Button';

interface Props {
  closeHandle;
}

export const TopNavigationProfileModal = ({ closeHandle }: Props) => {
  const currentUserProfile = useAppSelector((state) => state.user.userProfile);
  const dispatch = useAppDispatch();

  const clickSignOutHandle = () => {
    dispatch(logout());
    closeHandle();
    router.replace('/');
  };

  return (
    <div className="fixed flex flex-col items-center right-4 bg-white px-4 py-2 rounded-md border shadow-md z-10">
      <ProfileImage
        className="mt-7"
        imageSrc={currentUserProfile.image}
        size={80}
      />
      <br />
      <div className="font-semibold">{currentUserProfile.username}</div>
      <div className="text-sm">{currentUserProfile.email}</div>
      <br />
      <LoginList hideLoggedInUser={true} />
      <br />
      <Button
        onClick={clickSignOutHandle}
        variant="outlined"
        color="primary"
        fill
      >
        Sign out
      </Button>
      <div className="text-xs mt-2 py-2">Privacy Policy · Terms of Service</div>
    </div>
  );
};
