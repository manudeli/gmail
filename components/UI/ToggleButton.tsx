import React from 'react';
import styled from 'styled-components';

interface Props {
  onChange?;
  checked?;
}

export const ToggleButton = ({ onChange, checked }: Props) => {
  return (
    <StyledToggleButton type="checkbox" onChange={onChange} checked={checked} />
  );
};

const StyledToggleButton = styled.input`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 44px;
  height: 27px;
  outline: none;
  border-radius: 15px;
  transition: 0.3s;
  background: lightgray;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.85;
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 23px;
    height: 23px;
    background: #fafafa;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.5, 0, 0.5, 1);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  &:checked:before {
    transform: translateX(17px);
    background: white;
  }
  &:checked {
    background: rgb(48, 209, 88);
  }
`;
