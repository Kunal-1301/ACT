import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./styles/hero.css";
import "./styles/main.css";
import "./styles/projects.css";
import "./styles/publications.css";
import "./styles/animations.css";
import "./styles/responsive.css";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { strategicProjects } from "../../data/strategicProjects";

const Research = () => {
  const [heroTextRef, heroTextVisible] = useRevealOnScroll();
  const [themesRef, themesVisible] = useRevealOnScroll();
  const [areasRef, areasVisible] = useRevealOnScroll();
  const [ongoingRef, ongoingVisible] = useRevealOnScroll();
  const [pubsRef, pubsVisible] = useRevealOnScroll();
  const [collabRef, collabVisible] = useRevealOnScroll();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="research-page" id="research">
      {/* HERO */}
      <section className="page-hero section--bg-tech">
        <img
          src="/media/research.JPG"
          alt="ACT Centre campus"
          className="page-hero-bg"
          loading="eager"
        />
        <div className="page-hero-overlay" aria-hidden />

        <div className="page-hero-layout">
          <div className="research-hero-text">
            <h1 className="page-hero-title hero-animate hero-delay-1">Research at the ACT Centre</h1>

            <p className="page-hero-subtitle hero-animate hero-delay-2">
              ACT conducts interdisciplinary research across engineering,
              cognitive science, arts & humanities, and social sciences —
              addressing real-world challenges in learning, behaviour,
              sustainability, and society.
            </p>

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
            className={`research-block research-block-band reveal-section ${themesVisible ? "is-visible" : ""
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
              <article className="research-theme-card card card-tint-rose">
                <h4>Health & Well-being</h4>
                <p>Digital companions, serious games, and behavioural tools.</p>
              </article>

              <article className="research-theme-card card card-tint-blue">

                <h4>Cognition & Behaviour</h4>
                <p>
                  Attention, memory, decision-making, and behaviour analysis.
                </p>
              </article>

              <article className="research-theme-card card card-tint-green">

                <h4>Energy & Environment</h4>
                <p>
                  Sensing, sustainability, and climate-aligned interventions.
                </p>
              </article>

              <article className="research-theme-card card card-tint-violet">

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
            className={`research-block research-block-soft reveal-section ${areasVisible ? "is-visible" : ""
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
            className={`research-block reveal-section ${ongoingVisible ? "is-visible" : ""
              }`}
          >
            <div className="research-block-header">
              <h3 className="research-block-title">
                Ongoing Research Projects
              </h3>
            </div>

            <div className="research-projects-grid">
              {/* Project 1 */}
              <article className="research-project-card card card-tint-violet">
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
              <article className="research-project-card card card-tint-green">
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
              <article className="research-project-card card card-tint-rose">
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
              {strategicProjects.map((project) => (
                <article key={project.id} className="research-project-card card card-tint-blue">
                  <img
                    src={project.image}
                    alt={project.shortTitle}
                    className="research-project-image"
                  />

                  <p className="research-project-status">{project.status}</p>

                  <h4>{project.title}</h4>

                  <p className="research-project-text">
                    {project.shortDescription}
                  </p>

                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      setActiveProject({
                        title: project.title,
                        faculty: project.faculty,
                        description: project.description,
                        image: project.image,
                      })
                    }
                  >
                    View details
                  </button>
                </article>
              ))}
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
            className={`research-block reveal-section ${pubsVisible ? "is-visible" : ""
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
            className={`research-block research-block-soft reveal-section ${collabVisible ? "is-visible" : ""
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
        </div>
      </section>
    </div>
  );
};

export default Research;
