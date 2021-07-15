import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MailNavigationList from './MailNavigationList';

function MailNavigation() {
  return (
    <div className="bg-gray-50">
      <div className="my-3 pl-2">
        <button className="flex items-center justify-center h-12 p-4 text-sm font-medium bg-white rounded-full shadow-md">
          <Image width={32} height={32} src="/assets/create.png" />
          Compose
        </button>
      </div>
      <MailNavigationList />
    </div>
  );
}

export default MailNavigation;
