"use client";

import { motion, Variants } from "framer-motion";
import Magnetic from "./Magnetic";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: "📱",
        skills: [
            { name: "Flutter", level: 95 },
            { name: "Dart", level: 90 },
            { name: "Android (Kotlin)", level: 75 },
            { name: "Cross-Platform", level: 90 },
        ],
    },
    {
        title: "Programming",
        icon: "💻",
        skills: [
            { name: "Dart", level: 95 },
            { name: "Java", level: 80 },
            { name: "Kotlin", level: 75 },
            { name: "C++", level: 65 },
        ],
    },
    {
        title: "Backend & DB",
        icon: "🔥",
        skills: [
            { name: "Firebase", level: 90 },
            { name: "Firestore", level: 85 },
            { name: "REST APIs", level: 95 },
            { name: "Node.js", level: 75 },
        ],
    },
    {
        title: "Tools & Design",
        icon: "⚙️",
        skills: [
            { name: "GitHub", level: 95 },
            { name: "Android Studio", level: 95 },
            { name: "VS Code", level: 90 },
            { name: "Postman", level: 85 },
            { name: "Figma", level: 75 },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function TechStack() {
    return (
        <section id="skills" className="relative z-20 bg-white dark:bg-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase opacity-50 mb-12 block">
                    03 // SKILLS
                </span>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase text-center mb-4 leading-none">
                        Technical <span className="text-accent underline decoration-1 underline-offset-8 italic">Arsenal.</span>
                    </h2>
                    <p className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">
                        Tools of the trade
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="p-8 border border-black/5 dark:border-white/5 bg-secondary/30 dark:bg-secondary/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 group"
                        >
                            <Magnetic>
                                <motion.div 
                                    className="text-3xl mb-8 group-hover:scale-125 transition-transform duration-500 origin-left"
                                >
                                    {category.icon}
                                </motion.div>
                            </Magnetic>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-10">
                                {category.title}
                            </h3>
                            
                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-black/60 dark:text-white/60">
                                                {skill.name}
                                            </span>
                                            <span className="text-[9px] font-bold text-accent">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-[2px] w-full bg-black/5 dark:bg-white/5 relative overflow-hidden">
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: skill.level / 100 }}
                                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                                viewport={{ once: true }}
                                                className="absolute inset-0 bg-black dark:bg-white origin-left"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


