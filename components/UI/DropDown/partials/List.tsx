import React, { useContext } from 'react';
import { DropDownContext } from '../DropDownContext';

interface ListProps {
  className?: string;
}

export const List: React.FC<ListProps> = ({ className, children }) => {
  const { isShown } = useContext(DropDownContext);

  return isShown ? <div className={className}>{children}</div> : null;
};
