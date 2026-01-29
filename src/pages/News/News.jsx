import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const News = () => {
  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroRef, heroVisible] = useRevealOnScroll();
  const [featuredRef, featuredVisible] = useRevealOnScroll();
  const [updatesRef, updatesVisible] = useRevealOnScroll();
  const [callsRef, callsVisible] = useRevealOnScroll();
  const [archiveRef, archiveVisible] = useRevealOnScroll();
  const [subscribeRef, subscribeVisible] = useRevealOnScroll();

  return (
    <div className="news-page" id="news">
      {/* HERO / LATEST STRIP */}
      <section className="page-hero">
        <img
          className="page-hero-bg"
          src="/media/hero-campus-1600.jpg"
          alt=""
          loading="eager"
        />
        <div className="page-hero-overlay" aria-hidden />

        <div className="page-hero-layout">
          <header className="news-hero-inner">
            <div className="news-hero-text">
              <p className="section-eyebrow news-hero-eyebrow hero-animate hero-delay-1">
                News &amp; Updates
              </p>
              <h1 className="page-hero-title hero-animate hero-delay-2">
                What’s happening at the ACT Centre
              </h1>
              <p className="page-hero-subtitle hero-animate hero-delay-3">
                This page gathers{" "}
                <strong>announcements, short highlights, calls,</strong>{" "}
                and <strong>deadlines</strong> related to the ACT Centre – in one
                place, instead of scattered across emails and posters.
              </p>
            </div>

            <div className="news-hero-side hero-animate hero-delay-4">
              <p className="news-hero-side-label">Status snapshot</p>
              <ul className="news-hero-bullets">
                <li>Initial calls and processes being finalised</li>
                <li>Facilities and recruitment flows under design</li>
                <li>Sample placeholders here will turn into real items</li>
              </ul>
              <p className="news-hero-side-link">
                For deeper background, see{" "}
                <Link to="/about" className="link-animated">
                  About
                </Link>{" "}
                and{" "}
                <Link to="/funding" className="link-animated">
                  Funding
                </Link>
                .
              </p>
            </div>
          </header>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section news-main">
        <div className="container">
          {/* SANCTIONED PROJECTS */}
          <section
            ref={featuredRef}
            className={`news-block news-featured-block reveal-section ${featuredVisible ? "is-visible" : ""
              }`}
          >
            <div className="news-block-header">
              <h2 className="news-block-title">
                Recently Sanctioned Projects
              </h2>
              <p className="news-block-subtitle">
                Highlighting recent research initiatives and PI-led grants sanctioned at the ACT Centre.
              </p>
            </div>

            <div className="news-projects-grid">
              {/* Project 1 */}
              <article className="news-featured card card-tint-blue">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/01</span>
                </div>
                <h3 className="news-featured-title">
                  Centralized Sanitary Pad Incinerator
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. S.S Mallick, Prof. MED
                </p>
                <p className="news-featured-text">
                  <strong>Design and Development of Centralized Sanitary Pad Incinerator for Institutional Purposes</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. K.K Gupta, Dr. Dhamodaran, Dr. Sayan Sadhu, Dr. Pankaj Kumar
                </p>
              </article>

              {/* Project 2 */}
              <article className="news-featured card card-tint-green">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/02</span>
                </div>
                <h3 className="news-featured-title">
                  Gamified Civil Engineering Education
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. Abhinay Kumar
                </p>
                <p className="news-featured-text">
                  <strong>Enhancing Civil Engineering Education through Gamified Learning</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Jyoti Maggu, Dr. Richa Nigam
                </p>
              </article>

              {/* Project 3 */}
              <article className="news-featured card card-tint-rose">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/03</span>
                </div>
                <h3 className="news-featured-title">
                  Elder Care Ecosystem
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. Richa Nigam
                </p>
                <p className="news-featured-text">
                  <strong>The Elder Care Ecosystem in Punjab</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Shilpi Tyagi, Dr. Sanat Sogani
                </p>
              </article>

              {/* Project 4 */}
              <article className="news-featured card card-tint-violet">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/04</span>
                </div>
                <h3 className="news-featured-title">
                  Adaptive AI-Driven E-Skin
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. Abhisek Pal
                </p>
                <p className="news-featured-text">
                  <strong>The Relational Interface: Adaptive AI-Driven E-Skin for Personalized Health and Social Connection</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Raj Kumar Khan, Dr. Payal Mittal, Dr. Aarushi Mahajan, Prof. Anil K Verma
                </p>
              </article>

              {/* Project 5 */}
              <article className="news-featured card card-tint-blue">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/05</span>
                </div>
                <h3 className="news-featured-title">
                  Sustainable Nanotechnology
                </h3>
                <p className="news-featured-meta">
                  PI: Prof. Manmohan Chhiber
                </p>
                <p className="news-featured-text">
                  <strong>Sustainable Nanotechnology for Mitigating Microplastic-Induced Cognitive and Physiological Impairments in Honeybees</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Neloy Kumar Chakroborty, Dr. Irshad Mohiuddin, Dr. Priyankar Dey
                </p>
              </article>

              {/* Project 6 */}
              <article className="news-featured card card-tint-green">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/06</span>
                </div>
                <h3 className="news-featured-title">
                  MXene-Based Biosensors
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. Atul Upadhyay
                </p>
                <p className="news-featured-text">
                  <strong>Synthesis and Functionalization of MXene-Based Biosensors for Comprehensive Allergen Detection</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Mohit Agrawal, Dr. Rajesh Mehta, Dr. Ovais Qadri, Miss Rasman Kaur
                </p>
              </article>

              {/* Project 7 */}
              <article className="news-featured card card-tint-rose">
                <div className="news-featured-tag-row">
                  <span className="news-pill">New Grant</span>
                  <span className="news-featured-status">TIET/ACT/2026/07</span>
                </div>
                <h3 className="news-featured-title">
                  Portable Breath Analyzer
                </h3>
                <p className="news-featured-meta">
                  PI: Dr. Maninder Kaur
                </p>
                <p className="news-featured-text">
                  <strong>Breath to Insight: Portable Multi Gas Breath Analyzer for Gut Health Screening</strong>
                </p>
                <p className="news-featured-note">
                  Co-PIs: Dr. Mandeep Singh, Dr. Babita Ghai
                </p>
              </article>
            </div>
          </section>

          {/* RECENT UPDATES */}
          <section
            ref={updatesRef}
            className={`news-block reveal-section ${updatesVisible ? "is-visible" : ""
              }`}
          >
            <div className="news-block-header">
              <h2 className="news-block-title">News &amp; Short Updates</h2>
              <p className="news-block-subtitle">
                A running list of short, scannable updates. These can be used
                instead of sending separate emails for every small change.
              </p>
            </div>

            <div className="news-updates-list">
              <article className="news-item card card-tint-blue">
                <div className="news-item-header">
                  <span className="news-item-label">Process</span>
                  <span className="news-item-date">To be updated</span>
                </div>
                <h3 className="news-item-title">
                  Placeholder: Project proposal &amp; approval process drafted
                </h3>
                <p className="news-item-text">
                  A structured flow for ACT project approval – from concept note
                  to full proposal, evaluation matrix, and implementation – has
                  been drafted and is under review.
                </p>
                <p className="news-item-link">
                  Later, this can link to a{" "}
                  <Link to="/resources" className="link-animated">
                    Project Approval Process
                  </Link>{" "}
                  page or PDF.
                </p>
              </article>

              <article className="news-item card card-tint-green">
                <div className="news-item-header">
                  <span className="news-item-label">Funding</span>
                  <span className="news-item-date">To be updated</span>
                </div>
                <h3 className="news-item-title">
                  Placeholder: Drafts of student &amp; faculty funding schemes
                  prepared
                </h3>
                <p className="news-item-text">
                  Initial versions of internal funding schemes (for students and
                  faculty) have been prepared, including indicative budgets and
                  eligibility guidelines.
                </p>
                <p className="news-item-link">
                  Once finalised, these will appear under{" "}
                  <Link to="/funding" className="link-animated">
                    Funding
                  </Link>
                  .
                </p>
              </article>

              <article className="news-item card card-tint-violet">
                <div className="news-item-header">
                  <span className="news-item-label">Infrastructure</span>
                  <span className="news-item-date">To be updated</span>
                </div>
                <h3 className="news-item-title">
                  Placeholder: Facilities &amp; timesheet formats in progress
                </h3>
                <p className="news-item-text">
                  Work is underway on facility layouts, timesheet formats, and
                  operational guidelines for ACT labs and testbeds.
                </p>
                <p className="news-item-link">
                  The latest version will be reflected on{" "}
                  <Link to="/facilities" className="link-animated">
                    Facilities
                  </Link>{" "}
                  and related resource pages.
                </p>
              </article>
            </div>
          </section>

          {/* CALLS */}
          <section
            ref={callsRef}
            className={`news-block news-block-band reveal-section ${callsVisible ? "is-visible" : ""
              }`}
          >
            <div className="news-block-header news-block-header--tight">
              <h2 className="news-block-title">Calls &amp; Key Deadlines</h2>
              <p className="news-block-subtitle">
                Quick view of important calls related to ACT.
              </p>
            </div>

            <div className="news-calls-grid">
              <article className="news-call-card card card-tint-blue">
                <div className="news-call-chip-row">
                  <span className="news-call-status news-call-status--upcoming">
                    Upcoming
                  </span>
                  <span className="news-call-tag">Funding</span>
                </div>
                <h3 className="news-call-title">
                  Placeholder: Student Seed Grant – Call 1
                </h3>
                <p className="news-call-text">
                  Short description of the first student-focused internal funding
                  call.
                </p>
                <ul className="news-call-meta">
                  <li>
                    <span>Opens:</span> To be updated
                  </li>
                  <li>
                    <span>Deadline:</span> To be updated
                  </li>
                </ul>
              </article>

              <article className="news-call-card card card-tint-violet">
                <div className="news-call-chip-row">
                  <span className="news-call-status news-call-status--planned">
                    Planned
                  </span>
                  <span className="news-call-tag">Events</span>
                </div>
                <h3 className="news-call-title">
                  Placeholder: ACT Conversation Series – Call for Speakers
                </h3>
                <p className="news-call-text">
                  An open call for colleagues who want to propose topics and
                  speakers.
                </p>
                <ul className="news-call-meta">
                  <li>
                    <span>Announcement:</span> To be updated
                  </li>
                  <li>
                    <span>Expression of interest:</span> To be updated
                  </li>
                </ul>
              </article>

              <article className="news-call-card card card-tint-blue">
                <div className="news-call-chip-row">
                  <span className="news-call-status news-call-status--info">
                    Info
                  </span>
                  <span className="news-call-tag">General</span>
                </div>
                <h3 className="news-call-title">
                  Placeholder: Recruitment &amp; Timesheets – Guidance
                </h3>
                <p className="news-call-text">
                  A note about how recruitment and timesheet processes will be
                  handled.
                </p>
                <ul className="news-call-meta">
                  <li>
                    <span>Guidelines:</span> To be linked
                  </li>
                  <li>
                    <span>Effective from:</span> To be updated
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* ARCHIVE */}
          <section
            ref={archiveRef}
            className={`news-block reveal-section ${archiveVisible ? "is-visible" : ""
              }`}
          >
            <div className="news-block-header">
              <h2 className="news-block-title">Archive (Future View)</h2>
              <p className="news-block-subtitle">
                Older news can be folded into an archive table or filterable
                list.
              </p>
            </div>

            <div className="news-archive card">
              <p className="news-archive-text">
                The archive could allow filtering by{" "}
                <strong>year, type,</strong> and <strong>status</strong>.
              </p>
              <p className="news-archive-note">
                This is a placeholder until real content is published.
              </p>
            </div>
          </section>

          {/* SUBSCRIBE */}
          <section
            ref={subscribeRef}
            className={`news-block news-subscribe-block reveal-section ${subscribeVisible ? "is-visible" : ""
              }`}
          >
            <div className="news-subscribe card card-tint-blue">
              <div className="news-subscribe-main">
                <h2 className="news-subscribe-title">Staying Updated</h2>
                <p className="news-subscribe-text">
                  This page acts as the single reference point for ACT updates.
                </p>
                <ul className="news-subscribe-list">
                  <li>Bookmark this News page</li>
                  <li>Watch Funding &amp; Events pages</li>
                  <li>Follow institutional announcements</li>
                </ul>
              </div>
              <div className="news-subscribe-side">
                <p className="news-subscribe-note">
                  Subscription options can be added later.
                </p>
                <button
                  className="btn btn-secondary news-subscribe-btn"
                  disabled
                >
                  Subscription option – coming soon
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default News;
