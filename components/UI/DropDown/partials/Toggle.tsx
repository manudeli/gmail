import React, { useContext } from 'react';
import { DropDownContext } from '../DropDownContext';

interface ToggleProps {
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ className, children }) => {
  const { isShown, setIsShown } = useContext(DropDownContext);

  return (
    <div className={className} onClick={() => setIsShown(!isShown)}>
      {children}
    </div>
  );
};
