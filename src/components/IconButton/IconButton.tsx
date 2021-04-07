import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  icon: JSX.Element;
  onClick: () => void;
  style?: React.CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className="icon_button_main_view flex justify_center align_center"
      onClick={props.onClick}
      style={props.style}>
      {props.icon}
    </button>
  );
};

export default IconButton;
