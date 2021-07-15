import React from 'react';

import Image from 'next/image';
import MailNavigation from './Navigation/MailNavigation';

function MailLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-100 border-b p-2">
        <Image height="40px" width="109px" src="/assets/logo_gmail.png" />
      </div>
      <div className="flex flex-1">
        <MailNavigation />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export default MailLayout;
