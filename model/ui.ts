export type CurrentTab =
  | 'inbox'
  | 'starred'
  | 'snoozed'
  | 'sent'
  | 'drafts'
  | 'important'
  | 'notes'
  | 'trash';

export interface UIState {
  currentTab: CurrentTab;
  isLoading: boolean;
}
