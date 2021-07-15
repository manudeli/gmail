import { useState } from 'react';

interface TextInputProps {
  type: 'text' | 'password' | 'email';
  value?: string;
  placeholder?: string;
  fill?: boolean;
  className?;
  [props: string]: any;
  onChange?(e: any): any;
}

function TextInput({
  type,
  value,
  placeholder,
  fill,
  className,
  onChange,
  ...props
}: TextInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <div
      {...props}
      className={`relative
      border rounded-md flex-col
    ${fill ? 'flex flex-1 ' : 'inline-block'} 
    overflow-hidden
    ${className}
    `}
    >
      <input
        className="outline-none py-3 px-5 text-base
        hover:bg-black hover:bg-opacity-5
        transition-all"
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
