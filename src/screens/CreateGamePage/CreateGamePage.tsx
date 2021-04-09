import React from "react";
import { useHistory } from "react-router";
import { Alert, Column, Header, IconButton, Modal } from "../../components";
import "./CreateGamePage.css";
import { MdAdd, MdClose } from "react-icons/md";

interface CreateGamePageProps {
  onHide: () => void;
}

const CreateGamePage: React.FC<CreateGamePageProps> = (props) => {
  const [gameName, setGameName] = React.useState<string>("");
  const [alertMessage, setAlertMessage] = React.useState<string | null>("");

  const history = useHistory();

  const navigateToGameCreated = () => {
    if (gameName.length === 0) {
      setAlertMessage("שם לא הוזן");
      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      return;
    }
    history.push("/game_control");
  };

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
      {alertMessage ? (
        <span className="create_game_page_alert font_tiny">{alertMessage}</span>
      ) : null}
    </div>
  );
};

export default CreateGamePage;
