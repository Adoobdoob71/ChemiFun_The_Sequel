import React from "react";
import "./AnswerButton.css";

interface AnswerButtonProps {
  answerText: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const AnswerButton: React.FC<AnswerButtonProps> = (props) => {
  return (
    <div
      className="answer_button_main_view flex flex_direction_column justify_center align_center"
      style={props.style}
      onClick={props.onClick}>
      <span className="answer_button_text font_small">{props.answerText}</span>
    </div>
  );
};

export default AnswerButton;
