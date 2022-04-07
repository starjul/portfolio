import React from "react";
import { ContainerSection, HeaderContent } from "../GlobalStyledComponents";
import styled from "styled-components";
import "./About.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ImgContainer = styled.div`
  width: 40%;
  height: 810px;
  /* background-color: #0d3b46; */
  background-color: #adc4c6;
  padding: 7em 0;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;

  & img {
    width: 28vw;
    height: auto;
    border-radius: 50%;
    box-shadow: 1px 1px 0 0px #f8fefc;
    padding: 8px;
    align-self: center;
  }

  & .mbHeader01 {
    display: none;
    margin: 0;
  }

  & h2 {
    font-family: "WindSong", cursive;
    font-size: 5em;
    margin: 0;
    position: relative;
    top: -6.2rem;
    text-align: center;
    color: #fff;
    font-weight: 400;
  }

  & div:last-child {
    top: -10px;
    position: relative;
    top: -8vh;
  }

  & h3 {
    margin: 0.5rem;
    font-size: 3rem;
    font-weight: 700;
  }

  & p {
    font-size: medium;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    /* background-color: #0d3b46; */
    background-color: #adc4c6;
    padding: 1.5em 0 2em 0;

    & img {
      width: 80vw;
      height: auto;
      border-radius: 50%;
      box-shadow: 1px 1px 0 0px #f8fefc;
      padding: 8px;
    }

    & .mbHeader01 {
      display: flex;
      opacity: 1;
      justify-content: flex-end;
      text-align: start;
      align-items: center;
      color: #ffffff;
      /* color: #0F282E; */
      font-size: 1.2em;
      font-weight: 300;
      /* text-shadow: 3px 1px #899e97; */
      background-color: #0f282e;
      margin: 2rem 7rem 2rem 0;

      & h1 {
        margin: 0;
        padding: 0.2em 2em 0.2em 2em;
      }
    }

    & div:last-child {
      display: none;
    }
  }
`;

const AboutContent = styled.div`
  width: 60%;
  padding: 4em 0;
  background-color: #e4f8f2;
`;

const ListItems = styled.div`
  display: flex;
  margin: 0 3rem;

  & ul {
    display: flex;
    margin: 0 0.5em;
    padding: 0;
    width: 100%;
  }

  & ul.col li {
    display: flex;
    justify-content: flex-start;
  }

  & ul.col li:first-child {
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & ul {
      margin: 0 0.2em;
    }
  }
`;

const About = (theme) => {
  console.log("themeee", theme);
  return (
    <ContainerSection>
      <ImgContainer>
        <div className="mbHeader01">
          <h1>About Me</h1>
          <span />
        </div>
        <img
          src={process.env.PUBLIC_URL + "/Assets/jul07.jpg"}
          className="profile-img"
        />
        <h2>Starjul</h2>
        <div>
          <h3>Julaluk</h3>
          <h3>Paladkhwa</h3>
          <p>Software Developer</p>
        </div>
      </ImgContainer>
      <div className="col about-container">
        <HeaderContent className="mbHeader02" row>
          <h1>About Me</h1>
        </HeaderContent>
        <div className="col about-detail">
          <h3>Who am I ?</h3>
          <p>
            Hello! My name is <b>Julaluk Paladkhwa</b>. I am a person who
            switched my career path to the software development industry. Before
            that, I graduated in economics from Chiang Mai University and had
            some experience in the content-creator field.
          </p>
          <p>
            My interest in web development started recently when I tried to find
            myself where I had the opportunity to learn coding in a junior
            software developer program with Generation Thailand.. For this
            reason, I found that I love to learn new things and enjoy the time
            creating new things with my coding skills.
          </p>
          <p>
            These days, My main focus is to apply my technical skills to a new
            role as a <b>web developer</b> where I can utilize my background
            in economics, technology, and customer service to work more
            efficiently and able to build accessible products for a variety of
            clients.
          </p>
          <h3>Key Skills</h3>
          <ListItems>
            <ul className="col">
              <li>
                <h4>Programming Skills</h4>
              </li>
              <li>
                <ArrowRightIcon />
                <span>HTML</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>CSS</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>JavaScript</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>React JS</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Node JS</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Express</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>MongoDB</span>
              </li>
            </ul>
            <ul className="col">
              <li>
                <h4>Other Skills</h4>
              </li>
              <li>
                <ArrowRightIcon />
                <span>PhotoShop</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Adobe XD</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Lightroom</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>PostMan</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Git & GitHub</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Bootstrap</span>
              </li>
              <li>
                <ArrowRightIcon />
                <span>Material-UI</span>
              </li>
            </ul>
          </ListItems>
        </div>
      </div>
    </ContainerSection>
  );
};

export default About;
