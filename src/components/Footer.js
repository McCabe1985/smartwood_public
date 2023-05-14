import React from "react";
import FooterContent from "./footer/FooterContent";

export default function Footer() {
  return (
    <footer className="footer-container">
      <FooterContent />

      <p className="copyright-text"> Copyright© Smartwood Flooring Scotland 2023  - All Rights Reserved </p>
      <p className="mccabe-link-text">
        Powered by{" "}
        <span>
          <a href="https://www.mccabe-webdesign.com/" className="mccabe-link">
            McCabe Web Design.
          </a>
        </span>
      </p>
    </footer>
  );
}
