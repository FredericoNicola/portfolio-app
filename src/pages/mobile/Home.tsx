import React from "react";
import DownloadButton from "../../components/Button";
import profile from "../../assets/profile.jpg"; // Adjust the path if needed

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
        <DownloadButton
          fileUrl="/documents/Frederico_Nicola.pdf"
          fileName="Frederico_Nicola.pdf"
          label="Download Resume"
        />
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-bold rounded-lg shadow hover:bg-gray-900 hover:text-white text-center transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Home;
