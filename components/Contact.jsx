"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-foreground/5 border-t-[3px] border-border-color">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-2 bg-primary border-2 border-border-color shadow-[2px_2px_0px_0px_var(--border-color)] mx-auto mb-8"></div>
          <p className="text-foreground/80 font-bold max-w-2xl mx-auto text-base md:text-lg">
            Have a project, opportunity, or idea in mind? Send a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="border-[3.5px] border-border-color bg-sky-100 dark:bg-zinc-900/60 p-5 xs:p-8 shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_var(--shadow-color)] transition-all rounded-3xl h-full flex flex-col gap-7">
              <div>
                <p className="inline-block mb-4 px-3 py-1 border-2 border-border-color bg-amber-300 text-black font-black uppercase text-xs tracking-wider shadow-[2px_2px_0px_0px_var(--border-color)] rounded-lg">
                  Open to connect
                </p>
                <h3 className="font-black uppercase text-2xl mb-3">Let's Talk</h3>
                <p className="text-foreground/75 font-bold leading-relaxed">
                  I am open to web projects, internships, collaborations, and data-focused ideas.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border-2 border-border-color bg-primary text-white dark:text-black shadow-[2.5px_2.5px_0px_0px_var(--border-color)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 pt-1">
                  <p className="font-black uppercase text-sm mb-1">Email Me</p>
                  <a href="mailto:siddharthhooda0013@gmail.com" className="text-foreground/80 hover:text-primary transition-colors font-bold text-xs xs:text-sm break-words">
                    siddharthhooda0013@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/siddharth-hooda-188606324/", label: "LinkedIn", color: "bg-sky-300" },
                  { icon: FaGithub, href: "https://github.com/Sid-Hurry", label: "GitHub", color: "bg-amber-300" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-14 h-14 rounded-xl border-2 border-border-color ${social.color} text-black shadow-[2.5px_2.5px_0px_0px_var(--border-color)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4.5px_4.5px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all flex items-center justify-center`}
                  >
                    <social.icon className="w-7 h-7" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-[1.5]"
          >
            <form className="border-[3.5px] border-border-color bg-rose-100 dark:bg-zinc-900/60 p-5 xs:p-8 shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_var(--shadow-color)] transition-all rounded-3xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-black uppercase tracking-wider text-foreground ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-background border-[3px] border-border-color text-foreground placeholder:text-foreground/50 font-bold outline-none focus:shadow-[4px_4px_0px_0px_var(--border-color)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-black uppercase tracking-wider text-foreground ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border-[3px] border-border-color text-foreground placeholder:text-foreground/50 font-bold outline-none focus:shadow-[4px_4px_0px_0px_var(--border-color)] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-black uppercase tracking-wider text-foreground ml-1">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-background border-[3px] border-border-color text-foreground placeholder:text-foreground/50 font-bold outline-none focus:shadow-[4px_4px_0px_0px_var(--border-color)] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl border-[3.5px] border-border-color bg-primary text-white dark:text-black font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--border-color)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_var(--border-color)] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_var(--border-color)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

