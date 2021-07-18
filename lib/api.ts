import { Uid } from './../model/users';
import { CurrentTab } from './../model/ui';
import { ThreadId, MailId, Thread } from '../model/mails';

// Users
const users = {
  'user-1': {
    username: 'Jonghyeon Ko',
    email: 'flowithusdev@gmail.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile0.jpg',
    starThreads: { 'thread-1': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
    snoozedThreads: {},
    deletedThreads: {
      'thread-1': [
        { isPerfectDelete: false },
        { 'mail-1': { isPerfectDelete: false } },
      ],
    },
  },
  'user-2': {
    username: 'Martin L. Olson',
    email: 'martin@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile1.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-3': {
    username: 'Nadine T. Campos',
    email: 'nadine@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile2.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-4': {
    username: 'Casey O. Robbins',
    email: 'casey@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile3.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
  'user-5': {
    username: 'Carla J. Naquin',
    email: 'carla@email.com',
    threads: ['thread-1', 'thread-2'],
    image: '/assets/profiles/profile4.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
  },
};

export function getAllUsers() {
  return Object.keys(users).map((key) => ({ id: key, ...users[key] }));
}

export function getUsers(userIds: Uid[]) {
  let newUsers = [];

  newUsers = userIds.map((userId) => {
    const newUser = { id: userId, ...users[userId] };
    return newUser;
  });

  return newUsers;
}

export function getUser(userId: Uid) {
  const user = { id: userId, ...users[userId] };
  return user;
}

// Mails
const mails = {
  'mail-0': {
    from: 'user-1',
    to: { 'user-2': true, 'user-1': true },
    createdAt: 1626517113349,
    content: `Dear Jason, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip `,
    threadId: 'thread-0',
  },
  'mail-1': {
    from: 'user-2',
    to: { 'user-1': true },
    createdAt: 1606517113349,
    content: `Dear Rick, Dear Jason, Lorem Ipsum essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more  Lorem Ip`,
    threadId: 'thread-1',
  },
  'mail-2': {
    from: 'user-3',
    to: { 'user-2': true },
    createdAt: 1626517113349,
    content: 'Dear Jason, reply to bla bla bla bla',
    threadId: 'thread-2',
  },
};

function getMailIds(threadId: ThreadId) {
  let mailIds = [];
  if (threads[threadId]) {
    return (mailIds = threads[threadId].mails);
  }
  return mailIds;
}

export function getMails(threadId: ThreadId) {
  let newMails = [];
  let mailIds = getMailIds(threadId);

  if (mailIds.length > 0) {
    newMails = mailIds.map((mailId) => {
      const newMail = { id: mailId, ...mails[mailId] };
      return newMail;
    });
  }
  return newMails;
}

//Threads
const threads = {
  'thread-1': {
    title: '[TouchFlow] Hello, Jonghyeon',
    mails: ['mail-0', 'mail-1'],
  },
  'thread-2': {
    title: '[Google] I should hire you',
    mails: ['mail-1'],
  },
  'thread-3': {
    title: 'thread-title3',
    mails: ['mail-2'],
  },
};

export function getThreads(currentTab: CurrentTab, uid: Uid) {
  let currentUser = users[uid];
  let threadIds = currentUser.threads;

  switch (currentTab) {
    case 'inbox':
      threadIds = threadIds.filter(
        (threadId) => !currentUser.deletedThreads[threadId]
      );
      break;
    case 'starred':
      threadIds = threadIds.filter(
        (threadId) => currentUser.starThreads[threadId]
      );
      break;
    case 'snoozed':
      break;
    case 'sent':
      break;
    case 'drafts':
      break;
    case 'important':
      break;
    case 'notes':
      break;
    case 'trash':
      threadIds = threadIds.filter(
        (threadId) => currentUser.deletedThreads[threadId]
      );
      break;
    default:
      break;
  }

  return threadIds.map((threadId) => ({
    id: threadId,
    ...threads[threadId],
  }));
}

export function getThread(threadId: ThreadId) {
  let newThread = {};
  newThread = { id: threadId, ...threads[threadId] } as Thread;
  return newThread;
}
