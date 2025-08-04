import React from "react";
import { FaBuilding, FaDotCircle } from "react-icons/fa";
import type { ExperienceItem } from "../models/ExperienceItem";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-blue-500/20 hover:transform hover:scale-[1.02] w-full">
    {/* Header */}
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full p-4 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
        {experience.icon || <FaBuilding className="text-2xl text-blue-100" />}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
          {experience.company}
        </h2>
        <div className="flex flex-wrap gap-2 items-center mt-1">
          <span className="text-blue-300 text-sm font-semibold">
            {experience.title}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300 text-sm font-medium">
            {experience.period}
          </span>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div className="space-y-4 mb-6">
      {experience.highlights.map((highlight, idx) => (
        <div key={idx} className="flex items-start gap-3 group/item">
          <FaDotCircle className="text-blue-400 mt-1.5 flex-shrink-0 group-hover/item:text-blue-300 transition-colors duration-200" />
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed group-hover/item:text-white transition-colors duration-200">
            {highlight}
          </p>
        </div>
      ))}
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {experience.tech.map((tech, idx) => (
        <span
          key={tech}
          className={`
            ${
              tech === "React Native"
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                : tech === ".NET MAUI"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500"
                : tech === "TypeScript"
                ? "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
                : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700"
            }
            text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg 
            hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-default
            border border-white/10
          `}
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
