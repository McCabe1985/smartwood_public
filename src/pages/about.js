import React from "react";
import Layout from "../components/Layout";


export default function About() {
  return (
    <Layout>
      <main className="about-main-content" >
        <div className="about-page-bg"></div>

        <header className="about-us-header">
          <h1 className="about-us-heading">About us</h1>
          <p className="about-us-subheading">Generations of Experience</p>
        </header>

        <p className="about-us-text">
        Smartwood Flooring Scotland are an independent, family run flooring company that specialises in solid hardwood flooring, engineered flooring, luxury vinyl tile (LVT), and, renovation and restoration, based in Kilwinning, North Ayrshire.
        </p>
        <p className="about-us-text">
        In 2005 Alex started his career in flooring working for his parents as a labourer while attending college to study carpentry and joinery. He worked his way up his <a href="https://www.smartwoodflooring.com/" className="about-us-link">Parent's Company</a> and soon Alex started overseeing his own jobs. After doing the <a href="https://f-ball.com/en/training/" className="about-us-link">F.ball </a> screeding, and,  karndean courses, Alex would then go on to spend some time in Germany learning premium sanding technologies and other techniques that he brought back with him.
        </p>
        <p className="about-us-text">
        In 2019 Alex moved to north Ayrshire and founded SmartWood Flooring Scotland, bringing with him all the expertise he has acquired in nearly two decades of constant work and study, as well as Brandon, his nephew and former apprentice whose training Alex has had an active hand in since day one. Together with Alex's wife, Tahnee who handles the business's administration and logistics, they ensure that the traditional SmartWood quality is at the forefront of their work in Kilwinning.
        </p>

      </main>
    </Layout>
  );
}


export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

