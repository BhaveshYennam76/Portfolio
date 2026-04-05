"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "SmartQueue",
        category: "Queue Management",
        description: "A real-time queue management system reducing wait times with dynamic tokens, live tracking, and notifications. Built with Firebase Realtime Database and Cloud Functions.",
        tech: "Flutter, Firebase, Node.js",
        image: "/projects/solid-starters.png",
        accent: "from-blue-500/20 to-cyan-500/10",
        glowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
        title: "Paper Trading App",
        category: "Stock Simulator",
        description: "A virtual stock trading simulator with virtual funds, live tracking, portfolio analytics including profit/loss tracking, transaction history, and balance management.",
        tech: "Kotlin, Firebase",
        image: "/projects/radix.png",
        accent: "from-orange-500/20 to-amber-500/10",
        glowColor: "rgba(249, 115, 22, 0.15)",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateState, setRotateState] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateY = ((e.clientX - centerX) / rect.width) * 12;
        const rotateX = -((e.clientY - centerY) / rect.height) * 12;
        setRotateState({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotateState({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <a 
            href="https://github.com/BhaveshYennam76?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block h-full outline-none"
        >
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 80, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                    type: "spring" as const,
                    stiffness: 60,
                    damping: 14,
                    delay: index * 0.2,
                }}
                viewport={{ once: true }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm cursor-pointer h-[520px] flex flex-col justify-end"
                style={{
                    perspective: "1000px",
                    transform: `rotateX(${rotateState.x}deg) rotateY(${rotateState.y}deg)`,
                    transition: "transform 0.15s ease-out",
                    boxShadow: isHovered ? `0 25px 60px -10px ${project.glowColor}` : "none",
                }}
            >
                {/* Image with parallax on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.12 : 1,
                            x: isHovered ? rotateState.y * 1.5 : 0,
                            y: isHovered ? -rotateState.x * 1.5 : 0,
                        }}
                        transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
                        className="w-full h-full"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </motion.div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                    {/* Color accent overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                </div>

                {/* Shimmer sweep */}
                <motion.div
                    className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                        backgroundSize: "200% 100%",
                    }}
                    animate={isHovered ? { backgroundPosition: ["200% 0%", "-200% 0%"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[2]" />

                {/* Content */}
                <motion.div
                    className="relative z-10 p-8"
                    animate={{
                        y: isHovered ? -8 : 0,
                    }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
                >
                    <div className="flex flex-wrap gap-2 mb-4">
                        <motion.span
                            whileHover={{ scale: 1.08 }}
                            className="px-3 py-1 text-xs font-medium tracking-widest text-[#0a0a0a] uppercase bg-white/90 rounded-full shadow-lg backdrop-blur-sm"
                        >
                            {project.category}
                        </motion.span>
                        <motion.span
                            whileHover={{ scale: 1.08 }}
                            className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md"
                        >
                            {project.tech}
                        </motion.span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed drop-shadow-md">
                        {project.description}
                    </p>
                </motion.div>
            </motion.div>
        </a>
    );
}

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Background ambient */}
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249, 115, 22, 0.03), transparent 70%)" }}
                animate={{ scale: [1, 1.4, 1], x: [0, -30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    {"Selected Works".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40, rotateX: -60 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                type: "spring" as const,
                                stiffness: 100,
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ perspective: "1200px" }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* View More Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a 
                        href="https://github.com/BhaveshYennam76?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
                    >
                        <span>View All Projects</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
