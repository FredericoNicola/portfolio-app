import React from "react";
import profile from "../../assets/profile.jpg";
import ActionButton from "../../components/ActionButton";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 space-y-6">
      <img
        src={profile}
        alt="Frederico Nicola"
        className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover"
      />
      <h1 className="text-3xl font-extrabold text-gray-900">
        Frederico Nicola
      </h1>
      <p className="text-base font-medium text-gray-700 text-center">
        Mobile Developer | React Native | TypeScript
      </p>
      <div className="flex flex-col w-full space-y-3">
        <ActionButton
          text="Download Resume"
          href="/documents/Frederico_Nicola.pdf"
          download
        />
        <ActionButton
          text="Contact Me"
          href="#contact"
          inverted
          bgColor="bg-gray-200"
        />
      </div>
    </div>
  );
};

export default Home;
