import { ThreadId } from './mails';

export type Uid = string;

export interface UserProfile {
  id: Uid;
  username: string;
  email: string;
  image: string;
}

export interface User {
  userProfiles: UserProfile[];
  userProfile: UserProfile;
  starThreads: { [threadId: string]: { isStar: boolean } };
  starMails: { [mailId: string]: { isStar: boolean } };
  importantMails: { [mailId: string]: { isImportant: boolean } };
  snoozedThreads: { [mailId: string]: { openAt: number } };
  deletedThreads: {
    [threadId: string]: [
      { isDeleted: boolean },
      { [mailId: string]: { isDeleted: boolean } }
    ];
  };
}
