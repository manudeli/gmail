import { useState } from 'react';
import IconButton from './IconButton';

interface TextInputProps {
  iconLeft?;
  type?: 'text' | 'password' | 'email';
  value?: string;
  placeholder?: string;
  fill?: boolean;
  className?;
  iconRight?;
  [props: string]: any;
  onChange?(e: any): any;
}

function TextInput({
  iconLeft,
  iconRights,
  type = 'text',
  value,
  placeholder,
  fill,
  className,
  onChange,
  iconRight,
  ...props
}: TextInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      {...props}
      className={`relative
      border rounded-md flex items-center 
    ${fill ? 'flex-1' : 'inline-block'} 
    ${className}
    `}
    >
      {iconLeft}
      <input
        style={{ background: 0 }}
        className={`outline-none py-3 ${iconLeft ? 'pr5' : 'px-5'}  text-base 
        hover:bg-black hover:bg-opacity-5
        transition-all flex-1`}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        type={type}
        value={value}
        placeholder={placeholder}
        onKeyUp={(e: any) => {
          if (e.keyCode === 27) e.target.blur();
        }}
      />
      {iconRight}
      <div
        className={`absolute  left-0 right-0 bottom-0 m-auto
      border
      ${focus ? 'w-full' : 'w-0'}
      transition-all`}
      />
    </div>
  );
}

export default TextInput;
