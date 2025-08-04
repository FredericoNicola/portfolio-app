import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full h-full px-4 py-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mb-2">
          About Me
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>

      {/* Intro */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 mb-6 w-full">
        <p className="text-center text-sm text-gray-700 leading-relaxed">
          Hello, I'm{" "}
          <span className="font-bold text-blue-600">Frederico Nicola</span>.
          <br />
          Mobile Developer with a passion for building great apps with{" "}
          <span className="font-semibold text-cyan-600">
            React Native
          </span>, <span className="font-semibold text-purple-600">Kotlin</span>
          , <span className="font-semibold text-blue-600">MAUI</span> &{" "}
          <span className="font-semibold text-blue-800">TypeScript</span>.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 mb-6 w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
          My Journey
        </h3>
        <div className="space-y-3">
          {[
            {
              year: "2018",
              icon: "🚀",
              text: "Started coding",
              color: "text-blue-600",
            },
            {
              year: "2020",
              icon: "📱",
              text: "First Kotlin app",
              tech: "Kotlin",
              color: "text-purple-600",
            },
            {
              year: "2022",
              icon: "📱",
              text: "First MAUI app",
              tech: "MAUI",
              color: "text-blue-600",
            },
            {
              year: "2022",
              icon: "🏗️",
              text: "Built Node.JS bots",
              tech: "Node.JS",
              color: "text-yellow-600",
            },
            {
              year: "2023",
              icon: "📱",
              text: "First React Native app",
              tech: "React Native",
              color: "text-cyan-600",
            },
            {
              year: "Present",
              icon: "💼",
              text: "Navigate Technologies",
              color: "text-green-600",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-gray-700 flex-1">
                {item.text}{" "}
                {item.tech && (
                  <span className={`font-bold ${item.color}`}>{item.tech}</span>
                )}{" "}
                in <span className="font-bold text-gray-900">{item.year}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 mb-6 w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
          Skills & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            {
              name: "React Native",
              color: "bg-gradient-to-r from-cyan-500 to-blue-500",
            },
            {
              name: "TypeScript",
              color: "bg-gradient-to-r from-blue-600 to-blue-800",
            },
            {
              name: "Node.js",
              color: "bg-gradient-to-r from-green-500 to-green-700",
            },
            {
              name: "Kotlin",
              color: "bg-gradient-to-r from-purple-500 to-purple-700",
            },
            {
              name: "MAUI",
              color: "bg-gradient-to-r from-indigo-500 to-purple-600",
            },
          ].map((skill) => (
            <span
              key={skill.name}
              className={`${skill.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-white/20`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border pb-17 border-gray-200/50 w-full">
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
          Fun Facts
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-lg">🏞️</span>
            <span className="text-sm text-gray-700">
              I love cars and driving on beautiful roads with amazing views
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg">🗣️</span>
            <span className="text-sm text-gray-700">
              I speak 3 languages fluently
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
