import React from "react";
import { projects } from "../../data/projects";
import MobileProjectCard from "../../components/MobileProjectCard";
import MobileExperienceCard from "../../components/MobileExperienceCard";
import { experiences } from "../../data/experience";

const Projects: React.FC = () => (
  <div className="w-full h-full px-4 py-6 bg-gray-100 overflow-y-auto">
    <h1 className="text-2xl font-extrabold text-gray-900 mb-5 text-center">
      Experience
    </h1>
    {experiences.map((exp) => (
      <MobileExperienceCard experience={exp} />
    ))}
    <h1 className="text-2xl font-extrabold text-gray-900 mb-5 text-center">
      Projects
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
