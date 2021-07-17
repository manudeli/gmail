import styled from 'styled-components';
import React, { useContext } from 'react';
import Portal from '../../core/Portal';
import { DropDownContext } from '../DropDownContext';

export const List: React.FC = ({ children }) => {
  const { isShown, selectListRef, toggleRef, transformOrigin, onMouseLeave } =
    useContext(DropDownContext);

  return (
    <Portal>
      <StyledUnOrdederdList
        ref={selectListRef}
        toggleRef={toggleRef}
        isShown={isShown}
        transformOrigin={transformOrigin}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </StyledUnOrdederdList>
    </Portal>
  );
};

const StyledUnOrdederdList = styled.ul`
  position: fixed;
  top: ${(p) => p.toggleRef.current.y}px;
  left: ${(p) => p.toggleRef.current.x}px;
  letter-spacing: 0.02em;
  background-color: white;
  border-radius: 8px;
  border: 1px solid lightgray;
  color: black;
  padding: 2px;
  transform-origin: ${(p) => p.transformOrigin};
  z-index: 99999;
  opacity: ${(p) => (p.isShown ? 1 : 0)};
  transition: opacity 0.3s;
  box-shadow: 0 12px 20px -4px rgba(0, 0, 0, 0.1);
  pointer-events: ${(p) => (p.isShown ? '' : 'none')};
  padding: 8px 0;
`;
