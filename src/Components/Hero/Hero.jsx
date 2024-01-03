import "./Hero.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import heroTextImg from "../../assets/LOSANGELES_MOUNTAINS.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <Navbar />
        <div className="hero-img">
          <img src={heroTextImg} alt="" />
        </div>
    </section>
  );
};

export default Hero;
