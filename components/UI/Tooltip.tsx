import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Portal from './core/Portal';
import { getPoint, position } from './core/postionHelpers';

const StyledTooltip = styled.span.attrs((p) => ({
  bg: p.bg || 'dark',
  delay: p.delay || 0.01,
}))`
  position: fixed;
  top: ${(p) => p.posRef.current.y}px;
  left: ${(p) => p.posRef.current.x}px;
  font-size: ${(p) => p.fontSize}px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background-color: ${(p) => p.bg};
  color: ${(p) => p.textColor};
  pointer-events: none;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 99999;
  display: inline-block;
  white-space: nowrap;
  opacity: ${(p) => p.show};
  transition-property: transform, opacity !important;
  transition-duration: 0.06s !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
  transition-delay: ${(p) => (p.show ? p.delay : 0.02)}s !important;
  transform-origin: ${(p) => position(p.placment).negate()};
  transform: scale(${(p) => (p.show ? 1 : 0.7)});
`;

interface TooltipProps {
  text: string;
  textColor?: string;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  space?: number;
  children?;
  disabled?: number;
  delay?: number;
  bg?: string;
  fontSize?: number;
}

function Tooltip({
  text,
  placement = 'bottom',
  space = 5,
  children,
  disabled = 0,
  delay = 0.4,
  textColor = 'white',
  bg = 'black',
  fontSize = 12,
}: TooltipProps) {
  const [show, setShow] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef();

  const handleMOver = (e) => {
    setShow(1);
    posRef.current = getPoint(
      e.currentTarget,
      tooltipRef.current,
      placement,
      space
    );
  };
  const handleMOut = () => setShow(0);

  return (
    <>
      {disabled
        ? children
        : React.cloneElement(children, {
            onMouseOver: handleMOver,
            onMouseOut: handleMOut,
          })}
      {disabled || (
        <Portal>
          <StyledTooltip
            delay={delay}
            textColor={textColor}
            bg={bg}
            ref={tooltipRef}
            posRef={posRef}
            show={show}
            fontSize={fontSize}
          >
            {text}
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
}

export default Tooltip;
