import { MouseEvent } from 'react';

import Tooltip from './Tooltip';

interface IconButtonProps {
  icon: any;
  tooltip?;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
  onClick?;
  color?: 'white' | 'black';
}

function IconButton({
  icon,
  tooltip,
  tooltipPlacement = 'bottom',
  onClick,
  color = 'black',
}: IconButtonProps) {
  const clickButtonStopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <Tooltip
      text={tooltip}
      placement={tooltipPlacement}
      textColor="white"
      bg="#000000a4"
    >
      <button
        className={`relative flex justify-center
        items-center w-10 h-10 rounded-full
        hover:bg-black hover:bg-opacity-5
        transition-all m-1 cursor-pointer hover:>span
        `}
        onClick={(e) => {
          if (onClick) onClick();
          clickButtonStopPropagation(e);
        }}
      >
        <span
          className={`material-icons
          ${
            color === 'white'
              ? 'text-white text-opacity-60'
              : 'text-black text-opacity-60'
          }
        
      `}
        >
          {icon}
        </span>
      </button>
    </Tooltip>
  );
}

export default IconButton;
