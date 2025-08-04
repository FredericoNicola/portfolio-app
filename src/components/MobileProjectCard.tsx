import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

type MobileProjectCardProps = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

const MobileProjectCard: React.FC<MobileProjectCardProps> = ({
  name,
  description,
  tech,
  github,
  demo,
}) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    {/* Header */}
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-2 shadow-md">
        <FaCode className="text-white text-sm" />
      </div>
      <h2 className="text-lg font-bold text-gray-900 flex-1">{name}</h2>
    </div>

    {/* Description */}
    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{description}</p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t) => (
        <span
          key={t}
          className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-sm border border-white/20"
        >
          {t}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-4 pt-2 border-t border-gray-200">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
      >
        <FaGithub className="text-sm" />
        <span>GitHub</span>
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200"
        >
          <FaExternalLinkAlt className="text-sm" />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  </div>
);

export default MobileProjectCard;
