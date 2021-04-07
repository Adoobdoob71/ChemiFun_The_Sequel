import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  onClick: () => void;
  size?: "large" | "medium" | "small" | "extra_small";
  text: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="button_main_view flex justify_center align_center"
      onClick={props.onClick}>
      <span className={`button_text font_${props.size}`}>{props.text}</span>
    </button>
  );
};

export default Button;
