import React from "react";
import ServiceCards from "./ServiceCards";
import ServiceHeader from "./ServicesHeader";

export default function Services() {
  return (
    <section className="services-container">
      <div className="services-bg"></div>
      <ServiceHeader />
      <ServiceCards />
    </section>
  );
}
