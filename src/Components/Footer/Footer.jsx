import "./Footer.css";
import React from "react";
import losangelesImg from "../../assets/LOSANGELES_MOUNTAINS.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
          <p>
            LOSANGELES <br />
            MOUNTAINS
          </p>
        </div>
        <p className="copyright">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
