import React, { HTMLAttributes } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

function Button({ children, type, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
