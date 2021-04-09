import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import LobbyPage from "./screens/LobbyPage/LobbyPage";
import SignInPage from "./screens/SignInPage/SignInPage";

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignInPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/game">
          <LobbyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
