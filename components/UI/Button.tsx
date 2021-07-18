interface ButtonProps {
  color?: 'primary' | 'secondary';
  onClick?;
  materialIcon?;
  children;
  variant?: 'default' | 'outlined';
  fill?;
}

function Button({
  color,
  onClick,
  materialIcon,
  children,
  variant,
  fill,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
     flex items-center justify-center px-8 py-2 rounded-md 
     hover:opacity-80 transition-all 
     ${fill ? 'w-full' : ''}
     ${
       variant === 'outlined'
         ? 'border'
         : `${color === 'primary' ? 'bg-blue-600' : ''} text-white`
     }
    `}
    >
      {materialIcon && (
        <span className="material-icons mr-4">{materialIcon}</span>
      )}
      {children}
    </button>
  );
}

export default Button;
