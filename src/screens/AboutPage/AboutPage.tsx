import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { Button, Column, Header, IconButton, Link } from "../../components";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  const history = useHistory();

  const goBack = () => history.goBack();
  const openGithubPage = () =>
    window.open("https://github.com/Adoobdoob71", "_blank")?.focus();
  const openGithubRepo = () =>
    window.open("https://github.com/Adoobdoob71/ChemiFun_The_Sequel")?.focus();

  return (
    <div
      className="flex flex_direction_column align_center"
      style={{ height: window.innerHeight }}>
      <Header
        title="על המפתח"
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
      />
      <div
        className="flex flex_direction_column about_page_main_view align_center"
        style={{ justifyContent: "space-between", flex: 1 }}>
        <Column style={{ alignItems: "center" }}>
          <img
            src="https://avatars.githubusercontent.com/u/46420655?v=4"
            className="about_page_profile_picture"
          />
          <span className="about_page_username font_large">
            Adoobdoob71 - Elad Mekonen
          </span>
        </Column>
        <Column>
          <Button
            text="עמוד הגיטהאב שלי"
            onClick={openGithubPage}
            size="medium"
            style={{ marginBlock: "1rem" }}
          />
          <Button
            text="הקוד של הפרוייקט"
            onClick={openGithubRepo}
            size="medium"
            style={{ marginBlock: "1rem" }}
          />
        </Column>
      </div>
    </div>
  );
};

export default AboutPage;
