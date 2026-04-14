"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Magnetic from "./Magnetic";

const projects = [
    {
        title: "SmartQueue",
        category: "Queue Management",
        description: "A real-time queue management system reducing wait times with dynamic tokens, live tracking, and notifications. Built with Firebase Realtime Database and Cloud Functions.",
        tech: ["Flutter", "Firebase", "Node.js"],
        image: "/projects/solid-starters.png",
    },
    {
        title: "Restaurant QR App",
        category: "Digital Ordering",
        description: "A seamless dining experience allowing customers to scan QR codes and order directly from their tables. Includes real-time order tracking and staff dashboard integration.",
        tech: ["Flutter", "Dart", "Firebase"],
        image: "/projects/radix.png",
    },
    {
        title: "The Book Store",
        category: "Marketplace",
        description: "A comprehensive platform for bibliophiles to buy and sell books. Features secure payments, user profiles, and a robust search/filter system for various genres.",
        tech: ["Flutter", "Cloud Firestore"],
        image: "/projects/max-life.png",
    },
    {
        title: "All in One E-comm",
        category: "E-Commerce",
        description: "A multi-vendor e-commerce aggregator providing a unified shopping experience. Support for various product categories, cart management, and order history.",
        tech: ["Flutter", "REST APIs"],
        image: "/projects/bond-cancellation.png",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateState, setRotateState] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateY = ((e.clientX - centerX) / rect.width) * 4;
        const rotateX = -((e.clientY - centerY) / rect.height) * 4;
        setRotateState({ x: rotateX, y: rotateY });
    };

    return (
        <motion.a 
            href="https://github.com/BhaveshYennam76?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={cardVariants}
            className="block h-full group"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setRotateState({ x: 0, y: 0 }); setIsHovered(false); }}
                animate={{
                    rotateX: rotateState.x,
                    rotateY: rotateState.y,
                    y: isHovered ? -10 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative overflow-hidden border border-black/5 dark:border-white/5 bg-secondary/30 dark:bg-secondary/10 transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 h-full flex flex-col ${isHovered ? "shadow-2xl dark:shadow-white/5" : ""}`}
                style={{ perspective: "1500px" }}
            >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700">
                    <motion.div
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">
                        {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase mb-4 tracking-tighter">
                        {project.title}
                    </h3>
                    <p className="text-black/60 dark:text-white/60 font-medium leading-relaxed mb-8 flex-grow">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-[8px] font-black uppercase tracking-widest border border-black/10 dark:border-white/10 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action indicator */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white dark:bg-black border border-black/5 dark:border-white/5 flex items-center justify-center transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} shadow-lg`}>
                    <svg className="w-4 h-4 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </motion.div>
        </motion.a>
    );
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="relative z-20 bg-white dark:bg-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase opacity-50 mb-12 block">
                    04 // PROJECTS
                </span>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black dark:text-white uppercase text-center mb-4 leading-none">
                        Featured <span className="text-accent underline decoration-1 underline-offset-8 italic">Creations.</span>
                    </h2>
                    <p className="text-accent font-black uppercase tracking-[0.4em] text-[10px]">
                        Crafting digital impact
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <Magnetic>
                        <a 
                            href="https://github.com/BhaveshYennam76?tab=repositories" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-12 p-10"
                        >
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Open Source</span>
                                <span className="text-xl font-black uppercase tracking-tight text-black dark:text-white group-hover:-translate-x-2 transition-transform duration-300">
                                    Explore All Repositories
                                </span>
                            </div>
                            <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:border-black dark:group-hover:border-white transition-all duration-500 group-hover:scale-110">
                                <svg className="w-8 h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </div>
                        </a>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}


