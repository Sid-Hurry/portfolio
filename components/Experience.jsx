"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10"></div>

            {/* Experience Item */}
            <div className="md:flex items-center justify-between w-full mb-8">
              <div className="hidden md:block w-5/12"></div>
              
              <div className="absolute left-0 md:left-[50%] md:-ml-[20px] w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background z-10 shadow-lg mt-1 md:mt-0">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div className="w-full md:w-5/12 md:pl-8 lg:pl-12 ml-6 md:ml-0">
                <div className="glass p-8 rounded-3xl hover:border-primary/30 transition-colors">
                  <h3 className="text-2xl font-bold mb-1">Web Development Intern</h3>
                  <p className="text-primary font-semibold mb-6">Fibre Air</p>
                  <ul className="space-y-4 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Built reusable frontend components using React.js.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Integrated REST APIs to connect frontend with backend services.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Supported backend development using Node.js and Express.js.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
