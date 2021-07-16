import React from 'react';
import Image from 'next/image';
import MailNavigation from './Navigation/MailNavigation';
import TopNavigation from './Navigation/TopNavigation';
import IconButton from './UI/IconButton';

function MailLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <TopNavigation />
      <div className="flex flex-1">
        <MailNavigation />
        <div className="flex-1">
          <div className="flex bg-gray-50 border-b">
            <IconButton icon="refresh" />
            <IconButton icon="more_vert" />
            <IconButton icon="chevron_left" />
            <IconButton icon="chevron_right" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MailLayout;
