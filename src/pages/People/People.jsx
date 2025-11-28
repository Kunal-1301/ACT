import React, { useState } from "react";
import "./People.css";
import { Link } from "react-router-dom";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const groups = [
  "All",
  "Core Faculty",
  "Affiliated Faculty",
  "Research Fellows",
  "PhD Scholars",
  "Staff",
];

const peopleData = [
  // Core Faculty
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
    interests: "Digital health, behaviour change, human–computer interaction.",
  },
  // Affiliated Faculty
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
    interests: "Ethics, social impact, policy, qualitative methods.",
  },
  // Research Fellows
  {
    name: "Name Placeholder 5",
    role: "Research Fellow",
    department: "ACT Centre",
    group: "Research Fellows",
    interests: "Serious games, immersive learning environments.",
  },
  // PhD Scholars
  {
    name: "Name Placeholder 6",
    role: "PhD Scholar",
    department: "Department / Centre",
    group: "PhD Scholars",
    interests: "Energy dashboards, behaviour change, visual analytics.",
  },
  {
    name: "Name Placeholder 7",
    role: "PhD Scholar",
    department: "Department / Centre",
    group: "PhD Scholars",
    interests: "Digital companions, mental health, conversational systems.",
  },
  // Staff
  {
    name: "Name Placeholder 8",
    role: "Centre Coordinator",
    department: "ACT Centre",
    group: "Staff",
    interests: "Operations, coordination, stakeholder engagement.",
  },
];

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
      : peopleData.filter((person) => person.group === activeGroup);

  return (
    <div className="people-page" id="people">
      {/* HERO */}
      <section className="section section--bg-campus people-hero">
        <div className="container people-hero-layout">
          <div
            ref={heroTextRef}
            className={`people-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow people-hero-eyebrow">People</p>
            <h1 className="people-hero-title">People at the ACT Centre</h1>
            <p className="people-hero-subtitle">
              ACT is built around people –{" "}
              <strong>faculty, researchers, students, and staff</strong> – who
              are willing to work across disciplinary lines and learn from each
              other.
            </p>
            <p className="people-hero-subtitle secondary">
              This page will grow into an up-to-date directory. For now, it
              sketches the structure of the community and how different roles
              connect.
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

          <aside
            ref={heroInfoRef}
            className={`people-hero-info card reveal-section ${
              heroInfoVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="people-hero-info-title">A Multidisciplinary Community</h3>
            <p className="people-hero-info-text">
              ACT brings together people who are curious about how humans think,
              feel, and act – and how technology can help or harm. Projects are
              intentionally built with mixed teams.
            </p>
            <ul className="people-hero-bullets">
              <li>Core faculty driving the centre’s strategy</li>
              <li>Affiliated faculty from different departments</li>
              <li>Research fellows, PhD scholars, and students</li>
              <li>Operations staff and lab coordinators</li>
            </ul>
            <p className="people-hero-info-link">
              <Link to="/about" className="link-animated">
                Learn more about how ACT is structured
              </Link>
            </p>
          </aside>
        </div>
      </section>

      {/* MAIN */}
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
                Different roles work together across projects. This overview
                gives a quick sense of who does what.
              </p>
            </div>

            <div className="people-overview-grid">
              <article className="people-overview-card card">
                <h3>Core Faculty</h3>
                <p>
                  Lead the centre’s vision, shape calls and evaluation, and
                  often serve as PIs on flagship projects.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Affiliated Faculty</h3>
                <p>
                  Bring disciplinary depth from across departments – co-leading
                  projects, mentoring students, and advising on methods.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Researchers &amp; Students</h3>
                <p>
                  Research fellows, PhD scholars, and student teams who build,
                  test, and iterate prototypes, experiments, and studies.
                </p>
              </article>

              <article className="people-overview-card card">
                <h3>Operations &amp; Support</h3>
                <p>
                  Staff who look after processes, labs, finances, and
                  day-to-day coordination so projects can run smoothly.
                </p>
              </article>
            </div>
          </section>

          {/* DIRECTORY + FILTERS */}
          <section
            ref={directoryRef}
            className={`people-block people-block-soft reveal-section ${
              directoryVisible ? "is-visible" : ""
            }`}
          >
            <div className="people-block-header people-block-header--tight">
              <div>
                <h2 className="people-block-title">Directory (Skeleton View)</h2>
                <p className="people-block-subtitle">
                  Below is a placeholder structure for the ACT directory. As
                  information is finalised, this section can be populated with
                  real names, photos, and links.
                </p>
              </div>
            </div>

            {/* Filter pills */}
            <div className="people-filters">
              {groups.map((group) => (
                <button
                  key={group}
                  type="button"
                  className={`people-filter-pill ${
                    activeGroup === group ? "is-active" : ""
                  }`}
                  onClick={() => setActiveGroup(group)}
                >
                  {group}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="people-grid">
              {filteredPeople.map((person, index) => (
                <article
                  key={`${person.name}-${index}`}
                  className="people-card card"
                >
                  <div className="people-card-header">
                    <div className="people-avatar-placeholder">
                      <span className="people-avatar-initial">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                    <div className="people-card-main">
                      <h3 className="people-name">{person.name}</h3>
                      <p className="people-role">
                        {person.role} · {person.department}
                      </p>
                    </div>
                    <span className="people-badge">{person.group}</span>
                  </div>
                  <p className="people-interests">{person.interests}</p>
                  <p className="people-placeholder-note">
                    More details (email, webpage, key projects) will appear here
                    as the directory is populated.
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* HOW TO GET INVOLVED */}
          <section
            ref={rolesRef}
            className={`people-block reveal-section ${
              rolesVisible ? "is-visible" : ""
            }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">Joining the ACT Community</h2>
              <p className="people-block-subtitle">
                As the centre grows, there will be multiple entry points for
                students, faculty, and external collaborators.
              </p>
            </div>

            <div className="people-join-grid">
              <article className="people-join-card card">
                <h3>Students</h3>
                <p>
                  Watch for ACT calls, project openings, and studio-style
                  courses. You can contribute as project team members, research
                  assistants, or interns.
                </p>
                <p className="people-join-link">
                  <Link to="/funding" className="link-animated">
                    Explore project calls &amp; student grants
                  </Link>
                </p>
              </article>

              <article className="people-join-card card">
                <h3>Faculty &amp; Researchers</h3>
                <p>
                  Participate in ideation sessions, co-design calls, or lead
                  projects that align with ACT themes. New affiliations can be
                  added as the centre evolves.
                </p>
                <p className="people-join-link">
                  <Link to="/research" className="link-animated">
                    See current research directions
                  </Link>
                </p>
              </article>

              <article className="people-join-card card">
                <h3>External Partners</h3>
                <p>
                  ACT will gradually open up collaboration channels with
                  industry, government, and community partners for co-created
                  projects.
                </p>
                <p className="people-join-link">
                  <Link to="/contact" className="link-animated">
                    Get in touch with the centre
                  </Link>
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default People;
