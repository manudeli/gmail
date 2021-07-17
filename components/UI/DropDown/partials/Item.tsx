import React, { useContext } from 'react';
import { DropDownContext } from '../DropDownContext';
import styled from 'styled-components';

interface ItemProps {
  [x: string]: any;
}

export const Item: React.FC<ItemProps> = ({ children, ...props }) => {
  const { onClickItem } = useContext(DropDownContext);

  return (
    <StyledListItem onClick={(e) => onClickItem(e)} {...props}>
      {children}
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  font-size: 16px;
  white-space: pre;
  padding: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: background-color 0.2s;
  }
`;
