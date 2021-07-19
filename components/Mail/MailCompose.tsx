import React, { useState } from 'react';
import { Mail } from '../../model/mails';
import { ProfileImage } from '../ProfileImage';
import dayjs from 'dayjs';
import IconButton from '../UI/IconButton';
import { Uid } from '../../model/users';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Button from '../UI/Button';
import { v4 as uuidv4 } from 'uuid';
import { sendReply } from '../../store/slices/dbSlice';

interface Props {
  mail: Mail;
  isLastMail;
}

export const MailCompose = ({ mail, isLastMail }: Props) => {
  const dispatch = useAppDispatch();
  const { content, createdAt, from, to, threadId } = mail;
  const currentUserId = useAppSelector((state) => state.user.userProfile.id);
  const currentUserImage = useAppSelector(
    (state) => state.user.userProfile.image
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const users = useAppSelector((state) => state.db.users);
  const fromUser = users[from];

  const initialForm = {
    toEmails: [`${fromUser.email}`],
    from: currentUserId,
    content: '',
    threadId,
    mailId: uuidv4(),
    createdAt: Date.now(),
  };
  const [form, setForm] = useState(initialForm);

  const toUserIds = [...(Object.keys(to) as Uid[])];

  const toUsers = toUserIds.map((userId) => ({ id: userId, ...users[userId] }));
  const date = new Date(createdAt);

  const handleChangeForm = (e, type: 'content' | 'toEmails', index?) => {
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

  const handleClickReply = () => {
    setIsOpenModal(false);
    setForm(initialForm);
    dispatch(sendReply(form));
  };

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
              <IconButton
                icon="reply"
                tooltip="Reply"
                onClick={() => setIsOpenModal(true)}
              />
              <IconButton icon="more_vert" tooltip="More" />
            </div>
          </div>
          <p className="text-sm mt-4 max-w-3xl">{content}</p>
          <br />
          <br />
        </div>
      </div>
      {isLastMail && !isOpenModal && (
        <div className="flex items-center gap-2 pl-16 py-2">
          <Button
            variant="outlined"
            materialIcon="reply"
            onClick={() => {
              console.log('reply');
              setIsOpenModal(true);
            }}
          >
            Reply
          </Button>
          <Button variant="outlined" materialIcon="forward">
            Forward
          </Button>
        </div>
      )}
      {isOpenModal && (
        <div className="flex mb-4">
          <div className="px-4">
            <ProfileImage imageSrc={currentUserImage} />
          </div>
          <div className="flex-1">
            <div className="flex flex-col p-2 text-sm border rounded-md">
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
              <textarea
                value={form.content}
                onChange={(e) => handleChangeForm(e, 'content')}
                className="outline-none p-2"
                cols={50}
                rows={8}
              ></textarea>
              <div className="flex items-center justify-between px-2">
                <Button color="primary" onClick={handleClickReply}>
                  Send
                </Button>
                <IconButton
                  icon="delete"
                  onClick={() => {
                    setForm(initialForm);
                    setIsOpenModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
