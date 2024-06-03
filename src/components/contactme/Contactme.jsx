import { useState } from "react";
import "./Contactme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faJ,
  faT,
} from "@fortawesome/free-solid-svg-icons";
const Contactme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div id="contactme">
      <div className="contact-container">
        <div className="contact-box">
          {/* <div className="contact-box-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.317869622275!2d-118.4122802!3d34.0100508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba3ecc38fc65%3A0x4eade98ecd756fc3!2sTellefson%20Park!5e0!3m2!1sid!2sid!4v1715252430595!5m2!1sid!2sid"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
          <h2>Contact Me</h2>
          <form
            action="https://formsubmit.co/8a3ed0e6c877107e8c4a33ec2eadfabb"
            method="POST"
          >
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              className="field"
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={formData.email || ""}
              className="field"
              placeholder="Your Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject || ""}
              className="field"
              placeholder="Subject"
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message || ""}
              className="field"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>

      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
            <a
              target="_blank"
              href="https://www.jleague.co/players/6929/Mouhamadou-WAR/"
            >
              <i>
                <FontAwesomeIcon icon={faJ} />
              </i>
            </a>
            <a target="_blank" href="https://www.instagram.com/mouwar/?hl=id">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
            <a
              target="_blank"
              href="https://www.transfermarkt.co.id/mouhamadou-war/profil/spieler/1127406"
            >
              <i>
                <FontAwesomeIcon icon={faT} />
              </i>
            </a>
            {/* <a target="_blank" href="">
              <i>
                <FontAwesomeIcon icon={faTiktok} />
              </i>
            </a> */}
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} /> war.mou.soccer@gmail.com
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} /> 424-603-8985
                </span>
              </li>
              {/* <li>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Tellefosn park 11057
                  Washingtion Pl,Culver City,CA 90232
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            Copyright &copy;2024; Made by{" "}
            <a href="https://github.com/bxra2" className="designer">
              Baraa
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contactme;
