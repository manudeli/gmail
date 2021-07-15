export type Uid = string;

export interface UserProfile {
  uid: Uid;
  username: string;
  email: string;
}

export interface User {
  userProfiles: UserProfile[];
  userProfile: UserProfile;
  starThreads: { [x: string]: { isStar: boolean } };
  starMails: { [x: string]: { isStar: boolean } };
  importantMails: { [x: string]: { isImportant: boolean } };
  snoozedThreads: { [x: string]: { openAt: number } };
  deletedThreads: {
    [x: string]: [
      { isDeleted: boolean },
      { [x: string]: { isDeleted: boolean } }
    ];
  };
}
