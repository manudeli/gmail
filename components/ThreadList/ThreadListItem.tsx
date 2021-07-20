import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setImportantThreadDB,
  setStarThreadDB,
} from '../../store/slices/dbSlice';
import { setCheckThread } from '../../store/slices/inboxSlice';
import {
  setImportantThread,
  setStarThread,
} from '../../store/slices/userSlice';
import { ToggleIconButton } from '../ToggleIconButton';
import dayjs from 'dayjs';

interface Props {
  thread;
  onClickHandle;
}

export const ThreadListItem = ({ thread, onClickHandle }: Props) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.user.userProfile.id);
  const currentUserReadThreads = useAppSelector(
    (state) => state.user.userProfile.readThreads
  );
  const myStarThreads = useAppSelector(
    (state) => state.user.userProfile.starThreads
  );
  const myImportantThreads = useAppSelector(
    (state) => state.user.userProfile.importantThreads
  );
  const CheckedThreads = useAppSelector((state) => state.inbox.checkedThreads);
  const senderNames = useAppSelector((state) =>
    thread.senders.map((userId) => {
      if (currentUserId === userId) return 'me';
      return state.db.users[userId].username;
    })
  );
  const lastSendTime = dayjs(thread.lastSendTime).format('MMMM D, YYYY');

  return (
    <li onClick={() => onClickHandle()}>
      <div
        className={`flex items-center border-b border-opacity-80 pr-4 ${
          currentUserReadThreads[thread.id]
            ? 'font-light bg-black bg-opacity-5'
            : 'font-semibold'
        }`}
      >
        <div className="flex">
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
          <ToggleIconButton
            icon="label_important"
            tooltip="Important"
            isChecked={myImportantThreads[thread.id] && true}
            onClick={() => {
              dispatch(
                setImportantThreadDB({
                  userId: currentUserId,
                  threadId: thread.id,
                })
              );
              dispatch(setImportantThread({ threadId: thread.id }));
              // fetch Star After, if failed cancel setStarThread
            }}
          />
        </div>

        <div
          className="ml-4 w-48 whitespace-nowrap
          overflow-hidden overflow-ellipsis pr-4"
        >
          {senderNames.map((name, index) => (
            <span>
              {name}
              {senderNames.length - 1 === index ? '' : ', '}
            </span>
          ))}
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className={`flex items-center`}>
            <div
              className="whitespace-nowrap
          overflow-hidden overflow-ellipsis"
            >
              {thread.title}
            </div>
            <div
              className="text-gray-500
          text-sm whitespace-nowrap
          overflow-hidden overflow-ellipsis
          flex-1 font-light pl-1"
            >
              - {thread.lastMailContent}
            </div>
          </h3>
        </div>
        <div className="text-sm">{lastSendTime}</div>
      </div>
    </li>
  );
};
