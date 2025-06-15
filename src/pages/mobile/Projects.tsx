import React from "react";
import { projects } from "../../data/projects";
import MobileProjectCard from "../../components/MobileProjectCard";

const Projects: React.FC = () => (
  <div className="w-full h-full px-4 py-6 bg-white overflow-y-auto">
    <h1 className="text-2xl font-extrabold text-gray-900 mb-4 text-center">
      Projects & Experience
    </h1>
    {projects.map((proj) => (
      <MobileProjectCard
        key={proj.name}
        name={proj.name}
        description={proj.description}
        tech={proj.tech}
        github={proj.github}
        demo={proj.demo}
      />
    ))}
  </div>
);

export default Projects;
