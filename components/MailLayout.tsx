import React from 'react';
import Image from 'next/image';
import MailNavigation from './Navigation/MailNavigation';
import TopNavigation from './Navigation/TopNavigation';
import IconButton from './UI/IconButton';
import { useAppSelector } from '../store/hooks';
import DropDown from './DropDown';

function MailLayout({ children }) {
  const isloggedIn = useAppSelector((state) => state.user.userProfile.id);

  return (
    <div className="flex flex-col h-screen">
      {isloggedIn && <TopNavigation />}
      <div className="flex flex-1">
        {isloggedIn && <MailNavigation />}
        <div className="flex-1">
          {isloggedIn && (
            <div className="flex items-center justify-between bg-gray-50 border-b px-1">
              <div className="flex items-center">
                <IconButton icon="refresh" tooltip="Refresh" />
                <IconButton icon="more_vert" tooltip="More" />
              </div>
              <div className="flex items-center">
                <IconButton icon="chevron_left" tooltip="Newer" />
                <IconButton icon="chevron_right" tooltip="Older" />
                <DropDown
                  items={[
                    { label: 'Mark all as read', id: 'dropdown-1' },
                    { label: 'Something to do', id: 'dropdown-2' },
                  ]}
                />
              </div>
            </div>
          )}
          <div className={`${isloggedIn ? 'mail-list' : ''}  overflow-y-auto`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailLayout;
