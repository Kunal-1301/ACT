import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Funding.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/**
 * Editable data structures:
 * - `callsData` : update titles, status, meta, files, CTA
 * - `docs` : update document labels + href
 *
 * This makes the page easier to maintain without changing JSX.
 */

const callsData = [
  {
    id: "student-seed-2025",
    status: "upcoming", // "open" | "upcoming" | "closed"
    audience: "UG / PG Students",
    title: "Student Seed Grant",
    description:
      "Small grants to support innovative student-led pilots and experiments aligned with ACT themes.",
    meta: {
      maxFunding: "To be updated",
      callWindow: "To be updated",
      mode: "Individual or interdisciplinary teams",
    },
    cta: {
      label: "Call details coming soon",
      href: null,
    },
  },
  {
    id: "interdisciplinary-collab-2025",
    status: "upcoming",
    audience: "Faculty / Research Fellows",
    title: "Interdisciplinary Collaboration Grant",
    description:
      "Support for multi-department projects that bring together expertise across technology, cognition, environment, and education.",
    meta: {
      maxFunding: "To be updated",
      duration: "To be updated",
      team: "At least two departments encouraged",
    },
    cta: {
      label: "Call details coming soon",
      href: null,
    },
  },
];

const docs = [
  {
    id: "proposal-format",
    title: "ACT Project Proposal Format",
    description:
      "Structure for problem statement, objectives, methodology, team, budget, and timeline.",
    href: "/docs/act-proposal-format.docx",
  },
  {
    id: "finance-guidelines",
    title: "Financial Assistance & Budget Guidelines",
    description:
      "Rules for what can be supported, budget heads, and documentation required for purchases.",
    href: "/docs/act-financial-assistance.pdf",
  },
  {
    id: "evaluation-matrix",
    title: "Evaluation Matrix",
    description: "Criteria and scoring sheet used by reviewers during assessment.",
    href: "/docs/act-evaluation-matrix.pdf",
  },
  {
    id: "recruitment-process",
    title: "Recruitment Process for Project Staff",
    description:
      "Process and safeguards for hiring research fellows / project staff under ACT projects.",
    href: "/docs/act-recruitment-process.pdf",
  },
  {
    id: "timesheet",
    title: "Timesheet Template",
    description:
      "Template for recording project staff time across work packages, as required for reporting.",
    href: "/docs/act-timesheet-template.docx",
  },
  {
    id: "ideation-notes",
    title: "ACT Ideation Notes",
    description:
      "Collection of idea areas and prompts to help teams frame new projects aligned with ACT themes.",
    href: "/docs/act-ideation-notes.docx",
  },
];

