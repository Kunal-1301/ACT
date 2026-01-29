import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/_base.css";
import "./styles/hero.css";
import "./styles/vision.css";
import "./styles/research.css";
import "./styles/neuroscience.css";
import "./styles/projects.css";
import "./styles/gallery.css";
import "./styles/collaborations.css";
import "./styles/funding.css";
import "./styles/opportunities.css";
import "./styles/stats.css";
import "./styles/news.css";
import "./styles/contact.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { strategicProjects } from "../../data/strategicProjects";

function Home() {
  /* ======================================================
     REVEAL HOOKS
     ====================================================== */
  const [visionRef, visionVisible] = useRevealOnScroll();
  const [researchRef, researchVisible] = useRevealOnScroll();
  const [neuroRef, neuroVisible] = useRevealOnScroll();
  const [flagshipRef, flagshipVisible] = useRevealOnScroll();
  const [fundingRef, fundingVisible] = useRevealOnScroll();
  const [oppRef, oppVisible] = useRevealOnScroll();
  const [impactRef, impactVisible] = useRevealOnScroll();
  const [peopleRef, peopleVisible] = useRevealOnScroll();
  const [updatesRef, updatesVisible] = useRevealOnScroll();
  const [contactRef, contactVisible] = useRevealOnScroll();

  /* ======================================================
     LIGHTBOX STATE
     ====================================================== */
  const imageGallery = [
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
  ];

  const videoGallery = [
    { youtubeId: "Hr_48d8YKNw" },
    { youtubeId: "mtVY5SXH_f0" },
  ];

  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0,
    type: "image",
  });

  const closeLightbox = () =>
    setLightbox({ open: false, index: 0, type: "image" });

  const nextLightbox = () =>
    setLightbox((s) => {
      const list = s.type === "image" ? imageGallery : videoGallery;
      return { ...s, index: (s.index + 1) % list.length };
    });

  const prevLightbox = () =>
    setLightbox((s) => {
      const list = s.type === "image" ? imageGallery : videoGallery;
      return { ...s, index: (s.index - 1 + list.length) % list.length };
    });

  /* ======================================================
     KEYBOARD NAV
     ====================================================== */
  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.open]);

  /* ======================================================
     🔥 FAILSAFE VISIBILITY FIX
     ====================================================== */
  useEffect(() => {
    const timeout = setTimeout(() => {
      document
        .querySelectorAll(".reveal-section")
        .forEach((el) => el.classList.add("is-visible"));
    }, 900);

    return () => clearTimeout(timeout);
  }, []);

  /* ======================================================
     RENDER
     ====================================================== */
  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="section home-hero home-hero-simple">
        <img src="/media/home.jpg" className="home-hero-bg" alt="" />
        <img src="/media/home.jpg" className="home-hero-bg" alt="" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-inner">
          <div className="home-hero-left">
            <div className="home-hero-eyebrow hero-animate hero-delay-2">
              <span className="home-hero-pill">
                Centre for Transdisciplinary Research
              </span>
            </div>

            <h1 className="page-hero-title hero-animate hero-delay-3">
              Where Discipline Converges{" "}
              <span className="home-hero-title-accent">&amp; Impact</span>
              <br />
              Emerges
            </h1>

            <p className="page-hero-subtitle hero-animate hero-delay-4">
              The ACT Centre envisions a future where trans-disciplinary
              collaboration is not just encouraged but embedded in our
              educational and research culture.
            </p>

            <div className="page-hero-actions hero-animate hero-delay-5">
              <Link to="/research" className="btn btn-primary">
                Explore research themes
              </Link>
              <Link to="/funding" className="btn btn-secondary">
                Funding &amp; opportunities
              </Link>
            </div>
          </div>

          <div className="home-hero-slideshow">
            <div className="slideshow-track">
              <img src="/media/tiet.png" alt="" />
              <img src="/media/act-home.png" alt="" />
              <img src="/media/tslas.png" alt="" />
              <img src="/media/ThaparBrain.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section
        ref={visionRef}
        className={`section home-vision reveal-section ${visionVisible ? "is-visible" : ""
          }`}
      >
        <div className="container home-vision-container">
          <div className="home-vision-content">
            <p className="section-eyebrow">Our vision</p>
            <h2 className="home-section-title">
              <span className="vision-animated-text">Our Vision</span>
            </h2>

            <p className="home-section-intro">
              ACT envisions a future where transdisciplinary cooperation drives innovative and sustainable technologies to address complex societal challenges, transforming knowledge into meaningful real-world impact.
            </p>
          </div>

          <div className="home-vision-visual">
            <img src="/media/vision.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* 3️⃣ RESEARCH THEMES PREVIEW (thumbnails added) */}
      <section
        ref={researchRef}
        className={`section home-research-preview reveal-section ${researchVisible ? "is-visible" : ""
          }`}
        role="region"
        aria-roledescription="carousel"
        aria-label="ACT research themes"
      >
        <div className="container">
          {/* ===============================
        SECTION HEADER
       =============================== */}
          <header className="home-section-header">
            <p className="section-eyebrow">Research at ACT</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Research Themes</h2>
              <p className="home-section-intro">
                Key thematic areas where ACT brings technology and human
                sciences together to address real-world challenges.
              </p>
            </div>
          </header>

          {/* ===============================
        CAROUSEL VIEWPORT (BOUNDARY)
       =============================== */}
          <div className="home-research-carousel">
            {/* ===============================
          CAROUSEL TRACK
          - 4 real cards
          - 4 visual duplicates
         =============================== */}
            <div className="home-research-track" aria-live="off">
              {/* ===== REAL CARDS ===== */}

              <article className="card home-research-card card-tint-rose">
                <div className="card-thumb">
                  <img
                    src="/media/health.png"
                    alt="Health and well-being research"
                  />
                </div>
                <div className="card-body">
                  <h3>Health &amp; Well-Being</h3>
                  <p>
                    Understanding health behaviours, mental well-being, and
                    designing technology-enabled interventions.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-green">
                <div className="card-thumb">
                  <img
                    src="/media/energy.png"
                    alt="Energy, environment and sustainability research"
                  />
                </div>
                <div className="card-body">
                  <h3>Energy, Environment &amp; Sustainability</h3>
                  <p>
                    Studying sustainable systems, climate-aware behaviour, and
                    data-driven environmental decision-making.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-violet">
                <div className="card-thumb">
                  <img
                    src="/media/learning.png"
                    alt="Learning and pedagogy research"
                  />
                </div>
                <div className="card-body">
                  <h3>Learning &amp; Pedagogy</h3>
                  <p>
                    Exploring new approaches to teaching, learning technologies,
                    and cognitive support systems.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-blue">
                <div className="card-thumb">
                  <img
                    src="/media/energy.png"
                    alt="Cognition and behaviour research"
                  />
                </div>
                <div className="card-body">
                  <h3>Cognition &amp; Behaviour</h3>
                  <p>
                    Investigating attention, decision-making, and behaviour
                    through experiments and data-driven methods.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              {/* ===== VISUAL DUPLICATES (ARIA-HIDDEN) ===== */}
              {/* Required only for seamless looping */}
              <article className="card home-research-card card-tint-rose">
                <div className="card-thumb">
                  <img
                    src="/media/health.png"
                    alt="Health and well-being research"
                  />
                </div>
                <div className="card-body">
                  <h3>Health &amp; Well-Being</h3>
                  <p>
                    Understanding health behaviours, mental well-being, and
                    designing technology-enabled interventions.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-green">
                <div className="card-thumb">
                  <img
                    src="/media/energy.png"
                    alt="Energy, environment and sustainability research"
                  />
                </div>
                <div className="card-body">
                  <h3>Energy, Environment &amp; Sustainability</h3>
                  <p>
                    Studying sustainable systems, climate-aware behaviour, and
                    data-driven environmental decision-making.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-violet">
                <div className="card-thumb">
                  <img
                    src="/media/learning.png"
                    alt="Learning and pedagogy research"
                  />
                </div>
                <div className="card-body">
                  <h3>Learning &amp; Pedagogy</h3>
                  <p>
                    Exploring new approaches to teaching, learning technologies,
                    and cognitive support systems.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>

              <article className="card home-research-card card-tint-blue">
                <div className="card-thumb">
                  <img
                    src="/media/energy.png"
                    alt="Cognition and behaviour research"
                  />
                </div>
                <div className="card-body">
                  <h3>Cognition &amp; Behaviour</h3>
                  <p>
                    Investigating attention, decision-making, and behaviour
                    through experiments and data-driven methods.
                  </p>
                  <Link to="/research" className="btn btn-tertiary">
                    View related projects →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ NEUROSCIENCE FOCUS */}
      <section
        ref={neuroRef}
        className={`section section--bg-soft home-neuro reveal-section ${neuroVisible ? "is-visible" : ""
          }`}
      >
        <div className="container home-neuro-layout">
          <div className="home-neuro-left">
            <p className="section-eyebrow">Future direction</p>
            <h2 className="home-section-title">
              Neuroscience–informed design of complex systems.
            </h2>
            <p className="home-section-intro">
              Neuromanagement-driven design of leadership, decision, and communication systems.</p>
            <p className="home-section-intro">ACT is strengthening a Neuromanagement pillar that brings together management science, cognitive neuroscience, and behavioural analytics to understand and improve how individuals and institutions lead, decide, communicate, and create in complex real-world environments.
            </p>
          </div>
          <div className="home-neuro-right card">
            <h3 className="home-section-subtitle">Neuroscience focus at ACT</h3>
            <ul className="home-neuro-list">
              <li>
                Integrating cognitive load, attention, emotion, and trust metrics into managerial decision-making, leadership practices, and organizational communication.
              </li>
              <li>
                Exploring neuromanagement approaches to decision-making under stress, bias, uncertainty, and digital overload across education, governance, and public institutions.
              </li>
              <li>
                Advancing creativity and problem-solving in teams and classrooms through brain-aware interventions, environmental design, and human–AI collaboration frameworks.
              </li>
              <li>Building interdisciplinary collaborations using behavioural sensing, EEG, eye-tracking, and lightweight digital signals to study managerial cognition and behaviour in naturalistic settings.</li>
            </ul>
            <div className="home-neuro-footer">
              <Link to="/contact" className="btn btn-tertiary">
                Discuss collaborations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ FLAGSHIP PROJECTS (thumbnails added) */}
      <section
        ref={flagshipRef}
        className={`section home-flagship reveal-section ${flagshipVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Strategic initiatives</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Strategic Projects</h2>
              <p className="home-section-intro">
                Long-term initiatives defining ACT's institutional research vision.
              </p>
            </div>
            <Link
              to="/research#projects-strategic"
              className="btn btn-secondary home-section-header-cta"
            >
              View more projects
            </Link>
          </div>

          <div className="home-flagship-grid">
            {strategicProjects.map((project) => (
              <article key={project.id} className="card home-flagship-card">
                <img
                  src={project.image}
                  alt={project.shortTitle}
                  className="home-flagship-image"
                />
                <div className="home-flagship-top">
                  <span className="chip chip-status-open">
                    <span className="chip-dot" /> {project.status}
                  </span>
                </div>
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE GALLERY (no extra files) */}
      <section className="section home-featured-videos">
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Perspectives</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Ideas that shape ACT</h2>
              <p className="home-section-intro"></p>
            </div>
          </div>

          <div className="featured-videos-grid">
            {/* VIDEO 1 */}
            <article className="featured-video-card">
              <div className="featured-video-embed">
                <iframe
                  src="https://www.youtube.com/embed/Hr_48d8YKNw"
                  title="ACT featured talk"
                  allow="accelerometer; clipboard-write; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>

            {/* VIDEO 2 */}
            <article className="featured-video-card">
              <div className="featured-video-embed">
                <iframe
                  src="https://www.youtube.com/embed/mtVY5SXH_f0"
                  title="ACT featured talk"
                  allow="accelerometer; clipboard-write; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <blockquote className="featured-quote">
                <p>"Empathy is the mother of excellence."</p>
                <footer>— Prof. Nair</footer>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* LIGHTBOX (inline modal) */}
      {lightbox.open && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={prevLightbox}
            >
              ‹
            </button>

            {lightbox.type === "image" ? (
              <img
                className="lightbox-img"
                src={imageGallery[lightbox.index]}
                alt=""
              />
            ) : (
              <div className="lightbox-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoGallery[lightbox.index].youtubeId
                    }?autoplay=1`}
                  title="ACT video"
                  allow="accelerometer; clipboard-write; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <button
              className="lightbox-nav lightbox-next"
              onClick={nextLightbox}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* 6️⃣ GLOBAL COLLABORATIONS (updated strip) */}
      {/* <section className="section home-collab">
        <div className="container">
          <div className="home-section-header home-collab-header">
            <p className="section-eyebrow">Partnerships</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Global collaborations</h2>
              <p className="home-section-intro">
                ACT collaborates with academic groups, labs and organisations
                working on cognition, human factors, mobility, infrastructure
                and digital systems around the world.
              </p>
            </div>
          </div>

          <div className="home-collab-strip card">
            <div className="home-collab-logos">
              <img
                src="/media/act-logo.png"
                alt="ACT logo"
                className="home-collab-logo"
              />
              <div className="home-collab-logo">Partner 1</div>
              <div className="home-collab-logo">Partner 2</div>
              <div className="home-collab-logo">Partner 3</div>
            </div>
            <div className="home-collab-text">
              <p>
                We co–design projects, share testbeds, and host visiting
                researchers, internships and joint studios.
              </p>
              <Link to="/contact" className="btn btn-tertiary">
                Explore collaboration models →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* 7️⃣ FUNDING ANNOUNCEMENTS PREVIEW */}
      <section
        ref={fundingRef}
        className={`section home-funding-preview reveal-section ${fundingVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Funding</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">
                Current &amp; upcoming calls
              </h2>
              <p className="home-section-intro"></p>
            </div>
            <Link
              to="/funding"
              className="btn btn-secondary home-section-header-cta"
            >
              View all funding calls
            </Link>
          </div>

          <div className="home-funding-grid">
            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-closed">
                  <span className="chip-dot" /> Closed
                </span>
                <span className="home-funding-deadline">Closed: 15 May</span>
              </div>
              <h3>Transdisciplinary Research Grants</h3>
              <p>
                Small grants to help faculty and researchers run early–stage
                pilots linked to ACT themes and testbeds.
              </p>
            </article>

            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-open">
                  <span className="chip-dot" /> Upcoming
                </span>
                <span className="home-funding-deadline">Upcoming: March</span>
              </div>
              <h3>Industry–Linked Pilot Projects</h3>
              <p>
                Short projects co–designed with partners to demonstrate
                feasibility and generate shared evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 8️⃣ STUDENT & RESEARCHER OPPORTUNITIES PREVIEW */}
      <section
        ref={oppRef}
        className={`section home-opportunities reveal-section ${oppVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">
              For Faculty, Students &amp; Researchers
            </p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Ways To Get Involved</h2>
              <p className="home-section-intro"></p>
            </div>
          </div>

          <div className="home-opportunities-grid">
            <article className="card home-opportunity-card">
              <h3>Student projects &amp; capstones</h3>
              <p>
                Work on supervised projects linked to real testbeds, data and
                stakeholders, with clear research and deployment outcomes.
              </p>
              <Link to="/events" className="btn btn-tertiary">
                See current calls →
              </Link>
            </article>

            <article className="card home-opportunity-card">
              <h3>Research assistantships &amp; internships</h3>
              <p>
                Join multi–disciplinary teams to support data collection,
                analysis, prototyping and field work.
              </p>
              <Link to="/funding" className="btn btn-tertiary">
                Explore funded roles →
              </Link>
            </article>

            <article className="card home-opportunity-card">
              <h3>Workshops &amp; Conferences </h3>
              <p>
                Take part in shorter formats that connect cognitive science,
                design, engineering and policy questions.
              </p>
              <Link to="/events" className="btn btn-tertiary">
                View upcoming activities →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 9️⃣ ACT IMPACT STATS */}
      <section
        ref={impactRef}
        className={`section home-impact reveal-section ${impactVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header home-impact-header">
            <p className="section-eyebrow">Impact</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">ACT in numbers</h2>
              <p className="home-section-intro"></p>
            </div>
          </div>

          <div className="home-impact-grid">
            <div className="card home-impact-card">
              <div className="home-impact-number">10+</div>
              <div className="home-impact-label">
                Interdisciplinary Projects Initiated
              </div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">25+</div>
              <div className="home-impact-label">External Partners Engaged</div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">1+</div>
              <div className="home-impact-label">
                Strategic projects Initiated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 FEATURED PEOPLE */}
      <section
        ref={peopleRef}
        className={`section home-featured-people reveal-section ${peopleVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">People</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">ACT Core Team</h2>
              <p className="home-section-intro"></p>
            </div>
            <Link
              to="/people"
              className="btn btn-secondary home-section-header-cta"
            >
              View all people
            </Link>
          </div>

          <div className="home-people-grid">
            <article className="card home-person-card home-person-card--featured">
              <div className="home-person-photo">
                <img
                  src="/media/EC.jpg"
                  alt="Dr. Efthymios Constantinides"
                  loading="lazy"
                />
              </div>

              <div className="home-person-body">
                <h3 className="home-person-name">
                  Dr. Efthymios Constantinides
                </h3>
                <p className="home-person-role">Chair, ACT Centre</p>
                <p className="home-person-meta">Professor @ TSLAS.</p>
              </div>
            </article>
            <article className="card home-person-card">
              <div className="home-person-photo">
                <img
                  src="/media/Vinay.jpeg"
                  alt="Dr. Vinay Kumar"
                  loading="lazy"
                />
              </div>

              <div className="home-person-body">
                <h3 className="home-person-name">Dr. Vinay Kumar</h3>
                <p className="home-person-role">Dean @ TSLAS</p>
                <p className="home-person-meta">Professor @ TIET & TSLAS.</p>
              </div>
            </article>

            <article className="card home-person-card">
              <div className="home-person-photo">
                <img
                  src="/media/rahul.jpeg"
                  alt="Dr. Rahul Upadhyay"
                  loading="lazy"
                />
              </div>

              <div className="home-person-body">
                <h3 className="home-person-name">Dr. Rahul Upadhyay</h3>
                <p className="home-person-role">Head, ACT Centre</p>
                <p className="home-person-meta">
                  Associate Professor @ TIET & TSLAS.
                </p>
              </div>
            </article>

            <article className="card home-person-card">
              <div className="home-person-photo">
                <img
                  src="/media/brandon.jpg"
                  alt="Dr. T. Brandon Evans"
                  loading="lazy"
                />
              </div>

              <div className="home-person-body">
                <h3 className="home-person-name">Dr. T. Brandon Evans </h3>
                <p className="home-person-role">Coordinator, ACT Centre</p>
                <p className="home-person-meta">Assistant Professor @ TSLAS.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ NEWS & EVENTS */}
      <section
        ref={updatesRef}
        className={`section home-news-events reveal-section ${updatesVisible ? "is-visible" : ""
          }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Updates</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">News &amp; Events</h2>
              <p className="home-section-intro">
                Stay tuned for the update on calls for strategic project.
              </p>
            </div>
          </div>

          <div className="home-news-events-layout">
            {/* ================= NEWS COLUMN ================= */}
            <div className="home-news-column">
              <h3 className="home-news-heading">News highlights</h3>

              <div className="news-vertical-scroll">
                <div className="news-vertical-track">
                  <article className="card home-news-card news-card-header">
                    <h4>List of Recently Sanctioned Projects</h4>
                    <p>
                      Highlighting recent research initiatives and PI-led grants sanctioned at the ACT Centre.
                    </p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Centralized Sanitary Pad Incinerator</h4>
                    <p><strong>Design and Development of Centralized Sanitary Pad Incinerator for Institutional Purposes</strong></p>
                    <p className="news-card-meta">PI: Dr. S.S Mallick, Prof. MED | TIET/ACT/2026/01</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Gamified Civil Engineering Education</h4>
                    <p><strong>Enhancing Civil Engineering Education through Gamified Learning</strong></p>
                    <p className="news-card-meta">PI: Dr. Abhinay Kumar | TIET/ACT/2026/02</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Elder Care Ecosystem</h4>
                    <p><strong>The Elder Care Ecosystem in Punjab</strong></p>
                    <p className="news-card-meta">PI: Dr. Richa Nigam | TIET/ACT/2026/03</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Adaptive AI-Driven E-Skin</h4>
                    <p><strong>The Relational Interface: Adaptive AI-Driven E-Skin for Personalized Health and Social Connection</strong></p>
                    <p className="news-card-meta">PI: Dr. Abhisek Pal | TIET/ACT/2026/04</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Sustainable Nanotechnology</h4>
                    <p><strong>Sustainable Nanotechnology for Mitigating Microplastic-Induced Cognitive and Physiological Impairments in Honeybees</strong></p>
                    <p className="news-card-meta">PI: Prof. Manmohan Chhiber | TIET/ACT/2026/05</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>MXene-Based Biosensors</h4>
                    <p><strong>Synthesis and Functionalization of MXene-Based Biosensors for Comprehensive Allergen Detection</strong></p>
                    <p className="news-card-meta">PI: Dr. Atul Upadhyay | TIET/ACT/2026/06</p>
                  </article>

                  <article className="card home-news-card">
                    <span className="badge-new">New</span>
                    <h4>Portable Breath Analyzer</h4>
                    <p><strong>Breath to Insight: Portable Multi Gas Breath Analyzer for Gut Health Screening</strong></p>
                    <p className="news-card-meta">PI: Dr. Maninder Kaur | TIET/ACT/2026/07</p>
                  </article>
                </div>
              </div>

              <Link to="/news" className="btn btn-tertiary">
                View all news →
              </Link>
            </div>

            {/* ================= EVENTS COLUMN ================= */}
            <div className="home-events-column">
              <h3 className="home-news-heading">Upcoming events</h3>

              <div className="events-carousel">
                <article className="card home-event-card">
                  <div className="home-event-date">
                    <span className="home-event-day">12</span>
                    <span className="home-event-month">Apr</span>
                  </div>
                  <div className="home-event-body">
                    <h4>
                      Seminar: Human–AI collaboration in safety–critical work
                    </h4>
                    <p>Hybrid • ACT Seminar Room / Online</p>
                  </div>
                </article>

                <article className="card home-event-card">
                  <div className="home-event-date">
                    <span className="home-event-day">26</span>
                    <span className="home-event-month">Apr</span>
                  </div>
                  <div className="home-event-body">
                    <h4>Studio: Designing for cognitive load</h4>
                    <p>
                      Hands–on studio linking cognition, UX and infrastructure.
                    </p>
                  </div>
                </article>
              </div>

              <Link to="/events" className="btn btn-tertiary">
                View all events →
              </Link>
            </div>

            {/* ================= QUOTES COLUMN ================= */}
            <div className="home-quotes-column">
              <h3 className="home-news-heading">Thoughts that guide us</h3>

              <div className="home-quotes-grid">
                <blockquote className="card home-quote-card">
                  <p>
                    "For every complex problem there is an answer that is clear,
                    simple, and wrong."
                  </p>
                  <footer>— H. L. Mencken</footer>
                </blockquote>

                <blockquote className="card home-quote-card">
                  <p>"The real world is not divided into departments."</p>
                  <footer>— Russell L. Ackoff</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 1️⃣2️⃣ CONTACT & CTA STRIP (dark enhanced) */}
      <section
        ref={contactRef}
        className={`section section--bg-campus home-contact-cta reveal-section ${contactVisible ? "is-visible" : ""
          }`}
      >
        <div className="container home-contact-cta-inner">
          <div className="home-contact-cta-text">
            <p className="section-eyebrow">Connect with ACT</p>
            <h2 className="home-section-title">
              Bring your questions, ideas and collaborations.
            </h2>
            <p className="home-section-intro">
              Whether you are a student, researcher, practitioner or partner, we
              are happy to discuss how ACT can support your work.
            </p>
          </div>
          <div className="home-contact-cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact the Centre
            </Link>
            <Link to="/facilities" className="btn btn-secondary">
              View labs &amp; facilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
