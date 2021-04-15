import React from "react";
import { Alert, Column, Header, IconButton, Row } from "../../components";
import { FaChevronRight, FaInfo, FaPalette } from "react-icons/fa";
import "./SignInPage.css";
import { useHistory } from "react-router";
import { NicknameContext } from "../../utils/NicknameContext";

const SignInPage: React.FC = ({}) => {
  const [nickname, setNickname] = React.useState<string>("");
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [darkTheme, setDarkTheme] = React.useState<boolean>(false);

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

  const changeToLightTheme = () => {
    document.documentElement.style.setProperty("--background-color", "#e0e0e0");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--surface-color", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--on-primary-text-color",
      "#000000"
    );
    document.documentElement.style.setProperty(
      "--on-surface-background-color",
      "#f1f1f1"
    );
  };

  const changeToDarkTheme = () => {
    document.documentElement.style.setProperty("--background-color", "#1f1f1f");
    document.documentElement.style.setProperty("--text-color", "#FFFFFF");
    document.documentElement.style.setProperty("--surface-color", "#353535");
    document.documentElement.style.setProperty(
      "--on-primary-text-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--on-surface-background-color",
      "#3f3f3f"
    );
  };

  const switchTheme = () => {
    darkTheme ? changeToLightTheme() : changeToDarkTheme();
    setDarkTheme(!darkTheme);
  };

  const goToAboutPage = () => history.push("/about");
  return (
    <>
      <Column
        style={{
          height: window.innerHeight,
        }}>
        <Header
          left={
            <Row>
              <IconButton
                icon={<FaInfo color="var(--text-color)" size="1.4rem" />}
                onClick={goToAboutPage}
                style={{ marginRight: "1rem" }}
              />
              <IconButton
                icon={<FaPalette color="var(--text-color)" size="1.4rem" />}
                onClick={switchTheme}
              />
            </Row>
          }
          right={
            <IconButton
              icon={<FaChevronRight color="var(--text-color)" size="1.4rem" />}
              onClick={advanceToNextPage}
            />
          }
          title="ברוכים הבאים לכימיכיף"
          subtitle="לחצו על הכפתור מימין על מנת להמשיך"
        />
        <div className="flex flex_direction_column sign_in_page_background_image">
          <div className="flex flex_direction_column sign_in_page_content_view">
            <span className="sign_in_page_nickname font_large">
              :בחרו כינוי
            </span>
            <input
              value={nickname}
              onChange={handleNickname}
              placeholder="כינוי"
              className="custom_input font_medium"
            />
          </div>
        </div>
      </Column>
      <Alert text={alertMessage} />
    </>
  );
};

export default SignInPage;
