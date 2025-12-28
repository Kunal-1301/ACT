import React, { useState } from "react";
import "./People.css";
import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ==========================================
   GROUPS
========================================== */
const groups = [
  "Core Faculty",
  "Affiliated Faculty",
  "Research Faculty",
  "Research Scholars",
];

/* ==========================================
   DIRECTORY DATA (placeholder)
========================================== */
const peopleData = [
  {
    name: "Dr. Efthymios Constantinides",
    role: "Chair",
    department: "",
    group: "Core Faculty",
    interests: "ACT Centre Professor, TSLAS.",
    avatar: "/media/EC.jpg",
  },
  {
    name: "Dr. Vinay Kumar",
    role: "Dean",
    department: "",
    group: "Core Faculty",
    interests: "TSLAS Professor, TIET.",
    avatar: "/media/Vinay.jpeg",
  },
  {
    name: "Dr. Rahul Upadhyay",
    role: "Head",
    department: "",
    group: "Core Faculty",
    interests: "ACT Centre Associate Professor, TIET.",
    avatar: "/media/rahul.jpeg",
  },
  {
    name: "Dr. T. Brandon Evans",
    role: "Coordinator",
    department: "",
    group: "Core Faculty",
    interests: "ACT Centre Associate Professor, TSLAS.",
    avatar: "/media/brandon.jpg",
  },
  {
    name: "Dr. Tanvi Dovedi",
    role: "Research Faculty",
    department: "ACT Centre",
    group: "Research Faculty",
    interests: "",
    avatar: "/media/tanvi.jpeg",
  },
  {
    name: "Dr. Manvir Kaur",
    role: "Research Faculty",
    department: "",
    group: "Research Faculty",
    interests: "",
    avatar: "/media/tanvi.jpeg",
  },
  {
    name: "Ms. Himanshi Upadhyay",
    role: "Research Scholar",
    department: "",
    group: "Research Scholars",
    interests: "",
    avatar: "/media/tanvi.jpeg",
  },
  {
    name: "Mr. Kunal Gupta",
    role: "",
    department: "",
    group: "",
    interests: "",
    avatar: "/media/",
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const People = () => {
  const [activeGroup, setActiveGroup] = useState("All");

  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */
  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [overviewRef, overviewVisible] = useRevealOnScroll();
  const [directoryRef, directoryVisible] = useRevealOnScroll();
  const [rolesRef, rolesVisible] = useRevealOnScroll();

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
          <div
            ref={heroTextRef}
            className={`people-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <h1 className="people-hero-title">People at the ACT Centre</h1>

            <p className="people-hero-subtitle">
              ACT is built around people —{" "}
              <strong>faculty, researchers, students, and staff</strong> — who
              work across disciplines to explore cognition, technology, and
              society.
            </p>

            <p className="people-hero-subtitle secondary">
              {/* This is a placeholder directory structure; as profiles are
              finalised, photos, bios, and project links will be added. */}
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
                  Fellows, PhD scholars & students who build prototypes, conduct
                  studies, and analyze data.
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
              <h2 className="people-block-title">Directory</h2>
              <p className="people-block-subtitle">
                
              </p>
            </div>

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

            <div className="people-grid">
              {filteredPeople.map((p, i) => (
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
                      <p className="people-role">
                        {p.role} · {p.department}
                      </p>
                    </div>

                    <span className="people-badge">{p.group}</span>
                  </div>

                  <p className="people-interests">{p.interests}</p>

                  <p className="people-placeholder-note">
                    
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
