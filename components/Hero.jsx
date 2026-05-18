"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Siddharth Hooda</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6"
          >
            Full Stack Developer & Data Analysis Enthusiast
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications and solving real-world problems
            through technology and data.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-colors w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass hover:bg-white/10 dark:hover:bg-white/5 font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download className="w-5 h-5" /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: FaGithub, href: "https://github.com/SiddharthHooda", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/siddharth-hooda", label: "LinkedIn" },
              { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass text-foreground/80 hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
