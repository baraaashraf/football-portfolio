import React from "react";
import HeroImage from "../../assets/images/img3.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-section">
        <div className="hero-text">
          <div className="hero-text-left">
            <h1>Hey footballers!!</h1>
            <h4>Mouhamadou is here</h4>
          </div>
          <div className="hero-text-right">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              odio dolorem totam, eaque adipisci praesentium hic sit, cupiditate
              repellendus mollitia
            </p>
            <button className="book-now">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
