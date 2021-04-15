import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./screens/AboutPage/AboutPage";
import ControlPage from "./screens/ControlPage/ControlPage";
import HomePage from "./screens/HomePage/HomePage";
import LobbyPage from "./screens/LobbyPage/LobbyPage";
import QuestionPage from "./screens/QuestionPage/QuestionPage";
import SignInPage from "./screens/SignInPage/SignInPage";
import { NicknameContext } from "./utils/NicknameContext";
import { PlayerIdContext } from "./utils/PlayerIdContext";

const App: React.FC = (props) => {
  const [nickname, setNickname] = React.useState<string>("");
  const [playerID, setPlayerID] = React.useState<string>("");

  const change_nickname = React.useCallback(
    (value: string) => {
      return setNickname(value);
    },
    [nickname]
  );

  const nickname_value = React.useMemo(
    () => ({
      nickname,
      change_nickname,
    }),
    [nickname, change_nickname]
  );

  const update_playerID = React.useCallback(
    (ID: string) => {
      return setPlayerID(ID);
    },
    [playerID]
  );

  const playerID_value = React.useMemo(
    () => ({
      playerID,
      update_playerID,
    }),
    [playerID, update_playerID]
  );

  return (
    <PlayerIdContext.Provider value={playerID_value}>
      <NicknameContext.Provider value={nickname_value}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <SignInPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/game/:gameID">
              <LobbyPage />
            </Route>
            <Route path="/game_control/:gameID">
              <ControlPage />
            </Route>
            <Route path="/game_questions/:gameID">
              <QuestionPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </NicknameContext.Provider>
    </PlayerIdContext.Provider>
  );
};

export default App;
