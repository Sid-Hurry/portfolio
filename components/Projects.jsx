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
          className="flex flex-col gap-12 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden group flex flex-col hover:border-primary/40 transition-all duration-500 relative"
            >
              {/* Subtle Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Project Content */}
              <div className="p-8 md:p-12 flex-grow flex flex-col relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <h3 className="text-3xl md:text-4xl font-extrabold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center justify-center"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 text-lg mb-10 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t border-foreground/5">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-background/50 border border-foreground/5 rounded-xl text-sm font-semibold group-hover:border-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
