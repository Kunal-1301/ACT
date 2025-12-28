import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ======================================================
   STATIC CONTENT
   ====================================================== */

const timelineItems = [
  {
    title: "Initial Conversations & Concept Notes",
    text:
      "Faculty across departments identified the need for a shared institutional framework to support research at the intersection of cognition, technology, and society.",
  },
  {
    title: "Core Group & Ideation Meetings",
    text:
      "A core faculty group defined priority themes, infrastructure needs, and principles for funding, evaluation, and collaboration.",
  },
  {
    title: "Formalisation of Processes",
    text:
      "Project approval workflows, financial guidelines, recruitment processes, and evaluation criteria were developed and refined.",
  },
  {
    title: "Launch & First Calls",
    text:
      "With governance and infrastructure in place, ACT prepared its first calls for proposals and pilot research projects.",
  },
];

const structureCards = [
  {
    title: "Core Leadership",
    body:
      "A core leadership team provides strategic direction, approves calls for proposals, and oversees the overall functioning of the centre.",
    note:
      "Details of leadership roles and committees will be listed on the People page.",
    link: { to: "/people", text: "Meet the ACT leadership and teams" },
  },
  {
    title: "Evaluation & Advisory",
    body:
      "Proposals are reviewed using a structured evaluation framework, with feedback provided to applicants. External expertise may be invited where appropriate.",
    list: [
      "Structured scoring and qualitative assessment",
      "Conflict-of-interest safeguards",
      "Transparent communication of outcomes",
    ],
  },
  {
    title: "Operations & Labs",
    body:
      "Operations teams manage shared facilities, equipment access, financial workflows, and reporting requirements, enabling researchers to focus on their work.",
    link: { to: "/facilities", text: "Explore labs & shared facilities" },
  },
];

const howCards = [
  {
    title: "From Idea to Proposal",
    text:
      "Teams begin with societally relevant questions, refine ideas through cross-disciplinary discussion, and prepare proposals using ACT templates and guidelines.",
  },
  {
    title: "Implementation & Reporting",
    text:
      "Approved projects follow defined processes for recruitment, procurement, progress review, and final reporting, in line with institute norms.",
  },
  {
    title: "Impact & Engagement",
    text:
      "Where appropriate, ACT encourages dissemination through publications, events, tools, and public or policy-facing engagement.",
  },
];

/* ======================================================
   COMPONENT
   ====================================================== */

const About = () => {
  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [missionRef, missionVisible] = useRevealOnScroll();
  const [originRef, originVisible] = useRevealOnScroll();
  const [structureRef, structureVisible] = useRevealOnScroll();
  const [howRef, howVisible] = useRevealOnScroll();

  return (
    <main className="about-page" id="about">
      {/* ================= HERO ================= */}
      <section
        className="section about-hero section--bg-campus"
        role="region"
        aria-label="About the ACT Centre"
      >
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
              The ACT Centre is a transdisciplinary research initiative at{" "}
              <strong>Thapar Institute of Engineering and Technology</strong>,
              bringing together engineering, cognitive science, social sciences,
              and the humanities to address complex real-world challenges.
            </p>

            <p className="about-hero-subtitle secondary">
              ACT supports research questions that cannot be effectively
              addressed within a single discipline, through shared
              infrastructure, structured funding, and collaborative processes.
            </p>

            <div className="about-hero-ctas">
              <Link to="/research" className="btn btn-primary">
                Explore Research Themes
              </Link>
              <Link to="/funding" className="btn btn-secondary">
                View Funding Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
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
                A clear mission anchors ACT’s work across projects and
                disciplines.
              </p>
            </div>

            <div className="about-mvv-grid">
              <article className="about-mvv-card card">
                <h3>Mission</h3>
                <p>
                  To enable rigorous, collaborative research that integrates
                  technological and human sciences to generate academic and
                  societal value.
                </p>
              </article>

              <article className="about-mvv-card card">
                <h3>Vision</h3>
                <p>
                  To establish ACT as a recognised hub for applied cognition and
                  technology within the institute and beyond.
                </p>
              </article>

              <article className="about-mvv-card card">
                <h3>Values</h3>
                <ul>
                  <li>Collaboration across disciplines by design.</li>
                  <li>Academic rigor combined with real-world relevance.</li>
                  <li>Ethical responsibility, inclusion, and transparency.</li>
                  <li>Openness to critique, iteration, and learning.</li>
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
                How the ACT Centre Evolved
              </h2>
              <p className="about-block-subtitle">
                ACT emerged through a structured process of planning and
                cross-departmental collaboration.
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
                ACT operates through defined roles and processes to ensure
                fairness, accountability, and institutional alignment.
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
                A structured lifecycle supports projects from early ideas to
                completion.
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
