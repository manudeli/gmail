import React from 'react';
import { getUser, getUsers } from '../../lib/api';
import { Mail } from '../../model/mails';
import { ProfileImage } from '../ProfileImage';
import dayjs from 'dayjs';
import IconButton from '../UI/IconButton';
import { Uid } from '../../model/users';

interface Props {
  mail: Mail;
}

export const MailCompose = ({ mail }: Props) => {
  const { id, content, createdAt, from, threadId, to } = mail;

  const fromUser = getUser(from);
  const toUserIds = [...(Object.keys(to) as Uid[])];
  const toUsers = getUsers(toUserIds);
  const date = new Date(createdAt);

  return (
    <li className="border-b pt-4">
      <div className="flex pb-5">
        <div className="px-4">
          <ProfileImage imageSrc={fromUser.image} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <span className="font-bold text-sm">{fromUser.username}</span>{' '}
              <span className="text-xs text-gray-600">{`<${fromUser.email}>`}</span>
              <div className="text-xs text-gray-600">
                to {toUsers.map((user) => user.username).join(', ')}
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <span>{dayjs(date).format('MMMM DD, YYYY, H:ss A')}</span>{' '}
              <IconButton icon="star_outline" tooltip="Not starred" />
              <IconButton icon="reply" tooltip="Reply" />
              <IconButton icon="more_vert" tooltip="More" />
            </div>
          </div>
          <p className="text-sm mt-4 max-w-3xl">{content}</p>
          <br />
          <br />
        </div>
      </div>
      <div></div>
    </li>
  );
};