const Funding = () => {
  // small UI state: expand/collapse FAQ items (simple)
  const [openFaq, setOpenFaq] = useState(null);

  const { ref: heroTextRef, isVisible: heroTextVisible } = useRevealOnScroll();
  const { ref: heroSideRef, isVisible: heroSideVisible } = useRevealOnScroll();
  const { ref: flowRef, isVisible: flowVisible } = useRevealOnScroll();
  const { ref: callsRef, isVisible: callsVisible } = useRevealOnScroll();
  const { ref: whatRef, isVisible: whatVisible } = useRevealOnScroll();
  const { ref: evalRef, isVisible: evalVisible } = useRevealOnScroll();
  const { ref: docsRef, isVisible: docsVisible } = useRevealOnScroll();
  const { ref: faqRef, isVisible: faqVisible } = useRevealOnScroll();
  const { ref: contactRef, isVisible: contactVisible } = useRevealOnScroll();

  const toggleFaq = (key) => setOpenFaq(openFaq === key ? null : key);

  return (
    <div className="funding-page" id="funding">
      {/* HERO – Home/Research style */}
      <section className="section section--bg-tech funding-hero" aria-labelledby="funding-hero-title">
        <div className="container funding-hero-layout">
          <div
            ref={heroTextRef}
            className={`funding-hero-text reveal-section ${heroTextVisible ? "is-visible" : ""}`}
          >
            <p className="section-eyebrow funding-hero-eyebrow">Funding &amp; Applications</p>

            <h1 id="funding-hero-title" className="funding-hero-title">
              Support for Projects &amp; Research
            </h1>

            <p className="funding-hero-subtitle">
              ACT Centre provides competitive internal funding to help ideas move from{" "}
              <strong>early sketches and pilots to full projects</strong>. This page brings together calls,
              eligibility, process, and official templates in one place.
            </p>

            <div className="funding-hero-ctas">
              <a href="#current-calls" className="btn btn-primary">View Current Calls</a>

              <a
                href="/docs/act-proposal-format.docx"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
                aria-label="Download proposal template (opens in new tab)"
              >
                Download Proposal Template
              </a>
            </div>

            {/* Quick nav chips inside hero */}
            <div className="funding-quick-nav" aria-hidden>
              <a href="#flow" className="funding-chip">Funding Flow</a>
              <a href="#current-calls" className="funding-chip">Current Calls</a>
              <a href="#what-we-fund" className="funding-chip">What We Fund</a>
              <a href="#evaluation" className="funding-chip">Evaluation Criteria</a>
              <a href="#documents" className="funding-chip">Documents &amp; Templates</a>
              <a href="#faq" className="funding-chip">FAQs</a>
              <a href="#contact-funding" className="funding-chip">Contact</a>
            </div>
          </div>

          <aside
            ref={heroSideRef}
            className={`funding-hero-side card reveal-section ${heroSideVisible ? "is-visible" : ""}`}
            aria-labelledby="funding-side-title"
          >
            <div className="funding-hero-side-header">
              <p id="funding-side-title" className="funding-hero-side-label">One glance at the process</p>
              <p className="funding-hero-side-caption">
                From reading the call to project start, ACT follows a simple and transparent flow.
              </p>
            </div>

            <ol className="funding-hero-mini-flow" aria-hidden>
              <li>Read call &amp; check eligibility</li>
              <li>Prepare proposal &amp; budget</li>
              <li>Submit via the notified channel</li>
              <li>Evaluation by ACT panel</li>
              <li>Feedback &amp; decision</li>
              <li>Sanction, recruitment &amp; project start</li>
            </ol>

            <p className="funding-hero-side-link">
              <Link to="/processes" className="link-animated">View detailed approval &amp; implementation process</Link>
            </p>
          </aside>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section funding-main">
        <div className="container">
          {/* FLOW BAR */}
          <section id="flow" ref={flowRef} className={`funding-section-block funding-flow-block reveal-section ${flowVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">Funding Flow at a Glance</h3>
              <p className="funding-section-subtitle">
                The ACT project approval and implementation process is captured in six steps. Each call document will map directly onto this flow.
              </p>
            </div>

            <ol className="funding-flow-steps" aria-label="Funding flow steps">
              {[
                "Read Call",
                "Check Eligibility",
                "Prepare Proposal & Budget",
                "Submit & Internal Checks",
                "Evaluation & Feedback",
                "Decision & Project Start",
              ].map((t, i) => (
                <li key={t} className="funding-flow-step">
                  <div className="funding-flow-circle" aria-hidden>{i + 1}</div>
                  <h4>{t}</h4>
                  <p className="sr-only">{t} — step {i + 1}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* CURRENT CALLS — data-driven */}
          <section id="current-calls" ref={callsRef} className={`funding-section-block reveal-section ${callsVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">Current Funding Calls</h3>
              <p className="funding-section-subtitle">Overview of active or upcoming calls. Details, downloadable documents, and application links will be added when calls open.</p>
            </div>

            <div className="funding-calls-grid" role="list">
              {callsData.map((c) => (
                <article key={c.id} role="listitem" className="funding-call-card card" aria-labelledby={`${c.id}-title`}>
                  <div className="funding-call-header">
                    <span
                      className={`funding-call-status ${
                        c.status === "open" ? "funding-status-open" : c.status === "upcoming" ? "funding-status-upcoming" : "funding-status-closed"
                      }`}
                      aria-hidden
                    >
                      {c.status === "open" ? "Open" : c.status === "upcoming" ? "Upcoming" : "Closed"}
                    </span>

                    <p className="funding-call-tag">{c.audience}</p>
                  </div>

                  <h4 id={`${c.id}-title`} className="funding-call-title">{c.title}</h4>

                  <p className="funding-call-text">{c.description}</p>

                  <ul className="funding-call-meta" aria-hidden>
                    {Object.entries(c.meta).map(([k, v]) => (
                      <li key={k}>
                        <span>{k.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}:</span> {v}
                      </li>
                    ))}
                  </ul>

                  {c.cta && c.cta.href ? (
                    <a className="btn btn-primary funding-call-btn" href={c.cta.href}>
                      {c.cta.label}
                    </a>
                  ) : (
                    <button className="btn btn-secondary funding-call-btn" disabled>
                      {c.cta.label}
                    </button>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* WHAT WE FUND */}
          <section id="what-we-fund" ref={whatRef} className={`funding-section-block funding-soft-block reveal-section ${whatVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">What ACT Can Fund</h3>
              <p className="funding-section-subtitle">A high-level view based on the ACT financial assistance and project implementation guidelines. Always refer to the specific call for exact rules.</p>
            </div>

            <div className="funding-what-grid">
              <div className="funding-what-card card">
                <h4>Eligible Support (Indicative)</h4>
                <ul>
                  <li>Computing resources, essential software, and project-specific subscriptions.</li>
                  <li>Hardware, sensors, and prototyping materials that remain with the institute / ACT labs.</li>
                  <li>Data acquisition, fieldwork, and travel linked to research questions and ethics approvals.</li>
                  <li>Student assistants, project staff, or fellows as per recruitment process.</li>
                  <li>Printing, materials, and exhibition costs for public-facing outputs and pilots.</li>
                </ul>
              </div>

              <div className="funding-what-card card funding-what-card--muted">
                <h4>Typically Not Supported</h4>
                <ul>
                  <li>General-purpose devices not justified by the project (e.g. personal laptops).</li>
                  <li>Routine operational expenses or items already covered by departmental budgets.</li>
                  <li>Non-essential travel, honoraria, or hospitality not clearly linked to project outcomes.</li>
                  <li>Long-term recurring subscriptions without clear exit plans.</li>
                  <li>Any expenditure not compliant with institute financial rules and ACT guidelines.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EVALUATION */}
          <section id="evaluation" ref={evalRef} className={`funding-section-block reveal-section ${evalVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">How Proposals Are Evaluated</h3>
              <p className="funding-section-subtitle">ACT uses an evaluation matrix so that all proposals are assessed consistently. The exact weights may differ by scheme.</p>
            </div>

            <div className="funding-eval-grid">
              <article className="funding-eval-card card">
                <h4>Key Dimensions (Indicative)</h4>
                <ul>
                  <li><strong>Relevance &amp; fit with ACT themes</strong> – alignment with ACT focus areas and societal challenges.</li>
                  <li><strong>Interdisciplinarity</strong> – meaningful integration of methods, theories, and teams across domains.</li>
                  <li><strong>Methodology &amp; feasibility</strong> – clarity of plan, methods, timeline, and risk management.</li>
                  <li><strong>Innovation &amp; potential impact</strong> – novelty of idea, potential for real-world use or knowledge gain.</li>
                  <li><strong>Team strength &amp; readiness</strong> – experience, roles, and realistic workload distribution.</li>
                </ul>
              </article>

              <article className="funding-eval-card card">
                <h4>Evaluation Matrix &amp; Process</h4>
                <p>Reviewers score proposals using a structured evaluation matrix which aggregates scores across the dimensions listed here. Some calls may include presentations or interviews.</p>

                <p className="funding-eval-download">
                  <a href="/docs/act-evaluation-matrix.pdf" className="link-animated" target="_blank" rel="noreferrer">Download evaluation matrix (PDF)</a>
                </p>

                <p className="funding-eval-download">
                  <a href="/docs/act-project-approval-process.pdf" className="link-animated" target="_blank" rel="noreferrer">View project approval &amp; implementation process</a>
                </p>
              </article>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents" ref={docsRef} className={`funding-section-block funding-soft-block reveal-section ${docsVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">Documents &amp; Official Templates</h3>
              <p className="funding-section-subtitle">Use only the latest versions of these documents when applying for ACT funding. Updated files will always be linked here.</p>
            </div>

            <div className="funding-docs-grid" role="list">
              {docs.map((d) => (
                <article key={d.id} role="listitem" className="funding-doc-card card">
                  <h4>{d.title}</h4>
                  <p>{d.description}</p>
                  <a href={d.href} className="btn btn-secondary" target="_blank" rel="noreferrer">
                    Download
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" ref={faqRef} className={`funding-section-block reveal-section ${faqVisible ? "is-visible" : ""}`}>
            <div className="funding-section-header">
              <h3 className="funding-section-title">Frequently Asked Questions</h3>
              <p className="funding-section-subtitle">Common questions from students and researchers. Scheme-specific FAQs may appear inside each call document.</p>
            </div>

            <div className="funding-faq-grid" role="list">
              {[
                {
                  q: "Can I apply to more than one scheme?",
                  a: "Rules for multiple applications will be mentioned in each call. In general, you may submit to more than one scheme, but only one project may be funded at a time for the same PI.",
                },
                {
                  q: "Do I need a faculty mentor?",
                  a: "For most student schemes, a faculty mentor or supervisor is mandatory. Faculty-led projects may require a small student team depending on the call.",
                },
                {
                  q: "What if my proposal involves sensitive data or human participants?",
                  a: "Projects involving human participants or sensitive data must follow institute ethics and data protection guidelines. Some calls may require ethics approval before fund release.",
                },
                {
                  q: "How will I know the status of my application?",
                  a: "Shortlisted and selected applicants will be informed by email. Key dates and outcomes may also be listed on this page.",
                },
              ].map((f, i) => (
                <article key={i} className="funding-faq-card card" role="listitem">
                  <h4>
                    <button
                      type="button"
                      className="link-animated"
                      aria-expanded={openFaq === i}
                      onClick={() => toggleFaq(i)}
                    >
                      {f.q}
                    </button>
                  </h4>
                  {openFaq === i && <p>{f.a}</p>}
                </article>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact-funding" ref={contactRef} className={`funding-section-block funding-contact-block reveal-section ${contactVisible ? "is-visible" : ""}`}>
            <div className="funding-contact-card card">
              <h3>Need Help with Applications?</h3>
              <p>For questions related to eligibility, documentation, or technical issues with submission, please contact the ACT Centre office.</p>
              <ul>
                <li>Email: <span>To be updated</span></li>
                <li>Office: <span>To be updated</span></li>
                <li>Office hours: <span>To be updated</span></li>
              </ul>
              <p className="funding-contact-note">When writing to us, please mention the <strong>name of the call</strong> and your role (student, PhD, faculty, etc.) so we can respond quickly.</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Funding;
