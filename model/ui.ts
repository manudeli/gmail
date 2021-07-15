export type CurrentTab =
  | 'inbox'
  | 'starred'
  | 'snoozed'
  | 'sent'
  | 'drafts'
  | 'important'
  | 'chats'
  | 'notes';

export interface UIState {
  currentTab: CurrentTab;
  isLoading: boolean;
}
