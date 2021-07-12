import React from "react";
import classNames from "classnames";
import "./Buttons.scss";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "outlined";
  label: string;
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  label,
  icon,
  ...rest
}) => (
  <button
    type="button"
    {...rest}
    className={classNames("button", {
      button_outlined: type === "outlined",
      "button_with-icon": icon,
    })}
  >
    {icon}
    {label}
  </button>
);

export default Button;
