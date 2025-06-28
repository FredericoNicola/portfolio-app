import React from "react";
import ProjectCard from "../../components/ProjectCard";
import ExperienceCard from "../../components/ExperienceCard";
import { projects } from "../../data/projects";
import { experiences } from "../../data/experience";

const Projects: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-0 max-h-screen mt-20 flex flex-col justify-start">
    <h1 className="text-4xl font-extrabold text-amber-50 mb-10 text-center">
      Experience
    </h1>
    {experiences.map((exp) => (
      <ExperienceCard experience={exp} />
    ))}
    <h1 className="text-4xl font-extrabold text-amber-50 mt-10 mb-10 text-center">
      Projects
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
