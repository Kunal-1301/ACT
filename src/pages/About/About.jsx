import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const About = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroInfoRef, isVisible: heroInfoVisible } = useRevealOnScroll();
  const { ref: missionRef, isVisible: missionVisible } = useRevealOnScroll();
  const { ref: originRef, isVisible: originVisible } = useRevealOnScroll();
  const { ref: structureRef, isVisible: structureVisible } = useRevealOnScroll();
  const { ref: howRef, isVisible: howVisible } = useRevealOnScroll();

  return (
    <div className="about-page" id="about">
      {/* HERO */}
      <section className="section section--bg-campus about-hero">
        <div className="container about-hero-layout">
          <div
            ref={heroTextRef}
            className={`about-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow about-hero-eyebrow">About</p>
            <h1 className="about-hero-title">About the ACT Centre</h1>
            <p className="about-hero-subtitle">
              The ACT Centre is a multidisciplinary initiative that connects{" "}
              <strong>engineering</strong>,{" "}
              <strong>cognitive science</strong>,{" "}
              <strong>arts &amp; humanities</strong>, and{" "}
              <strong>social sciences</strong> to work on real-world questions
              around health, cognition, environment, and learning.
            </p>
            <p className="about-hero-subtitle secondary">
              It is designed as a space where ideas can move fluidly between
              labs, classrooms, and communities – supported by shared
              infrastructure, structured funding, and collaborative practices.
            </p>

            <div className="about-hero-ctas">
              <Link to="/research" className="btn btn-primary">
                Explore Research Themes
              </Link>
              <Link to="/funding" className="btn btn-secondary">
                Learn about Funding
              </Link>
            </div>
          </div>

          <aside
            ref={heroInfoRef}
            className={`about-hero-info card reveal-section ${
              heroInfoVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="about-hero-info-title">What is ACT?</h3>
            <p className="about-hero-info-text">
              ACT (Applied Cognition &amp; Technology) brings together people
              who care about how humans think, feel, learn, and act in the
              world – and how technology can be used responsibly to support
              them.
            </p>
            <ul className="about-hero-bullets">
              <li>Multidisciplinary faculty and students</li>
              <li>Shared labs, studios, and testbeds</li>
              <li>Internal funding and structured processes</li>
              <li>Focus on societal questions, not just tools</li>
            </ul>
            <p className="about-hero-info-link">
              <Link to="/processes" className="link-animated">
                See how ACT projects are run
              </Link>
            </p>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section about-main">
        <div className="container">
          {/* Mission / Vision / Values */}
          <section
            ref={missionRef}
            className={`about-block about-block-band reveal-section ${
              missionVisible ? "is-visible" : ""
            }`}
          >
            <div className="about-block-header">
              <h2 className="about-block-title">Mission, Vision &amp; Values</h2>
              <p className="about-block-subtitle">
                A shared mission keeps ACT grounded even as projects and
                technologies evolve.
              </p>
            </div>

            <div className="about-mvv-grid">
              <article className="about-mvv-card card">
                <h3>Mission</h3>
                <p>
                  To create a collaborative environment where technology and
                  human sciences come together to design, test, and evaluate
                  interventions that improve people’s lived experiences.
                </p>
              </article>

              <article className="about-mvv-card card">
                <h3>Vision</h3>
                <p>
                  To become a recognised hub for applied cognition and
                  technology, where ideas seamlessly move from concept to
                  prototype to real-world impact in health, education, and
                  sustainability.
                </p>
              </article>

              <article className="about-mvv-card card">
                <h3>Values</h3>
                <ul>
                  <li>Interdisciplinarity by design, not by accident.</li>
                  <li>Ethics, inclusion, and care as first principles.</li>
                  <li>Openness to iteration, critique, and learning.</li>
                  <li>Respect for human complexity and context.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Origin / Timeline */}
          <section
            ref={originRef}
            className={`about-block reveal-section ${
              originVisible ? "is-visible" : ""
            }`}
          >
            <div className="about-block-header">
              <h2 className="about-block-title">How the ACT Centre Started</h2>
              <p className="about-block-subtitle">
                The centre emerged from a series of conversations, design
                meetings, and ideation sessions that brought together faculty
                from different disciplines.
              </p>
            </div>

            <div className="about-timeline">
              <div className="about-timeline-item">
                <div className="about-timeline-dot" />
                <div className="about-timeline-content">
                  <h3>Initial Conversations &amp; Concept Notes</h3>
                  <p>
                    Faculty from multiple departments began outlining the need
                    for a shared space to work on cognition, technology, and
                    society – collecting early ideas and use cases.
                  </p>
                </div>
              </div>

              <div className="about-timeline-item">
                <div className="about-timeline-dot" />
                <div className="about-timeline-content">
                  <h3>Core Group &amp; Ideation Meetings</h3>
                  <p>
                    A core group of faculty was formed, initial meetings were
                    held to define themes, infrastructure requirements, and
                    processes for funding and evaluation.
                  </p>
                </div>
              </div>

              <div className="about-timeline-item">
                <div className="about-timeline-dot" />
                <div className="about-timeline-content">
                  <h3>Formalisation of Processes</h3>
                  <p>
                    The project approval flow, financial assistance guidelines,
                    recruitment process for research staff, and evaluation
                    matrix were drafted and refined.
                  </p>
                </div>
              </div>

              <div className="about-timeline-item">
                <div className="about-timeline-dot" />
                <div className="about-timeline-content">
                  <h3>Launch &amp; First Calls</h3>
                  <p>
                    With the initial governance, infrastructure, and processes
                    in place, ACT began planning its first calls for proposals
                    and pilot projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Governance & Structure */}
          <section
            ref={structureRef}
            className={`about-block about-block-soft reveal-section ${
              structureVisible ? "is-visible" : ""
            }`}
          >
            <div className="about-block-header">
              <h2 className="about-block-title">Governance &amp; Structure</h2>
              <p className="about-block-subtitle">
                Clear governance and structured processes ensure that ACT
                remains transparent, fair, and aligned with institutional goals.
              </p>
            </div>

            <div className="about-structure-grid">
              <article className="about-structure-card card">
                <h3>Core Leadership</h3>
                <p>
                  The centre is guided by a core leadership team that oversees
                  strategic direction, approves calls, and monitors impact.
                </p>
                <p className="about-structure-note">
                  Details of the leadership team and committees will be listed
                  on the People page.
                </p>
                <p className="about-structure-link">
                  <Link to="/people" className="link-animated">
                    Meet the people behind ACT
                  </Link>
                </p>
              </article>

              <article className="about-structure-card card">
                <h3>Evaluation &amp; Advisory</h3>
                <p>
                  A dedicated group reviews proposals using the ACT evaluation
                  matrix, provides feedback, and may invite external experts
                  where needed.
                </p>
                <ul>
                  <li>Structured scoring and qualitative comments</li>
                  <li>Conflict-of-interest safeguards</li>
                  <li>Transparent communication to applicants</li>
                </ul>
              </article>

              <article className="about-structure-card card">
                <h3>Operations &amp; Labs</h3>
                <p>
                  Operations teams coordinate lab access, equipment, finances,
                  and reporting so that researchers can focus on their work.
                </p>
                <p className="about-structure-link">
                  <Link to="/facilities" className="link-animated">
                    Explore labs &amp; facilities
                  </Link>
                </p>
              </article>
            </div>
          </section>

          {/* How we work */}
          <section
            ref={howRef}
            className={`about-block reveal-section ${
              howVisible ? "is-visible" : ""
            }`}
          >
            <div className="about-block-header">
              <h2 className="about-block-title">How ACT Projects Work</h2>
              <p className="about-block-subtitle">
                ACT is intentionally process-driven so that projects remain
                accountable and teams get the support they need.
              </p>
            </div>

            <div className="about-how-grid">
              <article className="about-how-card card">
                <h3>From Idea to Proposal</h3>
                <p>
                  Teams start from societal questions, use ACT ideation notes
                  and sandpit sessions to shape ideas, then prepare formal
                  proposals using official templates.
                </p>
                <p className="about-how-link">
                  <Link to="/resources" className="link-animated">
                    Go to Resources &amp; Templates
                  </Link>
                </p>
              </article>

              <article className="about-how-card card">
                <h3>Implementation &amp; Reporting</h3>
                <p>
                  Approved projects follow the ACT implementation process –
                  recruitment, procurement, regular check-ins, and final
                  reporting with timesheets and documentation.
                </p>
              </article>

              <article className="about-how-card card">
                <h3>Impact &amp; Public Engagement</h3>
                <p>
                  Wherever possible, ACT encourages teams to share tools,
                  datasets, and stories through open events, exhibitions, and
                  outreach.
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
