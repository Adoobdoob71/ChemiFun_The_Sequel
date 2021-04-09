import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Column, GameItem, Header, IconButton, Modal } from "../../components";
import { Game } from "../../utils/classes";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import CreateGamePage from "../CreateGamePage/CreateGamePage";

const HomePage: React.FC = (props) => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const history = useHistory();
  const goBack = () => history.goBack();
  const navigateToGame = () => history.push("/game");

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

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
            <IconButton
              icon={<MdAdd color="var(--text-color)" size="1.6rem" />}
              onClick={showModal}
            />
          }
        />
        <Column
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            paddingInline: "1.2rem",
          }}>
          <GameItem
            key="key"
            title="כיתה יב'1"
            style={{ marginBlock: "1rem" }}
            started={true}
            host="אלעד"
            onClick={navigateToGame}
          />
          <GameItem
            key="key"
            title="כיתה יב'1"
            style={{ marginBlock: "1rem" }}
            started={false}
            host="אלעד"
            onClick={navigateToGame}
          />
        </Column>
      </div>
      <Modal visible={modalVisible} onHide={hideModal}>
        <CreateGamePage onHide={hideModal} />
      </Modal>
    </>
  );
};

export default HomePage;
