import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import ExperienceCard from "../../components/ExperienceCard";
import { projects } from "../../data/projects";
import { experiences } from "../../data/experience";

const Projects: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 h-250 relative min-h-screen">
    {/* Background Elements */}
    <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    ></div>

    {/* Experience Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-50 to-blue-200 mb-4"
        >
          Professional Experience
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
        ></motion.div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Projects Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative z-10 pb-10"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-50 to-blue-200 mb-4"
        >
          Featured Projects
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-amber-100/70 mt-4 max-w-2xl mx-auto"
        >
          A collection of projects showcasing my skills in mobile development
          and modern technologies
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <ProjectCard
              name={proj.name}
              description={proj.description}
              tech={proj.tech}
              github={proj.github}
              demo={proj.demo}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default Projects;
