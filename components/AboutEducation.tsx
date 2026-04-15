"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const education = [
    {
        degree: "Bachelor of Computer Applications (BCA) (2023 – 2026)",
        institution: "Veer Narmad South Gujarat University",
        link: "http://www.vnsgu.ac.in/",
        batch: "Batch of 2026",
        grade: "CGPA: 7.6 / 10",
        description: "Focusing on mobile app development and modern software engineering practices."
    },
    {
        degree: "H.S.C (12th Grade)",
        institution: "Gyanjyot Vidhyalaya",
        batch: "Commerce Stream",
        grade: "60%",
        description: "Foundational studies in commerce and business mathematics."
    }
];

export default function AboutEducation() {
    return (
        <section id="about" className="relative z-20 bg-white dark:bg-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase opacity-50 mb-12 block">
                    01 // ABOUT
                </span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column - About Me */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-black dark:text-white uppercase leading-none">
                                The <span className="text-accent italic">Story</span> So Far.
                            </h2>
                            
                            <div className="space-y-8 text-black/70 dark:text-white/70 text-lg md:text-xl leading-relaxed font-medium">
                                <p>
                                    Hi, I'm <span className="text-black dark:text-white font-black underline decoration-1 underline-offset-4">Bhavesh Yennam</span>, a detail-oriented developer with a Bachelor of Computer Applications degree from <a href="http://www.vnsgu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Veer Narmad South Gujarat University</a>.
                                </p>
                                <p>
                                    My journey is driven by a passion for <span className="text-black dark:text-white font-bold italic">Mobile Application Development</span>. As a Flutter Developer Intern at SaiKet Systems and Vege Development, I've honed my skills in building robust, high-performance cross-platform applications.
                                </p>
                                <p>
                                    I specialize in crafting seamless user experiences using <span className="text-black dark:text-white font-bold">Flutter & Dart</span>, often integrating cloud-based backends like Firebase to build scalable, real-world solutions.
                                </p>
                            </div>

                            <motion.div 
                                className="mt-16"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Magnetic>
                                    <a 
                                        href="/resume.pdf" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 group px-7 py-4 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white hover:border-transparent transition-all duration-500 animate-shimmer overflow-hidden shadow-[0_0_15px_rgba(var(--accent-rgb),0.05)]"
                                    >
                                        <svg className="w-4 h-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div className="flex flex-col items-start">
                                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-accent group-hover:text-white/60 dark:group-hover:text-black/60 transition-colors duration-300">Detailed Profile</span>
                                            <span className="text-sm font-black uppercase tracking-tight text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                                View My Resume
                                            </span>
                                        </div>
                                        <svg className="w-4 h-4 ml-2 text-black/40 dark:text-white/40 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </Magnetic>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Education */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl font-black mb-12 tracking-[0.4em] text-accent uppercase">
                                Education
                            </h2>

                            <div className="space-y-12">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.2), duration: 0.8 }}
                                        viewport={{ once: true }}
                                        className="relative pl-8 border-l border-black/10 dark:border-white/10 group"
                                    >
                                        <div className="absolute left-[-1px] top-0 h-0 w-[1px] bg-accent transition-all duration-700 group-hover:h-full" />
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-accent mb-2">
                                            {edu.batch}
                                        </span>
                                        <h3 className="text-xl font-black text-black dark:text-white uppercase mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm text-black/40 dark:text-white/40 font-bold uppercase mb-4">
                                            <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                                {edu.institution}
                                            </a> • <span className="text-black/60 dark:text-white/60">{edu.grade}</span>
                                        </p>
                                        <p className="text-black/60 dark:text-white/60 font-medium leading-relaxed max-w-sm">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}


