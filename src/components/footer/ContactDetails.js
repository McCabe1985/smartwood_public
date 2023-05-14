import React from "react";

export default function ContactDetails() {
  return (
    <div className="footer-item">
      <h2 className="footer-subheading">Get in touch</h2>
      <h3 className="footer-contact-subheading">Address</h3>
      <address className="footer-contact">
        25 Shavian Terrace
        <br></br>
        Kilwinning
        <br></br>
        North Ayrshire, KA13 6DA
      </address>
      <h3 className="footer-contact-subheading">Contact</h3>
      <a href="tel:+4466666666666" className="footer-number">
        07557302111
      </a>
      <address className="footer-email">alex@smartwoodflooring.com</address>
    </div>
  );
}
