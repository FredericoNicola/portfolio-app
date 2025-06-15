import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
  <div className="bg-white rounded-xl shadow p-4 mb-4">
    <h2 className="text-lg font-bold text-gray-900 mb-1">{name}</h2>
    <p className="text-gray-700 text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {tech.map((t) => (
        <span
          key={t}
          className="bg-gray-900 text-white px-2 py-0.5 rounded text-xs font-semibold"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4 mt-2">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
      >
        <FaGithub /> GitHub
      </a>
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-green-600 hover:underline text-sm"
        >
          <FaExternalLinkAlt /> Live
        </a>
      )}
    </div>
  </div>
);

export default MobileProjectCard;
