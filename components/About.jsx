"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
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
              <span className="inline px-2.5 py-1 border-[2.5px] border-border-color bg-amber-300 dark:bg-amber-400 text-black font-black shadow-[2px_2px_0px_0px_var(--border-color)] box-decoration-clone">
                React.js, Next.js, Node.js, Express.js, MongoDB, and SQL.
              </span>
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I enjoy building responsive web applications that feel smooth, practical, and easy to use. My goal is to connect strong backend logic with frontend experiences people actually enjoy.
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I like turning ideas into shipped projects, from dashboards and APIs to polished interfaces. Outside code, cars keep me curious about performance, precision, and design details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative max-w-sm mx-auto md:max-w-md"
          >
            <div className="absolute -inset-4 bg-primary border-[3px] border-border-color shadow-[6px_6px_0px_0px_var(--border-color)] rounded-2xl rotate-[-3deg]" />
            <div className="relative overflow-hidden border-[4px] border-border-color bg-amber-200 dark:bg-zinc-900 shadow-[8px_8px_0px_0px_var(--border-color)] rounded-2xl">
              <Image
                src="/pink-panther-glasses.png"
                alt="Pink panther wearing glasses"
                width={1024}
                height={1024}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

