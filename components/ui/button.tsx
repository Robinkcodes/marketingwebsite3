import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const buttonClassName = `button ${variant || ''} ${size || ''} ${
      asChild ? 'as-child' : ''
    } ${className || ''}`;

    return (
      <button className={buttonClassName} ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

