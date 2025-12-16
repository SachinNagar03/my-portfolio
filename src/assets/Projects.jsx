// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import Heading from "./Heading";

const Projects = () => {
  const projects = [
    {
      title: "NexGen Dashboard",
      description:
        "A comprehensive analytics platform with real-time data visualization, interactive charts, customizable widgets, and smooth API integrations.",
      tags: ["React", "TypeScript", "Tailwind CSS", "D3.js"],
      image: project1,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ShopHub E-Commerce",
      description:
        "Full-featured e-commerce experience including product filtering, cart management, secure checkout, and an admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      image: project2,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Studio",
      description:
        "AI-powered content creation tool offering language generation, editing, optimization, and collaboration features.",
      tags: ["React", "OpenAI", "Node.js", "MongoDB"],
      image: project3,
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* BG Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-float" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary/60 text-sm font-light tracking-[0.3em] uppercase mb-2">
            Portfolio
          </p>

          <Heading bgText="PROJECTS" overlayText="Creative"/>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting digital experiences that blend innovation with aesthetics.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
