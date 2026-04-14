"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const experiences = [
    {
        company: "SaiKet Systems",
        role: "Flutter Developer Intern",
        period: "Oct 2025 – Dec 2025",
        description: "Developed cross-platform mobile applications using Flutter and Dart for Android and iOS. Designed responsive and user-friendly UI components. Integrated REST APIs and managed application data efficiently.",
    },
    {
        company: "Vege Development",
        role: "Flutter Developer Intern",
        period: "Dec 2024 – Apr 2025",
        description: "Designed and implemented user-friendly UI components. Contributed to research and project documentation. Demonstrated strong technical and problem-solving skills with attention to detail.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative z-20 bg-white dark:bg-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase opacity-50 mb-12 block">
                    02 // EXPERIENCE
                </span>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase text-center mb-4 leading-none">
                        Work <span className="text-accent underline decoration-1 underline-offset-8 italic">Experience.</span>
                    </h2>
                    <p className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">
                        Professional Trajectory
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="p-8 border border-black/5 dark:border-white/5 bg-secondary/30 dark:bg-secondary/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 group relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                            <div className="flex justify-between items-start mb-8">
                                <div className="space-y-1">
                                    <Magnetic>
                                        <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                                            {exp.role}
                                        </h3>
                                    </Magnetic>
                                    <p className="text-sm font-black uppercase tracking-widest text-black/40 dark:text-white/40 italic">
                                        {exp.company}
                                    </p>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1 border border-accent/10">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-black/60 dark:text-white/60 font-medium leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


