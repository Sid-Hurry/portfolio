"use client";

import { motion } from "framer-motion";

const allSkills = [
  "React.js", "Next.js", "Node.js", "Express.js", 
  "MongoDB", "SQL", "Tailwind CSS", "HTML/CSS", 
  "JavaScript", "Python", "C++", "C", 
  "Git", "GitHub", "Postman", "Microsoft Excel"
];

const badgeColors = [
  "bg-rose-200 dark:bg-rose-950/40 hover:bg-rose-300 dark:hover:bg-rose-900/60",
  "bg-amber-200 dark:bg-amber-950/40 hover:bg-amber-300 dark:hover:bg-amber-900/60",
  "bg-sky-200 dark:bg-sky-950/40 hover:bg-sky-300 dark:hover:bg-sky-900/60",
  "bg-emerald-200 dark:bg-emerald-950/40 hover:bg-emerald-300 dark:hover:bg-emerald-900/60",
  "bg-purple-200 dark:bg-purple-950/40 hover:bg-purple-300 dark:hover:bg-purple-900/60",
  "bg-orange-200 dark:bg-orange-950/40 hover:bg-orange-300 dark:hover:bg-orange-900/60",
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-foreground/5 border-y-[3px] border-border-color">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-2 bg-primary border-2 border-border-color shadow-[2px_2px_0px_0px_var(--border-color)] mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto"
        >
          {allSkills.map((skill, index) => {
            const colorClass = badgeColors[index % badgeColors.length];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`px-5 py-3 border-[2.5px] border-border-color ${colorClass} text-foreground text-sm md:text-base font-extrabold uppercase tracking-wide shadow-[3px_3px_0px_0px_var(--border-color)] hover:shadow-[6px_6px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all cursor-default rounded-xl flex items-center justify-center`}
              >
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

