import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IconButton, Row } from "..";
import "./GameItem.css";

interface GameItemProps {
  title: string;
  key: string;
  participants?: string[];
  style?: React.CSSProperties;
  started?: boolean;
  onClick: () => void;
}

const GameItem: React.FC<GameItemProps> = (props) => {
  return (
    <div
      style={props.style}
      className="game_item_main_view flex flex_direction_column">
      <Row style={{ marginBottom: "0.3rem", justifyContent: "space-between" }}>
        <span className="game_item_title font_medium">{props.title}</span>
        <Row>
          <span className="game_item_participants_number font_small">9/</span>
          <span
            className="game_item_participants_number font_small"
            style={{ fontWeight: "bold" }}>
            10
          </span>
        </Row>
      </Row>
      <Row style={{ justifyContent: "space-between" }}>
        <span className="game_item_participants_text font_extra_small">
          אלעד, אלון, בן, אביב, רועי, גיא, לירן, אשש
        </span>
        <IconButton
          icon={<FaChevronRight color="#000" size="1.2rem" />}
          onClick={props.onClick}
        />
      </Row>
      <Row>
        <span className="game_item_status font_tiny">סטאטוס - </span>
        <div
          className={`game_item_status_circle_${props.started}`}
          style={{ marginInline: "0.8rem" }}></div>
      </Row>
    </div>
  );
};

export default GameItem;
