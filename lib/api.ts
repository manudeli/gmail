// Initial Data
export const users = {
  'user-1': {
    username: 'Jonghyeon Ko',
    email: 'flowithusdev@gmail.com',
    threads: ['thread-1', 'thread-2', 'thread-3'],
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
    readThreads: {},
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
    readThreads: {},
  },
  'user-3': {
    username: 'Nadine T. Campos',
    email: 'nadine@email.com',
    threads: ['thread-2'],
    image: '/assets/profiles/profile2.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
    },
    readThreads: {},
  },
  'user-4': {
    username: 'Casey O. Robbins',
    email: 'casey@email.com',
    threads: [],
    image: '/assets/profiles/profile3.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
    readThreads: {},
  },
  'user-5': {
    username: 'Carla J. Naquin',
    email: 'carla@email.com',
    threads: [],
    image: '/assets/profiles/profile4.jpg',
    starThreads: { 'thread-1': { isStar: true }, 'thread-2': { isStar: true } },
    starMails: { 'mail-1': { isStar: true }, 'mail-2': { isStar: true } },
    importantThreads: {
      'thread-1': { isImportant: true },
      'thread-2': { isImportant: true },
    },
    readThreads: {},
  },
};

export const mails = {
  'mail-0': {
    from: 'user-1',
    to: { 'user-2': true },
    createdAt: 1626517113349,
    content: `Dear Martin, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip `,
    threadId: 'thread-0',
  },
  'mail-1': {
    from: 'user-2',
    to: { 'user-1': true, 'user-3': true },
    createdAt: 1606517113349,
    content: `Dear Jonghyeon Ko and Nadine T. Campos, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was p`,
    threadId: 'thread-2',
  },
  'mail-2': {
    from: 'user-3',
    to: { 'user-2': true },
    createdAt: 1626517113349,
    content: 'Dear Martin, reply to bla bla bla bla',
    threadId: 'thread-2',
  },
};

export const threads = {
  'thread-1': {
    title: '[TouchFlow] Martin, SEO Issue is occurred',
    mails: ['mail-0'],
    lastSendTime: 1606517113349,
    senders: ['user-1'],
    accesses: { 'user-2': true },
  },
  'thread-2': {
    title: '[Google] Meeting schedule, Suggestion to your companys we have',
    mails: ['mail-1', 'mail-2'],
    lastSendTime: 1626517113349,
    senders: ['user-2', 'user-3'],
    accesses: { 'user-1': true, 'user-2': true, 'user-3': true },
  },
  'thread-3': {
    title: 'Issues',
    mails: ['mail-0', 'mail-1'],
    lastSendTime: 1626017113349,
    senders: ['user-2'],
    accesses: { 'user-1': true },
  },
};
