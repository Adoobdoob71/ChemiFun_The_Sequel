import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaStop,
} from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { Column, Header, IconButton } from "../../components";
import firebase from "firebase";
import "./ControlPage.css";

const ControlPage: React.FC = (props) => {
  const history = useHistory();
  const goBack = () => history.goBack();

  const { gameID } = useParams<{ gameID: string }>();

  const navigateToLobbyPage = () => history.push(`/game/:${gameID}`);

  const startGame = async () => {
    await firebase.database().ref("games").child(gameID).update({
      gameStarted: true,
    });
  };
  const endGame = async () => {
    await firebase.database().ref("games").child(gameID).update({
      gameStarted: false,
    });
  };

  return (
    <Column style={{ height: window.innerHeight }}>
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
        title="חדר מנהל"
        subtitle="חדר המנהל של כיתה יב'1"
      />
      <Column
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Column style={{ alignItems: "center" }}>
          <IconButton
            icon={<FaChevronRight color="var(--text-color)" size="3rem" />}
            onClick={navigateToLobbyPage}
            style={{ marginBottom: "1.2rem" }}
          />
          <span className="control_page_caption font_small">ללכת ללובי</span>
        </Column>
        <Column style={{ alignItems: "center", marginTop: "3.6rem" }}>
          <IconButton
            icon={<FaPlay color="var(--text-color)" size="3rem" />}
            onClick={startGame}
            style={{ marginBottom: "1.2rem" }}
          />
          <span className="control_page_caption font_small">
            להתחיל את המשחק
          </span>
        </Column>
        <Column style={{ alignItems: "center", marginTop: "3.6rem" }}>
          <IconButton
            icon={<FaPause color="var(--text-color)" size="3rem" />}
            onClick={endGame}
            style={{ marginBottom: "1.2rem" }}
          />
          <span className="control_page_caption font_small">
            לעצור את המשחק
          </span>
        </Column>
      </Column>
    </Column>
  );
};

export default ControlPage;
