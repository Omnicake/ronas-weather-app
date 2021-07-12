import React from "react";
import "./Input.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onConfirmClick: () => void;
  confirmDisabled: boolean;
}

const Input: React.FC<InputProps> = ({
  onConfirmClick,
  confirmDisabled,
  ...rest
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onConfirmClick();
    }
  };

  return (
    <div className="input__container">
      <input className="input__field" onKeyPress={handleKeyPress} {...rest} />
      <button
        disabled={confirmDisabled}
        type="button"
        className="input__confirm-button"
        onMouseDown={onConfirmClick}
      >
        OK
      </button>
    </div>
  );
};

export default Input;
