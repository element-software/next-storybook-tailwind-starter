import React, { ReactNode } from 'react';
import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /*
   * Optional class name
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const classes = classNames('storybook-button', `storybook-button--${size}`, mode, className);
  return (
    <button
      type="button"
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};
