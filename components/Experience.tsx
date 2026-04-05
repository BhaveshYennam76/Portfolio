"use client";

import { motion } from "framer-motion";

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

const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 80, damping: 14, duration: 0.8 },
    },
};

const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Background ambient glow */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.04), transparent 70%)" }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    {"Career Timeline".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 30, rotateX: -60 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                type: "spring" as const,
                                stiffness: 120,
                                damping: 12,
                                delay: i * 0.03,
                            }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                <div className="relative ml-4 md:ml-0 md:pl-0 space-y-16">
                    {/* Animated timeline line */}
                    <motion.div
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
                        style={{
                            background: "linear-gradient(to bottom, rgba(139,92,246,0.5), rgba(59,130,246,0.3), rgba(139,92,246,0.1))",
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -60, rotateY: -8 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{
                                type: "spring" as const,
                                stiffness: 70,
                                damping: 15,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="relative pl-10 md:pl-14 group"
                            style={{ perspective: "800px" }}
                        >
                            {/* Animated timeline dot */}
                            <motion.div
                                className="absolute -left-[6px] top-2 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-[#0a0a0a]"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    type: "spring" as const,
                                    stiffness: 300,
                                    damping: 15,
                                    delay: index * 0.2 + 0.3,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Pulsing ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-purple-500/50"
                                    animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                />
                            </motion.div>

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    x: 8,
                                    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
                                }}
                                className="relative rounded-xl bg-white/[0.03] border border-white/10 p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5 overflow-hidden"
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 55%, transparent 60%)",
                                    backgroundSize: "200% 100%",
                                    animation: "shimmer 3s linear infinite",
                                }} />

                                {/* Top accent */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-xs text-purple-400/80 font-mono mb-3 uppercase tracking-[0.2em]"
                                    >
                                        {exp.period}
                                    </motion.div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">
                                        {exp.company}
                                    </h3>
                                    <h4 className="text-lg text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                                        {exp.role}
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-300">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
