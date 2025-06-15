import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-5">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-50 text-center mt-6">
          Hello, I'm Frederico Nicola. <span className="inline-block">👋</span>
        </h1>
        <p className="text-base md:text-lg text-amber-50 text-center font-medium mt-1">
          Mobile Developer with a passion for building great apps with React
          Native, Kotlin, MAUI & TypeScript.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-extrabold text-amber-50 mb-2">
          My Journey
        </h2>
        <ul className="space-y-2 text-base">
          <li>
            <span className="mr-2">🚀</span>
            <span className="text-amber-100">
              Started coding in{" "}
              <span className="font-bold text-white">2018</span>
            </span>
          </li>
          <li>
            <span className="mr-2">📱</span>
            <span className="text-amber-100">
              Built my first{" "}
              <span className="font-bold text-purple-400">Kotlin</span> app in{" "}
              <span className="font-bold text-white">2020</span>
            </span>
          </li>
          <li>
            <span className="mr-2">📱</span>
            <span className="text-amber-100">
              Built my first{" "}
              <span className="font-bold text-blue-400">MAUI</span> app in{" "}
              <span className="font-bold text-white">2022</span>
            </span>
          </li>
          <li>
            <span className="mr-2">🏗️</span>
            <span className="text-amber-100">
              Built some{" "}
              <span className="font-bold text-yellow-400">Node.JS </span> apps
              like bots <span className="font-bold text-white">2022</span>
            </span>
          </li>
          <li>
            <span className="mr-2">📱</span>
            <span className="text-amber-100">
              Built my first{" "}
              <span className="font-bold text-blue-300">React Native</span> app
              in <span className="font-bold text-white">2023</span>
            </span>
          </li>
          <li>
            <span className="mr-2">💼</span>
            <span className="text-amber-100">
              The last company I built apps for was{" "}
              <span className="font-bold text-blue-400">
                Navigate Technologies
              </span>
            </span>
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-extrabold text-amber-50 mb-2">
          Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-[#8ec6ff] px-3 py-1 text-black rounded font-semibold shadow text-sm">
            React Native
          </span>
          <span className="bg-black text-white px-3 py-1 rounded font-semibold shadow text-sm">
            TypeScript
          </span>
          <span className="bg-[#fdc800] text-black px-3 py-1 rounded font-semibold shadow text-sm">
            Node.js
          </span>
          <span className="bg-purple-600 text-white px-3 py-1 rounded font-semibold shadow text-sm">
            Kotlin
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded font-semibold shadow text-sm">
            MAUI
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-extrabold text-amber-50 mb-2">Fun Facts</h2>
        <ul className="list-disc list-inside space-y-1 text-amber-100 text-base">
          <li>I love cars and driving on beautiful roads with amazing views</li>
          <li>I speak 3 languages</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => navigate("/contact")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition text-base"
        >
          Let's Connect!
        </button>
      </div>
    </div>
  );
};

export default About;
