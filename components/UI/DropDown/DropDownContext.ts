import { createContext } from 'react';

export const DropDownContext = createContext<{
  isShown: boolean;
  onClickToggle: any;
  onClickItem: any;
  onMouseLeave: any;
  toggleRef: any;
  selectListRef: any;
  transformOrigin: any;
}>({
  isShown: false,
  onClickToggle: null,
  onClickItem: null,
  onMouseLeave: null,
  toggleRef: null,
  selectListRef: null,
  transformOrigin: null,
});
