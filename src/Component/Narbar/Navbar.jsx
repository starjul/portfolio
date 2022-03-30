import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex navbar">
      <a href="#home" className="flex band">
        Starjul
      </a>
      <div className="flex navbar-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
