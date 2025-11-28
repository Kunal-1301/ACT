import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function Home() {
  // reveal refs
  const { ref: visionRef, isVisible: visionVisible } = useRevealOnScroll();
  const { ref: researchRef, isVisible: researchVisible } = useRevealOnScroll();
  const { ref: neuroRef, isVisible: neuroVisible } = useRevealOnScroll();
  const { ref: flagshipRef, isVisible: flagshipVisible } = useRevealOnScroll();
  const { ref: fundingRef, isVisible: fundingVisible } = useRevealOnScroll();
  const { ref: oppRef, isVisible: oppVisible } = useRevealOnScroll();
  const { ref: impactRef, isVisible: impactVisible } = useRevealOnScroll();
  const { ref: peopleRef, isVisible: peopleVisible } = useRevealOnScroll();
  const { ref: updatesRef, isVisible: updatesVisible } = useRevealOnScroll();
  const { ref: contactRef, isVisible: contactVisible } = useRevealOnScroll();

  // Gallery images (update names if necessary)
  const galleryImages = [
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
    "/media/hero-campus-800.JPG",
  ].filter(Boolean);

  // Lightbox state (kept local to page)
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const nextLightbox = () =>
    setLightbox((s) => ({ open: true, index: (s.index + 1) % galleryImages.length }));
  const prevLightbox = () =>
    setLightbox((s) => ({ open: true, index: (s.index - 1 + galleryImages.length) % galleryImages.length }));

  // keyboard navigation for lightbox
  useEffect(() => {
    function onKey(e) {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open, galleryImages.length]);

  return (
    <div className="home-page">
      {/* 1️⃣ HERO SECTION - simplified inline hero using local jpgs */}
      <section
        className="section home-hero home-hero-simple"
        role="banner"
        aria-label="ACT Centre hero"
      >
        {/* background image */}
        <img
          src="/media/hero-campus-1600.jpg"
          alt="Thapar Institute — ACT Centre building"
          className="home-hero-bg"
          loading="eager"
          onError={(e) => {
            const cur = e.currentTarget.src;
            if (cur.endsWith("hero-campus-1600.jpg")) {
              e.currentTarget.src = "/media/hero-campus-1600.JPG";
            }
          }}
        />

        {/* overlay to keep text readable */}
        <div className="home-hero-overlay" aria-hidden />

        {/* content container */}
        <div className="container home-hero-inner">
          {/* LEFT: TEXT */}
          <div className="home-hero-left">
            <div className="home-hero-eyebrow animate-in-delay-1">
              <span className="home-hero-pill">Applied Cognitive Technologies Centre</span>
              <span className="home-hero-tagline">Thapar Institute of Engineering &amp; Technology</span>
            </div>

            <h1 className="home-hero-title animate-in-delay-2">
              Where cognition, technology <span className="home-hero-title-accent">&amp; society</span>
              <br />
              meet in practice.
            </h1>

            <p className="home-hero-subtitle animate-in-delay-3">
              ACT is a cross–cutting centre that brings together researchers, students and partners to design,
              test and deploy human–centred technologies in real–world environments.
            </p>

            <div className="home-hero-actions animate-in-delay-4">
              <Link to="/research" className="btn btn-primary">Explore research themes</Link>
              <Link to="/funding" className="btn btn-secondary">Funding &amp; opportunities</Link>
            </div>

            <div className="home-hero-stats animate-in-delay-5" aria-hidden>
              <div className="home-stat">
                <div className="home-stat-number">8+</div>
                <div className="home-stat-label">Labs &amp; testbeds</div>
              </div>
              <div className="home-stat">
                <div className="home-stat-number">40+</div>
                <div className="home-stat-label">Core &amp; affiliated faculty</div>
              </div>
              <div className="home-stat">
                <div className="home-stat-number">120+</div>
                <div className="home-stat-label">Students &amp; researchers</div>
              </div>
            </div>
          </div>

          {/* RIGHT: small media cards */}
          <div className="home-hero-right animate-in-delay-3">
            <div className="home-hero-media">
              <div className="home-media-main card">
                <img
                  src="/media/act-lab-dummy-800.jpg"
                  alt="ACT Centre lab environment"
                  className="home-media-main-img"
                  loading="lazy"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith("act-lab-dummy-800.jpg")) {
                      e.currentTarget.src = "/media/act-lab-dummy-800.JPG";
                    }
                  }}
                />
                <div className="home-media-main-label">
                  <span className="chip">Living labs &amp; instrumented environments</span>
                </div>
              </div>

              <div className="home-media-video card">
                <div className="home-media-video-header">
                  <span className="chip"><span className="chip-dot" /> Centre overview</span>
                  <span className="home-media-video-duration">2:08 min</span>
                </div>

                <div className="home-media-video-body">
                  <div className="home-media-video-thumb">
                    <img
                      src="/media/act-overview-dummy-800.jpg"
                      alt="ACT Centre overview preview"
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src.endsWith("act-overview-dummy-800.jpg")) {
                          e.currentTarget.src = "/media/act-overview-dummy-800.JPG";
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="home-media-play-btn"
                      aria-label="Play centre overview video (coming soon)"
                      disabled
                    >
                      <span className="home-media-play-icon">▶</span>
                    </button>
                    <span className="home-media-play-hint">Video coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ VISION & MISSION */}
      <section ref={visionRef} className={`section home-vision reveal-section ${visionVisible ? "is-visible" : ""}`}>
        <div className="container home-section-header">
          <p className="section-eyebrow">Vision &amp; Mission</p>
          <div className="home-vision-layout">
            <div className="home-vision-block card">
              <h2 className="home-section-title">Our vision</h2>
              <p>To be a leading hub where cognitive science, data, design and engineering converge to shape equitable, human–centred technologies for complex socio–technical systems.</p>
            </div>
            <div className="home-vision-block card">
              <h3 className="home-section-subtitle">Our mission</h3>
              <ul className="home-vision-list">
                <li>Build testbeds and living labs that mirror real–world environments.</li>
                <li>Support interdisciplinary research that links cognition, behaviour and technology.</li>
                <li>Enable students, early–career researchers and partners to pilot impactful interventions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ RESEARCH THEMES PREVIEW (thumbnails added) */}
      <section ref={researchRef} className={`section home-research-preview reveal-section ${researchVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Research at ACT</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Research themes</h2>
              <p className="home-section-intro">The Centre anchors research around themes that sit at the intersection of cognition, data and infrastructure. Explore a sample of our focus areas below.</p>
            </div>
          </div>

          <div className="home-research-grid">
            <article className="card home-research-card">
              <div className="card-thumb">
                <img src="/media/hero-campus-800.JPG" alt="Mobility thumbnail" onError={(e)=>{ if(e.currentTarget.src.endsWith("424A2199.JPG")) e.currentTarget.src="/media/424A2199.jpg"; }} />
              </div>
              <div className="card-body">
                <h3>Mobility &amp; Transportation Behaviour</h3>
                <p>Studying how people perceive, navigate and adapt to transport systems, from shared mobility to future autonomous vehicles.</p>
                <Link to="/research" className="link-animated">View mobility projects</Link>
              </div>
            </article>

            <article className="card home-research-card">
              <div className="card-thumb">
                <img src="/media/hero-campus-800.JPG" alt="Built environment thumbnail" onError={(e)=>{ if(e.currentTarget.src.endsWith("_DSC9441.JPG")) e.currentTarget.src="/media/_DSC9441.jpg"; }} />
              </div>
              <div className="card-body">
                <h3>Cognition in Built &amp; Urban Environments</h3>
                <p>Understanding attention, wayfinding, comfort and safety in complex buildings, campuses and public spaces.</p>
                <Link to="/research" className="link-animated">Explore environment studies</Link>
              </div>
            </article>

            <article className="card home-research-card">
              <div className="card-thumb">
                <img src="/media/hero-campus-800.JPG" alt="Human-AI thumbnail" onError={(e)=>{ if(e.currentTarget.src.endsWith("424A6960.JPG")) e.currentTarget.src="/media/424A6960.jpg"; }} />
              </div>
              <div className="card-body">
                <h3>Human–AI Interaction &amp; Decision Support</h3>
                <p>Designing decision aids, interfaces and workflows that keep humans in the loop while leveraging data and AI.</p>
                <Link to="/research" className="link-animated">See human–AI work</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4️⃣ NEUROSCIENCE FOCUS */}
      <section ref={neuroRef} className={`section section--bg-soft home-neuro reveal-section ${neuroVisible ? "is-visible" : ""}`}>
        <div className="container home-neuro-layout">
          <div className="home-neuro-left">
            <p className="section-eyebrow">Future direction</p>
            <h2 className="home-section-title">Neuroscience–informed design of complex systems.</h2>
            <p className="home-section-intro">ACT is gradually building a neuroscience–informed pillar that brings together cognitive science, brain–behaviour measures and applied technology for real–world settings.</p>
          </div>
          <div className="home-neuro-right card">
            <h3 className="home-section-subtitle">Neuroscience focus at ACT</h3>
            <ul className="home-neuro-list">
              <li>Incorporating cognitive load, attention and perception metrics into interface and system design.</li>
              <li>Exploring neuro–ergonomics in safety–critical domains like mobility, healthcare and infrastructure.</li>
              <li>Building collaborations for EEG, eye–tracking and other sensing modalities linked to behaviour in the wild.</li>
            </ul>
            <p className="home-neuro-footer">Interested in this direction? <Link to="/contact" className="link-animated">Reach out to discuss collaborations.</Link></p>
          </div>
        </div>
      </section>

      {/* 5️⃣ FLAGSHIP PROJECTS (thumbnails added) */}
      <section ref={flagshipRef} className={`section home-flagship reveal-section ${flagshipVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Flagship initiatives</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Flagship projects</h2>
              <p className="home-section-intro">A selection of multi–stakeholder projects that illustrate how ACT integrates cognitive science, data and infrastructure in practice.</p>
            </div>
          </div>

          <div className="home-flagship-grid">
            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-open"><span className="chip-dot" /> Ongoing</span>
              </div>
              <div className="card-thumb">
                <img src="/media/20230206_174427.jpg" alt="Mobility lab" />
              </div>
              <div className="card-body">
                <h3>Human–Centred Campus Mobility Lab</h3>
                <p>A living lab that studies multimodal travel behaviour, decision–making and information design across the TIET campus.</p>
                <p className="home-flagship-meta">In collaboration with campus planning and external mobility partners.</p>
              </div>
            </article>

            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-upcoming"><span className="chip-dot" /> In development</span>
              </div>
              <div className="card-thumb">
                <img src="/media/hero-campus-800.JPG" alt="Infrastructure" />
              </div>
              <div className="card-body">
                <h3>Cognitive Workflows for Smart Infrastructure</h3>
                <p>Mapping attention, coordination and decision bottlenecks in infrastructure operations rooms to inform better tools and displays.</p>
                <p className="home-flagship-meta">Bridging human factors, data visualisation and operations research.</p>
              </div>
            </article>

            <article className="card home-flagship-card">
              <div className="home-flagship-top">
                <span className="chip chip-status-closed"><span className="chip-dot" /> Completed</span>
              </div>
              <div className="card-thumb">
                <img src="/media/hero-campus-800.JPG" alt="Behaviour systems" />
              </div>
              <div className="card-body">
                <h3>Behaviour–Aware Information Systems</h3>
                <p>Prototyping communication and nudging systems that respect cognitive limits while improving adherence and safety.</p>
                <p className="home-flagship-meta">Outputs include design guidelines, prototypes and evaluation studies.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INLINE GALLERY (no extra files) */}
      <section className="section home-gallery">
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Gallery</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Visual tour</h2>
              <p className="home-section-intro">A quick visual tour of the campus, labs and events at ACT.</p>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <button key={src} className="gallery-item" onClick={() => openLightbox(i)} aria-label={`Open image ${i + 1}`}>
                <img src={src} alt={`ACT photo ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX (inline modal) */}
      {lightbox.open && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prevLightbox} aria-label="Previous">‹</button>
            <img className="lightbox-img" src={galleryImages[lightbox.index]} alt={`ACT photo ${lightbox.index + 1}`} />
            <button className="lightbox-nav lightbox-next" onClick={nextLightbox} aria-label="Next">›</button>
          </div>
        </div>
      )}

      {/* 6️⃣ GLOBAL COLLABORATIONS (updated strip) */}
      <section className="section home-collab">
        <div className="container">
          <div className="home-section-header home-collab-header">
            <p className="section-eyebrow">Partnerships</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Global collaborations</h2>
              <p className="home-section-intro">ACT collaborates with academic groups, labs and organisations working on cognition, human factors, mobility, infrastructure and digital systems around the world.</p>
            </div>
          </div>

          <div className="home-collab-strip card">
            <div className="home-collab-logos">
              <img src="/media/act-logo.png" alt="ACT logo" className="home-collab-logo" />
              <div className="home-collab-logo">Partner 1</div>
              <div className="home-collab-logo">Partner 2</div>
              <div className="home-collab-logo">Partner 3</div>
            </div>
            <p className="home-collab-text">We co–design projects, share testbeds, and host visiting researchers, internships and joint studios. <Link to="/contact" className="link-animated">Get in touch to explore collaboration models.</Link></p>
          </div>
        </div>
      </section>

      {/* 7️⃣ FUNDING ANNOUNCEMENTS PREVIEW */}
      <section ref={fundingRef} className={`section home-funding-preview reveal-section ${fundingVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Funding</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Current &amp; upcoming calls</h2>
              <p className="home-section-intro">A quick snapshot of ACT–linked funding calls. Visit the Funding page for full details, timelines and documents.</p>
            </div>
            <Link to="/funding" className="btn btn-secondary home-section-header-cta">View all funding calls</Link>
          </div>

          <div className="home-funding-grid">
            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-open"><span className="chip-dot" /> Open</span>
                <span className="home-funding-deadline">Deadline: 15 May</span>
              </div>
              <h3>ACT Seed Grants for Interdisciplinary Pilots</h3>
              <p>Small grants to help faculty and researchers run early–stage pilots linked to ACT themes and testbeds.</p>
            </article>

            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-upcoming"><span className="chip-dot" /> Upcoming</span>
                <span className="home-funding-deadline">Call opening: June</span>
              </div>
              <h3>Doctoral &amp; Postdoctoral Fellowships</h3>
              <p>Structured fellowships for PhD and postdoctoral researchers working on cognition, mobility, human–AI and infrastructure.</p>
            </article>

            <article className="card home-funding-card">
              <div className="home-funding-top">
                <span className="chip chip-status-closed"><span className="chip-dot" /> Closed</span>
                <span className="home-funding-deadline">Closed: March</span>
              </div>
              <h3>Industry–Linked Pilot Projects</h3>
              <p>Short projects co–designed with partners to demonstrate feasibility and generate shared evidence.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 8️⃣ STUDENT & RESEARCHER OPPORTUNITIES PREVIEW */}
      <section ref={oppRef} className={`section home-opportunities reveal-section ${oppVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">For students &amp; researchers</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Ways to get involved</h2>
              <p className="home-section-intro">ACT is designed as a shared space. Students, scholars and staff can engage through projects, internships, theses and teaching activities.</p>
            </div>
          </div>

          <div className="home-opportunities-grid">
            <article className="card home-opportunity-card">
              <h3>Student projects &amp; capstones</h3>
              <p>Work on supervised projects linked to real testbeds, data and stakeholders, with clear research and deployment outcomes.</p>
              <Link to="/events" className="link-animated">See current calls</Link>
            </article>

            <article className="card home-opportunity-card">
              <h3>Research assistantships &amp; internships</h3>
              <p>Join multi–disciplinary teams to support data collection, analysis, prototyping and field work.</p>
              <Link to="/funding" className="link-animated">Explore funded roles</Link>
            </article>

            <article className="card home-opportunity-card">
              <h3>Studios, workshops &amp; reading groups</h3>
              <p>Take part in shorter formats that connect cognitive science, design, engineering and policy questions.</p>
              <Link to="/events" className="link-animated">View upcoming activities</Link>
            </article>
          </div>
        </div>
      </section>

      {/* 9️⃣ ACT IMPACT STATS */}
      <section ref={impactRef} className={`section home-impact reveal-section ${impactVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header home-impact-header">
            <p className="section-eyebrow">Impact</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">ACT in numbers</h2>
              <p className="home-section-intro">Early indicators of how ACT is building a different kind of research and practice space within TIET.</p>
            </div>
          </div>

          <div className="home-impact-grid">
            <div className="card home-impact-card">
              <div className="home-impact-number">20+</div>
              <div className="home-impact-label">Interdisciplinary projects initiated</div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">10+</div>
              <div className="home-impact-label">External partners engaged</div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">15+</div>
              <div className="home-impact-label">Courses &amp; studios supported</div>
            </div>
            <div className="card home-impact-card">
              <div className="home-impact-number">1000+</div>
              <div className="home-impact-label">Participants reached via events</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 FEATURED PEOPLE */}
      <section ref={peopleRef} className={`section home-featured-people reveal-section ${peopleVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">People</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">Featured people</h2>
              <p className="home-section-intro">A glimpse of the faculty and researchers shaping the Centre’s agenda. Visit the People page for the full list of core and affiliated members.</p>
            </div>
            <Link to="/people" className="btn btn-secondary home-section-header-cta">View all people</Link>
          </div>

          <div className="home-people-grid">
            <article className="card home-person-card">
              <div className="home-person-avatar">A</div>
              <div className="home-person-body">
                <h3 className="home-person-name">Name Surname</h3>
                <p className="home-person-role">Centre Lead / Faculty</p>
                <p className="home-person-meta">Cognitive science, mobility behaviour, human–centred design.</p>
              </div>
            </article>

            <article className="card home-person-card">
              <div className="home-person-avatar">B</div>
              <div className="home-person-body">
                <h3 className="home-person-name">Name Surname</h3>
                <p className="home-person-role">Faculty Coordinator</p>
                <p className="home-person-meta">Human factors, infrastructure systems, simulation and operations.</p>
              </div>
            </article>

            <article className="card home-person-card">
              <div className="home-person-avatar">C</div>
              <div className="home-person-body">
                <h3 className="home-person-name">Name Surname</h3>
                <p className="home-person-role">Early–career researcher</p>
                <p className="home-person-meta">Human–AI interaction, behavioural data, field deployments.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 1️⃣1️⃣ NEWS & EVENTS */}
      <section ref={updatesRef} className={`section home-news-events reveal-section ${updatesVisible ? "is-visible" : ""}`}>
        <div className="container">
          <div className="home-section-header">
            <p className="section-eyebrow">Updates</p>
            <div className="home-section-header-main">
              <h2 className="home-section-title">News &amp; events</h2>
              <p className="home-section-intro">Stay updated with ACT announcements, calls, seminars and workshops.</p>
            </div>
          </div>

          <div className="home-news-events-layout">
            <div className="home-news-column">
              <h3 className="home-news-heading">News highlights</h3>
              <article className="card home-news-card">
                <span className="badge-new">New</span>
                <h4>ACT launches campus mobility living lab</h4>
                <p>A new testbed integrates sensors, surveys and experiments to study multimodal travel on campus.</p>
              </article>

              <article className="card home-news-card">
                <h4>Workshop on cognition in built environments</h4>
                <p>Researchers and practitioners discussed how perception and attention shape building and campus experiences.</p>
              </article>

              <Link to="/news" className="link-animated home-news-more">View all news</Link>
            </div>

            <div className="home-events-column">
              <h3 className="home-news-heading">Upcoming events</h3>
              <article className="card home-event-card">
                <div className="home-event-date">
                  <span className="home-event-day">12</span>
                  <span className="home-event-month">Apr</span>
                </div>
                <div className="home-event-body">
                  <h4>Seminar: Human–AI collaboration in safety–critical work</h4>
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
                  <p>Hands–on studio linking cognition, UX and infrastructure.</p>
                </div>
              </article>

              <Link to="/events" className="link-animated home-news-more">View all events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1️⃣2️⃣ CONTACT & CTA STRIP (dark enhanced) */}
      <section ref={contactRef} className={`section section--bg-campus home-contact-cta reveal-section ${contactVisible ? "is-visible" : ""}`}>
        <div className="container home-contact-cta-inner">
          <div className="home-contact-cta-text">
            <p className="section-eyebrow">Connect with ACT</p>
            <h2 className="home-section-title">Bring your questions, ideas and collaborations.</h2>
            <p className="home-section-intro">Whether you are a student, researcher, practitioner or partner, we are happy to discuss how ACT can support your work.</p>
          </div>
          <div className="home-contact-cta-actions">
            <Link to="/contact" className="btn btn-primary">Contact the Centre</Link>
            <Link to="/facilities" className="btn btn-secondary">View labs &amp; facilities</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
