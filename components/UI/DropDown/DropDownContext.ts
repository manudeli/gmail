import { createContext } from 'react';

export const DropDownContext = createContext<{
  isShown: boolean;
  setIsShown: any;
}>({
  isShown: false,
  setIsShown: null,
});
