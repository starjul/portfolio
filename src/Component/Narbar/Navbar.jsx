import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNav = () => {
    setIsExpanded(!isExpanded)
    console.log("ooo", isExpanded)
  }
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <a href="#home" className="flex band">
            Starjul
          </a>
          <nav className="flex navbar-links">
            <div
              className="flex fa fa-bars"
              aria-hidden="true"
              onClick={toggleNav}
            >
              <MenuIcon fontSize="large"  />
            </div>
            <ul className={`collapsed ${isExpanded ? "no-expanded" : "is-expanded"}`}>
              <li>
                <a href="#home" activeClassName="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" activeClassName="active">
                  About
                </a>
              </li>
              <li>
                <a href="#Skills" activeClassName="active">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Projects" activeClassName="active">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" activeClassName="active">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
