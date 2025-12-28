import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Events = () => {
  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [heroSideRef, heroSideVisible] = useRevealOnScroll();
  const [upcomingRef, upcomingVisible] = useRevealOnScroll();
  const [timelineRef, timelineVisible] = useRevealOnScroll();
  const [formatsRef, formatsVisible] = useRevealOnScroll();
  const [participateRef, participateVisible] = useRevealOnScroll();

  return (
    <div className="events-page" id="events">
      {/* HERO */}
      <section className="section section--bg-events events-hero">
        <div className="container events-hero-layout">
          <div
            ref={heroTextRef}
            className={`events-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow events-hero-eyebrow">
              Events &amp; Activities
            </p>
            <h1 className="events-hero-title">Events at the ACT Centre</h1>
            <p className="events-hero-subtitle">
              The ACT Centre runs <strong>talks, workshops, studios,</strong>{" "}
              and <strong>public-facing events</strong> that connect research
              with teaching, practice, and communities.
            </p>
            <p className="events-hero-subtitle secondary">
              This page will become the living home for upcoming events,
              archives, and formats — from intimate lab sessions to larger
              cross-campus gatherings.
            </p>

            <div className="events-hero-ctas">
              <a href="#upcoming" className="btn btn-primary">
                View Upcoming Events
              </a>
              <a href="#timeline" className="btn btn-secondary">
                See Recent Highlights
              </a>
            </div>

            <div className="events-hero-quick-links">
              <a href="#formats" className="events-chip">
                Event formats
              </a>
              <a href="#participate" className="events-chip">
                How to host / propose
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section events-main">
        <div className="container">
          {/* UPCOMING EVENTS */}
          <section
            id="upcoming"
            ref={upcomingRef}
            className={`events-block events-block-soft reveal-section ${
              upcomingVisible ? "is-visible" : ""
            }`}
          >
            <div className="events-block-header">
              <h2 className="events-block-title">Upcoming Events</h2>
              <p className="events-block-subtitle">
                As the centre launches activities, upcoming events will appear
                here with details and registration links. For now, these are
                placeholders to show the structure.
              </p>
            </div>

            <div className="events-upcoming-grid">
              <article className="events-upcoming-card card">
                <div className="events-date-tile">
                  <span className="events-date-day">12</span>
                  <span className="events-date-month">Mar</span>
                </div>
                <div className="events-upcoming-main">
                  <h3 className="events-upcoming-title">
                    Placeholder: ACT Conversation Series #1
                  </h3>
                  <p className="events-upcoming-meta">
                    Speaker / Panel · Time · Venue – to be updated
                  </p>
                  <p className="events-upcoming-text">
                    A conversation between faculty from different departments
                    around a shared theme (e.g. attention, learning, climate,
                    care).
                  </p>
                  <p className="events-upcoming-note">
                    Registration details will appear here when confirmed.
                  </p>
                </div>
              </article>

              <article className="events-upcoming-card card">
                <div className="events-date-tile">
                  <span className="events-date-day">28</span>
                  <span className="events-date-month">Mar</span>
                </div>
                <div className="events-upcoming-main">
                  <h3 className="events-upcoming-title">
                    Placeholder: Hands-on Studio / Workshop
                  </h3>
                  <p className="events-upcoming-meta">
                    Facilitator(s) · Time · Lab / Studio – to be updated
                  </p>
                  <p className="events-upcoming-text">
                    A small-group session to try tools or methods used in ACT
                    projects (e.g. prototyping, data diaries, interaction
                    mapping).
                  </p>
                  <p className="events-upcoming-note">
                    This workshop could be linked to one or more funded projects.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* TIMELINE */}
          <section
            id="timeline"
            ref={timelineRef}
            className={`events-block reveal-section ${
              timelineVisible ? "is-visible" : ""
            }`}
          >
            <div className="events-block-header">
              <h2 className="events-block-title">
                Recent &amp; Sample Highlights
              </h2>
              <p className="events-block-subtitle">
                Once ACT events begin, this timeline can display key moments
                from each semester with short summaries and links.
              </p>
            </div>

            <div className="events-timeline">
              <div className="events-timeline-line" />

              {[
                {
                  title: "Sample: Launch & Orientation Session",
                  text:
                    "A gathering introducing the vision of ACT, early themes, and how colleagues and students can get involved.",
                },
                {
                  title: "Sample: Cross-Disciplinary Methods Workshop",
                  text:
                    "A practical session on how to combine quantitative and qualitative methods across disciplines.",
                },
                {
                  title: "Sample: Showcase / Open Studio",
                  text:
                    "A public-facing day where teams share prototypes, demos, and reflections.",
                },
              ].map((item, i) => (
                <div key={i} className="events-timeline-item">
                  <div className="events-timeline-dot" />
                  <div className="events-timeline-card card">
                    <div className="events-timeline-date">
                      Semester Placeholder
                    </div>
                    <h3 className="events-timeline-title">{item.title}</h3>
                    <p className="events-timeline-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FORMATS */}
          <section
            id="formats"
            ref={formatsRef}
            className={`events-block events-block-band reveal-section ${
              formatsVisible ? "is-visible" : ""
            }`}
          >
            <div className="events-block-header">
              <h2 className="events-block-title">Event Formats at ACT</h2>
              <p className="events-block-subtitle">
                Instead of treating every event as one-off, ACT encourages a few
                recognisable formats that can be repeated, iterated, and
                improved.
              </p>
            </div>

            <div className="events-formats-grid">
              <article className="events-format-card card">
                <h3>Conversation Series</h3>
                <p>
                  Short, focused talks or dialogues between people from
                  different disciplines, followed by moderated discussion.
                </p>
                <ul>
                  <li>Accessible to a broad campus audience</li>
                  <li>Helps surface overlapping questions and concerns</li>
                  <li>Can be lightly recorded / documented</li>
                </ul>
              </article>

              <article className="events-format-card card">
                <h3>Studios &amp; Workshops</h3>
                <p>
                  Hands-on sessions where participants try methods, tools, or
                  games used in ACT projects — often with limited seats.
                </p>
                <ul>
                  <li>Small-group, active learning focus</li>
                  <li>Supports pedagogy and capacity-building</li>
                  <li>Can lead directly into project teams</li>
                </ul>
              </article>

              <article className="events-format-card card">
                <h3>Showcases &amp; Open Days</h3>
                <p>
                  Events where ongoing projects open their work to wider
                  audiences — through demos, mini-exhibitions, or walkthroughs.
                </p>
                <ul>
                  <li>Makes work visible beyond the immediate team</li>
                  <li>Invites critique and collaboration</li>
                  <li>Can involve external visitors and partners</li>
                </ul>
              </article>

              <article className="events-format-card card">
                <h3>Reading / Reflection Circles</h3>
                <p>
                  Regular, small-group sessions focused on key texts, cases, or
                  themes in applied cognition and technology.
                </p>
                <ul>
                  <li>Lower logistical overhead, high intellectual value</li>
                  <li>Can feed ideas into proposals and teaching</li>
                  <li>Encourages participation from early-career researchers</li>
                </ul>
              </article>
            </div>
          </section>

          {/* PARTICIPATE */}
          <section
            id="participate"
            ref={participateRef}
            className={`events-block events-contact-block reveal-section ${
              participateVisible ? "is-visible" : ""
            }`}
          >
            <div className="events-contact-card card">
              <h2>Hosting or Proposing an Event</h2>
              <p>
                As ACT processes are finalised, there will be a simple way to
                propose events – whether you are a faculty member, researcher,
                or student team.
              </p>

              <div className="events-participate-grid">
                <article className="events-participate-column">
                  <h3>Indicative Flow</h3>
                  <ol>
                    <li>Draft a short concept note.</li>
                    <li>Identify date, format, and facilities.</li>
                    <li>Share with ACT office.</li>
                    <li>Refine, confirm, and publicise.</li>
                  </ol>
                </article>

                <article className="events-participate-column">
                  <h3>Contact &amp; Support</h3>
                  <p>
                    For now, event proposals and queries can be routed via the
                    ACT Centre office.
                  </p>
                  <ul>
                    <li>Event coordination: <span>To be updated</span></li>
                    <li>Communication / design: <span>To be updated</span></li>
                    <li>Technical support: <span>To be updated</span></li>
                  </ul>
                </article>
              </div>

              <p className="events-contact-links">
                You can also follow{" "}
                <Link to="/news" className="link-animated">
                  News &amp; Announcements
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Events;
