import React from "react";
import profile from "../../assets/profile.jpg";
import MobileButton from "../../components/MobileButton";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 space-y-6 bg-white flex-1">
      <img
        src={profile}
        alt="Frederico Nicola"
        className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
      />
      <h1 className="text-4xl font-extrabold text-gray-900 text-center leading-tight">
        Frederico Nicola
      </h1>
      <p className="text-lg font-medium text-gray-700 text-center">
        Mobile Developer | React Native | TypeScript
      </p>
      <div className="w-full flex flex-col items-center space-y-3 mt-4">
        <MobileButton href="/documents/Frederico_Nicola.pdf" primary>
          Download Resume
        </MobileButton>
        <MobileButton onClick={() => navigate("/contact")}>
          Contact Me
        </MobileButton>
      </div>
    </div>
  );
};

export default Home;
