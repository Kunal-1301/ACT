// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `navbar-link${isActive ? " active" : ""}`;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Left: Logo */}
        <div className="navbar-left">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu} end>
            <img
              src="/media/act-logo.png"
              alt="ACT Centre Logo"
              className="logo-img"
              onError={(e) => {
                if (e.currentTarget.src.endsWith("act-logo.png")) {
                  e.currentTarget.src = "/media/act-logo.png"; // fallback
                }
              }}
            />

            <div className="logo-text">
              <span className="logo-title">ACT Centre</span>
              <span className="logo-subtitle">
                Centre For Transdisciplinary Research
              </span>
            </div>
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>

        {/* Right: Links */}
        <nav className={`navbar-links ${isOpen ? "is-open" : ""}`}>
          <NavLink to="/" className={linkClass} onClick={closeMenu} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/people" className={linkClass} onClick={closeMenu}>
            People
          </NavLink>
          <NavLink to="/research" className={linkClass} onClick={closeMenu}>
            Research
          </NavLink>
          <NavLink to="/facilities" className={linkClass} onClick={closeMenu}>
            Facilities
          </NavLink>
          <NavLink to="/funding" className={linkClass} onClick={closeMenu}>
            Funding
          </NavLink>
          <NavLink to="/events" className={linkClass} onClick={closeMenu}>
            Events
          </NavLink>
          <NavLink to="/news" className={linkClass} onClick={closeMenu}>
            News
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
