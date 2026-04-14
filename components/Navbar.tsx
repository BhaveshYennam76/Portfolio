"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg border-b border-black/5 dark:border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Magnetic>
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter uppercase dark:text-white group"
          >
            BY<span className="text-accent group-hover:text-black dark:group-hover:text-white transition-colors">.</span>
          </motion.a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link, i) => (
              <Magnetic>
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group"
                >
                  <a
                    href={link.href}
                    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "text-black dark:text-white"
                        : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                  
                  {/* Underline Animation */}
                  <motion.div 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-black dark:bg-white origin-left`}
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: activeSection === link.href.substring(1) ? 1 : 0 
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.li>
              </Magnetic>
            ))}
          </ul>

        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 dark:text-white"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end group">
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t border-black/5 dark:border-white/5 shadow-2xl"
          >
            <ul className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-xl font-black uppercase tracking-tighter ${
                      activeSection === link.href.substring(1) ? "text-accent" : "dark:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

