import styled from "@emotion/styled";

export const CardContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  & img {
    width: 40vw;
    opacity: 0.4;
    transition: 0.3s;
    /* position: absolute; */

    &:hover {
      opacity: 1;
      backdrop-filter: green;
    }
  }

  & p {
    text-align: justify;
  }

  & div.cardRight {
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: white;
    height: fit-content;
    padding: 2em;
    position: relative;
    top: 6em;
    z-index: 1;
    color: #0f282e;

    & h4 {
      margin: 0;
      font-size: 0.9em;
      font-weight: 600;
    }

    & h1 {
      margin: 0.5em 0;
      font-size: 1.8em;
    }

    & p {
      justify-content: flex-end;
      margin: 0.5em 0;
      font-size: 1em;
    }

    & .flex {
      justify-content: flex-end;
      margin: 0.5em 0;

      & p {
        margin-left: 1rem;
      }
    }

    @media only screen and (max-width: 786px) {
      top: 0;
      padding: 1em;

      & .flex p {
        font-size: 0.8em;
      }
    }
  }

  & div.cardLeft {
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: white;
    height: fit-content;
    padding: 2em;
    position: relative;
    top: 6em;
    z-index: 1;
    color: #0f282e;

    & h4 {
      margin: 0;
      font-size: 0.9em;
      font-weight: 600;
    }

    & h1 {
      margin: 0.5em 0;
      font-size: 1.8em;
    }

    & p {
      justify-content: flex-end;
      margin: 0.5em 0;
      font-size: 1em;
    }

    & .flex {
      justify-content: flex-end;
      margin: 0.5em 0;

      & p {
        margin-left: 1rem;
      }
    }

    @media only screen and (max-width: 786px) {
      top: 0;
      padding: 1em;

      & .flex p {
        font-size: 0.8em;
      }
    }
  }



  & descent-override.linkIcon {
    justify-content: right;

    & GitHub,
    OpenInNewIcon {
      margin: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 2em;

    & img {
      width: 100%;
    }
  }
`;
