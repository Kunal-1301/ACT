import React from "react";
import { Link } from "react-router-dom";
import "./ProjectApprovalProcess.css";

const ProjectApprovalProcess = () => {
  return (
    <div className="doc-page">

      {/* HERO */}
      <section className="doc-hero">
        <div className="container doc-hero-layout">
          <div className="doc-hero-text">
            <p className="section-eyebrow">Approval & Implementation</p>
            <h1>Project Proposal Approval & Implementation Process</h1>
            <p className="doc-hero-subtitle">
              This document outlines the sequential steps followed by the ACT
              Centre after a project proposal is accepted, from feedback and
              budget approval to implementation and procurement.
            </p>

            <a
              href="/docs/act-project-approval-process.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Download Process Document (PDF)
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
              Once a project proposal is accepted by the ACT Centre, it goes
              through a structured approval and implementation workflow. This
              process ensures clarity, accountability, and compliance with
              institutional norms.
            </p>

            <h2>Step-by-Step Approval & Implementation Process</h2>

            <h3>1. Notification of Acceptance</h3>
            <p>
              The ACT Centre committee formally notifies the Principal
              Investigators (PIs) regarding the acceptance of their project
              proposals.
            </p>
            <p>
              A meeting is subsequently convened to discuss project objectives,
              financial aspects, and any feedback or suggestions from the
              committee.
            </p>

            <h3>2. Incorporation of Feedback</h3>
            <p>
              Following the meeting, PIs are required to revise and resubmit
              their project proposals, incorporating all feedback and
              recommendations provided by the committee.
            </p>

            <h3>3. Budget Finalisation</h3>
            <p>
              A consolidated report containing detailed budget information for
              all recommended projects is prepared by the ACT Centre.
            </p>

            <h3>4. Approval by the Director</h3>
            <p>
              The consolidated report is forwarded to the Director for review,
              approval, and formal sanctioning of the projects.
            </p>

            <h3>5. Fund Allocation and Sanction Letter</h3>
            <p>
              Upon approval of the budget by the Director, a formal sanction
              letter is issued to the PIs, officially allocating funds for the
              project.
            </p>

            <h3>6. Recruitment of Junior Research Fellows (JRF)</h3>
            <p>
              After receiving the sanction letter, PIs may proceed with the
              recruitment of Junior Research Fellows (JRFs).
            </p>
            <p>
              All recruitment must strictly follow the ACT Centre’s recruitment
              policies and guidelines to ensure procedural compliance.
            </p>

            <h3>7. Attendance Sharing</h3>
            <p>
              Attendance records of JRFs/SRFs are shared with the Finance
              Department through the ACT Centre to facilitate smooth financial
              processing.
            </p>

            <h3>8. Procurement of Equipment and Consumables</h3>
            <p>
              Procurement of equipment and consumables must follow the standard
              institute procurement guidelines and procedures.
            </p>
            <p>
              This ensures transparency, accountability, and compliance with
              institutional policies.
            </p>

            <h3>9. Ownership of Purchased Equipment</h3>
            <p>
              All equipment purchased using ACT funds shall remain the property
              of the ACT Centre.
            </p>

            <p className="doc-note">
              <strong>Important:</strong> Any deviation from the approved
              process or procurement guidelines may delay fund disbursement or
              project implementation.
            </p>

            {/* PDF PREVIEW */}
            <section className="doc-pdf-preview">
              <h2>Official Approval & Implementation Process (PDF Preview)</h2>
              <p className="doc-pdf-caption">
                This embedded preview shows the official ACT document governing
                project approval and implementation.
              </p>

              <iframe
                src="/docs/ProjectApprovalProcess.pdf"
                title="ACT Project Approval and Implementation Process PDF"
                className="doc-pdf-embed"
              />
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="doc-sidebar">
            <div className="doc-sidebar-card">
              <h4>Quick Facts</h4>
              <p className="doc-meta">
                Applies after: <strong>Project acceptance</strong>
              </p>
              <p className="doc-meta">
                Oversight by: <strong>ACT Centre & Director</strong>
              </p>

              <a
                href="/docs/act-project-approval-process.pdf"
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

export default ProjectApprovalProcess;
