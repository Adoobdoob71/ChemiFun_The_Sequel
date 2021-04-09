import React from "react";
import "./Participant.css";

interface ParticipantProps {
  nickname: string;
  leader: boolean;
  points: number;
  style?: React.CSSProperties;
}

const Participant: React.FC<ParticipantProps> = (props) => {
  return (
    <div
      style={props.style}
      className={`participant_main_view flex flex_direction_row align_center ${
        props.leader ? "participant_leader" : ""
      }`}>
      <span className="participant_nickname font_medium">{props.nickname}</span>
      <span className="participant_points font_small">{props.points}/15</span>
    </div>
  );
};

export default Participant;
