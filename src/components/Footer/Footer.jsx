// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-title">ACT Centre, Thapar Institute</p>
          <p className="footer-text">
            Enabling interdisciplinary research, innovation, and technology
            translation.
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-text">© {year} ACT Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
