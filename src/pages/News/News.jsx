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
      <section className="section news-hero">
        <div className="container">
          <header
            ref={heroRef}
            className={`news-hero-inner reveal-section ${
              heroVisible ? "is-visible" : ""
            }`}
          >
            <div className="news-hero-text">
              <p className="section-eyebrow news-hero-eyebrow">
                News &amp; Updates
              </p>
              <h1 className="news-hero-title">
                What’s happening at the ACT Centre
              </h1>
              <p className="news-hero-subtitle">
                This page gathers{" "}
                <strong>announcements, short highlights, calls,</strong>{" "}
                and <strong>deadlines</strong> related to the ACT Centre – in one
                place, instead of scattered across emails and posters.
              </p>
            </div>

            <div className="news-hero-side">
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
          {/* FEATURED NEWS */}
          <section
            ref={featuredRef}
            className={`news-block news-featured-block reveal-section ${
              featuredVisible ? "is-visible" : ""
            }`}
          >
            <div className="news-block-header">
              <h2 className="news-block-title">
                Featured Highlight (Placeholder)
              </h2>
              <p className="news-block-subtitle">
                Once ACT is announced, the latest major update or story can be
                featured here with a prominent card, image, or video snippet.
              </p>
            </div>

            <article className="news-featured card">
              <div className="news-featured-tag-row">
                <span className="news-pill">Announcement</span>
                <span className="news-featured-status">Coming soon</span>
              </div>

              <h3 className="news-featured-title">
                Placeholder: Launch of the ACT Centre &amp; First Calls
              </h3>
              <p className="news-featured-meta">
                Date · Location · Link to detailed note – to be updated
              </p>

              <p className="news-featured-text">
                This featured space can later carry a short narrative about the
                formal launch of ACT, the core themes, and how students and
                faculty can start engaging with the centre.
              </p>

              <p className="news-featured-note">
                In the future this card may also include a{" "}
                <span className="news-pill-soft">View photos</span> or{" "}
                <span className="news-pill-soft">Read full note</span> link.
              </p>
            </article>
          </section>

          {/* RECENT UPDATES */}
          <section
            ref={updatesRef}
            className={`news-block reveal-section ${
              updatesVisible ? "is-visible" : ""
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
              <article className="news-item card">
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

              <article className="news-item card">
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

              <article className="news-item card">
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
            className={`news-block news-block-band reveal-section ${
              callsVisible ? "is-visible" : ""
            }`}
          >
            <div className="news-block-header news-block-header--tight">
              <h2 className="news-block-title">Calls &amp; Key Deadlines</h2>
              <p className="news-block-subtitle">
                Quick view of important calls related to ACT.
              </p>
            </div>

            <div className="news-calls-grid">
              <article className="news-call-card card">
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

              <article className="news-call-card card">
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

              <article className="news-call-card card">
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
            className={`news-block reveal-section ${
              archiveVisible ? "is-visible" : ""
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
            className={`news-block news-subscribe-block reveal-section ${
              subscribeVisible ? "is-visible" : ""
            }`}
          >
            <div className="news-subscribe card">
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
