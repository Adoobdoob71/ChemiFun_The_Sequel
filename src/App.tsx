import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ControlPage from "./screens/ControlPage/ControlPage";
import HomePage from "./screens/HomePage/HomePage";
import LobbyPage from "./screens/LobbyPage/LobbyPage";
import SignInPage from "./screens/SignInPage/SignInPage";
import { NicknameContext } from "./utils/NicknameContext";

const App: React.FC = (props) => {
  const [nickname, setNickname] = React.useState<string>("");

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

  return (
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
        </Switch>
      </BrowserRouter>
    </NicknameContext.Provider>
  );
};

export default App;
