import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Stars from "../images/stars.svg";




export default function Testimonials({data}) {
  const testimonialSource = data.allTestimonialsJson.nodes
    
  return (
    <Layout>
      <main className="testimonials-main-content-container">
        <div className="testimonials-page-bg"></div>
        <header className="testimonials-header">
          <h1 className="testimonials-heading">Testimonials</h1>
          <p className="testimonials-subheading">
            Here's what our customers are saying
          </p>
        </header>
        <section className="testimonial-block-container">
          {
          testimonialSource.map((testimonialCard) => (
            <article
              className="testimonial-container"
              key={testimonialCard.name}
            >
              <h3 className="testimonial-heading">{testimonialCard.heading}</h3>
              <blockquote className="testimonial-text">
                {testimonialCard.testimonial}
                <figcaption className="testimonial-author">
                  {testimonialCard.name}
                </figcaption>
              </blockquote>
              <img
                src={Stars}
                alt="5 stars"
                className="testimonial-img"
              />
            </article>
          ))
          }
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
query TestimonialsQuery {
  allTestimonialsJson {
    nodes {
      heading
      name
      testimonial
    }
  }
}
`;

export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <meta
      name="description"
      content="Expert Floor Fitters, Specialising in Hardwood, Engineered Wood, LVT and Restoration in Kilwinning, North Ayrshire"
    />
    <meta
      name="keywords"
      content="Flooring, Floor Fitting, Floor Fitters, Hardwood, Engineered Wood, LVT, Restoration, Refurbishiment, Kilwinning, Ayrshire, North Ayrshire, Scotland, Scottish"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Top Quality Flooring in Kilwinning" />
    <meta
      property="og:description"
      content="Expert Floor Fitters, Specialising in Hardwood, Engineered Wood, LVT and Restoration in Kilwinning, North Ayrshire"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.smartwoodflooring-scotland.com/"
    />
    <meta
      property="og:image"
      content="https://i.postimg.cc/26sB0B8m/smartwood-banner.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <title>Top Quality Flooring in Kilwinning, North Ayrshire | SmartWood Flooring</title>
  </>
);