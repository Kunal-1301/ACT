import React from "react";
import { Link } from "react-router-dom";
import "./Facilities.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Facilities = () => {
  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [heroMediaRef, heroMediaVisible] = useRevealOnScroll();
  const [labsRef, labsVisible] = useRevealOnScroll();
  const [equipRef, equipVisible] = useRevealOnScroll();
  const [bookingRef, bookingVisible] = useRevealOnScroll();
  const [supportRef, supportVisible] = useRevealOnScroll();

  return (
    <div className="facilities-page" id="facilities">
      {/* HERO */}
      <section
        className="section facilities-hero facilities-hero-simple"
        role="banner"
        aria-label="ACT Centre facilities hero"
      >
        <img
          className="facilities-hero-bg"
          src="/media/hero-campus-1600.jpg"
          alt="Labs and spaces at ACT Centre"
          loading="eager"
          onError={(e) => {
            const cur = e.currentTarget.src;
            if (cur.endsWith("hero-facilities-1600.jpg")) {
              e.currentTarget.src = "/media/hero-facilities-1600.JPG";
            }
          }}
        />

        <div className="facilities-hero-overlay" aria-hidden />

        <div className="container facilities-hero-inner">
          <div
            ref={heroTextRef}
            className={`facilities-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow facilities-hero-eyebrow">
              Labs &amp; Spaces
            </p>
            <h1 className="facilities-hero-title">
              Facilities at ACT Centre
            </h1>
            <p className="facilities-hero-subtitle">
              ACT provides shared labs, studios, and testbeds where{" "}
              <strong>engineering</strong>,{" "}
              <strong>cognitive science</strong>,{" "}
              <strong>arts &amp; humanities</strong>, and{" "}
              <strong>social sciences</strong> can meet. Spaces are designed for
              both controlled experiments and open exploration.
            </p>
            <p className="facilities-hero-subtitle secondary">
              Overview of core labs, key equipment clusters, and how to book and
              use the spaces.
            </p>

            <div className="facilities-hero-ctas">
              <a href="#labs" className="btn btn-primary">
                Explore Labs &amp; Testbeds
              </a>
              <a href="#booking" className="btn btn-secondary">
                View Booking &amp; Usage
              </a>
            </div>

            <div className="facilities-hero-quick-links">
              <a href="#equipment" className="facilities-chip">
                Equipment clusters
              </a>
              <a href="#support" className="facilities-chip">
                Technical support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section facilities-main">
        <div className="container">
          {/* LABS */}
          <section
            id="labs"
            ref={labsRef}
            className={`facilities-block facilities-block-band reveal-section ${
              labsVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-block-header">
              <h2 className="facilities-block-title">
                Core Labs &amp; Testbeds
              </h2>
              <p className="facilities-block-subtitle">
                Each lab is shared across projects and disciplines. Naming and
                locations can be updated as spaces are finalised.
              </p>
            </div>

            <div className="facilities-lab-strips">
              <article className="facilities-lab-strip">
                <div className="facilities-lab-main card">
                  <h3>Cognition &amp; Behaviour Lab</h3>
                  <p>
                    Configurable space for behavioural experiments, cognitive
                    tasks, interviews, and small-group studies.
                  </p>
                  <ul>
                    <li>Workstations for experiment control &amp; logging</li>
                    <li>
                      Eye-tracking / attention measurement (to be updated)
                    </li>
                    <li>Audio / video capture with consent protocols</li>
                  </ul>
                </div>
                <div className="facilities-lab-meta card facilities-lab-meta--glass">
                  <h4>Typical use</h4>
                  <p>
                    User studies, workload assessments, interaction studies, and
                    pilots.
                  </p>
                  <p className="facilities-lab-meta-link">
                    <Link to="/research" className="link-animated">
                      See projects that use this lab
                    </Link>
                  </p>
                </div>
              </article>

              <article className="facilities-lab-strip">
                <div className="facilities-lab-main card">
                  <h3>Data &amp; Sensing Testbed</h3>
                  <p>
                    Infrastructure for deploying sensors, collecting data, and
                    running campus-integrated prototypes.
                  </p>
                  <ul>
                    <li>
                      Environmental &amp; activity sensing (to be detailed)
                    </li>
                    <li>Edge devices and gateways for streaming data</li>
                    <li>Secure storage and access for datasets</li>
                  </ul>
                </div>
                <div className="facilities-lab-meta card facilities-lab-meta--glass">
                  <h4>Typical use</h4>
                  <p>
                    Energy dashboards, mobility monitoring, context-aware
                    applications.
                  </p>
                </div>
              </article>

              <article className="facilities-lab-strip">
                <div className="facilities-lab-main card">
                  <h3>Learning &amp; Interaction Studio</h3>
                  <p>
                    Flexible studio for learning experiments, workshops, games,
                    and multi-modal interaction sessions.
                  </p>
                  <ul>
                    <li>Large displays / projection &amp; audio setup</li>
                    <li>Reconfigurable seating and collaboration zones</li>
                    <li>Support for hybrid and recorded sessions</li>
                  </ul>
                </div>
                <div className="facilities-lab-meta card facilities-lab-meta--glass">
                  <h4>Typical use</h4>
                  <p>
                    Classroom studies, game-based learning pilots, design
                    studios, and public demos.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* EQUIPMENT */}
          <section
            id="equipment"
            ref={equipRef}
            className={`facilities-block facilities-block-soft reveal-section ${
              equipVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-block-header">
              <h2 className="facilities-block-title">
                Equipment &amp; Capabilities (Indicative)
              </h2>
              <p className="facilities-block-subtitle">
                When procurement completes this will become a searchable
                catalogue. For now it's indicative.
              </p>
            </div>

            <div className="facilities-equipment-grid">
              <article className="facilities-equipment-card card">
                <h3>Human Studies &amp; Sensing</h3>
                <ul>
                  <li>
                    Workstations for stimulus presentation &amp; logging
                  </li>
                  <li>
                    Audio / video capture with consent workflows
                  </li>
                  <li>
                    Physiological / wearable sensors (to be updated)
                  </li>
                  <li>
                    Secure participant data handling practices
                  </li>
                </ul>
              </article>

              <article className="facilities-equipment-card card">
                <h3>Prototyping &amp; Interaction</h3>
                <ul>
                  <li>
                    Interactive displays, tablets, and touch interfaces
                  </li>
                  <li>
                    Rapid prototyping kits &amp; microcontroller platforms
                  </li>
                  <li>
                    VR/AR or immersive setups (as added)
                  </li>
                </ul>
              </article>

              <article className="facilities-equipment-card card">
                <h3>Data &amp; Computing</h3>
                <ul>
                  <li>
                    Workstations for data analysis &amp; modelling
                  </li>
                  <li>Secure storage for project datasets</li>
                  <li>Access to institute computing resources</li>
                </ul>
              </article>
            </div>
          </section>

          {/* BOOKING */}
          <section
            id="booking"
            ref={bookingRef}
            className={`facilities-block reveal-section ${
              bookingVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-block-header">
              <h2 className="facilities-block-title">
                Booking &amp; Usage
              </h2>
              <p className="facilities-block-subtitle">
                Intended booking flow and norms (indicative).
              </p>
            </div>

            <div className="facilities-booking-grid">
              <article className="facilities-booking-card card">
                <h3>Who Can Book?</h3>
                <ul>
                  <li>
                    PIs and authorised team members of approved ACT projects.
                  </li>
                  <li>
                    Students &amp; faculty for ACT-endorsed pilots and teaching.
                  </li>
                  <li>
                    Visitors and collaborators by arrangement with ACT.
                  </li>
                </ul>
              </article>

              <article className="facilities-booking-card card">
                <h3>How Booking Works (Indicative)</h3>
                <ol>
                  <li>
                    Check availability via ACT calendar / system.
                  </li>
                  <li>
                    Submit brief request with purpose, time, and requirements.
                  </li>
                  <li>
                    Receive confirmation and lab guidelines.
                  </li>
                  <li>
                    Log activity and incidents after use.
                  </li>
                </ol>
              </article>

              <article className="facilities-booking-card card">
                <h3>Norms &amp; Responsibilities</h3>
                <ul>
                  <li>
                    Respect ongoing experiments and participant confidentiality.
                  </li>
                  <li>
                    Follow safe handling practices for equipment.
                  </li>
                  <li>
                    Restore furniture/layout after use.
                  </li>
                  <li>
                    Report issues promptly to ACT staff.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* SUPPORT */}
          <section
            id="support"
            ref={supportRef}
            className={`facilities-block facilities-contact-block reveal-section ${
              supportVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-contact-card card">
              <h2>Technical Support &amp; Queries</h2>
              <p>
                For access, equipment, or feasibility queries, contact ACT
                Centre office or lab coordinators.
              </p>
              <ul>
                <li>Booking &amp; scheduling: <span>To be updated</span></li>
                <li>Technical support: <span>To be updated</span></li>
                <li>Safety / ethics concerns: <span>To be updated</span></li>
              </ul>
              <p className="facilities-contact-note">
                When contacting, mention{" "}
                <strong>project title</strong>,{" "}
                <strong>role</strong>, and relevant deadlines.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
