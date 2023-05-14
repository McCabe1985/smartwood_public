import React from "react";
import { Link } from "gatsby";

export default function MobileNav() {
  return (
    <ul className="mobile-navbar" >
      <li className="mobile-nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/about">About</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="mobile-nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
