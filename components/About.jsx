"use client";

import { motion } from "framer-motion";
import { Code, Database, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and Next.js.",
    },
    {
      icon: Database,
      title: "Backend & Data",
      description: "Creating robust APIs and exploring data analysis with Excel and SQL.",
    },
    {
      icon: Rocket,
      title: "Impactful Products",
      description: "Passionate about building real-world projects and participating in hackathons.",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a passionate Full Stack Developer with experience in{" "}
              <span className="text-primary font-semibold">React.js, Next.js, Node.js, Express.js, MongoDB, and SQL</span>.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I enjoy building responsive and user-friendly web applications while also exploring data analysis. My goal is to bridge the gap between complex backend systems and intuitive frontend experiences.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
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
                className="glass p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <card.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-foreground/70">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
