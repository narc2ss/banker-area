import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

input {
  border:none;
}

ul {
  list-style: none;
}
`;

export default GlobalStyle;
