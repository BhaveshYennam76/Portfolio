"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoadWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 z-[9999] bg-[#060606] flex items-center justify-center"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Animated rings */}
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                className="absolute w-32 h-32 rounded-full border border-purple-500/30"
                                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute w-48 h-48 rounded-full border border-blue-500/20"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], rotate: [360, 180, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute w-64 h-64 rounded-full border border-orange-500/10"
                                animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.1, 0.3, 0.1], rotate: [0, -180, -360] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Center glow dot */}
                            <motion.div
                                className="w-3 h-3 rounded-full bg-purple-500"
                                animate={{
                                    scale: [1, 1.8, 1],
                                    boxShadow: [
                                        "0 0 20px rgba(139,92,246,0.4)",
                                        "0 0 60px rgba(139,92,246,0.8)",
                                        "0 0 20px rgba(139,92,246,0.4)",
                                    ],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Initials text */}
                            <motion.span
                                className="absolute mt-28 text-xs tracking-[0.4em] uppercase text-white/40 font-light"
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                BY
                            </motion.span>
                        </div>

                        {/* Floating particles in loader */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{
                                        left: `${15 + Math.random() * 70}%`,
                                        top: `${15 + Math.random() * 70}%`,
                                        background: i % 3 === 0
                                            ? "rgba(139,92,246,0.5)"
                                            : i % 3 === 1
                                                ? "rgba(59,130,246,0.4)"
                                                : "rgba(249,115,22,0.3)",
                                    }}
                                    animate={{
                                        y: [0, -(30 + Math.random() * 50), 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0, 1.5, 0],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content with stagger reveal */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!isLoading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
