import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}
`;

export default GlobalStyles;
