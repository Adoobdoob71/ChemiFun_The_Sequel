import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IconButton, Row } from "..";
import { Participant } from "../../utils/classes";
import "./GameItem.css";

interface GameItemProps {
  name?: string;
  host?: string;
  key?: string;
  participants?: Participant[];
  style?: React.CSSProperties;
  gameStarted?: boolean;
  onClick?: () => void;
}

const GameItem: React.FC<GameItemProps> = (props) => {
  return (
    <div
      style={props.style}
      className="game_item_main_view flex flex_direction_column">
      <Row style={{ marginBottom: "0.3rem", justifyContent: "space-between" }}>
        <span className="game_item_title font_medium">{props.name}</span>
        <Row>
          <span className="game_item_participants_number font_small">
            משתתפים
          </span>
          <span
            className="game_item_participants_number font_small"
            style={{ fontWeight: "bold", marginInline: "0.4rem" }}>
            {props.participants?.length}
          </span>
        </Row>
      </Row>
      <span className="game_item_host font_extra_small">
        מנהל - {props.host}
      </span>
      <Row style={{ justifyContent: "space-between" }}>
        <Row>
          {props.participants?.map((item, index) => (
            <span
              className="game_item_participants_text font_extra_small"
              style={{ marginInline: "0.1rem" }}>
              {item.nickname},
            </span>
          ))}
        </Row>
        <IconButton
          icon={<FaChevronRight color="#000" size="1.2rem" />}
          onClick={props.onClick}
        />
      </Row>
      <Row>
        <span className="game_item_status font_tiny">סטאטוס - </span>
        <div
          className={`game_item_status_circle_${props.gameStarted}`}
          style={{ marginInline: "0.8rem" }}></div>
      </Row>
    </div>
  );
};

export default GameItem;
