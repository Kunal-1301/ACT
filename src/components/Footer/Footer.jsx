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
          <p className="footer-text">
            © {year} ACT Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
