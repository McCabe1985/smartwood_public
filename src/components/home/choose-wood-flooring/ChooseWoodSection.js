import React from "react";
import HomeImprovement from "../../../images/home-improvement.svg";
import Strength from "../../../images/strength.svg";
import Broom from "../../../images/broom.svg";
import Timeless from "../../../images/timeless.svg";

export default function ChooseWoodSection() {
  return (
    <section className="choose-wood-flooring-container">
      <div className="choose-wood-flooring-bg"></div>
      <header className="choose-wood-flooring-header">
        <h2 className="choose-wood-flooring-heading">
          Proper flooring makes all the difference
        </h2>
      </header>

      <section className="wood-flooring-facts-container">
        <section className="wood-flooring-facts-divider">
          <article className="wood-flooring-single-fact-container">
            <div className="wood-flooring-fact-img-container">
              <img
                src={HomeImprovement}
                alt=""
                height="52"
                width="52"
                className="wood-flooring-fact-img"
              />
            </div>
            <div className="wood-flooring-fact-text-container">
              <h3 className="wood-flooring-fact-heading">
                It's an Investment!
              </h3>
              <p className="wood-flooring-fact-text">
                Wood and engineered wood flooring is a great longterm investment
                and can increase the value of your property by up to %10, adding
                thousands to the value of your property, often exceeding the
                cost of installation in the first place. In addition our floors
                are a really strong selling point when it comes to selling your
                home, and will help your property sell quicker.
              </p>
            </div>
          </article>

          <article className="wood-flooring-single-fact-container">
            <div className="wood-flooring-fact-img-container">
              <img
                src={Strength}
                alt=""
                height="52"
                width="52"
                className="wood-flooring-fact-img"
              />
            </div>
            <div className="wood-flooring-fact-text-container">
              <h3 className="wood-flooring-fact-heading">It's Durable!</h3>
              <p className="wood-flooring-fact-text">
                Our flooring is incredibly durable and will last you years.
                Between advancements in protective finishes and the ease with
                which wood flooring can be refurbished, our work can last you a
                lifetime.
              </p>
            </div>
          </article>
        </section>

        <section className="wood-flooring-facts-divider">
          <article className="wood-flooring-single-fact-container">
            <div className="wood-flooring-fact-img-container">
              <img
                src={Broom}
                alt=""
                height="52"
                width="52"
                className="wood-flooring-fact-img"
              />
            </div>
            <div className="wood-flooring-fact-text-container">
              <h3 className="wood-flooring-fact-heading">
                It's Cleaner!
              </h3>
              <p className="wood-flooring-fact-text">
                Wood and engineered wood floors are much quicker and easier to
                clean than the alternatives, requiring little more than a quick
                go over with a slightly damp mop, and of course this makes them
                much for suitable for allergy sufferers too!
              </p>
            </div>
          </article>

          <article className="wood-flooring-single-fact-container">
            <div className="wood-flooring-fact-img-container">
              <img
                src={Timeless}
                alt=""
                height="52"
                width="52"
                className="wood-flooring-fact-img"
              />
            </div>
            <div className="wood-flooring-fact-text-container">
              <h3 className="wood-flooring-fact-heading">It's a Timeless Aesthetic</h3>
              <p className="wood-flooring-fact-text">
                Carpets wear out and fashions change, but our floors will never
                wear out and never go out of style. Proper flooring isn't just a
                financial investment, it's a comfort that will remain with you
                forever.
              </p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}
