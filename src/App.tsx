import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
