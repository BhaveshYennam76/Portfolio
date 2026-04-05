"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-20 py-16 border-t border-white/5 bg-[#0a0a0a] overflow-hidden">
            {/* Ambient glow */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.04), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                {/* Animated divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="h-[1px] w-full mb-10 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    {/* Tagline */}
                    <motion.p
                        className="text-gray-500 text-sm tracking-[0.15em] uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Designed & Built with passion
                    </motion.p>

                    {/* Copyright */}
                    <motion.p
                        className="text-gray-600 text-sm tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        © {new Date().getFullYear()} Bhavesh Yennam
                    </motion.p>

                    {/* Floating dot */}
                    <motion.div
                        className="mx-auto w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-6"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0.8, 0.4],
                            boxShadow: [
                                "0 0 5px rgba(139,92,246,0.2)",
                                "0 0 15px rgba(139,92,246,0.5)",
                                "0 0 5px rgba(139,92,246,0.2)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </footer>
    );
}
