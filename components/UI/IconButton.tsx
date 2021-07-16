import Tooltip from './Tooltip';

interface IconButtonProps {
  icon: string;
  tooltip?;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
}

function IconButton({
  icon,
  tooltip,
  tooltipPlacement = 'bottom',
}: IconButtonProps) {
  return (
    <Tooltip
      text={tooltip}
      placement={tooltipPlacement}
      textColor="white"
      bg="#000000a4"
    >
      <div
        className="relative flex justify-center
    items-center w-10 h-10 rounded-full
    hover:bg-black hover:bg-opacity-5
    transition-all m-1 cursor-pointer hover:>span"
      >
        <span
          className={`material-icons
        text-black text-opacity-60
      `}
        >
          {icon}
        </span>
      </div>
    </Tooltip>
  );
}

export default IconButton;
