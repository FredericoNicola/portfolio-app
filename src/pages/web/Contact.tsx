import React from "react";
import { motion } from "framer-motion";
import { CONTACTS } from "../../data/contacts";

const ContactWeb: React.FC = () => (
  <div className="max-w-3xl mx-auto px-6 py-16 min-h-screen flex flex-col justify-center relative">
    {/* Background Elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>

    <div className="relative z-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-50 to-blue-200 mb-4"
        >
          Let's Connect
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed"
        >
          Want to chat about code, cars, or coffee? <br />
          <span className="text-blue-300 font-semibold">
            Pick your favorite way to reach out!
          </span>
        </motion.p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="grid gap-6 md:grid-cols-2 mb-12"
      >
        {CONTACTS.map((contact, idx) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 block`}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex items-center gap-4">
              {/* Icon with enhanced styling */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">
                  <contact.icon />
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                  {contact.label}
                </h3>
                <p className="text-amber-100/70 group-hover:text-amber-100 transition-colors duration-300 mt-1">
                  {contact.sub}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Fun Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-4xl mb-2"
          >
            🏞️🚗
          </motion.div>
          <p className="text-amber-200/80 text-lg">
            Or just wave at me if you see me on a beautiful road!
          </p>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="flex justify-center gap-8 mt-8 text-amber-100/60"
      >
        <div className="text-center">
          <div className="text-lg font-bold text-white">24h</div>
          <div className="text-xs">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">3+</div>
          <div className="text-xs">Languages</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">∞</div>
          <div className="text-xs">Coffee Cups</div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default ContactWeb;
