import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

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
        <img src="/media/bghome.png" className="home-hero-bg" alt="" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-inner">
          <div className="home-hero-left">
            <div className="home-hero-eyebrow hero-animate hero-delay-2">
              <span className="home-hero-pill">
                Centre for Transdisciplinary Research
              </span>
            </div>

            <h1 className="home-hero-title hero-animate hero-delay-3">
              Where Discipline Converges{" "}
              <span className="home-hero-title-accent">&amp; Impact</span>
              <br />
              Imerges
            </h1>

            <p className="home-hero-subtitle hero-animate hero-delay-4">
              The ACT Centre envisions a future where trans-disciplinary
              collaboration is not just encouraged but embedded in our
              educational and research culture.
            </p>

            <div className="home-hero-actions hero-animate hero-delay-5">
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
  className={`section home-vision reveal-section ${
    visionVisible ? "is-visible" : ""
  }`}
>
  <div className="home-vision-container">
    <div className="home-vision-content">
      <h2 className="home-section-title">
        <span className="vision-animated-text">Our vision</span>
      </h2>

      <p className="home-vision-text">
        ACT envisions a future where{" "}
        <span className="vision-highlight">
          transdisciplinary cooperation
        </span>{" "}
        drives innovative and sustainable technologies to address complex
        societal challenges, transforming knowledge into meaningful
        real-world impact.
      </p>
    </div>

    <div className="home-vision-visual">
      <img src="/media/homebg2.png" alt="" />
    </div>
  </div>
