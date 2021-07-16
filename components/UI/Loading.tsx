import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  isLoading?: boolean;
}

function Loading({ isLoading = true }: LoadingProps) {
  return (
    <LoadingContainer isLoading={isLoading}>
      <Loader />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div<LoadingProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.isLoading ? 'flex' : 'none')};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: ${({ theme }) => '5px solid ' + theme.colors.primary};
  border-top: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1.5s linear infinite;
`;

export default Loading;
