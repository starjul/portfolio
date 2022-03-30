import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#141322",
};

export const darkTheme = {
  body: "#141322",
  fontColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};
}
`;
