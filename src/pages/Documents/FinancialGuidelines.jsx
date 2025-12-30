import React from "react";
import { Link } from "react-router-dom";
import "./FinancialGuidelines.css";

const FinancialGuidelines = () => {
  return (
    <div className="doc-page">

      {/* HERO */}
      <section className="doc-hero">
        <div className="container doc-hero-layout">
          <div className="doc-hero-text">
            <p className="section-eyebrow">Financial Guidelines</p>
            <h1>Financial Assistance & Budget Guidelines</h1>
            <p className="doc-hero-subtitle">
              This document outlines the types of financial support that may be
              requested under ACT projects, along with conditions, limitations,
              and cost-optimisation principles.
            </p>

            <a
              href="/docs/FinancialGuidelines.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Financial Guidelines (PDF)
            </a>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="doc-hero-image placeholder-box">
            <span>Image placeholder</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="doc-content">
        <div className="container doc-layout">

          {/* MAIN CONTENT */}
          <article className="doc-main">

            <h2>Purpose of Financial Assistance Guidelines</h2>
            <p>
              The ACT Centre provides financial assistance to support essential
              resources required for approved research projects. These
              guidelines ensure transparency, fiscal responsibility, and
              alignment with institute norms.
            </p>

            <h2>Eligible Financial Support</h2>

            <h3>Manpower</h3>
            <ul>
              <li>Hiring of JRF/SRF as per institute norms</li>
              <li>Salaries governed by approved institutional pay structures</li>
            </ul>

            <h3>Computing Resources</h3>
            <ul>
              <li>
                Applicants must prioritise the use of existing institutional
                lab resources
              </li>
              <li>
                New computing resources should be requested only when
                unavoidable
              </li>
            </ul>

            <h3>Software</h3>
            <ul>
              <li>
                Funding permitted only for essential software with detailed
                justification
              </li>
              <li>
                Open-source or free alternatives must be explored and preferred
              </li>
              <li>
                Commercial software requests must specify functionality,
                benefits, and cost
              </li>
              <li>
                Licensed audio/video editors may be requested only if no
                suitable open-source option exists
              </li>
            </ul>

            <h3>Hardware Equipment</h3>
            <ul>
              <li>
                Funding allowed only for essential, project-specific equipment
              </li>
              <li>
                Each item must directly support stated research objectives
              </li>
              <li>
                Applicants are encouraged to use equipment available in other
                departments or labs wherever possible
              </li>
            </ul>

            <h3>Subscriptions</h3>
            <ul>
              <li>
                Software subscriptions (including ChatGPT) allowed only when no
                open-source alternative exists
              </li>
              <li>
                Subscriptions to tools such as Zoom or similar platforms are not
                permitted
              </li>
              <li>
                Google Meet should be used for video conferencing needs
              </li>
            </ul>

            <h3>Datasets</h3>
            <ul>
              <li>
                Library resources must be explored before requesting dataset
                purchases
              </li>
              <li>
                Funding for paid datasets requires written confirmation from
                the library regarding non-availability of alternatives
              </li>
            </ul>

            <h3>Online Dataset Subscriptions</h3>
            <ul>
              <li>
                Same rules apply as for dataset purchases
              </li>
              <li>
                Library and open-source options must be prioritised
              </li>
            </ul>

            <h3>Travel for Data Collection</h3>
            <ul>
              <li>
                Detailed travel plan must be provided, including locations and
                purpose
              </li>
              <li>
                On-site data collection must be justified
              </li>
              <li>
                Travel expenses must be limited to a reasonable percentage of
                the total project budget
              </li>
              <li>
                Travel grants are strictly limited to data collection or
                resource acquisition
              </li>
            </ul>

            <h3>Books</h3>
            <ul>
              <li>
                Books should be purchased online where available at lower cost
              </li>
              <li>
                All purchased books must be donated to the TSLAS library upon
                project completion
              </li>
            </ul>

            <h3>Additional Resources</h3>
            <ul>
              <li>
                Subject hiring, website domain and space purchase, and JRF/SRF
                salaries are covered under ACT assistance
              </li>
            </ul>

            <h2>Important Notes</h2>
            <ul>
              <li>
                Requests must focus only on essential resources
              </li>
              <li>
                Cost-effective and open-source solutions must be prioritised
              </li>
              <li>
                All special requests must include detailed justification and
                supporting evidence
              </li>
              <li>
                No financial support is provided for open-access or conference
                publication fees
              </li>
            </ul>

            <p className="doc-note">
              <strong>Note:</strong> Non-compliant or insufficiently justified
              budget requests may be reduced or rejected during evaluation.
            </p>

            {/* PDF PREVIEW */}
            <section className="doc-pdf-preview">
              <h2>Official Financial Assistance Document (PDF Preview)</h2>
              <p className="doc-pdf-caption">
                This embedded preview shows the official ACT Financial
                Assistance guidelines. Applicants should always refer to the
                PDF for the most up-to-date version.
              </p>

              <iframe
                src="/docs/FinancialGuidelines.pdf"
                title="ACT Financial Assistance Guidelines PDF"
                className="doc-pdf-embed"
              />
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="doc-sidebar">
            <div className="doc-sidebar-card">
              <h4>Quick Facts</h4>
              <p className="doc-meta">
                Applicable to: <strong>All ACT-funded projects</strong>
              </p>
              <p className="doc-meta">
                Category: <strong>Financial & Budgeting</strong>
              </p>

              <a
                href="/docs/FinancialGuidelines.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
            </div>

            <div className="doc-sidebar-image placeholder-box">
              <span>Image placeholder</span>
            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER */}
      <section className="doc-footer">
        <div className="container">
          <Link to="/funding" className="link-animated">
            ← Back to Funding
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FinancialGuidelines;
