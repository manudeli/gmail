import React, { useState } from 'react';

import { Toggle } from './partials/Toggle';
import { List } from './partials/List';
import { Item } from './partials/Item';
import { DropDownContext } from './DropDownContext';

interface DropDownProps {
  className?: string;
}

const DropDown: React.FC<DropDownProps> & {
  Toggle: typeof Toggle;
  List: typeof List;
  Item: typeof Item;
} = ({ className, children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={className}>
      <DropDownContext.Provider
        value={{
          isShown,
          setIsShown,
        }}
      >
        {children}
      </DropDownContext.Provider>
    </div>
  );
};

export default DropDown;

DropDown.Toggle = Toggle;
DropDown.List = List;
DropDown.Item = Item;
