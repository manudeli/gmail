interface IconButtonProps {
  icon: string;
}

function IconButton({ icon }: IconButtonProps) {
  return (
    <div
      className="flex justify-center
    items-center w-10 h-10 rounded-full
    hover:bg-black hover:bg-opacity-5
    transition-all m-1 cursor-pointer"
    >
      <span
        className={`material-icons
        text-black text-opacity-60
      `}
      >
        {icon}
      </span>
    </div>
  );
}

export default IconButton;
