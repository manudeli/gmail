import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setStarThreadDB } from '../../store/slices/dbSlice';
import { setCheckThread } from '../../store/slices/inboxSlice';
import { setStarThread } from '../../store/slices/userSlice';
import { ToggleIconButton } from '../ToggleIconButton';
import dayjs from 'dayjs';

interface Props {
  thread;
  onClickHandle;
}

export const ThreadListItem = ({ thread, onClickHandle }: Props) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.user.userProfile.id);
  const myStarThreads = useAppSelector(
    (state) => state.user.userProfile.starThreads
  );
  const CheckedThreads = useAppSelector((state) => state.inbox.checkedThreads);
  const lastSenderName = useAppSelector(
    (state) => state.db.users[thread.lastSender].username
  );
  const lastSendTime = dayjs(thread.lastSendTime).format('MMMM D');

  return (
    <li onClick={() => onClickHandle()}>
      <div className="flex items-center border-b border-opacity-60 pr-4">
        <ToggleIconButton
          icon="check_box"
          tooltip="check"
          isChecked={CheckedThreads[thread.id] && true}
          onClick={() => {
            dispatch(setCheckThread({ threadId: thread.id }));
          }}
        />
        <ToggleIconButton
          icon="star"
          tooltip="Star"
          isChecked={myStarThreads[thread.id] && true}
          onClick={() => {
            dispatch(
              setStarThreadDB({ userId: currentUserId, threadId: thread.id })
            );
            dispatch(setStarThread({ threadId: thread.id }));
            // fetch Star After, if failed cancel setStarThread
          }}
        />

        <div className="w-48 ml-4">{lastSenderName}</div>
        <h3 className="flex-1">{thread.title}</h3>
        <div className="text-sm">{lastSendTime}</div>
      </div>
    </li>
  );
};
