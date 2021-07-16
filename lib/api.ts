import { Uid } from './../model/users';
import { CurrentTab } from './../model/ui';
import { ThreadId, MailId } from '../model/mails';

const users = {
  'user-1': {
    threads: ['thread-1', 'thread-2'],
  },
  'mail-2': {
    threads: [],
  },
  'mail-3': {
    threads: [],
  },
};

const mails = {
  'mail-0': {
    from: 'user-1',
    to: { 'user-2': true },
    createdAt: 1626305155,
    content: 'Dear Jason, bla bla bla bla',
    threadId: 'thread-0',
  },
  'mail-1': {
    from: 'user-2',
    to: { 'user-1': true },
    createdAt: 1626305155,
    content: 'Dear Rick, reply to bla bla bla bla',
    threadId: 'thread-1',
  },
  'mail-2': {
    from: 'user-3',
    to: { 'user-2': true },
    createdAt: 1626305155,
    content: 'Dear Jason, reply to bla bla bla bla',
    threadId: 'thread-2',
  },
};

const threads = {
  'thread-1': {
    title: 'thread-title1',
    mails: ['mail-0'],
  },
  'thread-2': {
    title: 'thread-title2',
    mails: ['mail-1'],
  },
  'thread-3': {
    title: 'thread-title3',
    mails: ['mail-2'],
  },
};

function getMailIds(threadId: ThreadId) {
  return threads[threadId].mails;
}

export function getMails(threadId: ThreadId) {
  const mailIds = getMailIds(threadId);

  return mailIds.map((mailId) => {
    const newMail = mails[mailId];
    newMail.id = mailId;
    return newMail;
  });
}

export function getThreads(currentTab: CurrentTab, uid: Uid) {
  const allThreadIds = users[uid].threads;

  return allThreadIds.map((threadId) => ({
    id: threadId,
    ...threads[threadId],
  }));
}
