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
    color: "bg-amber-100 dark:bg-zinc-900/60",
  },
  {
    title: "SortedHive",
    description: "A URL shortener and QR code generator that converts long URLs into clean and shareable links with QR support.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://sortedhive.vercel.app/",
    githubLink: "https://github.com/Sid-Hurry/sortedhive",
    color: "bg-emerald-100 dark:bg-zinc-900/60",
  },
  {
    title: "CareConnect",
    description: "A hospital management platform built as a group project for Smart India Hackathon (SIH) to streamline communication between doctors, staff, and administration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://careconnect-1v6s.vercel.app/",
    githubLink: "#",
    color: "bg-sky-100 dark:bg-zinc-900/60",
  },
  {
    title: "SnipWand",
    description: "An AI-powered README generator with real-time markdown preview that helps developers create professional documentation easily.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Markdown", "API Routes"],
    liveLink: "https://snipwand.vercel.app/",
    githubLink: "https://github.com/Sid-Hurry/snipwand",
    color: "bg-rose-100 dark:bg-zinc-900/60",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-2 bg-primary border-2 border-border-color shadow-[2px_2px_0px_0px_var(--border-color)] mx-auto"></div>
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
              className={`border-[3.5px] border-border-color ${project.color} shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[12px_12px_0px_0px_var(--shadow-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--shadow-color)] transition-all duration-300 rounded-3xl overflow-hidden group flex flex-col relative`}
            >
              {/* Project Content */}
              <div className="p-8 md:p-12 flex-grow flex flex-col relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
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
                        className="p-3 border-[3px] border-border-color bg-background text-foreground shadow-[3px_3px_0px_0px_var(--border-color)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 transition-all rounded-xl flex items-center justify-center"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 border-[3px] border-border-color bg-primary text-white dark:text-black font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--border-color)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 transition-all rounded-xl"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/80 font-bold text-sm md:text-base mb-10 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mt-auto pt-8 border-t-[2.5px] border-border-color">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3.5 py-1.5 bg-background border-2 border-border-color text-foreground font-black text-xs md:text-sm shadow-[2px_2px_0px_0px_var(--border-color)] rounded-lg hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_var(--border-color)] transition-all cursor-default"
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

