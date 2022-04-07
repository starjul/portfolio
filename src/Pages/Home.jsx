import ToggleSwitch from "../Component/ToggleSwitch/ToggleSwitch";
import "./Home.css";
import HomeContent from "../Component/HomeContent/HomeContent";
import About from "../Component/About/About";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => props.color || "#123942"};
`;

const Home = ({ themeToggle, theme }) => {
  return (
    <div className="">
      <div className="switch-container">
        <ToggleSwitch themeToggle={themeToggle} />
      </div>
      <Section id="home">
        <HomeContent />
      </Section>
      <section id="about">
        <About theme={theme} />
      </section>
    </div>
  );
};

export default Home;
