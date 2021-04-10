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

const HomePage: React.FC = (props) => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const history = useHistory();
  const goBack = () => history.goBack();

  const { nickname } = React.useContext(NicknameContext);

  const navigateToGame = async (key: string) => {
    await firebase
      .database()
      .ref("games")
      .child(key)
      .child("participants")
      .push()
      .set({
        nickname: nickname,
        points: 0,
      });
    history.push(`/game/${key}`);
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const loadGames = async () => {
    setGames([]);
    firebase
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
            paddingInline: "1.2rem",
          }}>
          {games.map((item, index) => (
            <GameItem
              {...item}
              onClick={() => navigateToGame(item.key)}
              style={{ marginBlock: "1.2rem" }}
            />
          ))}
        </Column>
      </div>
      <Modal visible={modalVisible} onHide={hideModal}>
        <CreateGamePage onHide={hideModal} />
      </Modal>
    </>
  );
};

export default HomePage;
