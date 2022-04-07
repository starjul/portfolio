import styled from "styled-components";

// Fonts Size
export const textSize = {
  small: `1rem`,
  medium: `1.5rem`,
  large: `2.5rem`,
};

export const ContainerSection = styled.header`
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  /* justify-content: center; */
  font-size: ${(props) => textSize[props.size] || "1.5em"};
  align-items: center;

  & h1 {
    margin: 1rem 0;
    background-color: #123942;
    color: #E4F8F2;
    padding: 0.2em 2em 0.2em 3em;
  }

  @media only screen and (max-width: 768px) {
    &.mbHeader02 {
      display: none;
    }
  }
`;
