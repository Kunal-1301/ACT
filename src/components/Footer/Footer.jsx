// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <img
              src="/media/act-logo.png"
              alt="ACT Centre logo"
              className="footer-logo"
            />
            <div>
              <p className="footer-title">ACT Centre</p>
              <p className="footer-subtitle">
                Centre for Transdisciplinary Research, Thapar Institute
              </p>
            </div>
          </div>

          {/* <p className="footer-text">
            Enabling interdisciplinary research, innovation, and technology
            translation.
          </p> */}
        </div>

        <div className="footer-right">
          <div className="footer-institutional-logos">
            <img
              src="/media/tiet.png"
              alt="Thapar Institute of Engineering and Technology"
              className="footer-institutional-logo"
            />
            <img
              src="/media/tslas.png"
              alt="Thapar School of Liberal Arts & Sciences"
              className="footer-institutional-logo"
            />
          </div>
          <p className="footer-text">
            © {year} ACT Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
