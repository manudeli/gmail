import React from 'react';
import Image from 'next/image';
import MailNavigation from './Navigation/MailNavigation';
import TopNavigation from './Navigation/TopNavigation';
import IconButton from './UI/IconButton';
import { useAppSelector } from '../store/hooks';

function MailLayout({ children }) {
  const isloggedIn = useAppSelector((state) => state.user.userProfile.id);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {isloggedIn && <TopNavigation />}
      <div className="flex flex-1">
        {isloggedIn && <MailNavigation />}
        <div className="flex-1">
          {isloggedIn && (
            <div className="flex bg-gray-50 border-b">
              <IconButton icon="refresh" tooltip="Refresh" />
              <IconButton icon="more_vert" tooltip="More" />
              <IconButton icon="chevron_left" tooltip="Newer" />
              <IconButton icon="chevron_right" tooltip="Older" />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default MailLayout;
