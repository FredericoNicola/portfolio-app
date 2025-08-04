import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import ActionButton from "../../components/ActionButton";

const HomeWeb: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-12 relative">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl w-full relative z-10"
      >
        {/* Profile Image with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <img
            src={profile}
            alt="Frederico Nicola"
            width={320}
            height={320}
            className="relative rounded-2xl border-4 border-white shadow-2xl object-cover transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-blue-500/25"
          />
          {/* Floating tech icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-blue-500 rounded-full p-3 shadow-lg"
          >
            <span className="text-white text-lg">⚛️</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-purple-500 rounded-full p-2 shadow-lg"
          >
            <span className="text-white text-sm">📱</span>
          </motion.div>
        </motion.div>

        {/* Text Block with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center md:text-left flex flex-col justify-center space-y-6"
        >
          {/* Main title with gradient and animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-50 to-blue-200 leading-tight">
              Frederico Nicola
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mx-auto md:mx-0"></div>
          </motion.div>

          {/* Subtitle with tech highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-amber-100/90 font-semibold">
              Mobile Developer
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                { name: "React Native", color: "bg-blue-500" },
                { name: "TypeScript", color: "bg-blue-600" },
                { name: "Kotlin", color: "bg-purple-500" },
                { name: "MAUI", color: "bg-indigo-500" },
              ].map((tech, idx) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1, duration: 0.4 }}
                  className={`${tech.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform duration-200 cursor-default`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-8 text-amber-100/80"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">7+</div>
              <div className="text-sm">Years Coding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm">Years at Navigate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm">Technologies</div>
            </div>
          </motion.div>

          {/* Enhanced buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ActionButton
                text="Download Resume"
                href="/documents/Frederico_Nicola.pdf"
                download
                bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ActionButton
                text="Let's Connect"
                onClick={() => navigate("/contact")}
                inverted
                bgColor="bg-gradient-to-r from-purple-600 to-blue-600"
              />
            </motion.div>
          </motion.div>

          {/* Fun quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="text-amber-200/70 text-sm italic text-center md:text-left mt-4"
          >
            "Building mobile experiences that users love, one component at a
            time 🚀"
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-200/50"
      ></motion.div>
    </div>
  );
};

export default HomeWeb;
