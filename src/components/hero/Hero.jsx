import React from "react";
import HeroImage from "../../assets/images/img3.jpg";
import { PopupButton } from "react-calendly";

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
            Master Your Skills: Soccer Training with a Pro Coach. Enhance Your Game with Tailored Techniques and Personalized Guidance. Level Up Your Performance on the Field.
            </p>
            <PopupButton
              url="https://calendly.com/mohamadoufootball/session"
              className="book-now"
              rootElement={document.getElementById("root")}
              text="Book Now!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
