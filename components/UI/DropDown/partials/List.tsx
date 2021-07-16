import styled from 'styled-components';
import React, { useContext } from 'react';
import Portal from '../../core/Portal';
import { DropDownContext } from '../DropDownContext';
import { position } from '../../core/postionHelpers';

interface ListProps {
  className?: string;
}

export const List: React.FC<ListProps> = ({ className, children }) => {
  const { isShown, selectListRef, toggleRef, transformOrigin, onMouseLeave } =
    useContext(DropDownContext);

  return (
    <>
      <Portal>
        <StyledUnOrdederdList
          ref={selectListRef}
          className={className}
          toggleRef={toggleRef}
          isShown={isShown}
          transformOrigin={transformOrigin}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </StyledUnOrdederdList>
      </Portal>
    </>
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
  opacity: ${(p) => p.isShown};
  transition: opacity 0.3s;
  box-shadow: 0 12px 20px -4px rgba(0, 0, 0, 0.1);

  pointer-events: ${(p) => (p.isShown === 0 ? 'none' : '')};
  > li {
    font-size: 16px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transition: background-color 0.2s;
    }
  }
`;
