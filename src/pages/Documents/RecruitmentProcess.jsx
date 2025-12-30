import React from "react";
import { Link } from "react-router-dom";
import "./RecruitmentProcess.css";

const RecruitmentProcess = () => {
  return (
    <div className="doc-page">

      {/* HERO */}
      <section className="doc-hero">
        <div className="container doc-hero-layout">
          <div className="doc-hero-text">
            <p className="section-eyebrow">Process & Governance</p>
            <h1>Recruitment Process for Research Fellows</h1>
            <p className="doc-hero-subtitle">
              This document outlines the transparent and ethical process
              followed by the ACT Centre for recruiting Research Fellows
              under funded projects.
            </p>

            <a
              href="/docs/ProcessRecruitment.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Recruitment Process (PDF)
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

            <h2>Overview</h2>
            <p>
              The ACT Centre follows a structured recruitment process to ensure
              fairness, transparency, and academic integrity in the hiring of
              Research Fellows. All appointments are governed by institutional
              norms and ethical safeguards.
            </p>

            <h2>Step 1: Constitution of the Recruitment Committee</h2>
            <p>
              A Recruitment Committee must be formed for each hiring process.
              The committee shall consist of the following members:
            </p>
            <ul>
              <li>Chair, ACT Centre</li>
              <li>Centre Coordinators</li>
              <li>One External Member</li>
              <li>Principal Investigator (PI) / Co-PI</li>
            </ul>

            <h2>Step 2: Call for Applications</h2>
            <p>
              The position must be widely advertised by the PI through
              appropriate channels to ensure broad visibility.
            </p>
            <ul>
              <li>Institutional website</li>
              <li>Academic portals</li>
              <li>Relevant professional networks</li>
            </ul>

            <h3>Job Posting Requirements</h3>
            <ul>
              <li>Clear job description</li>
              <li>Minimum qualification requirements</li>
              <li>Required research experience</li>
              <li>Preferred areas of expertise (if any)</li>
            </ul>

            <h3>Application Materials</h3>
            <ul>
              <li>Curriculum Vitae (CV)</li>
              <li>Copies of academic transcripts</li>
              <li>
                Applications must be submitted via email to the PI with a copy
                to <strong>act@thapar.edu</strong>
              </li>
            </ul>

            <h2>Step 3: Conflict of Interest Policy</h2>
            <p>
              All committee members are required to declare any potential
              conflicts of interest before the selection process begins.
            </p>
            <p>
              Conflicts may arise if an applicant is a family member, close
              friend, former colleague, or any individual with whom the
              committee member has a vested interest.
            </p>

            <h3>Recusal and Documentation</h3>
            <ul>
              <li>
                Committee members with a declared conflict must recuse
                themselves from the review, interview, and selection process
              </li>
              <li>
                All declarations and recusals must be formally documented
              </li>
              <li>
                Documentation is submitted to HR for institutional records
              </li>
            </ul>

            <h2>Step 4: Interview Process</h2>
            <p>
              Shortlisted candidates are interviewed by the full Recruitment
              Committee through a panel interview process.
            </p>

            <h3>Assessment Criteria</h3>
            <ul>
              <li>Research competency</li>
              <li>Communication and presentation skills</li>
              <li>Ethical conduct in research</li>
            </ul>

            <h2>Step 5: Decision and Recommendations</h2>
            <p>
              Based on the interviews and assessments, the committee makes a
              final recommendation for selected candidate(s).
            </p>
            <p>
              These recommendations are forwarded to the Human Resources (HR)
              department for approval.
            </p>

            <h2>Step 6: Restrictions on Recruitment of Next of Kin</h2>
            <p>
              The recruitment of next of kin of PIs, Co-PIs, or committee
              members is strictly prohibited.
            </p>
            <p>
              Next of kin includes immediate family members such as:
            </p>
            <ul>
              <li>Spouse</li>
              <li>Siblings</li>
              <li>Children</li>
              <li>In-laws</li>
            </ul>

            <h2>Final Offer and Appointment</h2>
            <p>
              Upon HR approval, the final offer of appointment is issued to
              the selected candidate(s) in accordance with institutional
              procedures.
            </p>

            <p className="doc-note">
              <strong>Note:</strong> Any deviation from the prescribed process
              may result in the rejection of the recruitment request.
            </p>

            {/* PDF PREVIEW */}
            <section className="doc-pdf-preview">
              <h2>Official Recruitment Process (PDF Preview)</h2>
              <p className="doc-pdf-caption">
                This embedded preview shows the official ACT Recruitment
                Process document used for project staff hiring.
              </p>

              <iframe
                src="/docs/ProcessRecruitment.pdf"
                title="ACT Recruitment Process PDF"
                className="doc-pdf-embed"
              />
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="doc-sidebar">
            <div className="doc-sidebar-card">
              <h4>Quick Facts</h4>
              <p className="doc-meta">
                Applicable to: <strong>Research Fellows / Project Staff</strong>
              </p>
              <p className="doc-meta">
                Governed by: <strong>ACT Centre & HR</strong>
              </p>

              <a
                href="/docs/ProcessRecruitment.pdf"
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

export default RecruitmentProcess;
