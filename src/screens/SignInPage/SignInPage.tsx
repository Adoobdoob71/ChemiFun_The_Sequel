import React from "react";
import { Alert, Column, Header, IconButton } from "../../components";
import { FaChevronRight } from "react-icons/fa";
import "./SignInPage.css";
import { useHistory } from "react-router";
import { NicknameContext } from "../../utils/NicknameContext";

const SignInPage: React.FC = ({}) => {
  const [nickname, setNickname] = React.useState<string>("");
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const history = useHistory();
  const { change_nickname } = React.useContext(NicknameContext);

  const advanceToNextPage = () => {
    if (nickname.length === 0) {
      setAlertMessage("לא הוזן כינוי");
      return;
    }
    change_nickname(nickname);
    history.push("/home");
  };

  const handleNickname = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(event.target.value);

  return (
    <>
      <Column
        style={{
          height: window.innerHeight,
        }}>
        <Header
          right={
            <IconButton
              icon={<FaChevronRight color="var(--text-color)" size="1.4rem" />}
              onClick={advanceToNextPage}
            />
          }
          title="ברוכים הבאים לכימיכיף"
          subtitle="לחצו על הכפתור מימין על מנת להמשיך"
        />
        <div className="flex flex_direction_column sign_in_page_content_view">
          <span className="sign_in_page_nickname font_large">:בחרו כינוי</span>
          <input
            value={nickname}
            onChange={handleNickname}
            placeholder="כינוי"
            className="custom_input font_medium"
          />
        </div>
      </Column>
      <Alert text={alertMessage} />
    </>
  );
};

export default SignInPage;
