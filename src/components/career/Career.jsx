import React from "react";
import "./Career.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faStar,
  faBolt,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const careerPoints = [
  {
    icon: faFutbol,
    Title: "Experience",
    desc: [
      "Playing soccer since I was five years old",
      "Quarter Finals in Japanese high school competition",
      "Semifinals in Japanese University Competition",
    ],
  },
  {
    icon: faTrophy,
    Title: "Professional",
    desc: [
      "Played in Japanese professional soccer league 2nd division",
      "Playing in NISA, which is American soccer professional league 3rd division",
    ],
  },
  {
    icon: faGraduationCap,
    Title: "Education",
    desc: ["Bachelor of Media, Komazawa University, Tokyo (2023)"],
  },

  {
    icon: faStar,
    Title: "Qualifications",
    desc: ["English teaching certificate in Japan"],
  },
  {
    icon: faBolt,
    Title: "Coaching",
    desc: [
      "Coached at the academy of a Japanese professional team",
      "Coaching Youth Soccer Club in the US",
    ],
  },
];

const Career = () => {
  return (
    <div id="career">
      <div className="wrapper">
        {careerPoints.map((point, index) => (
          <div key={index} className="career-container">
            <div className="career-container-title">
              <FontAwesomeIcon className="career-icon" icon={point.icon} />

              <span className="num">{point.Title}</span>
            </div>
            <ul className="text">
              {point.desc.map((item, index) => (
                <li className="career-point" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
