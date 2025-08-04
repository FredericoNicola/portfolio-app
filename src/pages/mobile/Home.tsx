import React from "react";
import profile from "../../assets/profile.jpg";
import MobileButton from "../../components/MobileButton";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full justify-center flex-1 items-center px-4 py-6 space-y-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-0">
      {/* Profile Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 rounded-2xl blur opacity-20"></div>
        <img
          src={profile}
          alt="Frederico Nicola"
          className="relative w-32 h-32 rounded-xl border-2 border-white shadow-lg object-cover"
        />
        <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 shadow-md">
          <span className="text-white text-xs">⚛️</span>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
          Frederico Nicola
        </h1>
        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        <p className="text-sm font-semibold text-gray-700">Mobile Developer</p>

        <div className="flex flex-wrap justify-center gap-1">
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            React Native
          </span>
          <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            TypeScript
          </span>
          <span className="bg-indigo-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            Kotlin
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-4 text-gray-600 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200/50 w-full max-w-xs">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">7+</div>
          <div className="text-xs">Years</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">3+</div>
          <div className="text-xs">Languages</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">5+</div>
          <div className="text-xs">Tech</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col items-center space-y-3 px-4">
        <MobileButton href="/documents/Frederico_Nicola.pdf" primary>
          📄 Download Resume
        </MobileButton>
        <MobileButton onClick={() => navigate("/contact")}>
          💬 Let's Connect
        </MobileButton>
      </div>

      {/* Quote */}
      <p className="text-gray-500 text-xs italic text-center px-4">
        "Building mobile experiences that users love 🚀"
      </p>
    </div>
  );
};

export default Home;
