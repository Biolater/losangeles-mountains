import "./StickyNavbar.css";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { CloseIcon } from "../ComponentsData";
import losangelesImg from "../../assets/LOSANGELES_MOUNTAINS.png";
const StickyNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="navbar-header">
      <nav className="navbar-sticky">
        <div className="container">
          <div className="navbar-logo" onClick={() => handleClick()}>
            <img src={Logo} alt="Logo" />
            <img src={losangelesImg} className="losangeles" alt="" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                01. History
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                02. Team
              </a>
            </li>
          </ul>
          <div
            className={`navbar__mobile-menu ${isActive ? "menu__active" : ""}`}
          >
            <ul className="nav-links">
              <li>
                <a href="#" className="nav-link">
                  01. History
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  02. Team
                </a>
              </li>
            </ul>
            <div className="close-menu" onClick={() => handleClick()}>
              <CloseIcon />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default StickyNavbar;
