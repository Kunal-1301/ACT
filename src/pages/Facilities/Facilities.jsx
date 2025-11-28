import React from "react";
import { Link } from "react-router-dom";
import "./Facilities.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Facilities = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroMediaRef, isVisible: heroMediaVisible } = useRevealOnScroll();
  const { ref: labsRef, isVisible: labsVisible } = useRevealOnScroll();
  const { ref: equipRef, isVisible: equipVisible } = useRevealOnScroll();
  const { ref: bookingRef, isVisible: bookingVisible } = useRevealOnScroll();
  const { ref: supportRef, isVisible: supportVisible } = useRevealOnScroll();

  return (
    <div className="facilities-page" id="facilities">
      {/* HERO */}
      <section className="section section--bg-lab facilities-hero">
        <div className="container facilities-hero-layout">
          <div
            ref={heroTextRef}
            className={`facilities-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow facilities-hero-eyebrow">
              Labs &amp; Spaces
            </p>
            <h1 className="facilities-hero-title">Facilities at ACT Centre</h1>
            <p className="facilities-hero-subtitle">
              ACT provides shared labs, studios, and testbeds where{" "}
              <strong>engineering</strong>,{" "}
              <strong>cognitive science</strong>,{" "}
              <strong>arts &amp; humanities</strong>, and{" "}
              <strong>social sciences</strong> can meet. Spaces are designed for
              both controlled experiments and open-ended exploration.
            </p>
            <p className="facilities-hero-subtitle secondary">
              This page gives an overview of core labs, key equipment clusters,
              and how to book and use the facilities.
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

          <aside
            ref={heroMediaRef}
            className={`facilities-hero-media card reveal-section ${
              heroMediaVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-hero-media-header">
              <p className="facilities-hero-media-label">A place to experiment</p>
              <p className="facilities-hero-media-caption">
                Spaces are configured to move seamlessly between experiments,
                prototyping, teaching, and public-facing demos.
              </p>
            </div>

            <div className="facilities-hero-badges">
              <div className="facilities-hero-badge">
                <span className="facilities-hero-badge-label">
                  Cognitive &amp; Behaviour Labs
                </span>
              </div>
              <div className="facilities-hero-badge">
                <span className="facilities-hero-badge-label">
                  Data &amp; Sensing Testbeds
                </span>
              </div>
              <div className="facilities-hero-badge">
                <span className="facilities-hero-badge-label">
                  Learning &amp; Interaction Studios
                </span>
              </div>
            </div>

            <div className="facilities-hero-media-footer">
              <p>
                Access is coordinated via ACT, with clear booking rules and
                shared norms to respect experiments, participants, and equipment.
              </p>
              <p className="facilities-hero-media-link">
                <Link to="/processes" className="link-animated">
                  See how lab use fits into ACT processes
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* MAIN */}
      <section className="section facilities-main">
        <div className="container">
          {/* LAB STRIPS */}
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
                Each lab is shared across projects and disciplines. The exact
                naming and locations can be updated as spaces are finalised.
              </p>
            </div>

            <div className="facilities-lab-strips">
              <article className="facilities-lab-strip">
                <div className="facilities-lab-main card">
                  <h3>Cognition &amp; Behaviour Lab</h3>
                  <p>
                    A quiet, configurable space for behavioural experiments,
                    cognitive tasks, interviews, and small-group studies with
                    participants.
                  </p>
                  <ul>
                    <li>Workstations for experiment control &amp; logging</li>
                    <li>Eye-tracking / attention measurement (to be updated)</li>
                    <li>Audio / video capture with consent protocols</li>
                  </ul>
                </div>
                <div className="facilities-lab-meta card facilities-lab-meta--glass">
                  <h4>Typical use</h4>
                  <p>
                    User studies, mental workload assessments, interaction
                    studies, and small-scale pilots before scaling to larger
                    populations.
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
                    running prototypes that interface with the campus or
                    controlled environments.
                  </p>
                  <ul>
                    <li>Environmental &amp; activity sensing (to be detailed)</li>
                    <li>Edge devices and gateways for streaming data</li>
                    <li>Secure storage and access for datasets</li>
                  </ul>
                </div>
                <div className="facilities-lab-meta card facilities-lab-meta--glass">
                  <h4>Typical use</h4>
                  <p>
                    Energy dashboards, mobility and environment monitoring,
                    context-aware applications, and data-driven interventions.
                  </p>
                </div>
              </article>

              <article className="facilities-lab-strip">
                <div className="facilities-lab-main card">
                  <h3>Learning &amp; Interaction Studio</h3>
                  <p>
                    A flexible studio for running learning experiments,
                    workshops, serious games, and multi-modal interaction
                    sessions.
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
                    studios, and public demos of ACT projects.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* EQUIPMENT CLUSTERS */}
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
                Once procurement is complete, this section can be expanded into
                a detailed catalogue. For now, it communicates the flavour of
                capabilities ACT aims to support.
              </p>
            </div>

            <div className="facilities-equipment-grid">
              <article className="facilities-equipment-card card">
                <h3>Human Studies &amp; Sensing</h3>
                <ul>
                  <li>Workstations for stimulus presentation &amp; logging</li>
                  <li>Audio / video capture setups with consent workflows</li>
                  <li>Physiological / wearable sensors (to be updated)</li>
                  <li>Secure participant data handling practices</li>
                </ul>
              </article>

              <article className="facilities-equipment-card card">
                <h3>Prototyping &amp; Interaction</h3>
                <ul>
                  <li>Interactive displays, tablets, and touch interfaces</li>
                  <li>Rapid prototyping kits &amp; microcontroller platforms</li>
                  <li>VR/AR or immersive setups (as added)</li>
                  <li>Support for quick iteration and testing</li>
                </ul>
              </article>

              <article className="facilities-equipment-card card">
                <h3>Data &amp; Computing</h3>
                <ul>
                  <li>Dedicated workstations for data analysis &amp; modelling</li>
                  <li>Secure storage for project datasets</li>
                  <li>Access points to institute computing resources</li>
                  <li>Support for reproducible workflows</li>
                </ul>
              </article>
            </div>
          </section>

          {/* BOOKING & USAGE */}
          <section
            id="booking"
            ref={bookingRef}
            className={`facilities-block reveal-section ${
              bookingVisible ? "is-visible" : ""
            }`}
          >
            <div className="facilities-block-header">
              <h2 className="facilities-block-title">Booking &amp; Usage</h2>
              <p className="facilities-block-subtitle">
                The detailed booking and usage rules will be finalised along
                with infrastructure and project processes. This section outlines
                the intended flow.
              </p>
            </div>

            <div className="facilities-booking-grid">
              <article className="facilities-booking-card card">
                <h3>Who Can Book?</h3>
                <ul>
                  <li>
                    PIs and co-PIs of approved ACT projects (and their
                    authorised team members).
                  </li>
                  <li>
                    Students and faculty using the space for ACT-endorsed
                    pilots, workshops, or teaching experiments.
                  </li>
                  <li>
                    Visitors and collaborators under prior arrangement with ACT.
                  </li>
                </ul>
              </article>

              <article className="facilities-booking-card card">
                <h3>How Booking Works (Indicative)</h3>
                <ol>
                  <li>Check lab availability via ACT calendar / system.</li>
                  <li>
                    Submit a brief booking request with purpose, time, and any
                    special requirements.
                  </li>
                  <li>
                    Receive confirmation and guidelines from the ACT office or
                    lab coordinator.
                  </li>
                  <li>
                    After use, log activity, incidents (if any), and basic
                    statistics as required.
                  </li>
                </ol>
              </article>

              <article className="facilities-booking-card card">
                <h3>Norms &amp; Responsibilities</h3>
                <ul>
                  <li>
                    Respect ongoing experiments and confidentiality of
                    participants.
                  </li>
                  <li>Follow safe handling practices for all equipment.</li>
                  <li>
                    Restore furniture and layout to agreed configurations after
                    use.
                  </li>
                  <li>
                    Report any issues to ACT staff promptly so they can be
                    addressed.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* SUPPORT & CONTACT */}
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
                For questions related to facility access, equipment, or
                technical feasibility of a proposed study, please contact the
                ACT Centre office or designated lab coordinators.
              </p>
              <ul>
                <li>
                  Booking &amp; scheduling: <span>To be updated</span>
                </li>
                <li>
                  Technical support: <span>To be updated</span>
                </li>
                <li>
                  Safety / ethics concerns: <span>To be updated</span>
                </li>
              </ul>
              <p className="facilities-contact-note">
                When reaching out, please mention your{" "}
                <strong>project title</strong>,{" "}
                <strong>role (student / faculty / collaborator)</strong>, and
                any deadlines related to your study or pilot.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
