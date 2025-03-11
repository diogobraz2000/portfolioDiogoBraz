import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaJava, FaPhp, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiPytorch, SiOpencv, SiPandas, SiNumpy, SiJenkins, SiGit, SiGithub, SiKubernetes, SiGooglecloud } from "react-icons/si";

const technologies = [
    { id: 1, name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { id: 2, name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { id: 5, name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
    { id: 6, name: "Docker", icon: <FaDocker className="text-blue-700 text-4xl" /> },
    { id: 7, name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { id: 8, name: "Java", icon: <FaJava className="text-red-500 text-4xl" /> },
    { id: 9, name: "PHP", icon: <FaPhp className="text-indigo-500 text-4xl" /> },
    { id: 10, name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
    { id: 11, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
    { id: 12, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { id: 13, name: "Pytorch", icon: <SiPytorch className="text-red-500 text-4xl" /> },
    { id: 14, name: "OpenCV", icon: <SiOpencv className="text-red-600 text-4xl" /> },
    { id: 15, name: "Pandas", icon: <SiPandas className="text-blue-400 text-4xl" /> },
    { id: 16, name: "NumPy", icon: <SiNumpy className="text-blue-500 text-4xl" /> },
    { id: 17, name: "CI/CD", icon: <SiJenkins className="text-red-600 text-4xl" /> },
    { id: 18, name: "Git", icon: <SiGit className="text-red-500 text-4xl" /> },
    { id: 19, name: "GitHub", icon: <SiGithub className="text-white text-4xl" /> },
    { id: 20, name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-4xl" /> },
    { id: 21, name: "AWS", icon: <FaAws className="text-orange-500 text-4xl" /> },
    { id: 22, name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400 text-4xl" /> },
  ];

const ScrollingTechnologies: React.FC = () => {
  return (
    <div className="w-full overflow-hidden relative h-24 max-md:mb-10 bg-transparent flex items-center">
      <motion.div
        className="flex min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="w-32 h-16 flex items-center justify-center text-white font-semibold text-md rounded-lg bg-transparent mx-2"
          >
            {tech.icon}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        style={{ display: "flex", whiteSpace: "nowrap", top: 0 }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`duplicate-${index}`}
            className="w-32 h-16 flex items-center justify-center text-white font-semibold text-md rounded-lg bg-transparent mx-2"
          >
            {tech.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTechnologies;