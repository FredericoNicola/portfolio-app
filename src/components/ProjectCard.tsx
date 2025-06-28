import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tech,
  github,
  demo,
}) => (
  <div className="bg-[#181e2a] mb-10 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between border border-[#23283a] hover:shadow-xl transition w-full">
    <div>
      <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">{name}</h2>
      <p className="text-gray-100 mb-4 text-sm sm:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-black text-white px-2 py-1 rounded text-xs font-semibold"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="flex gap-4 mt-2">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-400 hover:text-blue-200 font-medium"
      >
        <FaGithub /> GitHub
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-green-400 hover:text-green-200 font-medium"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
