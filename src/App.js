import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./Theme";
import Navbar from "./Component/Narbar/Navbar";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledApp className="App">
          <Navbar theme={theme}/>
          <Home themeToggle={themeToggle} />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
