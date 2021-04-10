import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { Column, Header, IconButton, Participant } from "../../components";
import "./LobbyPage.css";
import firebase from "firebase";
import { Participant as ParticipantINT } from "../../utils/classes";
import { MdRefresh } from "react-icons/md";

const LobbyPage: React.FC = (props) => {
  const [participants, setParticipants] = React.useState<ParticipantINT[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const history = useHistory();
  const goBack = () => history.goBack();

  const { gameID } = useParams<{ gameID: string }>();

  const loadParticipants = async () => {
    setLoading(true);
    setParticipants([]);
    firebase
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

  React.useEffect(() => {
    loadParticipants();
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
          <IconButton
            icon={<MdRefresh color="var(--text-color)" size="1.6rem" />}
            onClick={loadParticipants}
          />
        }
        title="כיתה יב'1"
        subtitle="היעזרו בסבלנות עד שהמנהל יתחיל את המשחק"
      />
      <Column style={{ alignItems: "center", paddingInline: "1rem" }}>
        {participants.map((item, index) => (
          <Participant {...item} style={{ marginBlock: "0.8rem" }} />
        ))}
      </Column>
    </div>
  );
};

export default LobbyPage;
