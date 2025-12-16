// ProjectCard.jsx
import React from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Database,
  Palette,
  BarChart3,
  CreditCard,
  Brain,
  Server,
} from "lucide-react";
import "./ProjectCard.css";

const techIcons = {
  React: Code2,
  TypeScript: Code2,
  "Tailwind CSS": Palette,
  "D3.js": BarChart3,
  Nextjs: Code2,
  Stripe: CreditCard,
  PostgreSQL: Database,
  Prisma: Database,
  OpenAI: Brain,
  "Node.js": Server,
  MongoDB: Database,
};

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoUrl,
  githubUrl,
  index,
}) => {
  return (
    <div className="project-card">
      <div className="project-inner">
        <div className="project-left">
          <div className="project-number">
            Project {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
         <br />
          <div className="project-tags">
            {tags.map((tag, idx) => {
              const Icon = techIcons[tag] || Code2;
              return (
                <span key={idx} className="tag">
                  <Icon className="tag-icon" />
                  {tag}
                </span>
              );
            })}
          </div>
               <br />
          <div className="project-buttons">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-demo"
              >
                <ExternalLink className="btn-icon" /> Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-code"
              >
                <Github className="btn-icon" /> Code
              </a>
            )}
          </div>
        </div>

        <div className="project-image-wrapper">
          <div className="project-image-border">
            <img src={image} alt={title} className="project-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
