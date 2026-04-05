"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, AnimatePresence } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    // Scroll transforms
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.15, 1.35, 1.8]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 6]);
    const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.35]);
    const blur = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 8]);
    const hueRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 35]);
    const saturate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 0.6, 0.4, 0.2]);
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.3, 0.5]);
    const overlayDarkness = useTransform(scrollYProgress, [0.7, 1], [0, 0.3]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f8f9fa]" style={{ perspective: "1200px" }}>

                {/* === DRAMATIC LOAD REVEAL - Light Mode === */}
                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            className="absolute inset-0 z-50 bg-[#f8f9fa]"
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    )}
                </AnimatePresence>

                {/* === MAIN IMAGE === */}
                <motion.div
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        scale,
                        y,
                        rotateX,
                        filter: useFilterComposite(brightness, blur, hueRotate, saturate),
                    }}
                    className="absolute inset-0 w-full h-full origin-center grayscale-[0.3]"
                >
                    <img
                        src="/cover_photo.png"
                        alt="Bhavesh Yennam"
                        className="w-full h-full object-cover opacity-100"
                    />
                </motion.div>

                {/* === ANIMATED SCAN LINES - Subtle Grey === */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] mix-blend-multiply">
                    <div className="w-full h-full animate-scanlines" style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(18,18,18,0.02) 2px, rgba(18,18,18,0.02) 4px)",
                    }} />
                </div>

                {/* === CINEMATIC RADIAL VIGNETTE - Soft Grey === */}
                <motion.div
                    style={{ opacity: vignetteOpacity }}
                    className="absolute inset-0 pointer-events-none z-10"
                >
                    <div className="w-full h-full" style={{
                        background: "radial-gradient(ellipse at center, transparent 40%, rgba(18,18,18,0.05) 75%, rgba(18,18,18,0.15) 100%)"
                    }} />
                </motion.div>

                {/* === PULSING GLOW RINGS - Professional Grey === */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full border border-black/5"
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.03, 0.08, 0.03] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-[750px] h-[750px] rounded-full border border-black/5"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.02, 0.05, 0.02] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </div>

                {/* === FLOATING PARTICLES SYSTEM - Professional Grey === */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {[...Array(25)].map((_, i) => {
                        const size = 1 + Math.random() * 2;
                        const isGlowing = i % 6 === 0;
                        const opacity = isGlowing ? 0.2 : 0.1;
                        return (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-black"
                                style={{
                                    width: size,
                                    height: size,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    opacity: opacity,
                                    boxShadow: isGlowing ? `0 0 ${size * 3}px rgba(0,0,0,0.1)` : "none",
                                }}
                                animate={{
                                    y: [0, -(50 + Math.random() * 80), 0],
                                    x: [0, (Math.random() - 0.5) * 30, 0],
                                    opacity: [0, opacity, 0],
                                    scale: [0.6, isGlowing ? 1.3 : 1, 0.6],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 12,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "easeInOut",
                                }}
                            />
                        );
                    })}
                </div>

                {/* === EDGE GLOW ACCENTS - Light Mode === */}
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[1px] z-10 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 0.2, 0.4]) }}
                >
                    <motion.div
                        className="w-full h-[200%]"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(18, 18, 18, 0.1), transparent)" }}
                        animate={{ y: ["-50%", "0%", "-50%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
                <motion.div
                    className="absolute right-0 top-0 bottom-0 w-[1px] z-10 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 0.2, 0.4]) }}
                >
                    <motion.div
                        className="w-full h-[200%]"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(18, 18, 18, 0.1), transparent)" }}
                        animate={{ y: ["0%", "-50%", "0%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* === AMBIENT LIGHT FLARES - Light Mode === */}
                <motion.div
                    className="absolute top-[-5%] left-[-5%] w-[35vw] h-[35vh] rounded-full pointer-events-none z-[5]"
                    style={{ background: "radial-gradient(circle, rgba(18, 18, 18, 0.02), transparent 70%)" }}
                />
                <motion.div
                    className="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vh] rounded-full pointer-events-none z-[5]"
                    style={{ background: "radial-gradient(circle, rgba(18, 18, 18, 0.01), transparent 70%)" }}
                />

                {/* === FILM GRAIN === */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-[0.04]">
                    <div className="w-full h-full animate-grain" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "128px 128px",
                    }} />
                </div>

                {/* === SCROLL-BASED DARKNESS OVERLAY === */}
                <motion.div
                    style={{ opacity: overlayDarkness }}
                    className="absolute inset-0 bg-black z-10 pointer-events-none"
                />

                {/* === TEXT OVERLAY === */}
                <Overlay scrollYProgress={scrollYProgress} />

                {/* === SCROLL HINT - Light Mode === */}
                <motion.div
                    style={{ opacity: scrollHintOpacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
                >
                    <div className="flex flex-col items-center p-6 rounded-full bg-black/10 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                        <motion.span
                            className="text-white text-[10px] tracking-[0.4em] uppercase font-black mb-3"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Scroll
                        </motion.span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center"
                        >
                            <svg width="20" height="32" viewBox="0 0 24 38" fill="none" className="text-white">
                                <rect x="1" y="1" width="22" height="36" rx="11" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="12" r="2.5" fill="currentColor">
                                    <animate attributeName="cy" values="10;22;10" dur="2s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function useFilterComposite(
    brightness: MotionValue<number>,
    blur: MotionValue<number>,
    hueRotate: MotionValue<number>,
    saturate: MotionValue<number>
) {
    return useTransform(
        [brightness, blur, hueRotate, saturate],
        ([b, bl, h, s]: number[]) =>
            `brightness(${b}) blur(${bl}px) hue-rotate(${h}deg) saturate(${s})`
    );
}
