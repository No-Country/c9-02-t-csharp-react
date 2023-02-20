import { ButtonContainer } from "./styles-button";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */

  /* default theme */
  primary?: boolean;

  /* secondaary theme */
  secondary?: boolean;

  size?: "small" | "medium" | "large";

  /* button text */
  label: string;
  /* Background Color */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label = "myButton",
  primary = false,
  size = 'small',
  backgroundColor = "#ffff",
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <ButtonContainer
      label="Button label"
      type="button"
      size={size}
      {...props}
    >
      {label}
    </ButtonContainer>
  );
};
