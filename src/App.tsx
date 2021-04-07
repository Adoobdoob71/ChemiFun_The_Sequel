import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignInPage from "./screens/SignInPage/SignInPage";

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignInPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
