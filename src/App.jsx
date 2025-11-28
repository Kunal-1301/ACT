// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import People from "./pages/People/People";
import Research from "./pages/Research/Research";
import Facilities from "./pages/Facilities/Facilities";
import Funding from "./pages/Funding/Funding";
import Events from "./pages/Events/Events";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/research" element={<Research />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
