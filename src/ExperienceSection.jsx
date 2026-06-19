import { useState } from "react";
import "./ExperienceSection.css";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "CodeCraft Infotech",
    period: "Apr 2026 — Present",
    type: "Current",
    blurb:
      "Shipping AI-powered web products end-to-end — from interface to API to deployment.",
    points: [
      "Developing full-stack web applications with React, Node, Express and MongoDB.",
      "Building responsive UIs and integrating RESTful APIs for real client work.",
      "Designing AI-powered features and integrations that automate workflows.",
      "Owning backend logic, database operations, debugging and deployment in an agile team.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "AI APIs", "REST"],
  },
  {
    role: "Independent Full Stack Developer",
    company: "Freelance",
    period: "Ongoing",
    type: "Freelance",
    blurb:
      "Partnering with founders and small teams to design and ship custom full-stack apps.",
    points: [
      "Scoping, designing and delivering bespoke web applications for clients worldwide.",
      "Handling everything from UI architecture to API design, auth and deployment.",
      "Translating rough product ideas into polished, production-ready experiences.",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "MD Soft Tech",
    period: "Feb 2025 — May 2025",
    type: "Internship",
    blurb:
      "First taste of agile client work — learning to ship features that people actually use.",
    points: [
      "Built and maintained web app features with React, JavaScript, HTML5 and CSS3, lifting engagement across client projects.",
      "Engineered responsive interfaces and integrated REST APIs via Node.js + Express, smoothing load behavior across devices.",
      "Managed MongoDB operations to support data-driven decisions on live client work in an agile environment.",
    ],
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
];

export default function ExperienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="exp-section">
      <div aria-hidden className="exp-dots" />

      <div className="exp-container">
        <div className="exp-header">
          <div className="exp-eyebrow">
            <span className="exp-eyebrow-line" />
            <span>Professional Journey</span>
          </div>
          <h2 className="exp-title">
            <span className="exp-title-dim">Where I've</span>
            <br />
            <span className="exp-title-script-wrap">
              <span className="exp-title-script">Crafted</span>
              <span aria-hidden className="exp-dot-deco" />
              <span aria-hidden className="exp-square-deco" />
            </span>{" "}
            <span className="exp-title-strong">things.</span>
          </h2>
          <p className="exp-subtitle">
            A short timeline of the teams, products, and problems that taught me
            how to ship — from first internship to today's full-stack work.
          </p>
        </div>

        <div className="exp-grid">
          <ol className="exp-rail">
            {/* <span aria-hidden className="exp-rail-line" /> */}

            {experiences.map((exp, i) => (
              <li key={exp.company} className="exp-rail-item">
                <span
                  aria-hidden
                  className={`exp-rail-dot${active === i ? " is-active" : ""}`}
                />

                <button onClick={() => setActive(i)} className="exp-rail-btn">
                  <span
                    className={`exp-rail-year${active === i ? " is-active" : ""}`}
                  >
                    {exp.period.split("—")[0].trim()}
                  </span>

                  <span
                    className={`exp-rail-company${active === i ? " is-active" : ""}`}
                  >
                    {exp.company}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="exp-cards">
            {experiences.map((exp, i) => {
              const isActive = active === i;
              return (
                <article
                  key={exp.company}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={`exp-card${isActive ? " is-active" : ""}`}
                >
                  <span
                    aria-hidden
                    className={`exp-card-edge${isActive ? " is-active" : ""}`}
                  />

                  <header className="exp-card-header">
                    <div className="exp-card-header-main">
                      <span
                        className={`exp-badge${
                          exp.type === "Current" ? " exp-badge--current" : ""
                        }`}
                      >
                        {exp.type === "Current" && (
                          <span className="exp-badge-pulse" />
                        )}
                        {exp.type}
                      </span>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-meta">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-meta-sep">·</span>
                        {exp.period}
                      </p>
                    </div>
                    <div aria-hidden className="exp-card-num">
                      0{i + 1}
                    </div>
                  </header>

                  <p className="exp-blurb">{exp.blurb}</p>

                  <ul className="exp-points">
                    {exp.points.map((p) => (
                      <li key={p} className="exp-point">
                        <span aria-hidden className="exp-point-dot" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-stack">
                    {exp.stack.map((s) => (
                      <span key={s} className="exp-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
