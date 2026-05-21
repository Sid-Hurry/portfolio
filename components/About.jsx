"use client";

import { motion } from "framer-motion";
import { Code, Database, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and Next.js.",
      color: "bg-rose-200 dark:bg-rose-950/40",
    },
    {
      icon: Database,
      title: "Backend & Data",
      description: "Creating robust APIs and exploring data analysis with Excel and SQL.",
      color: "bg-sky-200 dark:bg-sky-950/40",
    },
    {
      icon: Rocket,
      title: "Impactful Products",
      description: "Passionate about building real-world projects and participating in hackathons.",
      color: "bg-purple-200 dark:bg-purple-950/40",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-foreground">
            About Me
          </h2>
          <div className="w-24 h-2 bg-primary border-2 border-border-color shadow-[2px_2px_0px_0px_var(--border-color)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl font-bold text-foreground/80 leading-relaxed">
              I am a passionate Full Stack Developer with experience in{" "}
              <span className="inline-block px-2.5 py-1 border-[2.5px] border-border-color bg-amber-300 dark:bg-amber-400 text-black font-black shadow-[2px_2px_0px_0px_var(--border-color)] rotate-[-0.5deg]">
                React.js, Next.js, Node.js, Express.js, MongoDB, and SQL
              </span>.
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I enjoy building responsive and user-friendly web applications while also exploring data analysis. My goal is to bridge the gap between complex backend systems and intuitive frontend experiences.
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I love working on real-world projects, participating in hackathons, and bringing innovative ideas to life that create a positive impact.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 border-[3px] border-border-color ${card.color} text-foreground shadow-[4px_4px_0px_0px_var(--border-color)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all flex items-start gap-4 rounded-2xl cursor-default`}
              >
                <div className="p-3 border-2 border-border-color bg-background text-foreground shadow-[2px_2px_0px_0px_var(--border-color)] rounded-xl shrink-0">
                  <card.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase mb-1">{card.title}</h3>
                  <p className="text-foreground/80 font-bold text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

