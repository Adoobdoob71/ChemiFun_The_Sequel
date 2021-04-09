import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Header, IconButton } from "../../components";
import "./LobbyPage.css";

const LobbyPage: React.FC = (props) => {
  return (
    <div className="lobby_page_main_view flex flex_direction_column">
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={() => {}}
          />
        }
      />
    </div>
  );
};

export default LobbyPage;
