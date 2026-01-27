import React from "react";
import "./People.css";
import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ==========================================
   DIRECTORY DATA
========================================== */

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

/* ==========================================
   COMPONENT
========================================== */

const People = () => {
  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [overviewRef, overviewVisible] = useRevealOnScroll();
  const [directoryRef, directoryVisible] = useRevealOnScroll();
  const [rolesRef, rolesVisible] = useRevealOnScroll();

  return (
    <main className="people-page" id="people">
      {/* ================= HERO ================= */}
      <section
        className="section people-hero section--bg-campus"
        role="region"
        aria-label="People at ACT Centre"
      >
        <img
          src="/media/people.jpeg"
          alt=""
          aria-hidden="true"
          className="people-hero-bg"
        />

        <div className="people-hero-overlay" aria-hidden />

        <div className="container people-hero-layout">
          <div
            ref={heroTextRef}
            className={`people-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <h1 className="people-hero-title">People at the ACT Centre</h1>

            <p className="people-hero-subtitle">
              The ACT Centre is driven by academic leadership, faculty, and
              researchers working across disciplines to advance
              transdisciplinary research.
            </p>

            <div className="people-hero-ctas">
              <Link to="/research" className="btn btn-primary">
                Explore Research Themes
              </Link>
              <Link to="/funding" className="btn btn-secondary">
                Funding & Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="section people-main">
        <div className="container">
          {/* OVERVIEW */}
          <section
            ref={overviewRef}
            className={`people-block people-block-band reveal-section ${
              overviewVisible ? "is-visible" : ""
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
                <h3>Core Leadership & Faculty</h3>
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
                <h3>Research Scholars & Associates</h3>
                <p>
                  Conduct studies, build prototypes, analyse data, and support
                  project execution.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Operations & Support</h3>
                <p>
                  Coordinate facilities, funding processes, and administrative
                  workflows.
                </p>
              </article>
            </div>
          </section>

          {/* DIRECTORY */}
          <section
            ref={directoryRef}
            className={`people-block people-block-soft reveal-section ${
              directoryVisible ? "is-visible" : ""
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

          {/* JOIN */}
          <section
            ref={rolesRef}
            className={`people-block reveal-section ${
              rolesVisible ? "is-visible" : ""
            }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">Engaging with ACT</h2>
              <p className="people-block-subtitle">
                Opportunities to collaborate, contribute, and participate in
                ACT initiatives.
              </p>
            </div>

            <div className="people-join-grid">
              <article className="people-join-card card">
                <h3>Students</h3>
                <p>
                  Participate through funded projects, internships, and
                  research-driven learning opportunities.
                </p>
                <Link to="/funding" className="link-animated">
                  Student opportunities
                </Link>
              </article>

              <article className="people-join-card card">
                <h3>Faculty & Researchers</h3>
                <p>
                  Propose and lead projects aligned with ACT research themes and
                  calls.
                </p>
                <Link to="/research" className="link-animated">
                  Research directions
                </Link>
              </article>

              <article className="people-join-card card">
                <h3>External Partners</h3>
                <p>
                  Explore collaborations with industry, government, and civil
                  society.
                </p>
                <Link to="/contact" className="link-animated">
                  Contact ACT
                </Link>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default People;
