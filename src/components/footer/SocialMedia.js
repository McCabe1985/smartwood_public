import React from "react";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import MyBuilder from "../../images/mybuilder.svg";

export default function SocialMedia() {
  return (
    <div className="footer-item social-media-container">
      <h2 className="footer-subheading">Social Media</h2>
      <div className="social-media-divider">
      <a href="https://www.facebook.com/smartwoodflooringscotland" className="social-link">
        <img
          height="40"
          width="40"
          src={Facebook}
          alt="Facebook link"
          className="social-icon"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/smartwoodflooring/?hl=en-gb" className="social-link">
        <img
          height="40"
          width="40"
          src={Instagram}
          alt="Instagram link"
          className="social-icon"
          loading="lazy"
        />
      </a>
      </div>
     
      <a href="https://www.mybuilder.com/profile/view/smartwood_flooring_scotland" className="social-link">
        <img
          height="8"
          width="40"
          src={MyBuilder}
          alt="MyBuilder link"
          className="mybuilder-icon"
          loading="lazy"
        />
      </a>
    </div>
  );
}
