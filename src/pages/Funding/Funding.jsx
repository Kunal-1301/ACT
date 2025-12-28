import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Funding.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

/* ================================
   DATA (UNCHANGED)
   ================================ */

const callsData = [
  {
    id: "student-seed-2025",
    status: "upcoming",
    audience: "UG Students",
    title: "Student Project Grant (Interships) ",
    description:
      "Small grants to support innovative student-led pilots and experiments aligned with ACT themes.",
    meta: {
      maxFunding: "As Per Institute Norms",
      callWindow: "Closed",
    },
    cta: {
      label: "Call details coming soon",
      href: null,
    },
  },
  {
    id: "interdisciplinary-collab-2025",
    status: "upcoming",
    audience: "Faculty ",
    title: "Transdisciplinary Project Grant",
    description:
      "Support for multi-department projects that bring together expertise across technology, cognition, environment, and education.",
    meta: {
      maxFunding: "12.50 Lacs",
      duration: "Initally granted for two years",
      team: "Collaboration between atleast three departments mandatory",
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
    slug: "/documents/proposal-format",
    image: "/media/docs/proposal.png",
  },
  {
    id: "finance-guidelines",
    title: "Financial Assistance & Budget Guidelines",
    description:
      "Rules for what can be supported, budget heads, and documentation required for purchases.",
    slug: "/documents/financial-guidelines",
    image: "/media/docs/finance.png",
  },
  {
    id: "evaluation-matrix",
    title: "Evaluation Matrix",
    description:
      "Criteria and scoring sheet used by reviewers during assessment.",
    slug: "/documents/evaluation-matrix",
    image: "/media/docs/evaluation.png",
  },
  {
    id: "recruitment-process",
    title: "Recruitment Process for Project Staff",
    description:
      "Process and safeguards for hiring research fellows / project staff under ACT projects.",
    slug: "/documents/recruitment-process",
    image: "/media/docs/recruitment.png",
  },
  {
    id: "timesheet",
    title: "ProjectApprovalProcess",
    description:
      "Template for recording project staff time across work packages.",
    slug: "/documents/project-approval-process",
    image: "/media/docs/timesheet.png",
  },
  {
    id: "ideation-notes",
    title: "ACT Ideation Notes",
    description:
      "Idea areas and prompts to help teams frame new projects aligned with ACT themes.",
    slug: "/documents/ideation-notes",
    image: "/media/docs/ideation.png",
  },
];

/* ================================
   COMPONENT
   ================================ */

const Funding = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [heroSideRef, heroSideVisible] = useRevealOnScroll();
  const [flowRef, flowVisible] = useRevealOnScroll();
  const [callsRef, callsVisible] = useRevealOnScroll();
  const [whatRef, whatVisible] = useRevealOnScroll();
  const [evalRef, evalVisible] = useRevealOnScroll();
  const [docsRef, docsVisible] = useRevealOnScroll();
  const [faqRef, faqVisible] = useRevealOnScroll();
  const [contactRef, contactVisible] = useRevealOnScroll();

  return (
    <main className="funding-page" id="funding">
      {/* ================= HERO ================= */}
      <section className="section funding-hero">
        <img
          src="/media/hero-campus-1600.jpg"
          alt=""
          aria-hidden="true"
          className="funding-hero-bg"
        />
        <div className="funding-hero-overlay" />

        <div className="container funding-hero-layout">
          <div
            ref={heroTextRef}
            className={`funding-hero-text ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <h1 className="funding-hero-title">
              Support for Projects &amp; Research
            </h1>

            <p className="funding-hero-subtitle">
              ACT Centre provides competitive internal funding to help
              transdisciplinary ideas move from{" "}
              <strong>early sketches and pilots to full projects</strong>.
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
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="section funding-main">
        <div className="container">
          {/* FLOW */}
          <section
            ref={flowRef}
            className={`funding-section-block ${
              flowVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="funding-section-title">
              Funding Flow at a Glance
            </h3>

            <ol className="funding-flow-steps">
              {[
                "Call For Proposal ->",
                "Submission Closed ->",
                "Elibility Check For Transdisciplinary Approach ->",
                "Evaluation & Feedback ->",
                "Presentation ->",
                "Decision & Project Sanction",
              ].map((t, i) => (
                <li key={i} className="funding-flow-step">
                  <div className="funding-flow-circle">{i + 1}</div>
                  <h4>{t}</h4>
                </li>
              ))}
            </ol>
          </section>

          {/* CALLS */}
          <section
            id="current-calls"
            ref={callsRef}
            className={`funding-section-block ${
              callsVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="funding-section-title">Current Funding Calls</h3>

            <div className="funding-calls-grid">
              {callsData.map((c) => (
                <article key={c.id} className="funding-call-card card">
                  <div className="funding-call-header">
                    <span
                      className={`funding-call-status funding-status-${c.status}`}
                    >
                      {c.status}
                    </span>
                    <p className="funding-call-tag">{c.audience}</p>
                  </div>

                  <h4 className="funding-call-title">{c.title}</h4>
                  <p className="funding-call-text">{c.description}</p>

                  <ul className="funding-call-meta">
                    {Object.entries(c.meta).map(([k, v]) => (
                      <li key={k}>
                        <span>{k}:</span> {v}
                      </li>
                    ))}
                  </ul>

                  <button
                    className="btn btn-secondary funding-call-btn"
                    disabled
                  >
                    {c.cta.label}
                  </button>
                </article>
              ))}
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
                    Computing resources, essential software, and
                    project-specific subscriptions.
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
                    personal laptops).
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

          {/* EVALUATION */}
          <section
            id="evaluation"
            ref={evalRef}
            className={`funding-section-block reveal-section ${
              evalVisible ? "is-visible" : ""
            }`}
          >
            <div className="funding-section-header">
              <h3 className="funding-section-title">
                How Proposals Are Evaluated
              </h3>
              <p className="funding-section-subtitle">
                ACT uses an evaluation matrix so that all proposals are assessed
                consistently. The exact weights may differ by scheme.
              </p>
            </div>

            <div className="funding-eval-grid">
              <article className="funding-eval-card card">
                <h4>Evaluation Parameters</h4>

                <ul className="funding-eval-list">
                  <li>Integration of Disciplines</li>
                  <li>Research Problem and Objectives</li>
                  <li>Methodological Rigor</li>
                  <li>Academic Relevance and Societal Impact</li>
                  <li>
                    Effective Communication and Collaboration Plan and Effective
                    Dissemination
                  </li>
                  <li>Feasibility and Resources</li>
                  <li>Ethical Considerations</li>
                </ul>

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

          {/* DOCUMENTS */}
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

            <div className="funding-docs-grid" role="list">
              {docs.map((d) => (
                <article
                  key={d.id}
                  role="listitem"
                  className="funding-doc-card card"
                >
                  <div className="funding-doc-image">
                    <img src={d.image} alt="" aria-hidden />
                  </div>

                  <div className="funding-doc-content">
                    <h4>{d.title}</h4>
                    <p>{d.description}</p>

                    <Link
                      to={d.slug}
                      className="btn btn-secondary"
                      aria-label={`View details for ${d.title}`}
                    >
                      View details
                    </Link>
                  </div>
                </article>
              ))}
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
                <article
                  key={i}
                  className="funding-faq-card card"
                  role="listitem"
                >
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
                  Email: <span>act@thapar.edu</span>
                </li>
                <li>
                  Office: <span>ACT Lab, First Floor, TSLAS.</span>
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
    </main>
  );
};

export default Funding;
