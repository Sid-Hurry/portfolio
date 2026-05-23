"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            x: [0, 15, -10, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-[8%] w-32 h-32 md:w-48 md:h-48 border-[3.5px] border-border-color bg-primary/10 rounded-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            x: [0, -20, 15, 0],
            y: [0, 20, -10, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-[8%] w-48 h-48 md:w-72 md:h-72 border-[3.5px] border-border-color bg-secondary/10 rounded-[40px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-none text-foreground"
          >
            Hi, I'm{" "}
            <span className="inline-block px-4 xs:px-6 py-2 my-2 border-[4px] border-border-color bg-primary text-white dark:text-black shadow-[4px_4px_0px_0px_var(--border-color)] sm:shadow-[6px_6px_0px_0px_var(--border-color)] rotate-[-1deg]">
              Siddharth Hooda
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-base xs:text-lg sm:text-2xl md:text-3xl font-black uppercase text-foreground/90 mb-8 tracking-wide"
          >
            Full Stack Developer | Data Analyst |{" "}
            <span className="inline-block px-2 xs:px-3 py-0.5 xs:py-1 border-2 border-border-color bg-secondary text-white shadow-[2px_2px_0px_0px_var(--border-color)] sm:shadow-[3px_3px_0px_0px_var(--border-color)]">
              Car Enthusiast
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-base md:text-xl font-bold text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed bg-background/50 border-[3.5px] border-border-color p-6 shadow-[5px_5px_0px_0px_var(--border-color)] rounded-2xl"
          >
            I build clean full-stack products, turn data into useful decisions,
            and bring a car enthusiast's eye for performance and detail.
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl border-[3.5px] border-border-color bg-emerald-400 text-black font-black uppercase tracking-wider shadow-[5px_5px_0px_0px_var(--border-color)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[9px_9px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border-[3.5px] border-border-color bg-background hover:bg-primary hover:text-white dark:hover:text-black text-foreground font-black uppercase tracking-wider shadow-[5px_5px_0px_0px_var(--border-color)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[9px_9px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-14"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Sid-Hurry", label: "GitHub", color: "bg-amber-300 hover:bg-amber-400 text-black" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/siddharth-hooda-188606324/", label: "LinkedIn", color: "bg-sky-300 hover:bg-sky-400 text-black" },
              { icon: Mail, href: "mailto:siddharthhooda0013@gmail.com", label: "Email", color: "bg-rose-300 hover:bg-rose-400 text-black" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-4 border-[3px] border-border-color ${social.color} shadow-[4px_4px_0px_0px_var(--border-color)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all duration-150 rounded-xl`}
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
