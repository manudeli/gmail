import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import LoginList from '../LoginList/LoginList';
import { ProfileImage } from '../ProfileImage';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import TextInput from '../UI/TextInput';
import { TopNavigationProfileModal } from './TopNavigationProfileModal';

function TopNavigation() {
  const userProfile = useAppSelector((state) => state.user.userProfile);

  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (profileRef && profileRef.current) {
        const outsideClick = !profileRef.current.contains(e.target);
        if (outsideClick) {
          setOpenProfile(false);
        }
      }
    };
    document.addEventListener('click', checkOutsideClick);
    return () => {
      document.removeEventListener('click', checkOutsideClick);
    };
  }, []);

  return (
    <nav className="flex items-center bg-gray-100 border-b p-2">
      <div className="flex items-center w-60">
        <IconButton icon="menu" tooltip="Main menu" />
        <div className="flex items-center">
          <Link href="/mail">
            <a className="flex items-center">
              <Image
                className="cursor-pointer"
                height={40}
                width={109}
                src="/assets/logo_gmail.png"
              />
            </a>
          </Link>
        </div>
      </div>
      <TextInput
        iconLeft={<IconButton icon="search" tooltip="Search" />}
        type="text"
        placeholder="Search mail"
        fill
        iconRight={<IconButton icon="tune" tooltip="Show search option" />}
      ></TextInput>
      <IconButton icon="help_outline" tooltip="Support" />
      <IconButton icon="settings" tooltip="Settings" />
      <IconButton icon="apps" tooltip="Google apps" />
      <IconButton
        icon="account_circle"
        tooltip={
          <div className="text-left">
            <strong>Google Account</strong>
            <p className="opacity-80">
              {userProfile.username}
              <br />
              {userProfile.email}
            </p>
          </div>
        }
      />
      <div ref={profileRef}>
        <IconButton
          onClick={() => setOpenProfile((prev) => !prev)}
          icon={<ProfileImage imageSrc={userProfile.image} size={32} />}
          tooltip={
            <div className="text-left">
              <strong>Google Account</strong>
              <p className="opacity-80">
                {userProfile.username}
                <br />
                {userProfile.email}
              </p>
            </div>
          }
        />
        {openProfile && (
          <TopNavigationProfileModal
            closeHandle={() => {
              setOpenProfile(false);
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default TopNavigation;
