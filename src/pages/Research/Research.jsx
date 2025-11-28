import React from "react";
import { Link } from "react-router-dom";
import "./Research.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Research = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroMediaRef, isVisible: heroMediaVisible } = useRevealOnScroll();
  const { ref: themesRef, isVisible: themesVisible } = useRevealOnScroll();
  const { ref: areasRef, isVisible: areasVisible } = useRevealOnScroll();
  const { ref: ongoingRef, isVisible: ongoingVisible } = useRevealOnScroll();
  const { ref: completedRef, isVisible: completedVisible } = useRevealOnScroll();
  const { ref: pubsRef, isVisible: pubsVisible } = useRevealOnScroll();
  const { ref: collabRef, isVisible: collabVisible } = useRevealOnScroll();
  const { ref: oppRef, isVisible: oppVisible } = useRevealOnScroll();

  return (
    <div className="research-page" id="research">
      {/* HERO – similar feel to Home hero */}
      <section className="section section--bg-tech research-hero">
        <div className="container research-hero-layout">
          <div
            ref={heroTextRef}
            className={`research-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow research-hero-eyebrow">Research</p>
            <h1 className="research-hero-title">Research at ACT Centre</h1>
            <p className="research-hero-subtitle">
              ACT Centre connects engineering, cognitive science, arts,
              humanities, and social sciences to work on{" "}
              <strong>health &amp; well-being</strong>,{" "}
              <strong>cognition</strong>,{" "}
              <strong>energy &amp; environment</strong>, and{" "}
              <strong>learning &amp; pedagogy</strong>. This page is your entry
              point into ACT themes, ideas, projects, and collaborations.
            </p>

            <div className="research-hero-ctas">
              <Link to="/funding" className="btn btn-primary">
                Explore Funding &amp; Calls
              </Link>
              <Link to="/resources" className="btn btn-secondary">
                View Templates &amp; Forms
              </Link>
            </div>

            {/* Quick nav chips inside hero */}
            <div className="research-quick-nav">
              <a href="#themes" className="research-chip">
                Research Themes
              </a>
              <a href="#areas" className="research-chip">
                Idea Clusters
              </a>
              <a href="#projects-ongoing" className="research-chip">
                Ongoing Projects
              </a>
              <a href="#projects-completed" className="research-chip">
                Completed Projects
              </a>
              <a href="#publications" className="research-chip">
                Publications
              </a>
              <a href="#collaborations" className="research-chip">
                Collaborations
              </a>
              <a href="#opportunities" className="research-chip">
                Opportunities
              </a>
            </div>
          </div>

          <aside
            ref={heroMediaRef}
            className={`research-hero-media card reveal-section ${
              heroMediaVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-hero-media-header">
              <p className="research-hero-media-label">ACT in one glance</p>
              <p className="research-hero-media-caption">
                A hub for experiments, prototypes, and ideas that move between
                lab, classroom, and community.
              </p>
            </div>
            <div className="research-hero-metrics">
              <div className="research-hero-metric">
                <span className="research-hero-metric-number">4</span>
                <span className="research-hero-metric-label">Core themes</span>
              </div>
              <div className="research-hero-metric">
                <span className="research-hero-metric-number">3+</span>
                <span className="research-hero-metric-label">
                  Labs &amp; testbeds
                </span>
              </div>
              <div className="research-hero-metric">
                <span className="research-hero-metric-number">Multi-</span>
                <span className="research-hero-metric-label">
                  disciplinary teams
                </span>
              </div>
            </div>
            <div className="research-hero-media-footer">
              <p>
                Start with an idea, shape it with others, and move it towards a
                funded project through ACT Centre calls.
              </p>
              <p className="research-hero-media-link">
                <Link to="/processes" className="link-animated">
                  See how the project flow works
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT BANDS */}
      <section className="section research-main">
        <div className="container">
          {/* Themes section */}
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
                High-level themes that emerged from ACT ideation. Each theme is
                intentionally broad and supports multiple projects and
                collaborations.
              </p>
            </div>

            <div className="research-theme-grid">
              <article className="research-theme-card card reveal-item">
                <p className="research-theme-tag">T1</p>
                <h4>Health &amp; Well-being</h4>
                <p>
                  Digital companions, serious games, and assistive
                  technologies that support mental and physical health,
                  especially for students and young adults.
                </p>
              </article>

              <article className="research-theme-card card reveal-item">
                <p className="research-theme-tag">T2</p>
                <h4>Cognition &amp; Behaviour</h4>
                <p>
                  Understanding attention, memory, learning, and decision
                  making through experiments, interactive tools, and data.
                </p>
              </article>

              <article className="research-theme-card card reveal-item">
                <p className="research-theme-tag">T3</p>
                <h4>Energy &amp; Environment</h4>
                <p>
                  Sensing, data, and visualisation to make energy and resource
                  use visible, and encourage low-carbon behaviours.
                </p>
              </article>

              <article className="research-theme-card card reveal-item">
                <p className="research-theme-tag">T4</p>
                <h4>Learning &amp; Pedagogy</h4>
                <p>
                  Games, simulations, and AI-supported feedback that reimagine
                  how people experience learning inside and outside classrooms.
                </p>
              </article>
            </div>
          </section>

          {/* Idea clusters / focus areas */}
          <section
            id="areas"
            ref={areasRef}
            className={`research-block research-block-soft reveal-section ${
              areasVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">
                Idea Clusters &amp; Use Cases
              </h3>
              <p className="research-block-subtitle">
                These example clusters show how ACT projects can combine
                technology, theory, and practice. They are starting points for
                sandpit meetings and future calls.
              </p>
            </div>

            <div className="research-areas-layout">
              <ul className="research-areas-list">
                <li>
                  Digital companions and self-help tools for stress, anxiety,
                  and emotional regulation.
                </li>
                <li>
                  Serious games and interactive experiences for mental health
                  and cognitive training.
                </li>
                <li>
                  Wearable and sensor-based platforms for monitoring activity,
                  sleep, and daily routines.
                </li>
                <li>
                  Classroom and lab tools that provide rich feedback to learners
                  and instructors in real time.
                </li>
                <li>
                  AI-supported personalised learning pathways and adaptive
                  assessments.
                </li>
                <li>
                  Energy dashboards and visualisations that make campus
                  consumption patterns visible and actionable.
                </li>
                <li>
                  Low-cost environmental sensing and data storytelling with
                  local communities.
                </li>
                <li>
                  Inclusive interfaces that keep people with different abilities
                  at the centre of design.
                </li>
              </ul>

              <aside className="research-highlight-card card">
                <h4>Highlight – From Idea to ACT Call</h4>
                <p>
                  Teams can begin with small pilots, student projects, or
                  studio-style experiments. Mature ideas can then move into
                  formal proposals under ACT funding rounds, using the proposal
                  format and evaluation matrix shared in the Resources section.
                </p>
                <p className="research-highlight-link">
                  <Link to="/resources" className="link-animated">
                    Go to Resources &amp; Templates
                  </Link>
                </p>
              </aside>
            </div>
          </section>

          {/* Ongoing projects */}
          <section
            id="projects-ongoing"
            ref={ongoingRef}
            className={`research-block reveal-section ${
              ongoingVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Ongoing Projects</h3>
              <p className="research-block-subtitle">
                Early projects and pilots that illustrate the kind of work ACT
                Centre aims to support. Details and formal lists will grow over
                time.
              </p>
            </div>

            <div className="research-projects-grid">
              <article className="research-project-card card reveal-item">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>Digital Mental Health Companion for Young Adults</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Health &amp; Well-being · Cognition
                </p>
                <p className="research-project-text">
                  Exploring conversational and game-based interfaces that help
                  students track mood, build coping strategies, and connect to
                  appropriate support, with strong attention to ethics and
                  privacy.
                </p>
                <p className="research-project-extra">
                  PI / Team: To be updated · Funding: ACT internal / external –
                  to be updated
                </p>
              </article>

              <article className="research-project-card card reveal-item">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>ACT Smart Campus: Energy &amp; Environment Dashboard</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Energy &amp; Environment · Learning
                </p>
                <p className="research-project-text">
                  Building visual dashboards and interactive kiosks that surface
                  real-time energy and resource use on campus, nudging students
                  and staff towards low-carbon behaviours.
                </p>
                <p className="research-project-extra">
                  PI / Team: To be updated · Funding: To be updated
                </p>
              </article>

              <article className="research-project-card card reveal-item">
                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>
                <h4>Immersive Learning Lab for STEM Education</h4>
                <p className="research-project-meta">
                  <span>Themes:</span> Learning &amp; Pedagogy · Cognition
                </p>
                <p className="research-project-text">
                  Prototyping VR/AR and interactive tabletop experiences that
                  allow students to manipulate complex systems and visualise
                  abstract concepts inside the classroom and beyond.
                </p>
                <p className="research-project-extra">
                  PI / Team: To be updated · Funding: To be updated
                </p>
              </article>
            </div>
          </section>

          {/* Completed projects */}
          <section
            id="projects-completed"
            ref={completedRef}
            className={`research-block research-block-soft reveal-section ${
              completedVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Completed Projects</h3>
              <p className="research-block-subtitle">
                As ACT Centre matures, this section will capture projects that
                have completed their lifecycle, along with open tools, datasets,
                and public-facing artefacts.
              </p>
            </div>

            <div className="research-completed-layout">
              <ul className="research-completed-list">
                <li>
                  <strong>Project Title Placeholder 1</strong> – Short one-line
                  description of a completed project and its key outcome.
                </li>
                <li>
                  <strong>Project Title Placeholder 2</strong> – Short one-line
                  description of a completed project and its outcome.
                </li>
                <li>
                  <strong>Project Title Placeholder 3</strong> – Short one-line
                  description of a completed project and its outcome.
                </li>
              </ul>
              <p className="research-completed-note">
                A detailed catalogue of completed ACT projects with summaries,
                documentation, and links will be added here over time.
              </p>
            </div>
          </section>

          {/* Publications */}
          <section
            id="publications"
            ref={pubsRef}
            className={`research-block reveal-section ${
              pubsVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Publications</h3>
              <p className="research-block-subtitle">
                Representative publications from ACT-affiliated faculty and
                researchers. Later this can be driven by Google Scholar or an
                internal database with filters by theme and year.
              </p>
            </div>

            <div className="research-pubs-layout">
              <div className="research-pubs-feature card">
                <h4>Highlighted Publications</h4>
                <ul>
                  <li>
                    Placeholder citation for a flagship paper related to digital
                    health, cognition, or technology-supported learning.
                  </li>
                  <li>
                    Placeholder citation for a high-impact journal or conference
                    paper in energy, environment, or human-centred AI.
                  </li>
                </ul>
              </div>
              <div className="research-pubs-note-card card">
                <p>
                  A full publication list (by year, theme, or faculty) will be
                  made available here, with options to filter, search, and
                  export citations.
                </p>
              </div>
            </div>
          </section>

          {/* Collaborations */}
          <section
            id="collaborations"
            ref={collabRef}
            className={`research-block research-block-soft reveal-section ${
              collabVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Collaborations</h3>
              <p className="research-block-subtitle">
                ACT Centre is designed as a collaborative space. Most projects
                will involve multiple departments, external partners, and user
                communities.
              </p>
            </div>

            <div className="research-collab-grid">
              <article className="research-collab-card card reveal-item">
                <h4>Academic Collaborations</h4>
                <ul>
                  <li>
                    Joint projects with departments across the institute
                    (engineering, humanities, management, sciences).
                  </li>
                  <li>
                    Collaborations with national and international universities.
                  </li>
                  <li>
                    Co-supervision of students and shared labs or studio
                    formats.
                  </li>
                </ul>
              </article>

              <article className="research-collab-card card reveal-item">
                <h4>Industry &amp; Start-ups</h4>
                <ul>
                  <li>
                    Problem statements and pilots with industry and start-ups in
                    health, education, and sustainability.
                  </li>
                  <li>
                    Co-created prototypes, usability studies, and field
                    deployments.
                  </li>
                  <li>
                    Internships and innovation challenges hosted through ACT.
                  </li>
                </ul>
              </article>

              <article className="research-collab-card card reveal-item">
                <h4>Government &amp; Civil Society</h4>
                <ul>
                  <li>
                    Projects supported by funding agencies and public-sector
                    partners.
                  </li>
                  <li>
                    Interventions co-designed with schools, hospitals, and
                    community organisations.
                  </li>
                  <li>
                    Testbeds and pilots aligned with national and regional
                    priorities.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* Opportunities */}
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
                ACT Centre will regularly host opportunities for B.Tech, M.Tech,
                PhD scholars, post-doctoral fellows, and visiting researchers to
                join ongoing projects or co-create new ones.
              </p>
              <ul>
                <li>
                  Project assistant and research fellow roles under funded
                  projects.
                </li>
                <li>
                  Summer and semester-long research internships in ACT labs.
                </li>
                <li>
                  Possibilities for joint supervision and interdisciplinary
                  design studios.
                </li>
              </ul>
              <p className="research-opportunities-note">
                Current openings and calls will be advertised through the{" "}
                <Link to="/funding" className="link-animated">
                  Funding
                </Link>{" "}
                and{" "}
                <Link to="/events" className="link-animated">
                  Events
                </Link>{" "}
                sections, as well as institute-wide communication channels.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Research;
