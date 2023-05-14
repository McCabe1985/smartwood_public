import React from "react";
import BottomLogo from "../../images/smartwood_logo_alt.svg";

export default function FooterLogo() {
  return (
    <div className="footer-logo-container">
      <img
        src={BottomLogo}
        alt="Smartwood Scotland Logo"
        className="footer-logo"
        aria-label="Smartwood Scotland Logo"
        loading="lazy"
        width="400"
        height="104"
      />
    </div>
  );
}
