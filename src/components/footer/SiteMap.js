import React from "react";
import { Link } from "gatsby";

export default function SiteMap() {
  return (
    <div
      className="footer-item footer-nav"
      aria-label="footer navigation links"
    >
      <h2 className="footer-subheading">Navigation</h2>

      <Link to="/gallery" className="footer-link">
        Gallery
      </Link>
      <Link to="/testimonials" className="footer-link">
        Testimonials
      </Link>
      <Link to="/about-us" className="footer-link">
        About us
      </Link>
      <Link to="/contact" className="footer-link">
        Contact
      </Link>
    </div>
  );
}
