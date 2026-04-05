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
    const saturate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.2, 1.4, 0.5]);
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.95]);
    const overlayDarkness = useTransform(scrollYProgress, [0.7, 1], [0, 0.6]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#060606]" style={{ perspective: "1200px" }}>

                {/* === DRAMATIC LOAD REVEAL === */}
                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            className="absolute inset-0 z-50 bg-black"
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
                    className="absolute inset-0 w-full h-full origin-center"
                >
                    <img
                        src="/sequence/Gemini_Generated_Image_sako3csako3csako (1).png"
                        alt="Bhavesh Yennam"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* === ANIMATED SCAN LINES === */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] mix-blend-overlay">
                    <div className="w-full h-full animate-scanlines" style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                    }} />
                </div>

                {/* === CINEMATIC RADIAL VIGNETTE === */}
                <motion.div
                    style={{ opacity: vignetteOpacity }}
                    className="absolute inset-0 pointer-events-none z-10"
                >
                    <div className="w-full h-full" style={{
                        background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.9) 100%)"
                    }} />
                </motion.div>

                {/* === PULSING GLOW RINGS === */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/10"
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.25, 0.1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-[700px] h-[700px] rounded-full border border-blue-500/10"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div
                        className="absolute w-[900px] h-[900px] rounded-full border border-orange-500/5"
                        animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.03, 0.1, 0.03] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                </div>

                {/* === FLOATING PARTICLES SYSTEM === */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {[...Array(30)].map((_, i) => {
                        const size = 1 + Math.random() * 3;
                        const isGlowing = i % 4 === 0;
                        const colors = [
                            "rgba(139, 92, 246, 0.7)",
                            "rgba(59, 130, 246, 0.6)",
                            "rgba(249, 115, 22, 0.5)",
                            "rgba(255, 255, 255, 0.4)",
                        ];
                        return (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: size,
                                    height: size,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    background: colors[i % colors.length],
                                    boxShadow: isGlowing ? `0 0 ${size * 3}px ${colors[i % colors.length]}` : "none",
                                }}
                                animate={{
                                    y: [0, -(40 + Math.random() * 80), 0],
                                    x: [0, (Math.random() - 0.5) * 60, 0],
                                    opacity: [0, 0.9, 0],
                                    scale: [0.3, isGlowing ? 1.8 : 1.2, 0.3],
                                }}
                                transition={{
                                    duration: 5 + Math.random() * 8,
                                    repeat: Infinity,
                                    delay: Math.random() * 6,
                                    ease: "easeInOut",
                                }}
                            />
                        );
                    })}
                </div>

                {/* === EDGE GLOW ACCENTS (animated) === */}
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px] z-10 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.6], [0, 0.6, 0.9]) }}
                >
                    <motion.div
                        className="w-full h-[200%]"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6), transparent)" }}
                        animate={{ y: ["-50%", "0%", "-50%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
                <motion.div
                    className="absolute right-0 top-0 bottom-0 w-[3px] z-10 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.6], [0, 0.6, 0.9]) }}
                >
                    <motion.div
                        className="w-full h-[200%]"
                        style={{ background: "linear-gradient(to bottom, transparent, rgba(249, 115, 22, 0.8), rgba(234, 88, 12, 0.6), transparent)" }}
                        animate={{ y: ["0%", "-50%", "0%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

                {/* === AMBIENT LIGHT FLARES === */}
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vh] rounded-full pointer-events-none z-[5]"
                    style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 70%)" }}
                    animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] rounded-full pointer-events-none z-[5]"
                    style={{ background: "radial-gradient(circle, rgba(249, 115, 22, 0.06), transparent 70%)" }}
                    animate={{ scale: [1, 1.5, 1], x: [0, -40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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

                {/* === SCROLL HINT === */}
                <motion.div
                    style={{ opacity: scrollHintOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
                >
                    <motion.span
                        className="text-white/60 text-xs tracking-[0.3em] uppercase font-light"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll
                    </motion.span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                    >
                        <svg width="24" height="38" viewBox="0 0 24 38" fill="none" className="text-white/50">
                            <rect x="1" y="1" width="22" height="36" rx="11" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="2.5" fill="currentColor">
                                <animate attributeName="cy" values="10;18;10" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                        <motion.svg
                            width="16" height="10" viewBox="0 0 16 10" fill="none" className="mt-1 text-white/40"
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </motion.svg>
                    </motion.div>
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
