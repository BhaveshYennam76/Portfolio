"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: "📱",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "group-hover:border-blue-500/40",
        glowColor: "group-hover:shadow-blue-500/20",
        accentColor: "via-blue-500/60",
        skills: ["Flutter", "Dart", "Android (Kotlin)", "Cross-Platform Apps", "iOS"],
    },
    {
        title: "Programming Languages",
        icon: "💻",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "group-hover:border-purple-500/40",
        glowColor: "group-hover:shadow-purple-500/20",
        accentColor: "via-purple-500/60",
        skills: ["Dart", "Java", "Kotlin", "C++"],
    },
    {
        title: "Backend & Integration",
        icon: "🔥",
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "group-hover:border-orange-500/40",
        glowColor: "group-hover:shadow-orange-500/20",
        accentColor: "via-orange-500/60",
        skills: ["Firebase Auth", "Firestore", "Realtime DB", "REST APIs", "JSON"],
    },
    {
        title: "Architecture & State",
        icon: "🏗️",
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "group-hover:border-emerald-500/40",
        glowColor: "group-hover:shadow-emerald-500/20",
        accentColor: "via-emerald-500/60",
        skills: ["Clean Architecture", "Provider", "MVVM"],
    },
    {
        title: "UI/UX & Design",
        icon: "🎨",
        color: "from-pink-500/20 to-violet-500/20",
        borderColor: "group-hover:border-pink-500/40",
        glowColor: "group-hover:shadow-pink-500/20",
        accentColor: "via-pink-500/60",
        skills: ["UI/UX Design", "Responsive Design", "Material Design"],
    },
    {
        title: "Tools & Platforms",
        icon: "⚙️",
        color: "from-amber-500/20 to-yellow-500/20",
        borderColor: "group-hover:border-amber-500/40",
        glowColor: "group-hover:shadow-amber-500/20",
        accentColor: "via-amber-500/60",
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
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating ambient orbs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.08), transparent 70%)" }}
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 70%)" }}
                animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249, 115, 22, 0.04), transparent 70%)" }}
                animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title with stagger letter animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 12 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white inline-block"
                    >
                        {"Tech Stack".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 12,
                                    delay: i * 0.04,
                                }}
                                viewport={{ once: true }}
                                className="inline-block"
                                style={{ display: char === " " ? "inline" : undefined }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-[2px] w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    />
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ perspective: "1000px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                            className={`group relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 backdrop-blur-sm transition-all duration-500 ${category.borderColor} ${category.glowColor} hover:shadow-2xl cursor-default overflow-hidden`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Animated gradient background on hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                            />

                            {/* Animated top accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${category.accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Shimmer sweep effect */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                style={{
                                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                                    backgroundSize: "200% 100%",
                                }}
                                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Corner glow */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/[0.02] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                {/* Icon with bounce */}
                                <motion.div
                                    className="text-3xl mb-4"
                                    whileHover={{
                                        scale: [1, 1.3, 1],
                                        rotate: [0, -10, 10, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    {category.icon}
                                </motion.div>

                                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-5 group-hover:text-white/80 transition-colors duration-300">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            variants={skillVariants}
                                            custom={skillIndex}
                                            whileHover={{
                                                scale: 1.15,
                                                y: -4,
                                                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.15)",
                                                transition: { type: "spring", stiffness: 400, damping: 15 },
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full transition-colors duration-300 hover:bg-white/15 hover:text-white hover:border-white/30 cursor-default select-none"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating particles in tech stack section */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-purple-500/30"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                            }}
                            animate={{
                                y: [0, -(20 + Math.random() * 40), 0],
                                x: [0, (Math.random() - 0.5) * 30, 0],
                                opacity: [0, 0.6, 0],
                                scale: [0, 1.5, 0],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 6,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
