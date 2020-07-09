import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "../style/globalStyle";
import Header from "../components/Header";
import App from "shared/App";

// const store = createStore();

const AppLayout = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <AppLayout>
      <App />
    </AppLayout>
  </BrowserRouter>
);

export default Root;
