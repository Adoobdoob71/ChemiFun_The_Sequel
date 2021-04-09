import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { Column, Header, IconButton, Participant } from "../../components";
import "./LobbyPage.css";

const LobbyPage: React.FC = (props) => {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="lobby_page_main_view flex flex_direction_column">
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
        title="כיתה יב'1"
        subtitle="היעזרו בסבלנות עד שהמנהל יתחיל את המשחק"
      />
      <Column style={{ alignItems: "center", paddingInline: "1rem" }}>
        <Participant
          nickname="אלעד מקונן"
          leader={true}
          points={7}
          style={{ marginBlock: "0.8rem" }}
        />
        <Participant
          nickname="אלעד מקונן"
          leader={false}
          points={3}
          style={{ marginBlock: "0.8rem" }}
        />
        <Participant
          nickname="אלעד מקונן"
          leader={false}
          points={1}
          style={{ marginBlock: "0.8rem" }}
        />
        <Participant
          nickname="אלעד מקונן"
          leader={false}
          points={6}
          style={{ marginBlock: "0.8rem" }}
        />
      </Column>
    </div>
  );
};

export default LobbyPage;
