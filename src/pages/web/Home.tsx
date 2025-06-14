import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg"; // Adjust the path as needed

const HomeWeb: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 max-w-5xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={profile}
            alt="Frederico Nicola"
            width={320}
            height={320}
            className="rounded-2xl border-4 border-white shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center md:text-left flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-50 leading-tight">
            Frederico Nicola
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-amber-50 font-semibold">
            Mobile Developer | React Native | TypeScript
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/documents/Frederico_Nicola.pdf"
              download
              className="px-6 py-3 bg-white text-blue-600 font-bold border-white rounded-lg shadow-lg hover:bg-transparent hover:text-white border-2 text-center transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white hover:text-blue-600 text-center transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeWeb;
