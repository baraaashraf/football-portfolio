import { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("show_nav");
  };
  return (
    <header className="nav-header">
      <h3 className="navbar-logo">Mouhamadou</h3>
      <nav className="navbar" ref={navRef}>
        <a onClick={showNavbar} href="/#">
          Home
        </a>
        <a onClick={showNavbar} href="#aboutme">
          About me
        </a>
        <a onClick={showNavbar} href="#career">
          Career
        </a>
        <a onClick={showNavbar} href="#gallery">
          Gallery
        </a>
        <a onClick={showNavbar} href="#contactme">
          Contact Me
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <PopupButton
        url="https://calendly.com/mohamadoufootball/session"
        className="book-now-nav"
        rootElement={document.getElementById("root")}
        text="Book Now!"
      />
    </header>
  );
};

export default Navbar;
