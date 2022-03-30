import ToggleSwitch from "../Component/ToggleSwitch/ToggleSwitch";
import "./Home.css";

const Home = ({ themeToggle }) => {
  return (
    <div className="marginLR">
      

      <h1>HELLO</h1>
      <div className="switch-container">
        <ToggleSwitch themeToggle={themeToggle} />
      </div>
    </div>
  );
};

export default Home;
