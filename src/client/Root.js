import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../style/globalStyle";
import Theme from "../style/theme";
import Header from "../components/Header";
import App from "shared/App";

// const store = createStore();

const AppLayout = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const Root = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppLayout>
        <App />
      </AppLayout>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
