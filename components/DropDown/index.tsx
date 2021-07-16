import React, { useRef, useState } from 'react';
import { getPoint, position } from '../UI/core/postionHelpers';
import DropDown from '../UI/DropDown/DropDown';

interface Props {
  placement?: 'bottom' | 'top' | 'left' | 'right';
  space?: number;
  items: { label: string; id: string }[];
}

const Index: React.FC<Props> = ({
  placement = 'bottom',
  space = 0,
  items = [],
}) => {
  const [isShown, setIsShown] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleRef = useRef({ x: 0, y: 0 });
  const selectListRef = useRef();

  const toggleClick = (e) => {
    setIsShown((prev) => (prev ? 0 : 1));

    toggleRef.current = getPoint(
      e.currentTarget,
      selectListRef.current,
      placement,
      space
    );

    console.log(toggleRef.current);
  };

  const itemClick = (e) => {
    setIsShown(0);
    setSelectedItemId(e.target.id);
  };

  const mouseLeaveHandle = () => {
    setIsShown(0);
  };

  return (
    <DropDown
      onClickItem={itemClick}
      onClickToggle={toggleClick}
      isShown={isShown}
      onMouseLeave={mouseLeaveHandle}
      toggleRef={toggleRef}
      selectListRef={selectListRef}
      transformOrigin={position(placement).negate()}
    >
      <DropDown.Toggle className="bg-white px-4 py-2 rounded-md border hover:bg-black hover:bg-opacity-5 transition-all">
        {selectedItemId === null ? 'Select' : selectedItemId}
      </DropDown.Toggle>
      <DropDown.List>
        {items.map((item) => (
          <DropDown.Item key={item.id} id={item.id}>
            {item.label}
          </DropDown.Item>
        ))}
      </DropDown.List>
    </DropDown>
  );
};

export default Index;
