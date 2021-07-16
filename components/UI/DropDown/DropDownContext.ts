import { createContext } from 'react';

export const DropDownContext = createContext<{
  isShown: number;
  onClickToggle: any;
  onClickItem: any;
  onMouseLeave: any;
  toggleRef: any;
  selectListRef: any;
  transformOrigin: any;
}>({
  isShown: 0,
  onClickToggle: null,
  onClickItem: null,
  onMouseLeave: null,
  toggleRef: null,
  selectListRef: null,
  transformOrigin: null,
});
