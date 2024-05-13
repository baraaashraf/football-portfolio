import React from "react";
import "./Aboutme.css";
import img1 from "../../assets/images/img1.jpg";
import { PopupButton } from "react-calendly";

const Aboutme = () => {
  return (
    <div id="aboutme">
      <section className="section">
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm{" "}
              <span>
                Mahamoudou
                <br />
                your
              </span>{" "}
              Football Coach
            </h1>
            <p className="description">
            I'm a soccer trainer with 17 years of soccer experience focused on helping players refine their skills and reach their goals. My approach is simple: personalized attention, practical techniques, and consistent support. Whether you're just starting out or looking to sharpen your abilities, I'm here to provide guidance and motivation. Let's work together to enhance your game and achieve success on the field.
            </p>
            <div className="action__btns">
              <PopupButton
                url="https://calendly.com/baraaashraf/30min"
                className="hire__me"
                rootElement={document.getElementById("root")}
                text="Book Now!"
              />
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
          <div className="image">
            <img src={img1} alt="profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
