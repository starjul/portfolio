import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#E4F8F2",
  fontColor: "#0F282E",
  
};

export const darkTheme = {
  body: "#0F282E",
  fontColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};
}
`;

