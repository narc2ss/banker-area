import React from "react";
import { Route, Switch } from "react-router-dom";

import { withCookies } from "react-cookie";

import { Home, Login, SignUp, My, IdeaDetail, Write } from "pages";
import Preview from "../pages/Preview";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/my" component={My} />
        <Route path="/idea/preview" component={Preview} />
        <Route path="/idea/:id" component={IdeaDetail} />
        <Route path="/write" component={Write} />
      </Switch>
    </>
  );
};

export default withCookies(App);
