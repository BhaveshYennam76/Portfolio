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
        <section className="relative z-20 bg-white py-32 px-4 md:px-12 border-t border-black overflow-hidden">
            {/* Background ambient glow - Professional Grey */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.015), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-bold mb-24 tracking-tighter text-black text-center uppercase"
                >
                    {"Experience".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
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

                <div className="relative ml-4 md:ml-0 md:pl-0 space-y-20">
                    {/* Animated timeline line - Pure Black */}
                    <motion.div
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute left-0 top-0 bottom-0 w-[2px] origin-top bg-black opacity-100"
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring" as const,
                                stiffness: 70,
                                damping: 15,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="relative pl-12 md:pl-16 group"
                        >
                            {/* Animated timeline dot - Pure Black */}
                            <motion.div
                                className="absolute -left-[6px] top-2 w-3.5 h-3.5 rounded-full bg-black border-2 border-white shadow-xl z-20"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    type: "spring" as const,
                                    stiffness: 300,
                                    damping: 15,
                                    delay: index * 0.2 + 0.3,
                                }}
                                viewport={{ once: true }}
                            />

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    x: 10,
                                    transition: { duration: 0.4, ease: "easeOut" },
                                }}
                                className="relative rounded-3xl bg-white border-2 border-black p-10 transition-all duration-500 hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-[10px] text-black font-bold mb-6 uppercase tracking-[0.4em] bg-black text-white inline-block px-3 py-1"
                                    >
                                        {exp.period}
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-black mb-2 uppercase tracking-tight">
                                        {exp.company}
                                    </h3>
                                    <h4 className="text-xl text-black/60 mb-8 font-medium uppercase tracking-widest italic">
                                        {exp.role}
                                    </h4>
                                    <p className="text-black text-lg leading-relaxed max-w-2xl font-medium">
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
