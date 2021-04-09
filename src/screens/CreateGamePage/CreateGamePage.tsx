import React from "react";
import { useHistory } from "react-router";
import { Column, Header, IconButton, Modal } from "../../components";
import "./CreateGamePage.css";
import { MdAdd, MdClose } from "react-icons/md";

interface CreateGamePageProps {
  onHide: () => void;
}

const CreateGamePage: React.FC<CreateGamePageProps> = (props) => {
  const [gameName, setGameName] = React.useState<string>("");

  const history = useHistory();

  const navigateToGameCreated = () => history.push("/game_control");

  const onGameNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGameName(event.target.value);

  return (
    <div className="create_game_page_main_view flex flex_direction_column">
      <Header
        left={
          <IconButton
            icon={<MdClose color="var(--text-color)" size="1.6rem" />}
            onClick={props.onHide}
          />
        }
        right={
          <IconButton
            icon={<MdAdd color="var(--text-color)" size="1.4rem" />}
            onClick={navigateToGameCreated}
          />
        }
        transparent
      />
      <div className="create_game_page_input_view flex flex_direction_column">
        <input
          className="custom_input font_small"
          value={gameName}
          onChange={onGameNameChange}
          placeholder="שם הקבוצה"
        />
      </div>
    </div>
  );
};

export default CreateGamePage;
