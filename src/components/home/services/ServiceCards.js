import React from "react";
import Engineered from "../../../images/engineered.svg"
import LVT from "../../../images/LVT.svg"
import Hardwood from "../../../images/hardwood.svg"
import Restoration from "../../../images/restoration.svg"

export default function ServiceCards() {
  return (
    <div className="service-card-section">
      <article className="service-card-container">
        <div className="service-icon-container">
          <img
            src={Hardwood}
            height="150"
            width="150"
            alt="placeholder"
            className="service-icon"
            loading="lazy"
          />
        </div>

        <div className="service-text-container">
          <h3 className="service-heading">SOLID HARDWOOD FLOORING</h3>

          <p className="service-info">
            This type of flooring is made from different species of tree and is
            manufactured then milled to size producing one single plank of
            flooring it’s then kiln dried and carefully crafted for your home.
          </p>
        </div>
      </article>

      <article className="service-card-container">
        <div className="service-icon-container">
          <img
            src={Engineered}
            height="150"
            width="150"
            alt="placeholder"
            className="service-icon"
            loading="lazy"
          />
        </div>

        <div className="service-text-container">
          <h3 className="service-heading">ENGINEERED FLOORING</h3>

          <p className="service-info">
            This flooring is the alternative to a solid floor it is build up of
            layers the top being solid which is called a wear layer it comes in
            anything from 2mm to 6mm with a soft wood/ply backing which varies
            in size the overall thickness of the board can be anything from 15mm
            to 22mm.
          </p>
        </div>
      </article>

      <article className="service-card-container">
        <div className="service-icon-container">
          <img
            src={LVT}
            height="150"
            width="150"
            alt="placeholder"
            className="service-icon"
            loading="lazy"
          />
        </div>

        <div className="service-text-container">
          <h3 className="service-heading">LVT FLOORING</h3>

          <p className="service-info">
            Luxury vinyl tile are mostly made of many different layers of pvc
            and is mixed with various resin compounds to affect the hardness
            then pressed by a rolling process and dipped in urethane, this is
            then dried by heat and air which gives you a hard wearing flexible
            floor.
          </p>
        </div>
      </article>

      <article className="service-card-container">
        <div className="service-icon-container">
          <img
            src={Restoration}
            height="150"
            width="150"
            alt="placeholder"
            className="service-icon"
            loading="lazy"
          />
        </div>

        <div className="service-text-container">
          <h3 className="service-heading">RENOVATIONS AND RESTORATION.</h3>

          <p className="service-info">
            You may have a floor that just needs some TLC we use top of the
            range dust free German sanders and specialised techniques to remove
            the old varnish and refurbished to your specification.
          </p>
        </div>
      </article>
    </div>
  );
}
