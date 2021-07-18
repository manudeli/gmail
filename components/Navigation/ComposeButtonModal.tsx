import React from 'react';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

interface Props {
  onClickXButton?;
  onClickSendButton?;
}

export const ComposeButtonModal = ({
  onClickXButton,
  onClickSendButton,
}: Props) => {
  return (
    <div className="bg-white absolute bottom-4 right-4 z-10 shadow-md border rounded-md overflow-hidden">
      <div className="flex items-center justify-between bg-black bg-opacity-80 text-white pl-4 text-sm">
        New Message
        <IconButton color="white" icon="clear" onClick={onClickXButton} />
      </div>

      <div className="flex flex-col p-2 text-sm">
        <div className="border-b flex  p-2">
          <span>To</span>
          <input
            className="outline-none flex-1 ml-2"
            placeholder="Recipients"
          />
        </div>
        <div className="border-b  p-2">
          <input className="outline-none flex-1" placeholder="Subject" />
        </div>
        <textarea className="outline-none p-2" cols={50} rows={10}></textarea>
      </div>
      <div className="flex items-center justify-between p-2 border-t">
        <Button color="primary" onClick={onClickSendButton}>
          Send
        </Button>
        <IconButton icon="delete" />
      </div>
    </div>
  );
};
