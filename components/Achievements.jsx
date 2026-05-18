"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top 100 in Campus Beats",
    organization: "ZS Associates",
    description: "Secured a top 100 rank nationwide in the Campus Beats challenge.",
  },
  {
    icon: Medal,
    title: "Top 7 in BVEST",
    organization: "National Level 24-hour Hackathon",
    description: "Developed an innovative solution and placed among the top 7 teams.",
  },
  {
    icon: Award,
    title: "Best Report Award",
    organization: "RAICE 2025 International Conference",
    description: "Received the best report award for outstanding research and presentation.",
  },
  {
    icon: Star,
    title: "Contribution Recognition",
    organization: "GDG On Campus Solution Challenge",
    description: "Recognized for valuable contributions to the GDG On Campus Solution Challenge.",
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-semibold text-primary mb-3">
                {item.organization}
              </p>
              <p className="text-sm text-foreground/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
