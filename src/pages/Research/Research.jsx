import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Research.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const Research = () => {
  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [themesRef, themesVisible] = useRevealOnScroll();
  const [areasRef, areasVisible] = useRevealOnScroll();
  const [ongoingRef, ongoingVisible] = useRevealOnScroll();
  const [pubsRef, pubsVisible] = useRevealOnScroll();
  const [collabRef, collabVisible] = useRevealOnScroll();
  const [oppRef, oppVisible] = useRevealOnScroll();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="research-page" id="research">
      {/* HERO */}
      <section className="section research-hero research-hero-simple">
        <img
          src="/media/research.JPG"
          alt="ACT Centre campus"
          className="research-hero-bg"
          loading="eager"
        />
        <div className="research-hero-overlay" aria-hidden />

        <div className="container research-hero-inner">
          <div
            ref={heroTextRef}
            className={`research-hero-text reveal-section ${
              heroTextVisible ? "is-visible" : ""
            }`}
          >
            <h1 className="research-hero-title">Research at the ACT Centre</h1>

            <p className="research-hero-subtitle">
              ACT conducts interdisciplinary research across engineering,
              cognitive science, arts & humanities, and social sciences —
              addressing real-world challenges in learning, behaviour,
              sustainability, and society.
            </p>

            <div className="research-hero-ctas">
              <Link to="/funding" className="btn btn-primary">
                Explore Funding Calls
              </Link>
              <Link to="/resources" className="btn btn-secondary">
                Proposal Templates
              </Link>
            </div>

            <div className="research-quick-nav">
              <a href="#themes" className="research-chip">
                Themes
              </a>
              <a href="#areas" className="research-chip">
                Idea Clusters
              </a>
              <a href="#projects-strategic" className="research-chip">
                Strategic
              </a>
              <a href="#projects-ongoing" className="research-chip">
                Ongoing
              </a>
              <a href="#publications" className="research-chip">
                Publications
              </a>
              <a href="#collaborations" className="research-chip">
                Collaborations
              </a>
              <a href="#opportunities" className="research-chip">
                Openings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section research-main">
        <div className="container">
          {/* THEMES */}
          <section
            id="themes"
            ref={themesRef}
            className={`research-block research-block-band reveal-section ${
              themesVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Research Themes</h3>
              <p className="research-block-subtitle">
                Core thematic areas that anchor ACT’s interdisciplinary
                research.
              </p>
            </div>

            <div className="research-theme-grid">
              <article className="research-theme-card card">
                <h4>Health & Well-being</h4>
                <p>Digital companions, serious games, and behavioural tools.</p>
              </article>

              <article className="research-theme-card card">
          
                <h4>Cognition & Behaviour</h4>
                <p>
                  Attention, memory, decision-making, and behaviour analysis.
                </p>
              </article>

              <article className="research-theme-card card">
             
                <h4>Energy & Environment</h4>
                <p>
                  Sensing, sustainability, and climate-aligned interventions.
                </p>
              </article>

              <article className="research-theme-card card">
            
                <h4>Learning & Pedagogy</h4>
                <p>
                  AI-enabled learning systems, simulations, and immersive tools.
                </p>
              </article>
            </div>
          </section>

          {/* IDEA CLUSTERS */}
          <section
            id="areas"
            ref={areasRef}
            className={`research-block research-block-soft reveal-section ${
              areasVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">
                Idea Clusters & Use Cases
              </h3>
              <p className="research-block-subtitle">
                Directions where ACT encourages early pilots and
                experimentation.
              </p>
            </div>

            <div className="research-areas-layout">
              <ul className="research-areas-list">
                <li>AI-driven personalised learning systems.</li>
                <li>Digital companions and self-help platforms.</li>
                <li>Serious games for cognition and training.</li>
                <li>Wearable and sensor-based behaviour tracking.</li>
                <li>Energy dashboards for sustainable behaviour.</li>
                <li>Environmental sensing for local communities.</li>
                <li>Inclusive and accessible interface design.</li>
              </ul>

              <aside className="research-highlight-card card">
                <h4>From Idea to Project</h4>
                <p>
                  Early pilots → proposal shaping → ACT funding → deployment and
                  evaluation.
                </p>
                <Link to="/resources" className="link-animated">
                  View ACT Resources
                </Link>
              </aside>
            </div>
          </section>

          {/* ONGOING PROJECTS */}
          <section
            id="projects-ongoing"
            ref={ongoingRef}
            className={`research-block reveal-section ${
              ongoingVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">
                Ongoing Research Projects
              </h3>
            </div>

            <div className="research-projects-grid">
              {/* Project 1 */}
              <article className="research-project-card card">
                <img
                  src="/media/p1.png"
                  alt="Personalized Learning"
                  className="research-project-image"
                />

                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>

                <h4>Towards a Personalized Learning Experience</h4>

                <p className="research-project-meta">
                  <span>Faculty:</span> Dr. Pankaj Narula, Dr. Harpreet Singh,
                  Dr. Aastha Dhoopar
                </p>

                <p className="research-project-text">
                  AI-driven framework using advanced knowledge tracing
                  techniques.
                </p>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setActiveProject({
                      title: "Towards Personalized Learning Experience: Developing a Learning Material Recommender Framework based on Knowledge Tracing",
                      faculty:
                        "Dr. Pankaj Narula, Dr. Harpreet Singh, Dr. Aastha Dhoopar",
                      description:
                        "This project focuses on developing an intelligent, AI-driven framework to personalize learning for individual students by continuously modelling how their knowledge evolves over time. Using advanced knowledge tracing techniques, including deep learning and transformer-based models, the system analyses students’ interactions with learning materials to identify strengths, gaps, and learning patterns. Based on these insights, it recommends customized learning resources and adaptive study paths tailored to each learner’s needs. The project aims to improve learning outcomes, reduce academic disengagement, and support students in mastering skills more effectively through data-driven, personalized educational interventions.",
                      image: "/media/p1.png",
                    })
                  }
                >
                  View details
                </button>
              </article>

              {/* Project 2 */}
              <article className="research-project-card card">
                <img
                  src="/media/p2.png"
                  alt="Sustainable Crop Production"
                  className="research-project-image"
                />

                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>

                <h4>Sustainable Crop Production in Punjab</h4>

                <p className="research-project-meta">
                  <span>Faculty:</span> Dr. Richa Babbar, Prof. Dwarikanath
                  Ratha, Dr. Kavita, Dr. Sheikh Adil Edrisi
                </p>

                <p className="research-project-text">
                  Interdisciplinary project addressing climate change and
                  groundwater depletion.
                </p>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setActiveProject({
                      title: "A Socio-Economic Approach for Addressing Sustainable Crop Production in Punjab under Impending Climate Change Effects",
                      faculty:
                        "Dr. Richa Babbar, Prof. Dwarikanath Ratha, Dr. Kavita, Dr. Sheikh Adil Edrisi",
                      description:
                        "This project addresses the growing challenges of sustainable agriculture in Punjab caused by climate change, groundwater depletion, and increasing weather extremes. It adopts an interdisciplinary approach that integrates climate science, socio-economic analysis, and community participation to develop a composite socio-economic index for climate-resilient crop production. By combining climate trends, groundwater conditions, farmers’ social vulnerability, and economic feasibility of adaptation strategies, the project aims to identify locally acceptable and sustainable solutions. The outcomes are intended to support farmers and policymakers in making informed decisions that enhance agricultural resilience, protect livelihoods, and promote long-term food and water security.",
                      image: "/media/p2.png",
                    })
                  }
                >
                  View details
                </button>
              </article>

              {/* Project 3 */}
              <article className="research-project-card card">
                <img
                  src="/media/p3.png"
                  alt="Myths and Morality"
                  className="research-project-image"
                />

                <p className="research-project-status research-status-ongoing">
                  Ongoing
                </p>

                <h4>Myths and Morality</h4>

                <p className="research-project-meta">
                  <span>Faculty:</span> Dr. Andrea Raimondi, Dr. Ruchika Jain,
                  Dr. Shruti Krishna Bhat
                </p>

                <p className="research-project-text">
                  Study of myths and narratives shaping moral reasoning.
                </p>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setActiveProject({
                      title: "Myths and Morality",
                      faculty:
                        "Dr. Andrea Raimondi, Dr. Ruchika Jain, Dr. Shruti Krishna Bhat",
                      description:
                        "This project explores how myths, epics, and traditional narratives shape moral understanding and ethical behaviour in society. Drawing on Hindu, Buddhist, and Jain traditions, it examines stories such as the Ramayana, Mahabharata, and Jataka tales to understand how virtues, vices, and moral dilemmas are conveyed through narrative rather than formal moral theory. By combining philosophy, literary studies, and religious studies, the project analyses how these narratives guide moral reasoning, character formation, and ethical reflection. The research highlights the continued relevance of ancient stories in addressing contemporary moral questions and advances Indian virtue ethics as a distinct and rigorous ethical framework.",
                      image: "/media/p3.png",
                    })
                  }
                >
                  View details
                </button>
              </article>
            </div>
          </section>

          {/* STRATEGIC PROJECTS */}
          <section
            id="projects-strategic"
            className="research-block research-block-band reveal-section is-visible"
          >
            <div className="research-block-header">
              <h3 className="research-block-title">
                Strategic / Flagship Projects
              </h3>
              <p className="research-block-subtitle">
                Long-term initiatives defining ACT’s institutional research
                vision.
              </p>
            </div>

            <div className="research-projects-grid">
              <article className="research-project-card card">
                <img
                  src="/media/ThaparBrain.png"
                  alt="Thapar Brain"
                  className="research-project-image"
                />

                <p className="research-project-status">Strategic Flagship</p>

                <h4>Thapar Brain: Neuromarketing for Everyone</h4>

                <p className="research-project-text">
                  Privacy-first neuromarketing platform for attention and
                  engagement analysis.
                </p>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setActiveProject({
                      title: "Thapar Brain: Neuromarketing for Everyone",
                      faculty: "ACT Centre interdisciplinary team",
                      description:
                        "This strategic flagship project aims to democratize neuromarketing by developing a scalable, affordable, and privacy-first digital engagement platform. It enables universities, small businesses, and public institutions to understand why audiences engage with digital content by measuring attention, emotion, and engagement using low-cost, real-world signals. The platform integrates website analytics, creative testing, social media insights, and lab-grade validation within a unified, ethically compliant framework.",
                      image: "/media/ThaparBrain.png",
                    })
                  }
                >
                  View details
                </button>
              </article>
            </div>
          </section>

          {activeProject && (
            <div
              className="research-modal-overlay"
              onClick={() => setActiveProject(null)}
            >
              <div
                className="research-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="research-modal-close"
                  onClick={() => setActiveProject(null)}
                >
                  ×
                </button>

                {activeProject.image && (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="research-modal-image"
                  />
                )}

                <h3>{activeProject.title}</h3>

                <p className="research-modal-meta">
                  <strong>Faculty:</strong> {activeProject.faculty}
                </p>

                <p className="research-modal-text">
                  {activeProject.description}
                </p>
              </div>
            </div>
          )}

          {/* PUBLICATIONS */}
          <section
            id="publications"
            ref={pubsRef}
            className={`research-block reveal-section ${
              pubsVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Publications</h3>
            </div>

            <div className="research-pubs-layout">
              <div className="research-pubs-feature card">
                <h4>Highlighted Publications</h4>
                <ul>
                  <li>Publication listings will appear here.</li>
                </ul>
              </div>

              <div className="research-pubs-note-card card">
                <p>
                  A searchable publication database will be added as outputs
                  grow.
                </p>
              </div>
            </div>
          </section>

          {/* COLLABORATIONS */}
          <section
            id="collaborations"
            ref={collabRef}
            className={`research-block research-block-soft reveal-section ${
              collabVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">Collaborations</h3>
            </div>

            <div className="research-collab-grid">
              <article className="research-collab-card card">
                <h4>Academic</h4>
                <ul>
                  <li>Interdisciplinary and international collaborations</li>
                  <li>Joint supervision and shared labs</li>
                </ul>
              </article>

              <article className="research-collab-card card">
                <h4>Industry & Start-ups</h4>
                <ul>
                  <li>Pilot studies and applied research</li>
                  <li>Usability testing and prototypes</li>
                </ul>
              </article>

              <article className="research-collab-card card">
                <h4>Government & Civil Society</h4>
                <ul>
                  <li>Public-sector research projects</li>
                  <li>Community-aligned interventions</li>
                </ul>
              </article>
            </div>
          </section>

          {/* OPPORTUNITIES */}
          <section
            id="opportunities"
            ref={oppRef}
            className={`research-block research-opportunities-block reveal-section ${
              oppVisible ? "is-visible" : ""
            }`}
          >
            <div className="research-opportunities-card card">
              <h3>Openings & Opportunities</h3>
              <ul>
                <li>Research assistant and project positions</li>
                <li>Student internships and thesis opportunities</li>
                <li>Calls for interdisciplinary proposals</li>
              </ul>
              <p className="research-opportunities-note">
                Visit{" "}
                <Link to="/funding" className="link-animated">
                  Funding
                </Link>{" "}
                and{" "}
                <Link to="/events" className="link-animated">
                  Events
                </Link>{" "}
                for current openings.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Research;
