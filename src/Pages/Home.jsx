import ToggleSwitch from "../Component/ToggleSwitch/ToggleSwitch";
import "./Home.css";
import Navbar from "../Component/Narbar/Navbar";
import HomeContent from "../Component/HomeContent/HomeContent";

const Home = ({ themeToggle }) => {
  return (
    <div className="marginLR">
      <div>
        <HomeContent  />
      </div>
      <div className="switch-container">
        <ToggleSwitch themeToggle={themeToggle} />
      </div>
    </div>
  );
};

export default Home;
