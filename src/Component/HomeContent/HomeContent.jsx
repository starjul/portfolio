import React from "react";
import "./HomeContent.css";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WebIcon from "@mui/icons-material/Web";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

// ###Styled Component for Home Content

const HeroContainer = styled.div`
  display: flex;
  margin: 0rem 6rem 11rem 6rem;
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  display: flex;
  padding-bottom: 1.5em;
  border-bottom: 3px solid #e4f8f2;
  /* justify-content: center; */
  margin-top: 16rem;
  margin-bottom: 4rem;

  @media only screen and (max-width:768px) {
    margin-top: 13rem;
    
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1rem;

  & h1 {
    margin: 0;
    font-size: 3.5em;
  }

  & p {
    font-weight: 500;
    color: #a3d4c5;
    margin: 0;
    font-size: 1.46em;
  }

  @media only screen and (max-width: 768px) {
    & h1 {
      margin: 0.2rem 0;
      font-size: 2.2em;
    }

    & p {
      font-weight: 500;
      color: #a3d4c5;
      margin: 0.1rem 0;
      font-size: 0.9em;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  margin: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoSocial = styled.div`
  background-color: #e4f8f2;
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem 0.5rem 0.5rem;
  color: #0f282e;
  height: fit-content;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  text-decoration: none;
  color: #e4f8f2;
  align-items: center;
  margin: 0.76rem 0.5rem;
  font-size: smaller;
  /* font-family: 'Inconsolata', monospace; */
  /* font-weight: 100; */

  &:hover {
    color: #a3d4c5;
    transition: all 0.3s ease-in;
  }
`;

const HomeContent = () => {
  return (
    <HeroContainer >
      <HeroContent>
        <div className="flex">
          <div className="JP">
            <h1>J</h1>
            <h1>P</h1>
          </div>
          <NameContainer>
            <h1>JULALUK</h1>
            <h1>PALADKHWA</h1>
            <p>JUNIOR SOFTWARE DEVELOPER</p>
          </NameContainer>
        </div>
      </HeroContent>

      <SocialContainer>
        <LogoSocial>
          <GitHubIcon fontSize="medium" className="marginTB" />
          <LinkedInIcon fontSize="medium" className="marginTB" />
          <EmailIcon fontSize="medium" className="marginTB" />
          <WebIcon fontSize="medium" className="marginTB" />
          <SimCardDownloadIcon fontSize="medium" className="marginTB" />
        </LogoSocial>
        <Social>
          <SocialLink href="https://github.com/starjul" target="_blank">
            Starjul
          </SocialLink>
          <SocialLink href="https://github.com/starjul" target="_blank">
            Julaluk Paladkhwa
          </SocialLink>
          <SocialLink href="">j.paladkhwa@gmail.com</SocialLink>
          <SocialLink href="https://starjul.com/" target="_blank">
            www.strajul.com
          </SocialLink>
          <SocialLink
            href="https://drive.google.com/file/d/18jDkV-aFHPigDSpRs6GWB8jnIjEL7Xw0/view?usp=sharing"
            target="_blank"
          >
            Resume
          </SocialLink>
        </Social>
      </SocialContainer>
    </HeroContainer>
  );
};

export default HomeContent;
