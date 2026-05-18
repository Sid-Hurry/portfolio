"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cryptonest",
    description: "A cryptocurrency tracking platform that provides real-time prices, market trends, and detailed analytics using CoinGecko API.",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "CoinGecko API"],
    liveLink: "https://crypto-nest-hwvo.vercel.app/",
    githubLink: "https://github.com/Sid-Hurry/CryptoNest",
  },
  {
    title: "SortedHive",
    description: "A URL shortener and QR code generator that converts long URLs into clean and shareable links with QR support.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://sortedhive.vercel.app/",
    githubLink: "https://github.com/Sid-Hurry/sortedhive",
  },
  {
    title: "CareConnect",
    description: "A hospital management platform built as a group project for Smart India Hackathon (SIH) to streamline communication between doctors, staff, and administration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://careconnect-1v6s.vercel.app/",
    githubLink: "#",
  },
  {
    title: "SnipWand",
    description: "An AI-powered README generator with real-time markdown preview that helps developers create professional documentation easily.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Markdown", "API Routes"],
    liveLink: "https://snipwand.vercel.app/",
    githubLink: "https://github.com/Sid-Hurry/snipwand",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-3xl overflow-hidden group flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              {/* Project Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors ml-4"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
