"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: "📱",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["Flutter", "Dart", "Android (Kotlin)", "Cross-Platform Apps", "iOS"],
    },
    {
        title: "Programming Languages",
        icon: "💻",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["Dart", "Java", "Kotlin", "C++"],
    },
    {
        title: "Backend & Integration",
        icon: "🔥",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["Firebase Auth", "Firestore", "Realtime DB", "REST APIs", "JSON"],
    },
    {
        title: "Architecture & State",
        icon: "🏗️",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["Clean Architecture", "Provider", "MVVM"],
    },
    {
        title: "UI/UX & Design",
        icon: "🎨",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["UI/UX Design", "Responsive Design", "Material Design"],
    },
    {
        title: "Tools & Platforms",
        icon: "⚙️",
        color: "from-white/5 to-white/[0.02]",
        borderColor: "group-hover:border-white/20",
        glowColor: "group-hover:shadow-white/5",
        accentColor: "via-white/20",
        skills: ["Android Studio", "VS Code", "GitHub", "Postman"],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 80,
        rotateX: -15,
        scale: 0.85,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            mass: 0.8,
        },
    },
};

const skillVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 12,
            delay: i * 0.06,
        },
    }),
};

export default function TechStack() {
    return (
        <section className="relative z-20 bg-[#f8f9fa] py-32 px-4 md:px-12 border-t border-black/5 overflow-hidden">
            {/* Subtle light mode grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Ambient light orbs - Professional Grey */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.02), transparent 70%)" }}
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.015), transparent 70%)" }}
                animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                          <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 12 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-black inline-block uppercase"
                    >
                        {"Tech Stack".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.03,
                                }}
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-[2px] w-24 mx-auto mt-8 bg-black"
                    />
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.4, ease: "easeOut" },
                            }}
                            className="group relative rounded-3xl bg-white border-2 border-black p-10 transition-all duration-500 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] cursor-default overflow-hidden"
                        >
                            {/* Colorful background hover effect */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${index % 3 === 0 ? "from-blue-500 to-purple-500" : index % 3 === 1 ? "from-green-500 to-teal-500" : "from-orange-500 to-red-500"}`} />

                            <div className="relative z-10">
                                {/* Icon - Always Colorful */}
                                <div className="text-4xl mb-8 group-hover:scale-110 transition-all duration-500">
                                    {category.icon}
                                </div>

                                <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-black mb-8 group-hover:tracking-[0.5em] transition-all duration-500">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            variants={skillVariants}
                                            custom={skillIndex}
                                            className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-default select-none"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Subdued professional particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-black/5"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                            }}
                            animate={{
                                y: [0, -(30 + Math.random() * 50), 0],
                                opacity: [0, 0.4, 0],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 10,
                                repeat: Infinity,
                                delay: Math.random() * 10,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
