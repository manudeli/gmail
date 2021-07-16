export type CurrentTab =
  | 'inbox'
  | 'starred'
  | 'snoozed'
  | 'sent'
  | 'drafts'
  | 'important'
  | 'notes';

export interface UIState {
  currentTab: CurrentTab;
  isLoading: boolean;
}
