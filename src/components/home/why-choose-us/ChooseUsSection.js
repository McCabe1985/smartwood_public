import React from "react";
import Personal from "../../../images/personal.svg";
import Tick from "../../../images/tick.svg";
import InfoIcon from "../../../images/information.svg";
import ThumbsUp from "../../../images/thumbs-up.svg";
import Clock from "../../../images/clock.svg";
import RubberRing from "../../../images/rubberring.svg";

export default function ChooseUsSection() {
 
  return (
    <section className="why-choose-us-container">
      <div className="why-choose-us-bg"></div>

      <header className="why-choose-us-header">
        <h2 className="why-choose-us-heading">Why Choose Us</h2>
      </header>

      <article className="why-choose-us-bullet-points-container">
      
          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={Personal}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">WITH US, IT'S PERSONAL</h3>
              <p className="bullet-point-text">Ours is a true family business, we live and breathe what we do and care for every home as if it was our own.</p>
            </div>
          </article>

          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={Tick}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">CHECKATRADE RATED</h3>
              <p className="bullet-point-text">We are proud to say our Checkatrade rating is currently at 97% and we're positively working toward 100%</p>
            </div>
          </article>

          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={InfoIcon}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">EXPERT SERVICE</h3>
              <p className="bullet-point-text">Our craftsmen are qualified and extremely knowledgable in their field of expertise, and are able to answer any questions you may have.</p>
            </div>
          </article>

          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={ThumbsUp}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">ALL WORK GUARANTEED</h3>
              <p className="bullet-point-text">Our aim is complete satisfaction so all our work is guaranteed and comes with a 12 month warranty</p>
            </div>
          </article>

          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={Clock}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">20 YEARS OF EXPERIENCE</h3>
              <p className="bullet-point-text"> Don't leave your flooring and tiling to chance. We have honed and developed our skills over two decades and can honestly say we've got your project covered.</p>
            </div>
          </article>

          <article className="bullet-point" >
            <div className="bullet-point-img-container">
              <img
                src={RubberRing}
                alt=""
                height="32"
                width="32"
                className="bullet-point-img"
              />
            </div>

            <div className="bullet-point-text-container">
              <h3 className="bullet-point-heading">GREAT SUPPORT</h3>
              <p className="bullet-point-text">Don't know where to start? Let's have a friendly chat. We can discuss options and budgets from the comfort of your own home. Simply call us or send an email.</p>
            </div>
          </article>
       
      </article>
    </section>
  );
}
