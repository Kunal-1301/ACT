import React from "react";
import { Link } from "react-router-dom";
import "./ProposalFormat.css";

const ProposalFormat = () => {
  return (
    <div className="doc-page">
      {/* HERO */}
      <section className="doc-hero">
        <div className="container doc-hero-layout">
          <div className="doc-hero-text">
            <p className="section-eyebrow">Official Template</p>
            <h1>ACT Project Proposal Format</h1>
            <p className="doc-hero-subtitle">
              This document outlines the mandatory structure and content
              requirements for submitting a transdisciplinary research proposal
              to the ACT Centre.
            </p>

            <a
              href="/docs/ProposalFormat.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Proposal Template
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
            <h2>Proposal Structure</h2>
            <p>
              All proposals submitted to the ACT Centre must strictly follow the
              structure outlined below. Each section has an indicated word
              limit, which must be adhered to.
            </p>

            <h3>1. Title of the Proposal</h3>
            <p>
              Provide a clear and concise title that reflects the core idea and
              interdisciplinary nature of the proposed research.
            </p>

            <h3>2. Abstract (250 words)</h3>
            <p>
              A brief summary of the proposal, including the research problem,
              approach, and expected outcomes.
            </p>

            <h3>3. Background (250 words)</h3>
            <p>
              Contextualise the research problem by discussing existing
              literature, gaps, and motivation for the study.
            </p>

            <h3>4. Interdisciplinarity (500 words)</h3>
            <p>
              Clearly explain how multiple disciplines are integrated within the
              project and how this integration adds value to the research.
            </p>

            <h3>5. Objectives (500 words)</h3>
            <p>
              List clearly defined objectives that the project aims to achieve.
            </p>

            <h3>6. Methodology (Max. 2000 words)</h3>
            <p>
              Describe the research design, methods, tools, and processes that
              will be used to achieve the stated objectives.
            </p>

            <h3>7. Academic Relevance and Societal Impact (500 words)</h3>
            <p>
              Explain the academic contribution and the broader societal
              relevance of the proposed research.
            </p>

            <h3>8. Timeline</h3>
            <p>
              Provide an objective-wise Gantt chart indicating milestones at
              half-year intervals.
            </p>

            <h3>9. Financial Support</h3>
            <p>Outline the funding requirements and budget allocation.</p>

            <h3>10. Dissemination Plan (300 words)</h3>
            <p>
              Describe how the research findings will be disseminated through
              publications, conferences, exhibitions, or other platforms.
            </p>

            <h3>11. Sample Size (if applicable)</h3>
            <p>
              Required only for projects involving clinical validation or human
              participants.
            </p>

            <h3>12. Ethical Statement</h3>
            <p>
              Clearly state ethical considerations and compliance with relevant
              guidelines.
            </p>

            <h3>13. Effect on the Environment</h3>
            <p>Discuss any environmental impact arising from the project.</p>

            <h3>14. Details of Team Members</h3>
            <ul>
              <li>Name, email, and contact details</li>
              <li>Home department or school</li>
              <li>Best 5 journal publications (Q1/Q2/Q3, last 5 years)</li>
              <li>Best 5 conference publications (last 5 years)</li>
              <li>Other scholarly or creative outputs (as applicable)</li>
            </ul>

            <h2>Formatting Guidelines</h2>
            <ul>
              <li>Font type: Cambria</li>
              <li>Font size: 12</li>
              <li>Strict adherence to word limits is mandatory</li>
            </ul>

            <p className="doc-note">
              <strong>Note:</strong> Proposals that do not follow the prescribed
              format and word limits will be returned for resubmission.
            </p>
          </article>

          {/* PDF PREVIEW */}
          <section className="doc-pdf-preview">
            <h2>Official Proposal Format (PDF Preview)</h2>
            <p className="doc-pdf-caption">
              This is a preview of the official ACT Project Proposal Format. For
              submission, please use the downloadable template.
            </p>

            <iframe
              src="/docs/ProposalFormat.pdf"
              title="ACT Project Proposal Format PDF"
              className="doc-pdf-embed"
            />
          </section>

          {/* SIDEBAR */}
          <aside className="doc-sidebar">
            <div className="doc-sidebar-card">
              <h4>Quick Actions</h4>
              <a
                href="/docs/ProposalFormat.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download Template
              </a>

              <p className="doc-meta">
                Applicable to:{" "}
                <strong>Faculty, Research Fellows, Students</strong>
              </p>

              <p className="doc-meta">
                Document type: <strong>Proposal Format</strong>
              </p>
            </div>

            <div className="doc-sidebar-image placeholder-box">
              <span>Image placeholder</span>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER CTA */}
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

export default ProposalFormat;
