import React from "react";
import { FaBuilding, FaDotCircle } from "react-icons/fa";
import type { ExperienceItem } from "../models/ExperienceItem";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="bg-[#181e2a] rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col border border-[#23283a] hover:shadow-xl transition w-full">
    <div className="flex items-center gap-4 mb-2">
      <div className="bg-blue-900 rounded-full p-3 flex items-center justify-center shadow">
        {experience.icon || <FaBuilding className="text-2xl text-blue-300" />}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{experience.company}</h2>
        <span className="text-blue-200 text-sm font-semibold">
          {experience.title} &bull; {experience.period}
        </span>
      </div>
    </div>
    <div className="mt-4 text-gray-100 text-sm sm:text-base leading-relaxed">
      {experience.highlights.map((highlight, idx) => (
        <p className={idx !== 0 ? "mt-3" : ""} key={idx}>
          <FaDotCircle className="inline mr-2 text-blue-400" />
          {highlight}
        </p>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mt-6">
      {experience.tech.map((t) => (
        <span
          key={t}
          className={`${
            t === "React Native" ? "bg-blue-700" : "bg-black"
          } text-white px-3 py-1 rounded text-xs font-semibold`}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
