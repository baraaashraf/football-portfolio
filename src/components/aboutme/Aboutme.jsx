import React from "react";
import "./Aboutme.css";
import img1 from '../../assets/images/img1.jpg'
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
                <br />your
              </span>{" "}
              Football Coach
            </h1>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae inventore architecto in tempore quisquam qui
              necessitatibus esse placeat, omnis, harum dolorum sequi. Fugiat
              pariatur commodi aliquam sunt ipsa, quod quidem.
            </p>
            <div className="action__btns">
              <button className="hire__me">Book Me</button>
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
