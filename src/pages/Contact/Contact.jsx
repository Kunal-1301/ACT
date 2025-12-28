import React from "react";
import "./Contact.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

const Contact = () => {
  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [heroInfoRef, heroInfoVisible] = useRevealOnScroll();
  const [locationRef, locationVisible] = useRevealOnScroll();
  const [contactsRef, contactsVisible] = useRevealOnScroll();
  const [formRef, formVisible] = useRevealOnScroll();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: connect to backend / form service
  };

  return (
    <div className="contact-page" id="contact">
      {/* HERO – CAMPUS BACKGROUND */}
      <section className="section section--bg-campus contact-hero">
        <div className="container contact-hero-layout">
          <div
            ref={heroTextRef}
            className={`contact-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow contact-hero-eyebrow">Contact</p>
            <h1 className="contact-hero-title">Contact the ACT Centre</h1>
            <p className="contact-hero-subtitle">
              Whether you are a <strong>student</strong>,{" "}
              <strong>faculty member</strong>, or{" "}
              <strong>external collaborator</strong>, this page is your starting
              point to reach the ACT Centre.
            </p>
            <p className="contact-hero-subtitle secondary">
              As processes and teams are finalised, this section will be updated
              with specific contact points for{" "}
              <strong>projects, funding, facilities,</strong> and{" "}
              <strong>events</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section contact-main">
        <div className="container">
          {/* LOCATION / MAP-LIKE SECTION */}
          <section
            id="map"
            ref={locationRef}
            className={`contact-block contact-block-soft reveal-section ${
              locationVisible ? "is-visible" : ""
            }`}
          >
            <div className="contact-block-header">
              <h2 className="contact-block-title">Location on Campus</h2>
              <p className="contact-block-subtitle">
                This section can later embed a simple map snippet or campus
                layout. For now, it gives a clear textual description of where
                to find the ACT Centre once it is operational.
              </p>
            </div>

            <div className="contact-location-grid">
              <article className="contact-location-info">
                <h3>Reaching the ACT Centre</h3>
                <ul>
                  <li>
                    <strong>From main gate:</strong> Directions and landmarks
                    will be added once the final building is confirmed.
                  </li>
                  <li>
                    <strong>Parking &amp; access:</strong> Information for
                    visitors, speakers, and collaborators will be published here.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> The centre will follow
                    campus accessibility norms; details will be documented.
                  </li>
                </ul>
                <p className="contact-location-note">
                  Until then, all meetings can be coordinated via email and
                  confirmed by the ACT office.
                </p>
              </article>

              <aside className="contact-location-placeholder card">
                <p className="contact-location-placeholder-label">
                  Map placeholder
                </p>
                <p className="contact-location-placeholder-text">
                  A simplified campus map or static image can be placed here
                  later, with a marker for the ACT Centre and nearby landmarks.
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="link-animated contact-location-map-link"
                >
                  Open TIET on Google Maps (generic link for now)
                </a>
              </aside>
            </div>
          </section>

          {/* CONTACT CARDS */}
          <section
            ref={contactsRef}
            className={`contact-block reveal-section ${
              contactsVisible ? "is-visible" : ""
            }`}
          >
            <div className="contact-block-header">
              <h2 className="contact-block-title">Key Contact Channels</h2>
              <p className="contact-block-subtitle">
                As responsibilities are assigned, this section will list clear
                contact points. For now, the details below are placeholders.
              </p>
            </div>

            <div className="contact-cards-grid">
              <article className="contact-card card">
                <div className="contact-card-icon">
                  <span className="contact-icon-dot" />
                </div>
                <div className="contact-card-main">
                  <h3>General Enquiries</h3>
                  <p>
                    For questions about ACT’s scope, collaborations, or general
                    information.
                  </p>
                  <ul>
                    <li>
                      Email: <span>To be updated</span>
                    </li>
                    <li>
                      Office phone: <span>To be updated</span>
                    </li>
                    <li>
                      Office hours: <span>To be updated</span>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="contact-card card">
                <div className="contact-card-icon contact-card-icon--accent">
                  <span className="contact-icon-dot" />
                </div>
                <div className="contact-card-main">
                  <h3>Projects &amp; Funding</h3>
                  <p>
                    For queries about project calls, proposal submissions,
                    evaluation, and funding processes.
                  </p>
                  <ul>
                    <li>
                      Funding coordination: <span>To be updated</span>
                    </li>
                    <li>
                      Proposal helpdesk: <span>To be updated</span>
                    </li>
                  </ul>
                  <p className="contact-card-link">
                    See also the{" "}
                    <Link to="/funding" className="link-animated">
                      Funding
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </article>

              <article className="contact-card card">
                <div className="contact-card-icon contact-card-icon--alt">
                  <span className="contact-icon-dot" />
                </div>
                <div className="contact-card-main">
                  <h3>Facilities &amp; Events</h3>
                  <p>
                    For questions related to lab access, equipment, and events
                    hosted via the ACT Centre.
                  </p>
                  <ul>
                    <li>
                      Facilities / lab coordination: <span>To be updated</span>
                    </li>
                    <li>
                      Events &amp; communication: <span>To be updated</span>
                    </li>
                  </ul>
                  <p className="contact-card-link">
                    See also{" "}
                    <Link to="/facilities" className="link-animated">
                      Facilities
                    </Link>{" "}
                    and{" "}
                    <Link to="/events" className="link-animated">
                      Events
                    </Link>
                    .
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* ENQUIRY FORM */}
          <section
            ref={formRef}
            className={`contact-block contact-form-block reveal-section ${
              formVisible ? "is-visible" : ""
            }`}
          >
            <div className="contact-form-card card">
              <div className="contact-form-header">
                <h2 className="contact-block-title">Send an Enquiry</h2>
                <p className="contact-block-subtitle">
                  This is a placeholder form to show layout. Later, it can be
                  connected to an email handler or ticketing system.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-role">
                      Current Affiliation &amp; Role
                    </label>
                    <input
                      id="contact-role"
                      name="role"
                      type="text"
                      placeholder="Student, faculty, collaborator, etc."
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-topic">Topic (optional)</label>
                    <input
                      id="contact-topic"
                      name="topic"
                      type="text"
                      placeholder="Funding, facilities, events, general..."
                    />
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Share a bit of context so the ACT team can connect you to the right person."
                  />
                </div>

                <div className="contact-form-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit (placeholder)
                  </button>
                  <p className="contact-form-note">
                    Submissions are not yet wired to a live system. For urgent
                    matters, please contact the ACT office via the official
                    email once it is published.
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
