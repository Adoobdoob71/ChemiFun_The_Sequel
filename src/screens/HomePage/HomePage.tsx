import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Column, GameItem, Header, IconButton } from "../../components";
import { Game } from "../../utils/classes";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

const HomePage: React.FC = (props) => {
  const [games, setGames] = React.useState<Game[]>([]);
  const history = useHistory();
  const goBack = () => history.goBack();
  const navigateToGame = () => history.push("/game");

  return (
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
          onClick={navigateToGame}
        />
        <GameItem
          key="key"
          title="כיתה יב'1"
          style={{ marginBlock: "1rem" }}
          started={false}
          onClick={navigateToGame}
        />
        <GameItem
          key="key"
          title="כיתה יב'1"
          style={{ marginBlock: "1rem" }}
          started={true}
          onClick={navigateToGame}
        />
        <GameItem
          key="key"
          title="כיתה יב'1"
          style={{ marginBlock: "1rem" }}
          started={false}
          onClick={navigateToGame}
        />
      </Column>
    </div>
  );
};

export default HomePage;
