import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  font-weight: 500;

  & a {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    margin: 1.5rem;

    &:hover {
      color: #66897e;
      font-weight: 800;
      transition: all 0.1s ease-in;
    }
  }

  & a p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/starjul/portfolio" target="_blank">
        <p>Designed &amp; Built by Starjul</p>
      </a>
    </FooterContainer>
  );
};

export default Footer;
