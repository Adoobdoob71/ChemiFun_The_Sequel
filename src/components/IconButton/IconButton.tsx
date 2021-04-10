import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className={`icon_button_main_view flex justify_center align_center ${
        props.disabled ? "icon_button_mode_disabled" : ""
      }`}
      onClick={props.onClick}
      style={props.style}
      disabled={props.disabled}>
      {props.icon}
    </button>
  );
};

export default IconButton;
