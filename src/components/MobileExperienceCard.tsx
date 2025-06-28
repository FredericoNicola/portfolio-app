import React from "react";
import { FaBuilding, FaDotCircle } from "react-icons/fa";
import type { ExperienceItem } from "../models/ExperienceItem";

type MobileExperienceCardProps = {
  experience: ExperienceItem;
};

const MobileExperienceCard: React.FC<MobileExperienceCardProps> = ({
  experience,
}) => (
  <div className="bg-white rounded-xl shadow p-4 mb-5 border border-gray-400 flex flex-col">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center shadow">
        {experience.icon || <FaBuilding className="text-2xl text-blue-500" />}
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          {experience.company}
        </h2>
        <span className="text-blue-600 text-xs font-semibold">
          {experience.title} • {experience.period}
        </span>
      </div>
    </div>
    <div className="mt-2 text-gray-700 text-sm leading-relaxed space-y-2">
      {experience.highlights.map((highlight, idx) => (
        <p key={idx}>
          <FaDotCircle className="inline mr-1 text-blue-400" />
          {highlight}
        </p>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {experience.tech.map((t) => (
        <span
          key={t}
          className={`${
            t === "React Native" ? "bg-blue-500 text-gray-950" : "bg-black"
          } text-white px-2 py-0.5 rounded text-xs font-semibold`}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default MobileExperienceCard;
