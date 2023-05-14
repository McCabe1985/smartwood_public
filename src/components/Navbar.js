import { Link } from "gatsby";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Logo from "../images/smartwood_logo_alt.svg";
import Hamburger from "../images/hamburger.svg";
import X from "../images/x.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="nav-container" aria-label="Main menu">
        <Link to="/" className="logo-container">
          <img
            src={Logo}
            alt="Smartwood Logo"
            className="logo"
            width="400"
            height="104"
          />
        </Link>

        <div className="nav-menu">
          <Link to="/gallery" className="nav-link" activeClassName="active">
            Gallery
          </Link>
          <Link
            to="/testimonials"
            className="nav-link"
            activeClassName="active"
          >
            Testimonials
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active">
            About us
          </Link>
          <Link to="/contact" className="nav-call-to-action">
            Get in Touch
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="hamburger-button"
          aria-label="Open the menu"
        >
          <img
            src={navbarOpen ? X : Hamburger}
            height="40"
            width="40"
            alt="menu button"
            className="hamburger"
          />
        </button>
      </nav>
      <nav className="mobile-nav-container">
        {navbarOpen ? <MobileNav /> : ""}
      </nav>
    </>
  );
}
