import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const timelineItems = [
  {
    title: "Initial Conversations & Concept Notes",
    text: "Faculty from multiple departments began outlining the need for a shared space to work on cognition, technology, and society – collecting early ideas and use cases.",
  },
  {
    title: "Core Group & Ideation Meetings",
    text: "A core group of faculty was formed; meetings defined themes, infrastructure requirements, and processes for funding and evaluation.",
  },
  {
    title: "Formalisation of Processes",
    text: "Project approval flow, financial assistance guidelines, recruitment process for research staff, and evaluation matrix were drafted and refined.",
  },
  {
    title: "Launch & First Calls",
    text: "With governance, infrastructure, and processes in place, ACT planned its first calls for proposals and pilot projects.",
  },
];

const structureCards = [
  {
    title: "Core Leadership",
    body: "The centre is guided by a core leadership team that oversees strategic direction, approves calls, and monitors impact.",
    note: "Details of the leadership team and committees will be listed on the People page.",
    link: { to: "/people", text: "Meet the people behind ACT" },
  },
  {
    title: "Evaluation & Advisory",
    body: "A group reviews proposals using the ACT evaluation matrix, provides feedback, and may invite external experts where needed.",
    list: [
      "Structured scoring and qualitative comments",
      "Conflict-of-interest safeguards",
      "Transparent communication to applicants",
    ],
  },
  {
    title: "Operations & Labs",
    body: "Operations teams coordinate lab access, equipment, finances, and reporting so that researchers can focus on their work.",
    link: { to: "/facilities", text: "Explore labs & facilities" },
  },
];

const howCards = [
  {
    title: "From Idea to Proposal",
    text: "Teams start from societal questions, use ACT ideation notes and sandpit sessions to shape ideas, then prepare formal proposals using official templates.",
    link: { to: "/resources", text: "Go to Resources & Templates" },
  },
  {
    title: "Implementation & Reporting",
    text: "Approved projects follow the ACT implementation process – recruitment, procurement, regular check-ins, and final reporting with timesheets and documentation.",
  },
  {
    title: "Impact & Public Engagement",
    text: "ACT encourages teams to share tools, datasets, and stories through open events, exhibitions, and outreach where appropriate.",
  },
];

const About = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroInfoRef, isVisible: heroInfoVisible } = useRevealOnScroll();
  const { ref: missionRef, isVisible: missionVisible } = useRevealOnScroll();
  const { ref: originRef, isVisible: originVisible } = useRevealOnScroll();
  const { ref: structureRef, isVisible: structureVisible } =
    useRevealOnScroll();
  const { ref: howRef, isVisible: howVisible } = useRevealOnScroll();

  return (
    <main className="about-page" id="about">
      {/* HERO */}
      <section
        className="section about-hero section--bg-campus"
        role="region"
        aria-label="About the ACT centre hero"
      >
        {/* hero background image (same approach as Home for reliability) */}
        <img
          src="/media/hero-campus-1600.jpg"
          alt=""
          aria-hidden="true"
          className="about-hero-bg"
          onError={(e) => {
            if (e.currentTarget.src.endsWith("hero-campus-1600.jpg")) {
              e.currentTarget.src = "/media/hero-campus-1600.JPG";
            }
          }}
        />
        <div className="about-hero-overlay" aria-hidden />

        <div className="container about-hero-layout">
          <div
            ref={heroTextRef}
            className={`about-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
           
            <h1 className="about-hero-title">About the ACT Centre</h1>
            <p className="about-hero-subtitle">
              The ACT Centre is a multidisciplinary initiative that connects{" "}
              <strong>engineering</strong>, <strong>cognitive science</strong>,{" "}
              <strong>arts &amp; humanities</strong>, and{" "}
              <strong>social sciences</strong> to work on real-world questions
              around health, cognition, environment, and learning.
            </p>

            <p className="about-hero-subtitle secondary">
              A space where ideas move fluidly between labs, classrooms and
              communities — supported by shared infrastructure, structured
              funding, and collaborative practices.
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
            className={`about-hero-info about-hero-info--image card reveal-section ${
              heroInfoVisible ? "is-visible" : ""
            }`}
            aria-labelledby="what-is-act"
          >
            <div className="about-hero-info-content">
              <h3 id="what-is-act" className="about-hero-info-title">
                What is ACT?
              </h3>

              <p className="about-hero-info-text">
                ACT (Applied Cognition &amp; Technology) brings together people
                who care about how humans think, learn and act in the world —
                and how technology can be used responsibly to support them.
              </p>

              <ul className="about-hero-bullets" aria-hidden>
                <li>Multidisciplinary faculty and students</li>
                <li>Shared labs, studios and testbeds</li>
                <li>Internal funding and structured processes</li>
                <li>Focus on societal questions, not just tools</li>
              </ul>

              <p className="about-hero-info-link">
                <Link to="/processes" className="link-animated">
                  See how ACT projects are run
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section about-main" aria-labelledby="mission-heading">
        <div className="container">
          {/* Mission / Vision / Values */}
          <section
            id="mission"
            ref={missionRef}
            className={`about-block about-block-band reveal-section ${
              missionVisible ? "is-visible" : ""
            }`}
          >
            <div className="about-block-header">
              <h2 id="mission-heading" className="about-block-title">
                Mission, Vision &amp; Values
              </h2>
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
                  technology, where ideas move from concept to prototype to
                  real-world impact in health, education, and sustainability.
                </p>
              </article>

              <article className="about-mvv-card card">
                <h3>Values</h3>
                <ul>
                  <li>Interdisciplinarity by design, not by accident.</li>
                  <li>Ethics, inclusion, and care as first principles.</li>
                  <li>Openness to iteration, critique and learning.</li>
                  <li>Respect for human complexity and context.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Origin / Timeline */}
          <section
            id="origin"
            ref={originRef}
            className={`about-block reveal-section ${
              originVisible ? "is-visible" : ""
            }`}
            aria-labelledby="origin-heading"
          >
            <div className="about-block-header">
              <h2 id="origin-heading" className="about-block-title">
                How the ACT Centre Started
              </h2>
              <p className="about-block-subtitle">
                The centre emerged from a series of conversations, design
                meetings and ideation sessions that brought together faculty
                from different disciplines.
              </p>
            </div>

            <div className="about-timeline" role="list">
              {timelineItems.map((it, idx) => (
                <div key={idx} className="about-timeline-item" role="listitem">
                  <div className="about-timeline-dot" aria-hidden />
                  <div className="about-timeline-content">
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Governance & Structure */}
          <section
            id="structure"
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
              {structureCards.map((card, i) => (
                <article key={i} className="about-structure-card card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {card.note && (
                    <p className="about-structure-note">{card.note}</p>
                  )}
                  {card.list && (
                    <ul>
                      {card.list.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {card.link && (
                    <p className="about-structure-link">
                      <Link to={card.link.to} className="link-animated">
                        {card.link.text}
                      </Link>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* How we work */}
          <section
            id="how"
            ref={howRef}
            className={`about-block reveal-section ${
              howVisible ? "is-visible" : ""
            }`}
            aria-labelledby="how-heading"
          >
            <div className="about-block-header">
              <h2 id="how-heading" className="about-block-title">
                How ACT Projects Work
              </h2>
              <p className="about-block-subtitle">
                ACT is intentionally process-driven so that projects remain
                accountable and teams get the support they need.
              </p>
            </div>

            <div className="about-how-grid">
              {howCards.map((c, i) => (
                <article key={i} className="about-how-card card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  {c.link && (
                    <p className="about-how-link">
                      <Link to={c.link.to} className="link-animated">
                        {c.link.text}
                      </Link>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
