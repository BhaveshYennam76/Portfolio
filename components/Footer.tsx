"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-20 py-24 border-t border-white/10 bg-black overflow-hidden">
            {/* White Ambient Glow */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none opacity-20"
                style={{ background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.02), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
                {/* Subtle Divider - High Contrast */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="h-[1px] w-24 mx-auto mb-12 bg-white/20"
                />

                <div className="space-y-6">
                    {/* Copyright */}
                    <motion.p
                        className="text-white text-[10px] tracking-[0.5em] uppercase font-black"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        © {new Date().getFullYear()} Bhavesh Yennam
                    </motion.p>

                    {/* White Dot */}
                    <motion.div
                        className="mx-auto w-1 h-1 rounded-full bg-white/30 mt-12"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </footer>
    );
}
