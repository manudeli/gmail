import React from 'react';
import IconButton from '../UI/IconButton';

interface Props {
  thread;
  onClickHandle;
}

export const ThreadListItem = ({ thread, onClickHandle }: Props) => {
  return (
    <li onClick={() => onClickHandle()}>
      <div className="flex items-center border-b">
        <IconButton icon="check_box_outline_blank" tooltip="Select" />
        <IconButton icon="star_outline" tooltip="Star" />
        <h3>{thread.title}</h3>
      </div>
    </li>
  );
};
