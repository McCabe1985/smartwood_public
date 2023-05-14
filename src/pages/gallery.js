import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";



export default function Gallery({ data }) {
  const gallerySources = data.allImageSharp.nodes;
  return (
    <Layout>
      <main className="gallery-main-content">
        <div className="gallery-bg"></div>
        <header className="gallery-header">
          <h1 className="gallery-heading"> Our Work</h1>
          <p className="gallery-subheading">
            Top Quality Products Laid by Experts
          </p>
        </header>

        <section className="gallery-container">
          {gallerySources.map((image) => (
            <article className="gallery-item-container" key={image.fluid.src}>
              <a
                href={image.fluid.src}
                className="gallery-item-img-container"
              >
                <img
                  src={image.fluid.src}
                  alt="an example of flooring"
                  height={image.fluid.presentationHeight}
                  width={image.fluid.presentationWidth}
                  className="gallery-item-img"
                  loading="lazy"
                />
              </a>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query GalleryImages {
    allImageSharp {
      nodes {
        fluid {
        ...GatsbyImageSharpFluid
        }
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