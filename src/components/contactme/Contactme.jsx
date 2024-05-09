import React from "react";
import "./Contactme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Contactme = () => {
  return (
    <div id="contactme">
      <div class="contact-container">
        <div class="contact-box">
          <div class="contact-box-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.317869622275!2d-118.4122802!3d34.0100508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba3ecc38fc65%3A0x4eade98ecd756fc3!2sTellefson%20Park!5e0!3m2!1sid!2sid!4v1715252430595!5m2!1sid!2sid"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="contact-box-right">
            <h2>Contact Me</h2>
            <input type="text" class="field" placeholder="Your Name" />
            <input type="text" class="field" placeholder="Your Email" />
            <input type="text" class="field" placeholder="Phone" />
            <textarea placeholder="Message" class="field"></textarea>
            <button class="contact-btn">Send</button>
          </div>
        </div>
      </div>

      <footer>
        <div class="footerContainer">
          <div class="socialIcons">
            <a href="">
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>
            <a href="">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
            <a href="">
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>
            <a href="">
              <i>
                <FontAwesomeIcon icon={faTiktok} />
              </i>
            </a>
            <a href="">
              <i>
                <FontAwesomeIcon icon={faYoutube} />
              </i>
            </a>
          </div>
          <div class="footerNav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">our Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footerBottom">
          <p>
            Copyright &copy;2023; Designed by{" "}
            <span class="designer">Baraa</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contactme;
