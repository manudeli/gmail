import React from 'react';
import IconButton from './UI/IconButton';

interface Props {
  icon: 'star' | 'check_box';
  tooltip: string;
  isChecked?: boolean;
  onClick?;
}

export const ToggleIconButton = ({
  icon,
  isChecked = false,
  tooltip,
  onClick,
}: Props) => {
  switch (icon) {
    case 'star':
      return (
        <IconButton
          icon={`${icon}${isChecked ? '' : '_outline'}`}
          tooltip={tooltip}
          onClick={onClick}
          color="yellow"
          isChecked={isChecked}
        />
      );

    case 'check_box':
      return (
        <IconButton
          icon={`${icon}${isChecked ? '' : '_outline_blank'}`}
          tooltip={tooltip}
          onClick={onClick}
        />
      );
  }
  return <></>;
};
