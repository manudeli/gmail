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

  const [emailInput, setEmailInput] = useState('');

  const [form, setForm] = useState({
    toEmails: [],
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
      } else {
        newForm[type] = e.target.value;
      }
      return newForm;
    });
  };

  const handleRecipients = () => {
    const email = emailInput.trim();
    const index = form.toEmails.findIndex((el) => el === emailInput);

    if (index === -1 && email !== '') {
      const cp = [...form.toEmails];
      cp.push(email);
      setForm((prev) => {
        prev.toEmails = cp;
        return prev;
      });
    }
    setEmailInput('');
  };

  const handleKeyPress = (e) => {
    const { code } = e;

    if (code === 'Space') {
      handleRecipients();
    }
  };

  const handleDeleteToEmail = (index: number) => {
    const newForm = { ...form };
    newForm.toEmails.splice(index, 1);
    setForm(newForm);
  };

  return (
    <div className="bg-white absolute bottom-4 right-4 z-10 shadow-xl border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-black bg-opacity-80 text-white pl-4 text-sm">
        New Message
        <IconButton color="white" icon="clear" onClick={onClickXButton} />
      </div>

      <div className="flex flex-col p-2 text-sm">
        <div className="border-b flex items-center p-2">
          <span className="mr-1">To</span>
          {form.toEmails.map((toEmail, index) => {
            return (
              <span
                className="flex items-center rounded-full px-2 ml-1 text-gray-700 font-semibold"
                style={{ boxShadow: 'inset 0 0 1px rgba(0,0,0,0.8)' }}
              >
                {toEmail}{' '}
                <i
                  className="material-icons -mr-1"
                  style={{ fontSize: 16 }}
                  onClick={() => handleDeleteToEmail(index)}
                >
                  close
                </i>
              </span>
            );
          })}
          <input
            autoFocus
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
            onBlur={() => handleRecipients()}
            className="outline-none flex-1 ml-2"
            placeholder={form.toEmails.length ? '' : 'Recipients'}
          />
        </div>
        <div className="flex border-b  p-2">
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
          cols={76}
          rows={12}
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
