import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../style/globalStyle";
import Theme from "../style/theme";
import App from "shared/App";

const Root = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
