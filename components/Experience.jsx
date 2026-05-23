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
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-foreground">Experience</h2>
          <div className="w-24 h-2 bg-primary border-2 border-border-color shadow-[2px_2px_0px_0px_var(--border-color)] mx-auto"></div>
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
            <div className="absolute left-[18px] md:left-[50%] md:-ml-[2px] top-0 bottom-0 w-[4px] bg-border-color"></div>

            {/* Experience Item */}
            <div className="md:flex items-center justify-between w-full mb-8">
              <div className="hidden md:block w-5/12"></div>
              
              <div className="absolute left-0 md:left-[50%] md:-ml-[20px] w-10 h-10 rounded-xl border-[3px] border-border-color bg-primary flex items-center justify-center z-10 shadow-[3px_3px_0px_0px_var(--border-color)] mt-1 md:mt-0 text-white dark:text-black">
                <Briefcase className="w-5 h-5" />
              </div>

              <div className="w-full md:w-5/12 md:pl-8 lg:pl-12 ml-8 md:ml-0">
                <div className="border-[3.5px] border-border-color bg-amber-100 dark:bg-zinc-900/60 p-5 xs:p-8 shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[9px_9px_0px_0px_var(--shadow-color)] transition-all rounded-3xl">
                  <h3 className="text-2xl font-black uppercase mb-1">Web Development Intern</h3>
                  <p className="text-primary font-black uppercase tracking-wider mb-6 text-sm">Fibre Air</p>
                  <ul className="space-y-4 text-foreground/80 font-bold text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-border-color bg-secondary mt-0.5 flex-shrink-0"></span>
                      <span>Built reusable frontend components using React.js.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-border-color bg-secondary mt-0.5 flex-shrink-0"></span>
                      <span>Integrated REST APIs to connect frontend with backend services.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-border-color bg-secondary mt-0.5 flex-shrink-0"></span>
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

