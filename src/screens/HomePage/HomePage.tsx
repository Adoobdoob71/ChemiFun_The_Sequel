import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import {
  Column,
  GameItem,
  Header,
  IconButton,
  Modal,
  Row,
} from "../../components";
import { Game } from "../../utils/classes";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { MdAdd, MdRefresh } from "react-icons/md";
import CreateGamePage from "../CreateGamePage/CreateGamePage";
import firebase from "firebase";
import { NicknameContext } from "../../utils/NicknameContext";
import { PlayerIdContext } from "../../utils/PlayerIdContext";
import { Spinner } from "react-bootstrap";

const HomePage: React.FC = (props) => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const history = useHistory();
  const goBack = () => history.goBack();

  const { nickname } = React.useContext(NicknameContext);
  const { update_playerID, playerID } = React.useContext(PlayerIdContext);

  const navigateToGame = async (key: string) => {
    if (playerID.length === 0) {
      let playerID = await firebase
        .database()
        .ref("games")
        .child(key)
        .child("participants")
        .push().key;

      if (playerID) {
        await firebase
          .database()
          .ref("games")
          .child(key)
          .child("participants")
          .child(playerID)
          .set({
            nickname: nickname,
            points: 0,
          });
        update_playerID(playerID);
      }
    } else {
      await firebase
        .database()
        .ref("games")
        .child(key)
        .child("participants")
        .child(playerID)
        .once("value", (snapshot) => {
          if (snapshot.exists()) {
            firebase
              .database()
              .ref("games")
              .child(key)
              .child("participants")
              .child(playerID)
              .update({
                nickname: nickname,
              });
          } else
            firebase
              .database()
              .ref("games")
              .child(key)
              .child("participants")
              .child(playerID)
              .update({
                nickname: nickname,
                points: 0,
              });
        });
    }

    history.push(`/game/${key}`);
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const loadGames = async () => {
    setLoading(true);
    setGames([]);
    await firebase
      .database()
      .ref("games")
      .once("value", (snapshot) => {
        snapshot.forEach((item) => {
          setGames((gamesValue) => [
            ...gamesValue,
            {
              ...item.val(),
              key: item.key,
              participants: item.val().participants
                ? Object.values(item.val().participants)
                : [],
            } as Game,
          ]);
        });
      });
    setLoading(false);
  };

  React.useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      <div className="home_page_main_view flex flex_direction_column align_center">
        <Header
          title="משחקים פנויים"
          subtitle="לחצו על מנת להצטרף למשחקים פנויים"
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
                onClick={loadGames}
                style={{ marginInline: "1rem" }}
              />
              <IconButton
                icon={<MdAdd color="var(--text-color)" size="1.6rem" />}
                onClick={showModal}
              />
            </Row>
          }
        />
        <Column
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: loading ? "center" : undefined,
            paddingTop: loading ? "5rem" : undefined,
            paddingInline: "1.2rem",
          }}>
          {loading ? (
            <Spinner animation="border" color="var(--primary-color)" />
          ) : (
            games.map((item, index) => (
              <GameItem
                {...item}
                onClick={() => navigateToGame(item.key)}
                style={{ marginBlock: "1.2rem" }}
              />
            ))
          )}
        </Column>
      </div>
      <Modal visible={modalVisible} onHide={hideModal}>
        <CreateGamePage onHide={hideModal} />
      </Modal>
    </>
  );
};

export default HomePage;
