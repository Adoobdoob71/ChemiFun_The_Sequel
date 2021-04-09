import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { Column, Header, IconButton } from "../../components";

const ControlPage: React.FC = (props) => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <Column>
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
        title="חדר מנהל"
      />
      <Column style={{ alignItems: "center" }}></Column>
    </Column>
  );
};

export default ControlPage;
