import React, { useContext } from 'react';
import { DropDownContext } from '../DropDownContext';

interface ItemProps {
  className?: string;
  [x: string]: any;
}

export const Item: React.FC<ItemProps> = ({
  children,
  className,
  ...props
}) => {
  const { onClickItem } = useContext(DropDownContext);

  return (
    <li onClick={onClickItem} {...props}>
      {children}
    </li>
  );
};
