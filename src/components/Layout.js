import React from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
}
