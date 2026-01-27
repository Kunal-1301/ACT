import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "../People/People.css"; // Import People styles
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ======================================================
   PEOPLE DATA
   ====================================================== */

const peopleData = [
  {
    name: "Dr. Efthymios Constantinides",
    role: "Chair",
    affiliation: "ACT Centre Professor, TSLAS",
    group: "Core Faculty",
    avatar: "/media/EC.jpg",
  },
  {
    name: "Dr. Vinay Kumar",
    role: "Dean",
    affiliation: "Professor, TSLAS, TIET",
    group: "Core Faculty",
    avatar: "/media/Vinay.jpeg",
  },
  {
    name: "Dr. Rahul Upadhyay",
    role: "Head",
    affiliation: "ACT Centre Associate Professor, TIET",
    group: "Core Faculty",
    avatar: "/media/rahul.jpeg",
  },
  {
    name: "Dr. T. Brandon Evans",
    role: "Coordinator",
    affiliation: "ACT Centre Associate Professor, TSLAS",
    group: "Core Faculty",
    avatar: "/media/brandon.jpg",
  },
  {
    name: "Dr. Tanvi Dovedi",
    role: "Research Faculty",
    affiliation: "ACT Centre",
    group: "Research Faculty",
    avatar: "/media/tanvi.jpeg",
  },
  {
    name: "Dr. Manvir Kaur",
    role: "Research Faculty",
    affiliation: "ACT Centre",
    group: "Research Faculty",
    avatar: "/media/manvir.jpg",
  },
  {
    name: "Ms. Himanshi Upadhyay",
    role: "Research Scholar",
    affiliation: "ACT Centre",
    group: "Research Scholars",
    avatar: "/media/himanshi.jpeg",
  },
  {
    name: "Mr. Kunal Gupta",
    role: "Research Associate",
    affiliation: "ACT Centre",
    group: "Research Team",
    avatar: "",
  },
];

/* ======================================================
   STATIC CONTENT
   ====================================================== */


const structureCards = [
  {
    title: "Core Leadership",
    body:
      "A core leadership team provides strategic direction, approves calls for proposals, and oversees the overall functioning of the centre.",
    note:
      "Details of leadership roles and committees are listed in the Directory section below.",
    link: { to: "#directory", text: "View ACT directory" },
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
  const [structureRef, structureVisible] = useRevealOnScroll();
  const [howRef, howVisible] = useRevealOnScroll();
  const [rolesRef, rolesVisible] = useRevealOnScroll();
  const [directoryRef, directoryVisible] = useRevealOnScroll();

  return (
    <main className="about-page" id="about">
      {/* ================= HERO ================= */}
      <section
        className="section about-hero section--bg-campus"
        role="region"
        aria-label="About the ACT Centre"
      >
        <img
          src="/media/about.jpg"
          alt=""
          aria-hidden="true"
          className="about-hero-bg"
        />

        <div className="about-hero-overlay" aria-hidden />

        <div className="container about-hero-layout">
          <div
            ref={heroTextRef}
            className={`about-hero-text reveal-section ${heroTextVisible ? "is-visible" : ""
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
            className={`about-block about-block-band reveal-section ${missionVisible ? "is-visible" : ""
              }`}
          >
            <div className="about-block-header">
              <h2 id="mission-heading" className="about-block-title">
                Mission, Vision &amp; Values
              </h2>
              <p className="about-block-subtitle">

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

              <article className="about-mvv-card card card-centered">
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



          {/* Governance & Structure */}
          <section
            id="structure"
            ref={structureRef}
            className={`about-block about-block-soft reveal-section ${structureVisible ? "is-visible" : ""
              }`}
          >
            <div className="about-block-header">
              <h2 className="about-block-title">Governance &amp; Structure</h2>
              <p className="about-block-subtitle">

              </p>
            </div>

            <div className="about-structure-grid">
              {structureCards.map((card, i) => (
                <article key={i} className="about-structure-card card card-centered">
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
            className={`about-block reveal-section ${howVisible ? "is-visible" : ""
              }`}
            aria-labelledby="how-heading"
          >
            <div className="about-block-header">
              <h2 id="how-heading" className="about-block-title">
                How ACT Projects Work
              </h2>
              <p className="about-block-subtitle">

              </p>
            </div>

            <div className="about-how-grid">
              {howCards.map((c, i) => (
                <article key={i} className="about-how-card card card-centered">
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

          {/* People & Roles */}
          <section
            ref={rolesRef}
            className={`about-block about-block-band reveal-section ${rolesVisible ? "is-visible" : ""
              }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">People &amp; Roles</h2>
              <p className="people-block-subtitle">
                ACT brings together leadership, faculty, researchers, and
                scholars to support high-impact research and collaboration.
              </p>
            </div>

            <div className="people-overview-grid">
              <article className="people-overview-card card">
                <h3>Core Leadership &amp; Faculty</h3>
                <p>
                  Provide strategic direction, governance, and academic
                  leadership for the Centre.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Research Faculty</h3>
                <p>
                  Lead and contribute to funded projects, mentoring students and
                  advancing ACT research themes.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Research Scholars &amp; Associates</h3>
                <p>
                  Conduct studies, build prototypes, analyse data, and support
                  project execution.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Operations &amp; Support</h3>
                <p>
                  Coordinate facilities, funding processes, and administrative
                  workflows.
                </p>
              </article>
            </div>
          </section>

          {/* Directory */}
          <section
            id="directory"
            ref={directoryRef}
            className={`about-block about-block-soft reveal-section ${directoryVisible ? "is-visible" : ""
              }`}
          >
            <div className="people-block-header people-block-header--tight">
              <h2 className="people-block-title">Directory</h2>
            </div>

            <div className="people-grid">
              {peopleData.map((p, i) => (
                <article key={i} className="people-card card">
                  <div className="people-card-header">
                    {p.avatar ? (
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="people-avatar-img"
                      />
                    ) : (
                      <div className="people-avatar-placeholder">
                        {p.name.charAt(0)}
                      </div>
                    )}

                    <div className="people-card-main">
                      <h3 className="people-name">{p.name}</h3>
                      <p className="people-role">{p.role}</p>
                    </div>

                    <span className="people-badge">{p.group}</span>
                  </div>

                  <p className="people-interests">{p.affiliation}</p>
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
