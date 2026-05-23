"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-300 border-[3.5px] border-border-color bg-background text-foreground ${
        isScrolled
          ? "top-3 py-2 shadow-[4px_4px_0px_0px_var(--shadow-color)] rounded-xl"
          : "top-5 py-4 shadow-[6px_6px_0px_0px_var(--shadow-color)] rounded-2xl"
      }`}
    >
      <div className={`flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "px-4" : "px-6"
      }`}>
        <a 
          href="#" 
          className="text-xl md:text-2xl font-black uppercase tracking-tight text-gradient hover:scale-105 active:scale-95 transition-transform"
        >
          Siddharth
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-black uppercase tracking-wider px-4 py-2 border-2 border-transparent hover:border-border-color hover:bg-primary hover:text-black dark:hover:text-black transition-all rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="w-[3px] h-6 bg-border-color"></div>
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border-2 border-border-color bg-secondary/10 hover:bg-secondary/20 text-foreground active:translate-x-0.5 active:translate-y-0.5 transition-all rounded-lg"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[115%] left-[-3.5px] right-[-3.5px] bg-background border-[3.5px] border-border-color shadow-[4px_4px_0px_0px_var(--shadow-color)] flex flex-col items-center py-5 gap-4 md:hidden rounded-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-black uppercase tracking-wider w-[85%] text-center py-2.5 border-2 border-border-color bg-background hover:bg-primary hover:text-black dark:hover:text-black transition-all rounded-lg shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

