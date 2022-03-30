import React from "react";
import "./ToggleSwitch.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const ToggleSwitch = ({ themeToggle }) => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" />
        <span
          class="slider round"
          onClick={() => {
            themeToggle();
          }}
        >
          <div className=" icontheme">
            <LightModeIcon fontSize="small" />
            <NightlightRoundIcon fontSize="small" />
          </div>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
