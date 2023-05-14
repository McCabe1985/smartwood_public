import React from "react";
import ContactDetails from "./ContactDetails";
import FooterLogo from "./FooterLogo";
import SiteMap from "./SiteMap";
import SocialMedia from "./SocialMedia";

export default function FooterContent() {
  return (
    <div className="footer-sub-container">
      <FooterLogo />
      <SiteMap />
      <SocialMedia />
      <ContactDetails />
    </div>
  );
}
