// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import './projects.css'
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import portofolio from "../assets/portfolio.png";
import GYM from "../assets/gymMgmt.png";
import Heading from "../Heading";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description:
        "Personal portfolio platform with dynamic project showcases, clean UI architecture, responsive design, and optimized performance.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Motion" ],
      image: portofolio,
      demoUrl: "https://sachinnagar-portfolio.vercel.app/",
      githubUrl: "https://github.com/SachinNagar03/my-portfolio",
    },
    {
      title: "Gym Management System",
      description:
        "A live gym management system currently running in two gyms, featuring real-time member management, dynamic dashboards, responsive UI, and smooth data handling for daily operations.",
      tags: ["React", "Tailwind CSS ", "Firebase", "Java"],
      image: GYM,
      demoUrl: "https://gym-app-showcase.vercel.app/",
      githubUrl: "https://github.com/SachinNagar03/gym-app-showcase",
    },
    
  ];

  return (
        <section className="projects-section">


        <div className="projects-container">
          <div className="projects-header">
            <Heading bgText="PROJECTS" overlayText="Creative" />

          </div>

          <div className="projects-list">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

  );
};

export default Projects;
