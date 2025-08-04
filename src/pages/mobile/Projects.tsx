import React from "react";
import { projects } from "../../data/projects";
import MobileProjectCard from "../../components/MobileProjectCard";
import MobileExperienceCard from "../../components/MobileExperienceCard";
import { experiences } from "../../data/experience";

const Projects: React.FC = () => (
  <div className="w-full h-full px-4 py-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-y-auto">
    {/* Experience Section */}
    <div className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mb-2">
          Experience
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <MobileExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </div>

    {/* Projects Section */}
    <div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mb-2">
          Projects
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="space-y-4 pb-10">
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
    </div>
  </div>
);

export default Projects;
