import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

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
  <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-slate-600/30 hover:border-purple-400/50 transition-all duration-500 hover:shadow-purple-500/20 hover:transform hover:scale-[1.02] flex flex-col h-full">
    {/* Project Icon & Title */}
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-2 shadow-lg">
        <FaCode className="text-purple-100 text-lg" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
        {name}
      </h2>
    </div>

    {/* Description */}
    <p className="text-slate-200 mb-6 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
      {description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t, idx) => (
        <span
          key={t}
          className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/10 hover:scale-105 transition-all duration-200 cursor-default shadow-lg"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          {t}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4 mt-auto pt-4 border-t border-slate-600/30">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:scale-105"
      >
        <FaGithub className="group-hover/link:rotate-12 transition-transform duration-300" />
        <span className="text-sm">GitHub</span>
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-all duration-300 hover:scale-105"
        >
          <FaExternalLinkAlt className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
          <span className="text-sm">Live Demo</span>
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
