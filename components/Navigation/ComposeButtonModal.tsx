import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onClickXButton?;
  onClickSendButton?;
}

export const ComposeButtonModal = ({
  onClickXButton,
  onClickSendButton,
}: Props) => {
  const currentUserId = useAppSelector((state) => state.user.userProfile.id);

  const [form, setForm] = useState({
    toEmails: [''],
    title: '',
    from: currentUserId,
    content: '',
    threadId: uuidv4(),
    mailId: uuidv4(),
    createdAt: Date.now(),
  });

  const handleChangeForm = (
    e,
    type: 'content' | 'toEmails' | 'title',
    index?
  ) => {
    setForm((prev) => {
      const newForm = { ...prev };
      if (type === 'toEmails') {
        newForm[type][index] = e.target.value;
        newForm[type][index + 1] = '';
      } else {
        newForm[type] = e.target.value;
      }
      return newForm;
    });
  };

  return (
    <div className="bg-white absolute bottom-4 right-4 z-10 shadow-md border rounded-md overflow-hidden">
      <div className="flex items-center justify-between bg-black bg-opacity-80 text-white pl-4 text-sm">
        New Message
        <IconButton color="white" icon="clear" onClick={onClickXButton} />
      </div>

      <div className="flex flex-col p-2 text-sm">
        <div className="border-b flex  p-2">
          <span>To</span>

          {form.toEmails.map((toEmail, index) => {
            return (
              <input
                value={toEmail}
                onChange={(e) => handleChangeForm(e, 'toEmails', index)}
                className="outline-none flex-1 ml-2"
                placeholder="Recipients"
              />
            );
          })}
        </div>
        <div className="border-b  p-2">
          <input
            value={form.title}
            onChange={(e) => handleChangeForm(e, 'title')}
            className="outline-none flex-1"
            placeholder="Subject"
          />
        </div>
        <textarea
          value={form.content}
          onChange={(e) => handleChangeForm(e, 'content')}
          className="outline-none p-2"
          cols={50}
          rows={10}
        ></textarea>
      </div>
      <div className="flex items-center justify-between p-2 border-t">
        <Button color="primary" onClick={() => onClickSendButton(form)}>
          Send
        </Button>
        <IconButton icon="delete" />
      </div>
    </div>
  );
};
