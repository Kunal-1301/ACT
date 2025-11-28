import React, { useState } from "react";
import "./People.css";
import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ==========================================
   GROUPS
========================================== */
const groups = [
  "All",
  "Core Faculty",
  "Affiliated Faculty",
  "Research Fellows",
  "PhD Scholars",
  "Staff",
];

/* ==========================================
   DIRECTORY DATA (placeholder)
   Real images can be added later using:
   avatar: "/media/filename.jpg"
========================================== */
const peopleData = [
  {
    name: "Name Placeholder 1",
    role: "Core Faculty",
    department: "Department / Centre",
    group: "Core Faculty",
    interests: "Cognition, technology, learning, interdisciplinary design.",
  },
  {
    name: "Name Placeholder 2",
    role: "Core Faculty",
    department: "Department / Centre",
    group: "Core Faculty",
    interests: "Digital health, behaviour change, HCI.",
  },
  {
    name: "Name Placeholder 3",
    role: "Affiliated Faculty",
    department: "Engineering / Sciences",
    group: "Affiliated Faculty",
    interests: "Sensing, data analytics, applied AI.",
  },
  {
    name: "Name Placeholder 4",
    role: "Affiliated Faculty",
    department: "Humanities / Social Sciences",
    group: "Affiliated Faculty",
    interests: "Ethics, social impact, qualitative methods.",
  },
  {
    name: "Name Placeholder 5",
    role: "Research Fellow",
    department: "ACT Centre",
    group: "Research Fellows",
    interests: "Serious games, immersive learning.",
  },
  {
    name: "Name Placeholder 6",
    role: "PhD Scholar",
    department: "Department / Centre",
    group: "PhD Scholars",
    interests: "Dashboards, behaviour change, visualization.",
  },
  {
    name: "Name Placeholder 7",
    role: "PhD Scholar",
    department: "Department / Centre",
    group: "PhD Scholars",
    interests: "Digital companions, mental health, conversational AI.",
  },
  {
    name: "Name Placeholder 8",
    role: "Centre Coordinator",
    department: "ACT Centre",
    group: "Staff",
    interests: "Operations, coordination, engagement.",
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const People = () => {
  const [activeGroup, setActiveGroup] = useState("All");

  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroInfoRef, isVisible: heroInfoVisible } = useRevealOnScroll();
  const { ref: overviewRef, isVisible: overviewVisible } = useRevealOnScroll();
  const { ref: directoryRef, isVisible: directoryVisible } = useRevealOnScroll();
  const { ref: rolesRef, isVisible: rolesVisible } = useRevealOnScroll();

  const filteredPeople =
    activeGroup === "All"
      ? peopleData
      : peopleData.filter((p) => p.group === activeGroup);

  return (
    <main className="people-page" id="people">
      {/* ==========================================
         HERO SECTION
      ========================================== */}
      <section
        className="section people-hero section--bg-campus"
        role="region"
        aria-label="People at ACT Centre"
      >
        {/* Background image */}
        <img
          src="/media/hero-campus-1600.jpg"
          alt=""
          aria-hidden="true"
          className="people-hero-bg"
          onError={(e) => {
            if (e.currentTarget.src.endsWith("hero-campus-1600.jpg")) {
              e.currentTarget.src = "/media/hero-campus-1600.JPG";
            }
          }}
        />

        <div className="people-hero-overlay" aria-hidden />

        <div className="container people-hero-layout">
          {/* Left Text */}
          <div
            ref={heroTextRef}
            className={`people-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow people-hero-eyebrow">People</p>

            <h1 className="people-hero-title">People at the ACT Centre</h1>

            <p className="people-hero-subtitle">
              ACT is built around people —{" "}
              <strong>faculty, researchers, students, and staff</strong> — who
              work across disciplines to explore cognition, technology, and
              society.
            </p>

            <p className="people-hero-subtitle secondary">
              This is a placeholder directory structure; as profiles are
              finalised, photos, bios, and project links will be added.
            </p>

            <div className="people-hero-ctas">
              <Link to="/research" className="btn btn-primary">
                Explore Research Themes
              </Link>
              <Link to="/funding" className="btn btn-secondary">
                See how to join projects
              </Link>
            </div>
          </div>

          {/* Right Info Card */}
          <aside
            ref={heroInfoRef}
            className={`people-hero-info card reveal-section ${
              heroInfoVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="people-hero-info-title">
              A Multidisciplinary Community
            </h3>

            <p className="people-hero-info-text">
              ACT brings together people who are curious about how humans think,
              feel, and act — and how technology can support or complicate these
              processes.
            </p>

            <ul className="people-hero-bullets">
              <li>Core faculty shaping ACT’s strategy</li>
              <li>Affiliated faculty from many departments</li>
              <li>Research fellows, PhD scholars & students</li>
              <li>Operations, labs & support staff</li>
            </ul>

            <p className="people-hero-info-link">
              <Link to="/about" className="link-animated">
                Learn more about ACT's structure
              </Link>
            </p>
          </aside>
        </div>
      </section>

      {/* ==========================================
         MAIN CONTENT
      ========================================== */}
      <section className="section people-main">
        <div className="container">
          {/* OVERVIEW STRIP */}
          <section
            ref={overviewRef}
            className={`people-block people-block-band reveal-section ${
              overviewVisible ? "is-visible" : ""
            }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">People &amp; Roles</h2>
              <p className="people-block-subtitle">
                A quick overview of how the ACT Centre community is structured.
              </p>
            </div>

            <div className="people-overview-grid">
              <article className="people-overview-card card">
                <h3>Core Faculty</h3>
                <p>
                  Lead ACT’s vision, shape calls and evaluation, and guide
                  flagship projects.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Affiliated Faculty</h3>
                <p>
                  Bring disciplinary depth, co-lead projects, mentor students,
                  and advise methods.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Researchers &amp; Students</h3>
                <p>
                  Fellows, PhD scholars & students who build prototypes,
                  conduct studies, and analyze data.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Operations &amp; Support</h3>
                <p>
                  Staff who coordinate labs, finances, schedules & processes so
                  work runs smoothly.
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
              <h2 className="people-block-title">Directory (Placeholder)</h2>
              <p className="people-block-subtitle">
                Filters and structure are ready — this section will display real
                profiles once provided.
              </p>
            </div>

            {/* FILTERS */}
            <div className="people-filters">
              {groups.map((g) => (
                <button
                  key={g}
                  className={`people-filter-pill ${
                    activeGroup === g ? "is-active" : ""
                  }`}
                  onClick={() => setActiveGroup(g)}
                >
                  {g}
                </button>
              ))}
            </div>

            {/* GRID */}
            <div className="people-grid">
              {filteredPeople.map((p, i) => (
                <article key={i} className="people-card card">
                  <div className="people-card-header">
                    {/* Avatar: supports image OR initial */}
                    {p.avatar ? (
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="people-avatar-img"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="people-avatar-placeholder">
                        <span className="people-avatar-initial">
                          {p.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div className="people-card-main">
                      <h3 className="people-name">{p.name}</h3>
                      <p className="people-role">
                        {p.role} · {p.department}
                      </p>
                    </div>

                    <span className="people-badge">{p.group}</span>
                  </div>

                  <p className="people-interests">{p.interests}</p>

                  <p className="people-placeholder-note">
                    Details such as email, research areas, and publications will
                    be added later.
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* HOW TO JOIN */}
          <section
            ref={rolesRef}
            className={`people-block reveal-section ${
              rolesVisible ? "is-visible" : ""
            }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">Joining the ACT Community</h2>
              <p className="people-block-subtitle">
                Multiple pathways for students, faculty, and partners.
              </p>
            </div>

            <div className="people-join-grid">
              <article className="people-join-card card">
                <h3>Students</h3>
                <p>
                  Watch for ACT calls, project openings, and studio-style
                  courses. Opportunities for projects, internships, and RAs.
                </p>
                <p className="people-join-link">
                  <Link to="/funding" className="link-animated">
                    Student calls & grants
                  </Link>
                </p>
              </article>

              <article className="people-join-card card">
                <h3>Faculty &amp; Researchers</h3>
                <p>
                  Join ideation sessions, co-design calls, or lead projects that
                  align with ACT themes.
                </p>
                <p className="people-join-link">
                  <Link to="/research" className="link-animated">
                    Research directions
                  </Link>
                </p>
              </article>

              <article className="people-join-card card">
                <h3>External Partners</h3>
                <p>
                  ACT will gradually open collaboration channels for
                  industry–academic partnerships.
                </p>
                <p className="people-join-link">
                  <Link to="/contact" className="link-animated">
                    Contact the Centre
                  </Link>
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default People;
