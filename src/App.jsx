// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import People from "./pages/People/People";
import Research from "./pages/Research/Research";
// import Facilities from "./pages/Facilities/Facilities";
import Funding from "./pages/Funding/Funding";
// import Events from "./pages/Events/Events";
// import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import ProposalFormat from "./pages/Documents/ProposalFormat";
import EvaluationMatrix from "./pages/Documents/EvaluationMatrix";
import FinancialGuidelines from "./pages/Documents/FinancialGuidelines";
import RecruitmentProcess from "./pages/Documents/RecruitmentProcess";
import ProjectApprovalProcess from "./pages/Documents/ProjectApprovalProcess";

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/people" element={<People />} /> */}
          <Route path="/research" element={<Research />} />
          {/* <Route path="/facilities" element={<Facilities />} /> */}
          <Route path="/funding" element={<Funding />} />
          {/* <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/documents/project-approval-process"
            element={<ProjectApprovalProcess />}
          />

          <Route
            path="/documents/recruitment-process"
            element={<RecruitmentProcess />}
          />

          <Route
            path="/documents/financial-guidelines"
            element={<FinancialGuidelines />}
          />

          <Route
            path="/documents/proposal-format"
            element={<ProposalFormat />}
          />
          <Route
            path="/documents/evaluation-matrix"
            element={<EvaluationMatrix />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
