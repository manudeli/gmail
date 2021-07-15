import { Uid } from './users';
export type MailId = string;
export type ThreadId = string;
export type MdString = string;

export interface Mail {
  id: MailId;
  threadId: ThreadId;
  createdAt: number;
  from: Uid;
  to: Uid[];
  content: MdString;
}

export interface Thread {
  title: string;
  id: ThreadId;
  mails: { [x: string]: Mail };
}

export interface MailBox {
  inboxMails: MailId[];
  sentMails: MailId[];
  checkedMails: { [x: string]: boolean };
}
