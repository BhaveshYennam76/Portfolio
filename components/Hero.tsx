"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Magnetic from "./Magnetic";

const TechIcons = () => {
    const icons = [
        { label: "Flutter", icon: "📱" },
        { label: "Firebase", icon: "🔥" },
        { label: "React/Next", icon: "💻" },
        { label: "Systems", icon: "⚙️" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % icons.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [icons.length]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 mt-16 justify-center"
        >
            {icons.map((item, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: activeIndex === i ? 1.2 : 1,
                        rotate: activeIndex === i ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10 backdrop-blur-sm transition-colors duration-500"
                    title={item.label}
                >
                    <span className="text-2xl">{item.icon}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const name = "BHAVESH YENNAM";
    const nameLetters = name.split("");

    if (!mounted) return null;

    return (
        <section 
            id="home" 
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 pt-32 pb-20 px-6"
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-black/5 dark:bg-white/5 rounded-full blur-[80px]" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* Available Tag - Moved down from header with significant padding */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mb-8 flex items-center gap-3 px-6 py-2 rounded-full border border-accent/30 bg-accent/5 dark:bg-accent/10 backdrop-blur-md shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] transition-all duration-500 hover:scale-105 hover:border-accent hover:bg-accent/20 animate-shimmer overflow-hidden"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent dark:text-accent shadow-accent/20">
                        Available for Projects
                    </span>
                </motion.div>

                {/* Main Heading — Fluid responsive size */}
                <h1 className="flex flex-nowrap justify-center mb-6 whitespace-nowrap overflow-hidden">
                    {nameLetters.map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 80, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ 
                                delay: 0.2 + i * 0.03, 
                                duration: 1, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className={`text-[clamp(2.5rem,10vw,9rem)] font-black tracking-tighter text-black dark:text-white uppercase leading-none inline-block ${letter === " " ? "w-[3vw]" : ""}`}
                            style={{ perspective: "1000px" }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </h1>

                {/* Subheading/Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base sm:text-lg md:text-2xl text-black/50 dark:text-white/50 max-w-3xl leading-relaxed font-medium mb-10 italic px-4"
                >
                    Crafting <span className="text-black dark:text-white font-black not-italic underline decoration-1 underline-offset-8">high-performance</span> mobile solutions with <br className="hidden md:block" />
                    Flutter and clean digital aesthetics.
                </motion.p>

                {/* Magnetic CTA Wrapper — Restored & Responsive */}
                <div className="flex flex-col items-center gap-8 pb-10">
                    <Magnetic>
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="group relative inline-flex items-center gap-6 px-10 py-5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl hover:bg-black dark:hover:bg-white hover:border-transparent transition-all duration-700 overflow-hidden shadow-2xl scale-90 sm:scale-100 animate-shimmer shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)]"
                        >
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500 relative z-10">
                                View My Resume
                            </span>
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center relative z-10 group-hover:bg-white dark:group-hover:bg-black transition-colors duration-500">
                                <svg className="w-4 h-4 text-white dark:text-black group-hover:text-black dark:group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </motion.a>
                    </Magnetic>

                    {/* Tech Stack Icons (Quick View) */}
                    <div className="mt-8 scale-90 sm:scale-100">
                        <TechIcons />
                    </div>
                </div>
            </div>

            {/* Film Grain - Subtle Texture */}
            <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay opacity-[0.03] dark:opacity-[0.05]">
                <div className="w-full h-full animate-grain" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                }} />
            </div>
            
            <style>{`
                @keyframes grain {
                    0%, 100% { transform:translate(0, 0) }
                    10% { transform:translate(-5%, -10%) }
                    20% { transform:translate(-15%, 5%) }
                    30% { transform:translate(7%, -25%) }
                    40% { transform:translate(-5%, 25%) }
                    50% { transform:translate(-15%, 10%) }
                    60% { transform:translate(15%, 0%) }
                    70% { transform:translate(0%, 15%) }
                    80% { transform:translate(3%, 35%) }
                    90% { transform:translate(-10%, 10%) }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .animate-grain {
                    animation: grain 8s steps(10) infinite;
                }
                .animate-shimmer {
                    background: linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.1), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite linear;
                }
            `}</style>
        </section>
    );
}
