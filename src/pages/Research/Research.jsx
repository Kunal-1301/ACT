import React from "react";
import { Link } from "react-router-dom";
import "./Research.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Research = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: themesRef, isVisible: themesVisible } = useRevealOnScroll();
  const { ref: areasRef, isVisible: areasVisible } = useRevealOnScroll();
  const { ref: ongoingRef, isVisible: ongoingVisible } = useRevealOnScroll();
  const { ref: completedRef, isVisible: completedVisible } = useRevealOnScroll();
  const { ref: pubsRef, isVisible: pubsVisible } = useRevealOnScroll();
  const { ref: collabRef, isVisible: collabVisible } = useRevealOnScroll();
  const { ref: oppRef, isVisible: oppVisible } = useRevealOnScroll();

  return (
    <div className="research-page" id="research">
      {/* HERO */}
      <section className="section research-hero research-hero-simple">
        {/* HERO BACKGROUND IMG */}
        <img
          src="/media/hero-campus-1600.jpg"
          alt="ACT Centre campus"
          className="research-hero-bg"
          loading="eager"
          onError={(e) => {
            if (e.currentTarget.src.endsWith(".jpg")) {
              e.currentTarget.src = "/media/hero-campus-1600.JPG";
            }
          }}
        />

        {/* OVERLAY */}
        <div className="research-hero-overlay" aria-hidden />

        <div className="container research-hero-inner">
          {/* LEFT TEXT */}
          <div
            ref={heroTextRef}
            className={`research-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow research-hero-eyebrow">Research</p>

            <h1 className="research-hero-title">
              Research at the ACT Centre
            </h1>

            <p className="research-hero-subtitle">
              ACT connects <strong>engineering</strong>,{" "}
              <strong>cognitive science</strong>,{" "}
              <strong>arts &amp; humanities</strong> and{" "}
              <strong>social sciences</strong> — tackling real problems around
              health, cognition, learning and environment.
            </p>

            <div className="research-hero-ctas">
              <Link to="/funding" className="btn btn-primary">
                Explore Funding Calls
              </Link>
              <Link to="/resources" className="btn btn-secondary">
                Proposal Templates
              </Link>
            </div>

            {/* QUICK NAV */}
            <div className="research-quick-nav">
              <a href="#themes" className="research-chip">Themes</a>
              <a href="#areas" className="research-chip">Idea Clusters</a>
              <a href="#projects-ongoing" className="research-chip">Ongoing</a>
              <a href="#projects-completed" className="research-chip">Completed</a>
              <a href="#publications" className="research-chip">Publications</a>
              <a href="#collaborations" className="research-chip">Collaborations</a>
              <a href="#opportunities" className="research-chip">Opportunities</a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section research-main">
        <div className="container">

          {/* THEMES */}
          <section
            id="themes"
            ref={themesRef}
            className={`research-block research-block-band reveal-section ${
              themesVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Research Themes</h3>
              <p className="research-block-subtitle">
                Thematic anchors that guide ACT projects and collaborations.
              </p>
            </div>

            <div className="research-theme-grid">
              <article className="research-theme-card card">
                <p className="research-theme-tag">T1</p>
                <h4>Health &amp; Well-being</h4>
                <p>
                  Digital companions, serious games, and behavioural tools to support mental and emotional health.
                </p>
              </article>

              <article className="research-theme-card card">
                <p className="research-theme-tag">T2</p>
                <h4>Cognition &amp; Behaviour</h4>
                <p>
                  Studying attention, memory, decisions & behaviour through experiments and data.
                </p>
              </article>

              <article className="research-theme-card card">
                <p className="research-theme-tag">T3</p>
                <h4>Energy &amp; Environment</h4>
                <p>
                  Sensing, visualisation & nudges for low-carbon habits and sustainable campuses.
                </p>
              </article>

              <article className="research-theme-card card">
                <p className="research-theme-tag">T4</p>
                <h4>Learning &amp; Pedagogy</h4>
                <p>
                  Interactive simulations, VR/AR and AI-enabled learning pathways.
                </p>
              </article>
            </div>
          </section>

          {/* IDEA CLUSTERS */}
          <section
            id="areas"
            ref={areasRef}
            className={`research-block research-block-soft reveal-section ${
              areasVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Idea Clusters &amp; Use Cases</h3>
              <p className="research-block-subtitle">
                These clusters represent directions where ACT encourages early pilots.
              </p>
            </div>

            <div className="research-areas-layout">
              <ul className="research-areas-list">
                <li>Digital companions and self-help platforms.</li>
                <li>Serious games for cognitive training.</li>
                <li>Wearable + sensor-based behaviour tracking.</li>
                <li>Real-time feedback tools for classrooms.</li>
                <li>AI-supported personalised learning systems.</li>
                <li>Energy dashboards for sustainable behaviour.</li>
                <li>Environmental sensing for local communities.</li>
                <li>Inclusive interface & accessibility design.</li>
              </ul>

              <aside className="research-highlight-card card">
                <h4>How Ideas Become Projects</h4>
                <p>
                  Early pilots → proposal shaping → ACT funding → deployment + evaluation.
                </p>
                <p className="research-highlight-link">
                  <Link to="/resources" className="link-animated">
                    View ACT Resources
                  </Link>
                </p>
              </aside>
            </div>
          </section>

          {/* ONGOING PROJECTS */}
          <section
            id="projects-ongoing"
            ref={ongoingRef}
            className={`research-block reveal-section ${
              ongoingVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Ongoing Projects</h3>
            </div>

            <div className="research-projects-grid">
              <article className="research-project-card card">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>Digital Mental Health Companion</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Health • Cognition
                </p>
                <p className="research-project-text">
                  Game-based & conversational tools supporting emotional well-being for young adults.
                </p>
              </article>

              <article className="research-project-card card">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>ACT Smart Campus Dashboard</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Energy • Learning
                </p>
                <p className="research-project-text">
                  Visualising campus energy & resource patterns for awareness and low-carbon action.
                </p>
              </article>

              <article className="research-project-card card">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>Immersive Learning Lab</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Learning • Cognition
                </p>
                <p className="research-project-text">
                  VR/AR + simulations to explore complex STEM concepts through rich visual feedback.
                </p>
              </article>
            </div>
          </section>

          {/* COMPLETED PROJECTS */}
          <section
            id="projects-completed"
            ref={completedRef}
            className={`research-block research-block-soft reveal-section ${
              completedVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Completed Projects</h3>
            </div>

            <div className="research-completed-layout">
              <ul className="research-completed-list">
                <li><strong>Placeholder 1</strong> — Summary of completed output.</li>
                <li><strong>Placeholder 2</strong> — One-line outcome description.</li>
                <li><strong>Placeholder 3</strong> — Outcome summary.</li>
              </ul>

              <p className="research-completed-note">
                A full archive of completed ACT projects will appear here.
              </p>
            </div>
          </section>

          {/* PUBLICATIONS */}
          <section
            id="publications"
            ref={pubsRef}
            className={`research-block reveal-section ${
              pubsVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Publications</h3>
            </div>

            <div className="research-pubs-layout">
              <div className="research-pubs-feature card">
                <h4>Highlighted Publications</h4>
                <ul>
                  <li>Placeholder publication entry.</li>
                  <li>Another placeholder citation.</li>
                </ul>
              </div>

              <div className="research-pubs-note-card card">
                <p>
                  Full publication database (with filters) will appear here.
                </p>
              </div>
            </div>
          </section>

          {/* COLLABORATIONS */}
          <section
            id="collaborations"
            ref={collabRef}
            className={`research-block research-block-soft reveal-section ${
              collabVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Collaborations</h3>
            </div>

            <div className="research-collab-grid">
              <article className="research-collab-card card">
                <h4>Academic</h4>
                <ul>
                  <li>Joint projects across departments.</li>
                  <li>International academic collaborations.</li>
                  <li>Co-supervision & shared labs.</li>
                </ul>
              </article>

              <article className="research-collab-card card">
                <h4>Industry &amp; Start-ups</h4>
                <ul>
                  <li>Pilot studies with industry.</li>
                  <li>Usability testing & prototypes.</li>
                  <li>Internships through ACT.</li>
                </ul>
              </article>

              <article className="research-collab-card card">
                <h4>Government &amp; Civil Society</h4>
                <ul>
                  <li>Public sector research projects.</li>
                  <li>Co-designed interventions.</li>
                  <li>Community-aligned testbeds.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* OPPORTUNITIES */}
          <section
            id="opportunities"
            ref={oppRef}
            className={`research-block research-opportunities-block reveal-section ${
              oppVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-opportunities-card card">
              <h3>Student &amp; Research Opportunities</h3>
              <p>
                ACT hosts regular opportunities for students, fellows, and visiting researchers.
              </p>

              <ul>
                <li>Research assistant & project roles.</li>
                <li>Semester & summer internships.</li>
                <li>Joint supervision and design studios.</li>
              </ul>

              <p className="research-opportunities-note">
                Visit{" "}
                <Link to="/funding" className="link-animated">Funding</Link> and{" "}
                <Link to="/events" className="link-animated">Events</Link> for latest openings.
              </p>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Research;
