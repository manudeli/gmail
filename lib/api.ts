import { Uid } from './../model/users';
import { CurrentTab } from './../model/ui';
import { ThreadId, MailId } from '../model/mails';

const users = {
  'user-1': {
    username: 'Jonghyeon Ko',
    email: 'flowithusdev@gmail.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile0.jpg',
  },
  'user-2': {
    username: 'Martin L. Olson',
    email: 'martin@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile1.jpg',
  },
  'user-3': {
    username: 'Nadine T. Campos',
    email: 'nadine@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile2.jpg',
  },
  'user-4': {
    username: 'Casey O. Robbins',
    email: 'casey@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile3.jpg',
  },
  'user-5': {
    username: 'Carla J. Naquin',
    email: 'carla@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile4.jpg',
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

export function getAllUsers() {
  return Object.keys(users).map((key) => ({ id: key, ...users[key] }));
}

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
