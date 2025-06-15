import React from "react";

const About: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 space-y-5">
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-amber-50 text-center mt-8">
        Hello, I'm Frederico Nicola. <span className="inline-block">👋</span>
      </h1>
      <p className="text-xl md:text-2xl text-amber-50 text-center font-medium mt-2">
        Mobile Developer with a passion for building great apps with React
        Native, Kotlin, MAUI & TypeScript.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-extrabold text-amber-50 mb-4">My Journey</h2>
      <ul className="space-y-3 text-lg">
        <li>
          <span className="mr-2">🚀</span>
          <span className="text-amber-100">
            Started coding in <span className="font-bold text-white">2018</span>
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
            Built my first <span className="font-bold text-blue-400">MAUI</span>{" "}
            app in <span className="font-bold text-white">2022</span>
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
            <span className="font-bold text-blue-300">React Native</span> app in{" "}
            <span className="font-bold text-white">2023</span>
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
      <h2 className="text-2xl font-extrabold text-amber-50 mb-4">
        Skills & Tools
      </h2>
      <div className="flex flex-wrap gap-4">
        <span className="bg-[#8ec6ff] px-4 py-2 text-black rounded font-semibold shadow">
          React Native
        </span>
        <span className="bg-black text-white px-4 py-2 rounded font-semibold shadow">
          TypeScript
        </span>
        <span className="bg-[#fdc800] text-black px-4 py-2 rounded font-semibold shadow">
          Node.js
        </span>
        <span className="bg-purple-600 text-white px-4 py-2 rounded font-semibold shadow">
          Kotlin
        </span>
        <span className="bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow">
          MAUI
        </span>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-extrabold text-amber-50 mb-4">Fun Facts</h2>
      <ul className="list-disc list-inside space-y-2 text-amber-100 text-lg">
        <li>I love cars and driving on beautiful roads with amazing views</li>
        <li>I speak 3 languages</li>
      </ul>
    </div>

    <div className="flex justify-center">
      <a
        href="#contact"
        className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold shadow hover:bg-blue-700 transition text-lg"
      >
        Let's Connect!
      </a>
    </div>
  </div>
);

export default About;
