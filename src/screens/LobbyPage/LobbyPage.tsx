import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { Column, Header, IconButton, Participant, Row } from "../../components";
import "./LobbyPage.css";
import firebase from "firebase";
import { Participant as ParticipantINT } from "../../utils/classes";
import { MdRefresh } from "react-icons/md";
import { Spinner } from "react-bootstrap";

const LobbyPage: React.FC = (props) => {
  const [participants, setParticipants] = React.useState<ParticipantINT[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [gameStarted, setGameStarted] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");

  const history = useHistory();
  const goBack = () => history.goBack();

  const { gameID } = useParams<{ gameID: string }>();

  const navigateToQuestionPage = () =>
    history.push(`/game_questions/${gameID}`);

  const loadParticipants = async () => {
    setLoading(true);
    setParticipants([]);
    await firebase
      .database()
      .ref("games")
      .child(gameID)
      .child("participants")
      .once("value", (snapshot) => {
        snapshot.forEach((item) => {
          setParticipants((participants) => [
            ...participants,
            { ...item.val(), key: item.key },
          ]);
        });
      });
    setLoading(false);
  };

  const checkIfStarted = () => {
    firebase
      .database()
      .ref("games")
      .child(gameID)
      .on("value", (snapshot) => {
        setGameStarted(snapshot.val().gameStarted);
        setName(snapshot.val().name);
      });
  };

  React.useEffect(() => {
    loadParticipants();
    checkIfStarted();
  }, []);

  return (
    <div className="lobby_page_main_view flex flex_direction_column">
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
        right={
          <Row>
            <IconButton
              icon={<MdRefresh color="var(--text-color)" size="1.6rem" />}
              onClick={loadParticipants}
              style={{ marginInline: "1rem" }}
            />
            <IconButton
              icon={<FaChevronRight color="var(--text-color)" size="1.6rem" />}
              onClick={navigateToQuestionPage}
              disabled={!gameStarted}
            />
          </Row>
        }
        title={name}
        subtitle="היעזרו בסבלנות עד שהמנהל יתחיל את המשחק"
      />
      <Column style={{ alignItems: "center", paddingInline: "1rem" }}>
        {loading ? (
          <Spinner
            animation="border"
            style={{ color: "var(--primary-color)" }}
          />
        ) : (
          participants.map((item, index) => (
            <Participant
              {...item}
              style={{ marginBlock: "0.8rem" }}
              key={index}
            />
          ))
        )}
      </Column>
    </div>
  );
};

export default LobbyPage;
