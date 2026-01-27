// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-institutions">
          {/* TIET BLOCK */}
          <div className="footer-institution-block">
            <img
              src="/media/tiet.png"
              alt="Thapar Institute of Engineering and Technology"
              className="footer-inst-logo"
            />
            <div className="footer-inst-info">
              <p className="footer-inst-name">
                Thapar Institute of Engineering & Technology
              </p>
              <p className="footer-inst-meta">Deemed to be University</p>
            </div>
          </div>

          {/* TSLAS BLOCK */}
          <div className="footer-institution-block">
            <img
              src="/media/tslas.png"
              alt="Thapar School of Liberal Arts & Sciences"
              className="footer-inst-logo"
            />
            <div className="footer-inst-info">
              <p className="footer-inst-name">
                Thapar School of Liberal Arts & Sciences
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} ACT Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
