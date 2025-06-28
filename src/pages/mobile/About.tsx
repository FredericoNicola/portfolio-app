import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 py-6 bg-white flex-1">
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">About Me</h1>
      <p className="text-center text-base text-gray-700 mb-4">
        Hello, I'm Frederico Nicola.
        <br />
        Mobile Developer with a passion for building great apps with React
        Native, Kotlin, MAUI & TypeScript.
      </p>
      <div className="w-full flex flex-col items-start space-y-2 mb-4">
        <span className="text-sm text-gray-600">
          🚀 Started coding in{" "}
          <span className="font-bold text-gray-900">2018</span>
        </span>
        <span className="text-sm text-gray-600">
          📱 First <span className="font-bold text-purple-500">Kotlin</span> app
          in <span className="font-bold text-gray-900">2020</span>
        </span>
        <span className="text-sm text-gray-600">
          📱 First <span className="font-bold text-blue-500">MAUI</span> app in{" "}
          <span className="font-bold text-gray-900">2020</span>
        </span>
        <span className="text-sm text-gray-600">
          🏗️ Built some{" "}
          <span className="font-bold text-yellow-500">Node.JS </span> Bots in{" "}
          <span className="font-bold text-gray-900">2022</span>
        </span>
        <span className="text-sm text-gray-600">
          📱 First <span className="font-bold text-blue-400">React Native</span>{" "}
          app in <span className="font-bold text-gray-900">2023</span>
        </span>
        <span className="text-sm text-gray-600">
          💼 Last company:{" "}
          <span className="font-bold text-blue-600">Navigate Technologies</span>
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="bg-[#8ec6ff] text-black px-2 py-1 rounded text-xs font-semibold">
          React Native
        </span>
        <span className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">
          TypeScript
        </span>
        <span className="bg-[#fdc800] text-black px-2 py-1 rounded text-xs font-semibold">
          Node.js
        </span>
        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
          Kotlin
        </span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
          MAUI
        </span>
      </div>
      <ul className="text-xs text-gray-600 list-disc list-inside space-y-1 text-left w-full max-w-xs mb-2">
        <li>I love cars and driving on beautiful roads with amazing views</li>
        <li>I speak 3 languages</li>
      </ul>
    </div>
  );
};

export default About;
