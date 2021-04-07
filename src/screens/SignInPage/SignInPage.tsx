import React from "react";
import { Alert, Column, Header } from "../../components";
import { FaChevronRight } from "react-icons/fa";
import "./SignInPage.css";

const SignInPage: React.FC = ({}) => {
  const [nickname, setNickname] = React.useState<string>("");
  const [alertVisible, setAlertVisible] = React.useState<boolean>(false);
  const [alertMessage, setAlertMessage] = React.useState<string>("");

  const advanceToNextPage = () => {
    if (nickname.length === 0) {
      setAlertMessage("לא הזנתם כינוי");
      return;
    }
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
          right={<FaChevronRight color="var(--text-color)" size="1.4rem" />}
          title="ברוכים הבאים לכימיכיף"
          subtitle="לחצו על הכפתור מימין על מנת להמשיך"
        />
        <div className="flex flex_direction_column sign_in_page_content_view">
          <span className="sign_in_page_nickname font_large">:בחרו כינוי</span>
          <input
            value={nickname}
            onChange={handleNickname}
            placeholder="Nickname"
            className="custom_input font_medium"
          />
        </div>
      </Column>
      <Alert text={alertMessage} />
    </>
  );
};

export default SignInPage;
