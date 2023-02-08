import React from 'react';
import './button.css';
import { ButtonContainer } from './styles-button';


interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */

  /* default theme */
  primary?: boolean;
  
  /* secondaary theme */
  secondary?: boolean;
  
  /* smaller size */
  small?: boolean;
    /* medium size */
  medium?: boolean;
    /* large size */
  large?: boolean;
    /* button text */
  label: string;
/* Background Color */
  backgroundColor?: string,
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label = 'myButton',
  primary = false,
  large = false,

  small = false,
  medium = false,
  backgroundColor = '#ffff',
  ...props
 
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonContainer
    label='Button label'
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};
