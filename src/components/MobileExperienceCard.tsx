import React from "react";
import { FaBuilding, FaDotCircle } from "react-icons/fa";
import type { ExperienceItem } from "../models/ExperienceItem";

type MobileExperienceCardProps = {
  experience: ExperienceItem;
};

const MobileExperienceCard: React.FC<MobileExperienceCardProps> = ({
  experience,
}) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    {/* Header */}
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 shadow-md">
        {experience.icon || <FaBuilding className="text-lg text-white" />}
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-900">
          {experience.company}
        </h2>
        <div className="flex flex-col gap-1">
          <span className="text-blue-600 text-sm font-semibold">
            {experience.title}
          </span>
          <span className="text-gray-500 text-xs font-medium">
            {experience.period}
          </span>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div className="space-y-2 mb-4">
      {experience.highlights.map((highlight, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <FaDotCircle className="text-blue-500 mt-1 flex-shrink-0 text-xs" />
          <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
        </div>
      ))}
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {experience.tech.map((tech) => (
        <span
          key={tech}
          className={`
            ${
              tech === "React Native"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                : tech === ".NET MAUI"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                : tech === "TypeScript"
                ? "bg-gradient-to-r from-blue-600 to-blue-700"
                : "bg-gradient-to-r from-gray-600 to-gray-700"
            }
            text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-sm
            border border-white/20
          `}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default MobileExperienceCard;
