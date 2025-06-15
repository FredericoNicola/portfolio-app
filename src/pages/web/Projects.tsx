import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

const Projects: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-extrabold text-amber-50 mb-10 text-center">
      Projects & Experience
    </h1>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.name}
          name={proj.name}
          description={proj.description}
          tech={proj.tech}
          github={proj.github}
          demo={proj.demo}
        />
      ))}
    </div>
  </div>
);

export default Projects;
