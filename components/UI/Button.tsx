interface ButtonProps {
  color: 'primary' | 'secondary';
  onClick?;
  materialIcon?;
  children;
}

function Button({ color, onClick, materialIcon, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
      text-white
      flex items-center px-8 py-2 rounded-md ${
        color === 'primary' ? 'bg-blue-600' : ''
      }
     hover:opacity-80 transition-all
    `}
    >
      <span className="material-icons mr-4">{materialIcon}</span> {children}
    </button>
  );
}

export default Button;
