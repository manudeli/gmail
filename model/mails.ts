import { Uid } from './users';
export type MailId = string;
export type ThreadId = string;
export type MdString = string;

export interface Mail {
  id: MailId;
  threadId: ThreadId;
  createdAt: number;
  from: Uid;
  to: { [uid: string]: Boolean };
  content: MdString;
}

export interface Thread {
  title: string;
  id: ThreadId;
  mails: MailId[];
}

export interface ThreadBox {
  threads: Thread[];
  sentThreads: Thread[];
  checkedThreads: { [mailId: string]: boolean };
}
