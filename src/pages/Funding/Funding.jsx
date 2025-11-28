import React from "react";
import { Link } from "react-router-dom";
import "./Funding.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Funding = () => {
  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroSideRef, isVisible: heroSideVisible } = useRevealOnScroll();
  const { ref: flowRef, isVisible: flowVisible } = useRevealOnScroll();
  const { ref: callsRef, isVisible: callsVisible } = useRevealOnScroll();
  const { ref: whatRef, isVisible: whatVisible } = useRevealOnScroll();
  const { ref: evalRef, isVisible: evalVisible } = useRevealOnScroll();
  const { ref: docsRef, isVisible: docsVisible } = useRevealOnScroll();
  const { ref: faqRef, isVisible: faqVisible } = useRevealOnScroll();
  const { ref: contactRef, isVisible: contactVisible } = useRevealOnScroll();

  return (
    <div className="funding-page" id="funding">
      {/* HERO – Home/Research style */}
      <section className="section section--bg-tech funding-hero">
        <div className="container funding-hero-layout">
          <div
            ref={heroTextRef}
            className={`funding-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <p className="section-eyebrow funding-hero-eyebrow">
              Funding &amp; Applications
            </p>
            <h1 className="funding-hero-title">
              Support for Projects &amp; Research
            </h1>
            <p className="funding-hero-subtitle">
              ACT Centre provides competitive internal funding to help ideas
              move from{" "}
              <strong>early sketches and pilots to full projects</strong>. This
              page brings together calls, eligibility, process, and official
              templates in one place.
            </p>

            <div className="funding-hero-ctas">
              <a href="#current-calls" className="btn btn-primary">
                View Current Calls
              </a>
              <a
                href="/docs/act-proposal-format.docx"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download Proposal Template
              </a>
            </div>

            {/* Quick nav chips inside hero */}
            <div className="funding-quick-nav">
              <a href="#flow" className="funding-chip">
                Funding Flow
              </a>
              <a href="#current-calls" className="funding-chip">
                Current Calls
              </a>
              <a href="#what-we-fund" className="funding-chip">
                What We Fund
              </a>
              <a href="#evaluation" className="funding-chip">
                Evaluation Criteria
              </a>
              <a href="#documents" className="funding-chip">
                Documents &amp; Templates
              </a>
              <a href="#faq" className="funding-chip">
                FAQs
              </a>
              <a href="#contact-funding" className="funding-chip">
                Contact
              </a>
            </div>
          </div>

          <aside
            ref={heroSideRef}
            className={`funding-hero-side card reveal-section ${
              heroSideVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-hero-side-header">
              <p className="funding-hero-side-label">
                One glance at the process
              </p>
              <p className="funding-hero-side-caption">
                From reading the call to project start, ACT follows a simple and
                transparent flow.
              </p>
            </div>
            <ol className="funding-hero-mini-flow">
              <li>Read call &amp; check eligibility</li>
              <li>Prepare proposal &amp; budget</li>
              <li>Submit via the notified channel</li>
              <li>Evaluation by ACT panel</li>
              <li>Feedback &amp; decision</li>
              <li>Sanction, recruitment &amp; project start</li>
            </ol>
            <p className="funding-hero-side-link">
              <Link to="/processes" className="link-animated">
                View detailed approval &amp; implementation process
              </Link>
            </p>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section funding-main">
        <div className="container">
          {/* FLOW BAR */}
          <section
            id="flow"
            ref={flowRef}
            className={`funding-section-block funding-flow-block reveal-section ${
              flowVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">Funding Flow at a Glance</h3>
              <p className="funding-section-subtitle">
                The ACT project approval and implementation process is captured
                in six steps. Each call document will map directly onto this
                flow.
              </p>
            </div>

            <ol className="funding-flow-steps">
              <li className="funding-flow-step">
                <div className="funding-flow-circle">1</div>
                <h4>Read Call</h4>
                <p>
                  Download the call document, understand objectives, scope,
                  timelines, and specific rules.
                </p>
              </li>
              <li className="funding-flow-step">
                <div className="funding-flow-circle">2</div>
                <h4>Check Eligibility</h4>
                <p>
                  Confirm that your role (student / scholar / faculty) and team
                  composition match the call.
                </p>
              </li>
              <li className="funding-flow-step">
                <div className="funding-flow-circle">3</div>
                <h4>Prepare Proposal &amp; Budget</h4>
                <p>
                  Use ACT proposal format and financial assistance guidelines to
                  create a realistic plan.
                </p>
              </li>
              <li className="funding-flow-step">
                <div className="funding-flow-circle">4</div>
                <h4>Submit &amp; Internal Checks</h4>
                <p>
                  Submit via the notified channel. Applications are screened for
                  completeness and eligibility.
                </p>
              </li>
              <li className="funding-flow-step">
                <div className="funding-flow-circle">5</div>
                <h4>Evaluation &amp; Feedback</h4>
                <p>
                  The ACT committee uses a structured evaluation matrix and may
                  request clarifications or revisions.
                </p>
              </li>
              <li className="funding-flow-step">
                <div className="funding-flow-circle">6</div>
                <h4>Decision &amp; Project Start</h4>
                <p>
                  Sanction letter, budget release, recruitment (if relevant),
                  and project initiation as per process.
                </p>
              </li>
            </ol>
          </section>

          {/* CURRENT CALLS */}
          <section
            id="current-calls"
            ref={callsRef}
            className={`funding-section-block reveal-section ${
              callsVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">Current Funding Calls</h3>
              <p className="funding-section-subtitle">
                Overview of active or upcoming calls. Details, downloadable
                documents, and application links will be added when calls open.
              </p>
            </div>

            <div className="funding-calls-grid">
              <article className="funding-call-card card">
                <div className="funding-call-header">
                  <span className="funding-call-status funding-status-upcoming">
                    Upcoming
                  </span>
                  <p className="funding-call-tag">UG / PG Students</p>
                </div>
                <h4 className="funding-call-title">Student Seed Grant</h4>
                <p className="funding-call-text">
                  Small grants to support innovative student-led pilots and
                  experiments aligned with ACT themes.
                </p>
                <ul className="funding-call-meta">
                  <li>
                    <span>Max. funding:</span> To be updated
                  </li>
                  <li>
                    <span>Call window:</span> To be updated
                  </li>
                  <li>
                    <span>Mode:</span> Individual or interdisciplinary teams
                  </li>
                </ul>
                <button className="btn btn-secondary funding-call-btn" disabled>
                  Call details coming soon
                </button>
              </article>

              <article className="funding-call-card card">
                <div className="funding-call-header">
                  <span className="funding-call-status funding-status-upcoming">
                    Upcoming
                  </span>
                  <p className="funding-call-tag">Faculty / Research Fellows</p>
                </div>
                <h4 className="funding-call-title">
                  Interdisciplinary Collaboration Grant
                </h4>
                <p className="funding-call-text">
                  Support for multi-department projects that bring together
                  expertise across technology, cognition, environment, and
                  education.
                </p>
                <ul className="funding-call-meta">
                  <li>
                    <span>Max. funding:</span> To be updated
                  </li>
                  <li>
                    <span>Duration:</span> To be updated
                  </li>
                  <li>
                    <span>Team:</span> At least two departments encouraged
                  </li>
                </ul>
                <button className="btn btn-secondary funding-call-btn" disabled>
                  Call details coming soon
                </button>
              </article>
            </div>
          </section>

          {/* WHAT WE FUND */}
          <section
            id="what-we-fund"
            ref={whatRef}
            className={`funding-section-block funding-soft-block reveal-section ${
              whatVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">What ACT Can Fund</h3>
              <p className="funding-section-subtitle">
                A high-level view based on the ACT financial assistance and
                project implementation guidelines. Always refer to the specific
                call for exact rules.
              </p>
            </div>

            <div className="funding-what-grid">
              <div className="funding-what-card card">
                <h4>Eligible Support (Indicative)</h4>
                <ul>
                  <li>
                    Computing resources, essential software, and specific
                    subscriptions directly required for the project.
                  </li>
                  <li>
                    Hardware, sensors, and prototyping materials that remain
                    with the institute / ACT labs.
                  </li>
                  <li>
                    Data acquisition, fieldwork, and travel linked to research
                    questions and ethics approvals.
                  </li>
                  <li>
                    Student assistants, project staff, or fellows as per
                    recruitment process.
                  </li>
                  <li>
                    Printing, materials, and exhibition costs for public-facing
                    outputs and pilots.
                  </li>
                </ul>
              </div>

              <div className="funding-what-card card funding-what-card--muted">
                <h4>Typically Not Supported</h4>
                <ul>
                  <li>
                    General-purpose devices not justified by the project (e.g.
                    personal laptops, phones).
                  </li>
                  <li>
                    Routine operational expenses or items already covered by
                    departmental budgets.
                  </li>
                  <li>
                    Non-essential travel, honoraria, or hospitality not clearly
                    linked to project outcomes.
                  </li>
                  <li>
                    Long-term recurring subscriptions without clear exit plans.
                  </li>
                  <li>
                    Any expenditure not compliant with institute financial rules
                    and ACT guidelines.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* EVALUATION CRITERIA */}
          <section
            id="evaluation"
            ref={evalRef}
            className={`funding-section-block reveal-section ${
              evalVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">How Proposals Are Evaluated</h3>
              <p className="funding-section-subtitle">
                ACT uses an evaluation matrix so that all proposals are assessed
                consistently. The exact weights may differ by scheme.
              </p>
            </div>

            <div className="funding-eval-grid">
              <article className="funding-eval-card card">
                <h4>Key Dimensions (Indicative)</h4>
                <ul>
                  <li>
                    <strong>Relevance &amp; fit with ACT themes</strong> –
                    alignment with ACT focus areas and societal challenges.
                  </li>
                  <li>
                    <strong>Interdisciplinarity</strong> – meaningful
                    integration of methods, theories, and teams across domains.
                  </li>
                  <li>
                    <strong>Methodology &amp; feasibility</strong> – clarity of
                    plan, methods, timeline, and risk management.
                  </li>
                  <li>
                    <strong>Innovation &amp; potential impact</strong> – novelty
                    of idea, potential for real-world use or knowledge gain.
                  </li>
                  <li>
                    <strong>Team strength &amp; readiness</strong> – experience,
                    roles, and realistic workload distribution.
                  </li>
                </ul>
              </article>

              <article className="funding-eval-card card">
                <h4>Evaluation Matrix &amp; Process</h4>
                <p>
                  Reviewers score proposals using a structured evaluation matrix
                  which aggregates scores across the dimensions listed here.
                  Some calls may include presentations or interviews.
                </p>
                <p className="funding-eval-download">
                  <a
                    href="/docs/act-evaluation-matrix.pdf"
                    className="link-animated"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download evaluation matrix (PDF)
                  </a>
                </p>
                <p className="funding-eval-download">
                  <a
                    href="/docs/act-project-approval-process.pdf"
                    className="link-animated"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project approval &amp; implementation process
                  </a>
                </p>
              </article>
            </div>
          </section>

          {/* DOCUMENTS & TEMPLATES */}
          <section
            id="documents"
            ref={docsRef}
            className={`funding-section-block funding-soft-block reveal-section ${
              docsVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">
                Documents &amp; Official Templates
              </h3>
              <p className="funding-section-subtitle">
                Use only the latest versions of these documents when applying
                for ACT funding. Updated files will always be linked here.
              </p>
            </div>

            <div className="funding-docs-grid">
              <article className="funding-doc-card card">
                <h4>ACT Project Proposal Format</h4>
                <p>
                  Structure for problem statement, objectives, methodology,
                  team, budget, and timeline.
                </p>
                <a
                  href="/docs/act-proposal-format.docx"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download proposal template
                </a>
              </article>

              <article className="funding-doc-card card">
                <h4>Financial Assistance &amp; Budget Guidelines</h4>
                <p>
                  Rules for what can be supported, budget heads, and
                  documentation required for purchases.
                </p>
                <a
                  href="/docs/act-financial-assistance.pdf"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download financial assistance document
                </a>
              </article>

              <article className="funding-doc-card card">
                <h4>Evaluation Matrix</h4>
                <p>
                  Criteria and scoring sheet used by reviewers during
                  assessment.
                </p>
                <a
                  href="/docs/act-evaluation-matrix.pdf"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download evaluation matrix
                </a>
              </article>

              <article className="funding-doc-card card">
                <h4>Recruitment Process for Project Staff</h4>
                <p>
                  Process and safeguards for hiring research fellows / project
                  staff under ACT projects.
                </p>
                <a
                  href="/docs/act-recruitment-process.pdf"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download recruitment process
                </a>
              </article>

              <article className="funding-doc-card card">
                <h4>Timesheet Template</h4>
                <p>
                  Template for recording project staff time across work
                  packages, as required for reporting.
                </p>
                <a
                  href="/docs/act-timesheet-template.docx"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download timesheet
                </a>
              </article>

              <article className="funding-doc-card card">
                <h4>ACT Ideation Notes</h4>
                <p>
                  Collection of idea areas and prompts to help teams frame new
                  projects aligned with ACT themes.
                </p>
                <a
                  href="/docs/act-ideation-notes.docx"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download ideation notes
                </a>
              </article>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            ref={faqRef}
            className={`funding-section-block reveal-section ${
              faqVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">
                Frequently Asked Questions
              </h3>
              <p className="funding-section-subtitle">
                Common questions from students and researchers. Scheme-specific
                FAQs may appear inside each call document.
              </p>
            </div>

            <div className="funding-faq-grid">
              <article className="funding-faq-card card">
                <h4>Can I apply to more than one scheme?</h4>
                <p>
                  Rules for multiple applications will be mentioned in each
                  call. In general, you may submit to more than one scheme, but
                  only one project may be funded at a time for the same PI.
                </p>
              </article>

              <article className="funding-faq-card card">
                <h4>Do I need a faculty mentor?</h4>
                <p>
                  For most student schemes, a faculty mentor or supervisor is
                  mandatory. Faculty-led projects may require a small student
                  team depending on the call.
                </p>
              </article>

              <article className="funding-faq-card card">
                <h4>What if my proposal involves sensitive data or human participants?</h4>
                <p>
                  Projects involving human participants or sensitive data must
                  follow institute ethics and data protection guidelines. Some
                  calls may require ethics approval before fund release.
                </p>
              </article>

              <article className="funding-faq-card card">
                <h4>How will I know the status of my application?</h4>
                <p>
                  Shortlisted and selected applicants will be informed by email.
                  Key dates and outcomes may also be listed on this page.
                </p>
              </article>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact-funding"
            ref={contactRef}
            className={`funding-section-block funding-contact-block reveal-section ${
              contactVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-contact-card card">
              <h3>Need Help with Applications?</h3>
              <p>
                For questions related to eligibility, documentation, or
                technical issues with submission, please contact the ACT Centre
                office.
              </p>
              <ul>
                <li>
                  Email: <span>To be updated</span>
                </li>
                <li>
                  Office: <span>To be updated</span>
                </li>
                <li>
                  Office hours: <span>To be updated</span>
                </li>
              </ul>
              <p className="funding-contact-note">
                When writing to us, please mention the{" "}
                <strong>name of the call</strong> and your role (student, PhD,
                faculty, etc.) so we can respond quickly.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Funding;
