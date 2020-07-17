import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../style/globalStyle";
import Theme from "../style/theme";
import Header from "../components/Header";
import App from "shared/App";
import Footer from "../components/Footer";

// const store = createStore();

const AppLayout = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 2rem;
`;

const Root = (ㅌ) => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <AppLayout>
        <App />
      </AppLayout>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
