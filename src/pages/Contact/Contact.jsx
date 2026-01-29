import React, { useState } from "react";
import "./Contact.css";
import "../People/People.css"; // Import People styles for engaging section
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { Link } from "react-router-dom";

const Contact = () => {
  /* ================================
     REVEAL HOOKS (TUPLE-BASED)
     ================================ */

  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [locationRef, locationVisible] = useRevealOnScroll();
  const [contactsRef, contactsVisible] = useRevealOnScroll();
  const [engagingRef, engagingVisible] = useRevealOnScroll();
  const [formRef, formVisible] = useRevealOnScroll();

  /* ================================
     FORM STATE MANAGEMENT
     ================================ */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    topic: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Using Web3Forms - Replace 'YOUR_ACCESS_KEY_HERE' with actual access key
      // Get free access key from https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          role: formData.role,
          topic: formData.topic,
          message: formData.message,
          subject: `ACT Centre Contact Form - ${formData.topic || 'General Enquiry'}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        // Reset form
        setFormData({
          name: "",
          email: "",
          role: "",
          topic: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="contact-page" id="contact">
      {/* HERO – CAMPUS BACKGROUND */}
      <section className="page-hero section--bg-campus">
        <img
          src="/media/contact.png"
          alt=""
          aria-hidden="true"
          className="page-hero-bg"
        />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-layout">
          <div className="contact-hero-text">
            <h1 className="page-hero-title hero-animate hero-delay-2">Contact the ACT Centre</h1>
            <p className="page-hero-subtitle hero-animate hero-delay-3">
              Whether you are a <strong>student</strong>,{" "}
              <strong>faculty member</strong>, or{" "}
              <strong>external collaborator</strong>, this page is your starting
              point to reach the ACT Centre.
            </p>
            <p className="page-hero-subtitle secondary hero-animate hero-delay-4">
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
          {/* LOCATION / MAP SECTION */}
          <section
            id="map"
            ref={locationRef}
            className={`contact-block contact-block-soft reveal-section ${locationVisible ? "is-visible" : ""
              }`}
          >
            <div className="contact-block-header">
              <h2 className="contact-block-title">Location on Campus</h2>
            </div>

            <div className="contact-map-container">
              <iframe
                src="https://maps.google.com/maps?q=30.356409,76.372170&z=15&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ACT Centre Location - Thapar Institute"
              />
            </div>
          </section>

          {/* CONTACT CARDS */}
          <section
            ref={contactsRef}
            className={`contact-block reveal-section ${contactsVisible ? "is-visible" : ""
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
              <article className="contact-card card card-tint-blue">
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
                      Email: <span>act@thapar.edu</span>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="contact-card card card-tint-green">
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
                      Email: <span>act@thapar.edu</span>
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

              <article className="contact-card card card-tint-violet">
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
                      Email: <span>act@thapar.edu</span>
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

          {/* ENGAGING WITH ACT */}
          <section
            ref={engagingRef}
            className={`contact-block contact-block-band reveal-section ${engagingVisible ? "is-visible" : ""
              }`}
          >
            <div className="people-block-header">
              <h2 className="people-block-title">Engaging with ACT</h2>
              <p className="people-block-subtitle">
                Opportunities to collaborate, contribute, and participate in
                ACT initiatives.
              </p>
            </div>

            <div className="people-join-grid">
              <article className="people-join-card card card-tint-blue">
                <h3>Students</h3>
                <p>
                  Participate through funded projects, internships, and
                  research-driven learning opportunities.
                </p>
                <Link to="/funding" className="btn btn-secondary mt-auto">
                  Student opportunities
                </Link>
              </article>

              <article className="people-join-card card card-tint-violet">
                <h3>Faculty &amp; Researchers</h3>
                <p>
                  Propose and lead projects aligned with ACT research themes and
                  calls.
                </p>
                <Link to="/research" className="btn btn-secondary mt-auto">
                  Research directions
                </Link>
              </article>

              <article className="people-join-card card card-tint-rose">
                <h3>External Partners</h3>
                <p>
                  Explore collaborations with industry, government, and civil
                  society.
                </p>
                <Link to="/contact" className="btn btn-secondary mt-auto">
                  Contact ACT
                </Link>
              </article>
            </div>
          </section>

          {/* ENQUIRY FORM */}
          <section
            ref={formRef}
            className={`contact-block contact-form-block reveal-section ${formVisible ? "is-visible" : ""
              }`}
          >
            <div className="contact-form-card card card-tint-blue">
              <div className="contact-form-header">
                <h2 className="contact-block-title">Send an Enquiry</h2>
                <p className="contact-block-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {formStatus.submitted && (
                <div className="contact-form-success">
                  <p>✓ Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {formStatus.error && (
                <div className="contact-form-error">
                  <p>✗ {formStatus.error}</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.submitting}
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
                      value={formData.role}
                      onChange={handleInputChange}
                      disabled={formStatus.submitting}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-topic">Topic (optional)</label>
                    <input
                      id="contact-topic"
                      name="topic"
                      type="text"
                      placeholder="Funding, facilities, events, general..."
                      value={formData.topic}
                      onChange={handleInputChange}
                      disabled={formStatus.submitting}
                    />
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Share a bit of context so the ACT team can connect you to the right person."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={formStatus.submitting}
                  />
                </div>

                <div className="contact-form-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                  <p className="contact-form-note">
                    * Required fields. Your information will be handled securely and used only to respond to your enquiry.
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
