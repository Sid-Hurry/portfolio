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

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:col-span-7 lg:col-span-8"
          >
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I am a passionate Full Stack Developer with experience in{" "}
              <span className="inline px-2.5 py-1 border-[2.5px] border-border-color bg-amber-300 dark:bg-amber-400 text-black font-black shadow-[2px_2px_0px_0px_var(--border-color)] box-decoration-clone">
                React.js, Next.js, Node.js, Express.js, MongoDB, and SQL.
              </span>
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              For me, development is more than just writing code. I enjoy solving problems, learning new technologies, and turning simple ideas into real projects that people can actually use. Whether it is building dashboards, APIs, or developer tools, I like creating applications that feel smooth, practical, and polished.
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              I’m also interested in data analysis and enjoy working with data to find meaningful insights and improve decision making. Exploring different technologies and participating in hackathons has helped me grow as a developer and taught me the importance of teamwork, adaptability, and continuous learning.
            </p>
            <p className="text-lg text-foreground/80 font-semibold leading-relaxed">
              Outside of coding, I’m really into cars, especially Aston Martin, Ferrari, and classic Alfa Romeos. I love the mix of performance, engineering, and timeless design behind them, and honestly, that attention to detail inspires the way I approach building products too.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative max-w-[280px] xs:max-w-sm mx-auto md:max-w-md mt-8 md:mt-0 md:col-span-5 lg:col-span-4"
          >
            <div className="absolute -inset-2.5 xs:-inset-4 bg-primary border-[3px] border-border-color shadow-[4px_4px_0px_0px_var(--border-color)] xs:shadow-[6px_6px_0px_0px_var(--border-color)] rounded-2xl rotate-[-3deg]" />
            <div className="relative overflow-hidden border-[4px] border-border-color bg-amber-200 dark:bg-zinc-900 shadow-[6px_6px_0px_0px_var(--border-color)] xs:shadow-[8px_8px_0px_0px_var(--border-color)] rounded-2xl">
              <Image
                src="/pfp2.png"
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

