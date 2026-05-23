// src/App.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Research = lazy(() => import("./pages/Research/Research"));
const Funding = lazy(() => import("./pages/Funding/Funding"));
const News = lazy(() => import("./pages/News/News"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ProposalFormat = lazy(() => import("./pages/Documents/ProposalFormat"));
const EvaluationMatrix = lazy(() => import("./pages/Documents/EvaluationMatrix"));
const FinancialGuidelines = lazy(() => import("./pages/Documents/FinancialGuidelines"));
const RecruitmentProcess = lazy(() => import("./pages/Documents/RecruitmentProcess"));
const ProjectApprovalProcess = lazy(() => import("./pages/Documents/ProjectApprovalProcess"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App = () => {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <ErrorBoundary>
          <Suspense fallback={<div className="page-loading" aria-label="Loading page" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/funding" element={<Funding />} />
              <Route path="/news" element={<News />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default App;
