import React, { useState } from "react";
import styled from "styled-components";
import { textSize } from "../../GlobalStylesSetting";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded);
    console.log("ooo", isExpanded);
  };
  // Nav
  const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => props.theme.body};
    backdrop-filter: blur(10px);
    color: ${(props) => props.theme.fontColor};
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
    font-weight: 800; ;
  `;
  // Menu
  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media only screen and (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      min-width: 330px;
      padding: 0%;

      &.noExpanded {
        display: none;
      }

      &.itExpanded {
        display: flex;
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

    &:hover {
      color: #51ced2;
      font-weight: 800;
    }

    &:active {
      border-bottom: 3px solid #e6e6e6;
      padding-bottom: 0.3em;
    }

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => textSize[props.size] || "0.9rem"};

      &:active {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  `;

  return (
    <Nav theme={theme}>
      <Logo href="" size="large">
        Starjul
      </Logo>
      <Hamburger onClick={toggleNav}>
        <MenuIcon fontSize="large" />
      </Hamburger>
      <Menu className={`${isExpanded ? "noExpanded" : "itExpanded"}`}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Project</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default NavigationBar;
