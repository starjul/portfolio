import React from "react";
import CardLeft from "../Card/CardLeft";
import CardRight from "../Card/CardRight";
import styled from "styled-components";

const ProjectContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin: 5em 4em;

  & span {
      width: 14em;
      height: 0.4em;
      background-color: #1c929d;
      text-align: center;
      justify-content: center;
      align-self: center
  }

  & h1:first-child{
      font-size: 2.5rem;
      margin-bottom: 0.5em;
  }

  & .card {
    margin: 2rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 1em 2em;

    & .card {
      margin: 1em 0;
    }
  }
`;

const Project = () => {
  return (
    <ProjectContainer>
      <h1>Projects</h1>
      <span />
      <div className="card">
        <CardLeft />
      </div>
      <div className="card">
        {/* <CardRight /> */}
      </div>
    </ProjectContainer>
  );
};

export default Project;
