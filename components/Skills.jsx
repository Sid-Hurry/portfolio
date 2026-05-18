"use client";

import { motion } from "framer-motion";

const allSkills = [
  "React.js", "Next.js", "Node.js", "Express.js", 
  "MongoDB", "SQL", "Tailwind CSS", "HTML/CSS", 
  "JavaScript", "Python", "C++", "C", 
  "Git", "GitHub", "Postman", "Microsoft Excel"
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass px-6 py-3 rounded-full text-base md:text-lg font-medium text-foreground/80 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm cursor-default flex items-center justify-center"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
