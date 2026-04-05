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
                        {/* Animated rings - Monochromatic */}
                        <div className="relative flex items-center justify-center">
                            <motion.div
                                className="absolute w-32 h-32 rounded-full border border-white/20"
                                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute w-48 h-48 rounded-full border border-white/10"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1], rotate: [360, 180, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute w-64 h-64 rounded-full border border-white/5"
                                animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.05, 0.2, 0.05], rotate: [0, -180, -360] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Center glow dot - Monochromatic */}
                            <motion.div
                                className="w-2.5 h-2.5 rounded-full bg-white"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    boxShadow: [
                                        "0 0 15px rgba(255,255,255,0.3)",
                                        "0 0 45px rgba(255,255,255,0.6)",
                                        "0 0 15px rgba(255,255,255,0.3)",
                                    ],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Initials text */}
                            <motion.span
                                className="absolute mt-28 text-[10px] tracking-[0.5em] uppercase text-white/30 font-light"
                                animate={{ opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                BY
                            </motion.span>
                        </div>

                        {/* Floating particles in loader - Monochromatic */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-[1px] h-[1px] rounded-full bg-white/20"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -(40 + Math.random() * 60), 0],
                                        opacity: [0, 0.5, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 4 + Math.random() * 4,
                                        repeat: Infinity,
                                        delay: Math.random() * 3,
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
