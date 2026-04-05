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
        accent: "from-black/5 to-transparent",
        glowColor: "rgba(0, 0, 0, 0.05)",
    },
    {
        title: "Restaurant QR App",
        category: "Digital Ordering",
        description: "A seamless dining experience allowing customers to scan QR codes and order directly from their tables. Includes real-time order tracking and staff dashboard integration.",
        tech: "Flutter, Dart, Firebase",
        image: "/projects/radix.png",
        accent: "from-black/5 to-transparent",
        glowColor: "rgba(0, 0, 0, 0.05)",
    },
    {
        title: "The Book Store",
        category: "Marketplace",
        description: "A comprehensive platform for bibliophiles to buy and sell books. Features secure payments, user profiles, and a robust search/filter system for various genres.",
        tech: "Flutter, Cloud Firestore",
        image: "/projects/max-life.png",
        accent: "from-black/5 to-transparent",
        glowColor: "rgba(0, 0, 0, 0.05)",
    },
    {
        title: "All in One E-comm",
        category: "E-Commerce",
        description: "A multi-vendor e-commerce aggregator providing a unified shopping experience. Support for various product categories, cart management, and order history.",
        tech: "Flutter, REST APIs",
        image: "/projects/bond-cancellation.png",
        accent: "from-black/5 to-transparent",
        glowColor: "rgba(0, 0, 0, 0.05)",
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
        const rotateY = ((e.clientX - centerX) / rect.width) * 8;
        const rotateX = -((e.clientY - centerY) / rect.height) * 8;
        setRotateState({ x: rotateX, y: rotateY });
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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring" as const,
                    stiffness: 60,
                    damping: 14,
                    delay: index * 0.2,
                }}
                viewport={{ once: true }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setRotateState({ x: 0, y: 0 }); setIsHovered(false); }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] h-[540px] flex flex-col justify-end"
                style={{
                    perspective: "1000px",
                    transform: `rotateX(${rotateState.x}deg) rotateY(${rotateState.y}deg)`,
                }}
            >
                {/* Image Container */}
                <div className="absolute inset-x-0 top-0 h-3/5 z-0 overflow-hidden bg-gray-50">
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                    {/* Soft light overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <motion.div
                    className="relative z-10 p-10 bg-white"
                    animate={{
                        y: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-black uppercase bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            {project.category}
                        </span>
                        <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-black uppercase bg-white border border-black border-dashed">
                            {project.tech}
                        </span>
                    </div>
                    <h3 className="text-4xl font-bold text-black mb-6 tracking-tight uppercase">
                        {project.title}
                    </h3>
                    <p className="text-black text-lg leading-relaxed font-medium">
                        {project.description}
                    </p>
                </motion.div>

                {/* Subtle Hover Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
        </a>
    );
}

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#f8f9fa] py-32 px-4 md:px-12 border-t border-black/5 overflow-hidden">
            {/* Background ambient - Professional Grey */}
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.01), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-[#121212] text-shimmer"
                >
                    {"Selected Projects".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 30, rotateX: -60 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                type: "spring",
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* View More Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <a 
                        href="https://github.com/BhaveshYennam76?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-12 py-5 rounded-2xl bg-black text-white font-bold tracking-[0.2em] uppercase hover:bg-[#1a1a1a] transition-all duration-500 shadow-xl shadow-black/10 group"
                    >
                        <span>View All Projects</span>
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
