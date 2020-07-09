import React from "react";
import { Route } from "react-router-dom";
import { Home, Login, SignUp, My, IdeaDetail, Write } from "pages";

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/my" component={My} />
      <Route path="/idea/:id" component={IdeaDetail} />
      <Route path="/write" component={Write} />
    </>
  );
};

export default App;
