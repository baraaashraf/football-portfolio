import React from "react";
import "./Aboutme.css";
const Aboutme = () => {
  return (
    <div id="aboutme">
      <section class="section">
        <div class="section__container">
          <div class="content">
            <p class="subtitle">HELLO</p>
            <h1 class="title">
              I'm{" "}
              <span>
                Mahamoudou
                <br />your
              </span>{" "}
              Football Coach
            </h1>
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae inventore architecto in tempore quisquam qui
              necessitatibus esse placeat, omnis, harum dolorum sequi. Fugiat
              pariatur commodi aliquam sunt ipsa, quod quidem.
            </p>
            <div class="action__btns">
              <button class="hire__me">Book Me</button>
              <button class="portfolio">Portfolio</button>
            </div>
          </div>
          <div class="image">
            <img src="http://localhost:3000/img1.jpg" alt="profile" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
