import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { textSize } from "../../GlobalStylesSetting";

// ###Styled Component for Navbar
// Nav
const Nav = styled.div`
  opacity: 5;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    359deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(17, 18, 53, 0.105) 100%
  );
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.fontColor};
  position: sticky;
  top: 0;
  z-index: 1020;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

// Hamburger
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

// Logo
const Logo = styled.a`
  padding: 1rem 0;
  color: ${(props) => props.theme.fontColor};
  font-family: "Libre Barcode 128 Text", cursive;
  font-size: ${(props) => textSize[props.size] || "2.5"};
  font-weight: 800;
  align-items: center;

  &:hover {
    color: #66897e;
    font-weight: 800;
  }
`;

// Menu
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 0px;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;

    /* min-width: 330px; */
    padding: 0%;
    position: absolute;
    display: flex;
    justify-content: center;
    margin: 1em 0 0 0;
    width: 100vw;
    right: 0;
    top: 3.5em;

    &.light {
      background: linear-gradient(3deg, #ffffff 0%, rgb(216 235 232) 100%);
    }

    &.dark {
      background: linear-gradient(0deg, rgb(216 235 232) 0%, #0f282e 100%);
    }
  }
`;

// MenuLink
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  transition: all 0.3s ease-in;
  font-size: ${(props) => textSize[props.size] || "1.1rem"};
  font-family: "Crete Round", serif;
  font-weight: 500;
  list-style: none;

  &:hover {
    color: #66897e;
    font-weight: 800;
  }

  &:active {
    border-bottom: 3px solid #e6e6e6;
    padding-bottom: 0.3em;
  }

  &#contact {
    padding-right: 0%;
  }

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => textSize[props.size] || "0.9rem"};

    &:active {
      border-bottom: none;
      padding-bottom: 0;
    }

    &:hover {
      color: #66897e;
      font-weight: 800;
    }

    &#contact {
      padding-right: 2rem;
    }
  }
`;

// ###Function component
const Navbar = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
    console.log("ooo", isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <Nav>
      <Logo href="/" size="large">
        Starjul
      </Logo>
      <Hamburger onClick={toggleNav}>
        <MenuIcon fontSize="large" />
      </Hamburger>
      <Menu
        className={`${isExpanded ? "is-expanded" : "no-expanded"} ${
          theme === "light" ? "light" : "dark"
        }`}
        onClick={closeMenu}
      >
        <li>
          <MenuLink href="#home">Home</MenuLink>
        </li>
        <li>
          <MenuLink href="#about">About</MenuLink>
        </li>
        <li>
          <MenuLink href="#Projects">Projects</MenuLink>
        </li>
        <li>
          <MenuLink href="#Contact" id="contact">
            Contact
          </MenuLink>
        </li>
      </Menu>
    </Nav>
  );
};

export default Navbar;
