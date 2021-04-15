import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IconButton, Row } from "..";
import { Participant } from "../../utils/classes";
import "./GameItem.css";
import firebase from "firebase";

interface GameItemProps {
  name?: string;
  host?: string;
  key?: string;
  participants?: Participant[];
  style?: React.CSSProperties;
  gameStarted?: boolean;
  onClick?: () => void;
  timeCreated: number;
}

const GameItem: React.FC<GameItemProps> = (props) => {
  const timestamp = (): string => {
    let differenceInMins =
      (firebase.firestore.Timestamp.now().toMillis() - props.timeCreated) /
      60000;
    let smallerThan60 = differenceInMins < 60;
    let smallerThan1440 = differenceInMins < 1440;

    if (smallerThan60) return "לפני " + differenceInMins.toFixed(0) + " דקות";

    if (smallerThan1440)
      return "לפני " + (differenceInMins / 60).toFixed(0) + " שעות";

    return "לפני " + (differenceInMins / 1440).toFixed(0) + " ימים";
  };

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
          icon={<FaChevronRight color="var(--text-color)" size="1.2rem" />}
          onClick={props.onClick}
        />
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
          alignSelf: "stretch",
          marginTop: "0.2rem",
        }}>
        <Row>
          <span className="game_item_status font_tiny">סטאטוס - </span>
          <div
            className={`game_item_status_circle_${props.gameStarted}`}
            style={{ marginInline: "0.8rem" }}></div>
        </Row>
        <span className="game_item_timestamp font_tiny">{timestamp()}</span>
      </Row>
    </div>
  );
};

export default GameItem;