</section>


      {/* 3️⃣ RESEARCH THEMES PREVIEW (thumbnails added) */}
      <section
        ref={researchRef}
        className={`section home-research-preview reveal-section ${
          researchVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Research at ACT</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Research Themes</h2>
              <p className="home-section-intro">
                
              </p>
            </div>
          </div>

          <div className="home-research-grid">
            <article className="card home-research-card">
              <div className="card-thumb">
                <img
                  src="/media/health.png"
                  alt="Mobility thumbnail"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith("424A2199.JPG"))
                      e.currentTarget.src = "/media/424A2199.jpg";
                  }}
                />
              </div>
              <div className="card-body">
                <h3>Health &amp; Well-Being</h3>
                <p>
                  Unraveling health disparities, innovative healthcare delivery,
                  and the development of interventions to enhance overall
                  well-being.
                </p>
                <Link to="/research" className="btn btn-tertiary">
                  View related projects →
                </Link>
              </div>
            </article>

            <article className="card home-research-card">
              <div className="card-thumb">
                <img
                  src="/media/energy.png"
                  alt="Built environment thumbnail"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith("_DSC9441.JPG"))
                      e.currentTarget.src = "/media/_DSC9441.jpg";
                  }}
                />
              </div>
              <div className="card-body">
                <h3>Energy, Environment &amp; Sustainability</h3>
                <p>
                  Exploration of sustainable solutions to environmental
                  challenges, including biodiversity preservation, and
                  mitigation of climate change impacts.
                </p>
                <Link to="/research" className="btn btn-tertiary">
                  View related projects →
                </Link>
              </div>
            </article>

            <article className="card home-research-card">
              <div className="card-thumb">
                <img
                  src="/media/learning.png"
                  alt="Human-AI thumbnail"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith("424A6960.JPG"))
                      e.currentTarget.src = "/media/424A6960.jpg";
                  }}
                />
              </div>
              <div className="card-body">
                <h3>Learning &amp; Pedagogy</h3>
                <p>
                  Investigating novel methods and strategies to advance
                  education and pedagogical practices, with a focus on fostering
                  lifelong learning.
                </p>
                <Link to="/research" className="btn btn-tertiary">
                  View related projects →
                </Link>
              </div>
            </article>
            <article className="card home-research-card">
              <div className="card-thumb">
                <img
                  src="/media/energy.png"
                  alt="Built environment thumbnail"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith("_DSC9441.JPG"))
                      e.currentTarget.src = "/media/_DSC9441.jpg";
                  }}
                />
              </div>
              <div className="card-body">
                <h3>Cognition  &amp; Behaviour</h3>
                <p>
                  Exploration of sustainable solutions to environmental
                  challenges, including biodiversity preservation, and
                  mitigation of climate change impacts.
                </p>
                <Link to="/research" className="btn btn-tertiary">
                  View related projects →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4️⃣ NEUROSCIENCE FOCUS */}
      <section
        ref={neuroRef}
        className={`section section--bg-soft home-neuro reveal-section ${
          neuroVisible ? "is-visible" : ""
        }`}
      >
        <div className="container home-neuro-layout">
          <div className="home-neuro-left">
            <p className="section-eyebrow">Future direction</p>
            <h2 className="home-section-title">
              Neuroscience–informed design of complex systems.
            </h2>
            <p className="home-section-intro">
              ACT is gradually building a neuroscience–informed pillar that
              brings together cognitive science, brain–behaviour measures and
              applied technology for real–world settings.
            </p>
          </div>
          <div className="home-neuro-right card">
            <h3 className="home-section-subtitle">Neuroscience focus at ACT</h3>
            <ul className="home-neuro-list">
              <li>
                Incorporating cognitive load, attention and perception metrics
                into interface and system design.
              </li>
              <li>
                Exploring neuro–ergonomics in safety–critical domains like
                mobility, healthcare and infrastructure.
              </li>
              <li>
                Building collaborations for EEG, eye–tracking and other sensing
                modalities linked to behaviour in the wild.
              </li>
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
        className={`section home-flagship reveal-section ${
          flagshipVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Flagship initiatives</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Flagship projects</h2>
              <p className="home-section-intro">
                
              </p>
            </div>
          </div>

          <div className="home-flagship-grid">
            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-open">
                  <span className="chip-dot" /> Ongoing
                </span>
              </div>
              <div className="card-body">
                <h3>Human–Centred Campus Mobility Lab</h3>
                <p>
                  A living lab that studies multimodal travel behaviour,
                  decision–making and information design across the TIET campus.
                </p>
                <p className="home-flagship-meta">
                  In collaboration with campus planning and external mobility
                  partners.
                </p>
              </div>
            </article>

            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-upcoming">
                  <span className="chip-dot" /> In development
                </span>
              </div>
              <div className="card-body">
                <h3>Cognitive Workflows for Smart Infrastructure</h3>
                <p>
                  Mapping attention, coordination and decision bottlenecks in
                  infrastructure operations rooms to inform better tools and
                  displays.
                </p>
                <p className="home-flagship-meta">
                  Bridging human factors, data visualisation and operations
                  research.
                </p>
              </div>
            </article>

            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-closed">
                  <span className="chip-dot" /> Completed
                </span>
              </div>
              <div className="card-body">
                <h3>Behaviour–Aware Information Systems</h3>
                <p>
                  Prototyping communication and nudging systems that respect
                  cognitive limits while improving adherence and safety.
                </p>
                <p className="home-flagship-meta">
                  Outputs include design guidelines, prototypes and evaluation
                  studies.
                </p>
              </div>
            </article>
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
              <p className="home-section-intro">
                
              </p>
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

              <blockquote className="featured-quote">
                <p>
                  “For every complex problem there is an answer that is clear,
                  simple, and wrong.”
                </p>
                <footer>— H. L. Mencken</footer>
              </blockquote>
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
                <p>“The real world is not divided into departments.”</p>
                <footer>— Russell L. Ackoff</footer>
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
                  src={`https://www.youtube.com/embed/${
                    videoGallery[lightbox.index].youtubeId
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
        className={`section home-funding-preview reveal-section ${
          fundingVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Funding</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">
                Current &amp; upcoming calls
              </h2>
              <p className="home-section-intro">
               
              </p>
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
                <span className="chip chip-status-open">
                  <span className="chip-dot" /> Open
                </span>
                <span className="home-funding-deadline">Deadline: 15 May</span>
              </div>
              <h3>ACT Seed Grants for Interdisciplinary Pilots</h3>
              <p>
                Small grants to help faculty and researchers run early–stage
                pilots linked to ACT themes and testbeds.
              </p>
            </article>

            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-closed">
                  <span className="chip-dot" /> Closed
                </span>
                <span className="home-funding-deadline">Closed: March</span>
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
        className={`section home-opportunities reveal-section ${
          oppVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">For Faculty, Students &amp; Researchers</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Ways To Get Involved</h2>
              <p className="home-section-intro">
                
              </p>
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
        className={`section home-impact reveal-section ${
          impactVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header home-impact-header">
            <p className="section-eyebrow">Impact</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">ACT in numbers</h2>
              <p className="home-section-intro">
                
              </p>
            </div>
          </div>

          <div className="home-impact-grid">
            <div className="card home-impact-card">
              <div className="home-impact-number">3+</div>
              <div className="home-impact-label">
                Interdisciplinary Projects Initiated
              </div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">10+</div>
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
        className={`section home-featured-people reveal-section ${
          peopleVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">People</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">ACT Core Team</h2>
              <p className="home-section-intro">
                
              </p>
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
                <p className="home-person-meta">
                Assistant Professor @ TSLAS.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ NEWS & EVENTS */}
      <section
        ref={updatesRef}
        className={`section home-news-events reveal-section ${
          updatesVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Updates</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">News &amp; Events ###</h2>
              <p className="home-section-intro">
                Stay updated with ACT announcements, calls, seminars and
                workshops.
              </p>
            </div>
          </div>

          <div className="home-news-events-layout">
            <div className="home-news-column">
              <h3 className="home-news-heading">News highlights</h3>
              <article className="card home-news-card">
                <span className="badge-new">New</span>
                <h4>ACT launches campus mobility living lab</h4>
                <p>
                  A new testbed integrates sensors, surveys and experiments to
                  study multimodal travel on campus.
                </p>
              </article>

              <article className="card home-news-card">
                <h4>Workshop on cognition in built environments</h4>
                <p>
                  Researchers and practitioners discussed how perception and
                  attention shape building and campus experiences.
                </p>
              </article>

              <Link to="/news" className="btn btn-tertiary">
                View all news →
              </Link>
            </div>

            <div className="home-events-column">
              <h3 className="home-news-heading">Upcoming events</h3>
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

              <Link to="/events" className="btn btn-tertiary">
                View all events →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣2️⃣ CONTACT & CTA STRIP (dark enhanced) */}
      <section
        ref={contactRef}
        className={`section section--bg-campus home-contact-cta reveal-section ${
          contactVisible ? "is-visible" : ""
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
