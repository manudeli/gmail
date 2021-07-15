export type Uid = string;

export interface UserProfile {
  uid: Uid;
  username: string;
  email: string;
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
