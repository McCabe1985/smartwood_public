import React from "react";
import { Link } from "gatsby";
import SwHero from "../../images/sw_hero.webp"

export default function Header() {
  return (
    <header className="hero-container">
      <section className="hero-text-container">
        <h1 className="hero-heading">TOP QUALITY FLOORING IN SCOTLAND</h1>
        <p className="hero-blurb">
          Expert craftsmanship with generations of experience
        </p>
        <Link to="/contact" className="call-to-action">
          Get in Touch
        </Link>
      </section>

      <div className="hero-bg"></div>
      <div className="hero-bg-sm-container">
        <img src={SwHero} alt="hero image" height="1635" width="2010"className="hero-bg-sm" loading="lazy"/>
      </div>
    </header>
  );
}
