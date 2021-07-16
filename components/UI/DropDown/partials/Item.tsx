import React from 'react';

interface ItemProps {
  className?: string;
}

export const Item: React.FC<ItemProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
