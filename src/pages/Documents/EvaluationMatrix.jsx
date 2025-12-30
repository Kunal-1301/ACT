import React from "react";
import { Link } from "react-router-dom";
import "./EvaluationMatrix.css";

const EvaluationMatrix = () => {
  return (
    <div className="doc-page">

      {/* HERO */}
      <section className="doc-hero">
        <div className="container doc-hero-layout">
          <div className="doc-hero-text">
            <p className="section-eyebrow">Evaluation Framework</p>
            <h1>ACT Project Evaluation Matrix</h1>
            <p className="doc-hero-subtitle">
              This matrix defines the criteria and scoring framework used by
              ACT Centre reviewers to evaluate research proposals in a
              transparent and consistent manner.
            </p>

            <a
              href="/docs/EvaluationMatrix.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Evaluation Matrix (PDF)
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

          {/* MAIN */}
          <article className="doc-main">

            <h2>Purpose of the Evaluation Matrix</h2>
            <p>
              The ACT Project Evaluation Matrix ensures that all proposals are
              assessed using a common set of criteria. Each proposal is scored
              across multiple dimensions that reflect ACT’s emphasis on
              transdisciplinary research, rigor, feasibility, and impact.
            </p>

            <h2>Evaluation Criteria Overview</h2>
            <p>
              Reviewers assign scores to each criterion based on alignment with
              the descriptors listed below. Scores are multiplied by the
              assigned weights to compute the final evaluation score.
            </p>

            <h3>1. Integration of Disciplines (Weight: 10)</h3>
            <ul>
              <li>Justification for adopting a transdisciplinary approach</li>
              <li>
                Clarity on how insights from different disciplines are
                integrated to address the research problem
              </li>
            </ul>

            <h3>2. Research Problem and Objectives (Weight: 6)</h3>
            <ul>
              <li>
                Well-defined research problem, research questions, and
                objectives
              </li>
              <li>
                Research questions complex enough to warrant collaboration
                across multiple disciplines
              </li>
            </ul>

            <h3>3. Methodological Rigor (Weight: 7)</h3>
            <ul>
              <li>Rigorous, comprehensive, and innovative methods</li>
              <li>Appropriateness of methods for each discipline involved</li>
              <li>
                Robust research design with transparent and replicable methods
              </li>
            </ul>

            <h3>4. Academic Relevance and Societal Impact (Weight: 5)</h3>
            <ul>
              <li>Relevance to an academic topic</li>
              <li>Addressing real-world challenges</li>
              <li>
                Potential to generate high-quality academic publications
              </li>
            </ul>

            <h3>
              5. Communication, Collaboration, and Dissemination (Weight: 6)
            </h3>
            <ul>
              <li>
                Conflict-resolution mechanisms and integration of diverse
                perspectives
              </li>
              <li>
                Strategy for dissemination across disciplines (publications,
                conferences, etc.)
              </li>
            </ul>

            <h3>6. Feasibility and Resources (Weight: 5)</h3>
            <ul>
              <li>
                Realistic assessment of feasibility, resources, and expertise
              </li>
              <li>
                Well-defined budget and timeline accounting for project
                complexity
              </li>
            </ul>

            <h3>7. Ethical Considerations (Weight: 5)</h3>
            <ul>
              <li>
                Assessment of ethical considerations, especially for sensitive
                data or populations
              </li>
              <li>
                Ethical guidelines ensuring participant consent and well-being
              </li>
            </ul>

            <h2>Scoring Scale</h2>
            <p>
              Each criterion is scored using an alignment-based scale. Higher
              alignment indicates stronger compliance with the criterion.
            </p>

            <ul>
              <li><strong>0</strong> — No alignment</li>
              <li><strong>1</strong> — Partial alignment</li>
              <li><strong>2</strong> — Strong alignment</li>
              <li><strong>3</strong> — Very strong alignment (where applicable)</li>
            </ul>

            <p className="doc-note">
              <strong>Total Score:</strong> The final evaluation score is
              computed out of 100 after applying criterion weights.
            </p>

            {/* PDF PREVIEW */}
            <section className="doc-pdf-preview">
              <h2>Official Evaluation Matrix (PDF Preview)</h2>
              <p className="doc-pdf-caption">
                This embedded preview shows the official ACT Evaluation Matrix
                used by reviewers. For reference or offline use, download the
                PDF version.
              </p>

              <iframe
                src="/docs/EvaluationMatrix.pdf"
                title="ACT Evaluation Matrix PDF"
                className="doc-pdf-embed"
              />
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="doc-sidebar">
            <div className="doc-sidebar-card">
              <h4>Quick Facts</h4>
              <p className="doc-meta">
                Applicable to: <strong>All ACT funding calls</strong>
              </p>
              <p className="doc-meta">
                Evaluation type: <strong>Internal review</strong>
              </p>

              <a
                href="/docs/EvaluationMatrix.pdf"
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

export default EvaluationMatrix;
