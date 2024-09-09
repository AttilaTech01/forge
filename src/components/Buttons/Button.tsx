import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./Button.css";

export enum ButtonType {
  primary,
  success,
  warning,
  danger,
}

// Define props type for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  buttonType?: ButtonType;
}

function Button({
  children,
  disabled = false,
  outlined = false,
  rounded = false,
  buttonType = ButtonType.primary,
  ...rest
}: ButtonProps) {
  const classes = classNames({
    rounded: rounded,
    primary: buttonType === ButtonType.primary,
    success: buttonType === ButtonType.success,
    warning: buttonType === ButtonType.warning,
    danger: buttonType === ButtonType.danger,
    outlined: outlined,
    disabled: disabled,
  });

  return (
    <button {...rest} className={classes} disabled={disabled ? true : false}>
      {children}
    </button>
  );
}

export default Button;
