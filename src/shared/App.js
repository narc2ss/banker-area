import React from "react";
import { Route, Switch } from "react-router-dom";

import { withCookies } from "react-cookie";

import {
  Home,
  Login,
  SignUp,
  My,
  IdeaDetailPage,
  Write,
  Preview,
  Search,
  NoMatch,
  PurchaseSuccess,
} from "pages";
import Header from "../components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <BodyWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/my" component={My} />
          <Route path="/idea/preview" component={Preview} />
          <Route path="/idea/:id" component={IdeaDetailPage} />
          <Route path="/write" component={Write} />
          <Route path="/search/:keyword" component={Search} />
          <Route path="/KakaoPaySuccess" component={PurchaseSuccess} />
          <Route Component={NoMatch} />
        </BodyWrapper>
      </Switch>
    </>
  );
};

const BodyWrapper = styled.article`
  width: 1080px;
  margin: 0 auto;
  padding: 1rem;
`;

export default withCookies(App);
