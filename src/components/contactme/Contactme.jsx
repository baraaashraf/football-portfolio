import { useState } from "react";
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
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div id="contactme">
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-box-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.317869622275!2d-118.4122802!3d34.0100508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba3ecc38fc65%3A0x4eade98ecd756fc3!2sTellefson%20Park!5e0!3m2!1sid!2sid!4v1715252430595!5m2!1sid!2sid"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-box-right">
            <h2>Contact Me</h2>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              className="field"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              className="field"
              placeholder="Phone"
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              className="field"
              onChange={handleChange}
            ></textarea>
            <button className="contact-btn">Send</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
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
          <div className="footerNav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#aboutme">About</a>
              </li>
              <li>
                <a href="#contactme">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy;2024; Designed by{" "}
            <span className="designer">Baraa</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contactme;
