import React, { useContext } from 'react';
import { DropDownContext } from '../DropDownContext';
import styled from 'styled-components';

interface ToggleProps {
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ className, children }) => {
  const { onClickToggle } = useContext(DropDownContext);

  return <StyledToggle onClick={onClickToggle}>{children}</StyledToggle>;
};

const StyledToggle = styled.div`
  border-radius: 8px;
  border: 1px solid #ddd;
  background: white;
  padding: 6px 0;

  transition: all;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
