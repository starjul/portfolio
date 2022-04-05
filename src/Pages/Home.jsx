import ToggleSwitch from "../Component/ToggleSwitch/ToggleSwitch";
import "./Home.css";
import HomeContent from "../Component/HomeContent/HomeContent";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: center;
  background-color:#0F282E ;

`;

const Home = ({ themeToggle, theme }) => {
  return (
    <div className="">
      <div className="switch-container">
        <ToggleSwitch themeToggle={themeToggle} />
      </div>
      <HeroSection id="home">
        <HomeContent />
      </HeroSection>
      
    </div>
  );
};

export default Home;
