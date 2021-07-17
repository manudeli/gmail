import React, { useRef, useState } from 'react';
import { getPoint, position } from '../UI/core/postionHelpers';
import DropDown from '../UI/DropDown/DropDown';

interface Props {
  placement?: 'bottom' | 'top' | 'left' | 'right';
  space?: number;
  items: { label: string; id: string }[];
}

const GoogleDropDown: React.FC<Props> = ({
  placement = 'bottom',
  space = 0,
  items = [],
}) => {
  const [isShown, setIsShown] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleRef = useRef({ x: 0, y: 0 });
  const selectListRef = useRef();

  const toggleClick = (e) => {
    setIsShown((prev) => !prev);

    toggleRef.current = getPoint(
      e.currentTarget,
      selectListRef.current,
      placement,
      space
    );
  };

  const itemClick = (e) => {
    setIsShown(false);
    setSelectedItemId(e.target.id);
  };

  const mouseLeaveHandle = () => {
    setIsShown(false);
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
      <DropDown.Toggle>
        {selectedItemId === null ? (
          <span className="material-icons text-gray500 text-center">
            arrow_drop_down
          </span>
        ) : (
          selectedItemId
        )}
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

export default GoogleDropDown;
