import React, { useState } from 'react';

import { Toggle } from './partials/Toggle';
import { List } from './partials/List';
import { Item } from './partials/Item';
import { DropDownContext } from './DropDownContext';

interface DropDownProps {
  className?: string;
  isShown: number;
  onClickToggle: any;
  onClickItem: any;
  onMouseLeave: any;
  toggleRef: any;
  selectListRef: any;
  transformOrigin: any;
}

const DropDown: React.FC<DropDownProps> & {
  Toggle: typeof Toggle;
  List: typeof List;
  Item: typeof Item;
} = ({
  className,
  children,
  isShown,
  onClickToggle,
  onClickItem,
  onMouseLeave,
  toggleRef,
  selectListRef,
  transformOrigin,
}) => {
  return (
    <ul className={className} onMouseLeave={onMouseLeave}>
      <DropDownContext.Provider
        value={{
          isShown,
          onClickToggle,
          onClickItem,
          onMouseLeave,
          toggleRef,
          selectListRef,
          transformOrigin,
        }}
      >
        {children}
      </DropDownContext.Provider>
    </ul>
  );
};

export default DropDown;

DropDown.Toggle = Toggle;
DropDown.List = List;
DropDown.Item = Item;
