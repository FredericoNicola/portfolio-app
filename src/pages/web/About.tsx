import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 relative h-250 min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-8 text-center relative z-10"
      >
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-50 to-blue-200 leading-tight"
          >
            Hello, I'm Frederico Nicola.
          </motion.h1>
          <motion.span
            animate={{
              rotate: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute -top-4 -right-12 text-4xl"
          >
            👋
          </motion.span>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-2xl text-amber-100/90 font-light max-w-3xl leading-relaxed"
        >
          Mobile Developer with a passion for building great apps with{" "}
          <span className="text-blue-300 font-semibold">React Native</span>,{" "}
          <span className="text-purple-300 font-semibold">Kotlin</span>,{" "}
          <span className="text-blue-400 font-semibold">MAUI</span> &{" "}
          <span className="text-yellow-300 font-semibold">TypeScript</span>.
        </motion.p>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl font-black text-amber-50 mb-4"
          >
            My Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="relative pl-8 space-y-8">
          {/* Vertical gradient line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-600 rounded-full"></div>

          {[
            {
              year: "2018",
              icon: "🚀",
              text: "Started coding",
              color: "from-blue-500 to-cyan-500",
            },
            {
              year: "2020",
              icon: "📱",
              text: "Built my first Kotlin app",
              color: "from-purple-500 to-pink-500",
              tech: "Kotlin",
            },
            {
              year: "2022",
              icon: "📱",
              text: "Built my first MAUI app",
              color: "from-blue-500 to-indigo-500",
              tech: "MAUI",
            },
            {
              year: "2022",
              icon: "🏗️",
              text: "Built Node.JS bots",
              color: "from-yellow-500 to-orange-500",
              tech: "Node.JS",
            },
            {
              year: "2023",
              icon: "📱",
              text: "Built my first React Native app",
              color: "from-cyan-500 to-blue-500",
              tech: "React Native",
            },
            {
              year: "2025",
              icon: "💼",
              text: "Navigate Technologies",
              color: "from-green-500 to-teal-500",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + idx * 0.1, duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Timeline dot with glow - FIXED POSITIONING */}
              <div
                className={`absolute -left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-[#101624] group-hover:scale-125 transition-all duration-300 shadow-lg group-hover:shadow-2xl z-10`}
              ></div>

              {/* Content card with hover effects */}
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 ml-8 border border-slate-600/30 group-hover:border-blue-400/50 transition-all duration-500 group-hover:transform group-hover:translate-x-3 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="flex items-center gap-4">
                  <span className="text-3xl filter drop-shadow-lg">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-amber-100 text-lg leading-relaxed">
                      {item.text}{" "}
                      {item.tech && (
                        <span
                          className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                        >
                          {item.tech}
                        </span>
                      )}{" "}
                      in{" "}
                      <span className="font-bold text-white text-xl">
                        {item.year}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-3xl font-black text-amber-50 mb-8"
        >
          Skills & Tools
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
        ></motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              name: "React Native",
              color: "bg-gradient-to-r from-cyan-500 to-blue-500",
              icon: "⚛️",
            },
            {
              name: "TypeScript",
              color: "bg-gradient-to-r from-blue-600 to-blue-800",
              icon: "💙",
            },
            {
              name: "Node.js",
              color: "bg-gradient-to-r from-green-500 to-green-700",
              icon: "🟢",
            },
            {
              name: "Kotlin",
              color: "bg-gradient-to-r from-purple-500 to-purple-700",
              icon: "🟣",
            },
            {
              name: "MAUI",
              color: "bg-gradient-to-r from-indigo-500 to-purple-600",
              icon: "💜",
            },
          ].map((skill, idx) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + idx * 0.1, duration: 0.4 }}
              className={`${skill.color} px-6 py-3 rounded-full font-bold shadow-xl text-white text-sm
                hover:scale-110 hover:shadow-2xl transform transition-all duration-300 
                cursor-pointer hover:rotate-3 border border-white/20`}
            >
              <span className="mr-2 text-lg">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Fun Facts Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-3xl font-black text-amber-50 mb-6 text-center"
          >
            Fun Facts
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"
          ></motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏞️",
                text: "I love cars and driving on beautiful roads with amazing views",
              },
              { icon: "🗣️", text: "I speak 3 languages fluently" },
            ].map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9 + idx * 0.1, duration: 0.6 }}
                className="flex items-center gap-4 text-amber-100 text-lg group"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  {fact.icon}
                </span>
                <span className="group-hover:text-white transition-colors duration-300">
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex justify-center relative z-10 pb-10"
      >
        <motion.button
          type="button"
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 
            text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/30 
            transform transition-all duration-300 
            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r 
            before:from-blue-400 before:via-purple-400 before:to-blue-500 before:opacity-0 
            hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10
            border border-white/20"
        >
          <span className="relative flex items-center gap-3 z-10">
            Let's Connect!
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
