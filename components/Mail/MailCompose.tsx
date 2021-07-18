import React from 'react';
import { Mail } from '../../model/mails';
import { ProfileImage } from '../ProfileImage';
import dayjs from 'dayjs';
import IconButton from '../UI/IconButton';
import { Uid } from '../../model/users';
import { useAppSelector } from '../../store/hooks';

interface Props {
  mail: Mail;
}

export const MailCompose = ({ mail }: Props) => {
  const users = useAppSelector((state) => state.db.users);
  const { content, createdAt, from, to } = mail;

  const fromUser = users[from];
  const toUserIds = [...(Object.keys(to) as Uid[])];

  const toUsers = toUserIds.map((userId) => ({ id: userId, ...users[userId] }));
  const date = new Date(createdAt);

  return (
    <li className="pt-4">
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
                to{' '}
                {toUsers.map((user, index) => (
                  <span>
                    {user.username}
                    {index === toUsers.length - 1 ? '' : ', '}
                  </span>
                ))}
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
