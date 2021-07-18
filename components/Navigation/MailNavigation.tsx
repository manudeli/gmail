import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MailNavigationList from './MailNavigationList';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import { ComposeButtonModal } from './ComposeButtonModal';

function MailNavigation() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const sendClickSendHandle = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="bg-gray-50 w-60">
      <div className="my-3 pl-2">
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}
          className="flex items-center justify-center h-12 p-4 text-sm font-medium bg-white rounded-full shadow-md"
        >
          <Image width={32} height={32} src="/assets/create.png" />
          Compose
        </button>
      </div>
      <MailNavigationList />
      {isOpenModal && (
        <ComposeButtonModal
          onClickSendButton={sendClickSendHandle}
          onClickXButton={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </div>
  );
}

export default MailNavigation;
