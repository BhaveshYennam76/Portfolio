"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bhavesh-yennam-891b312a6/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/BhaveshYennam76",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const message = `*New Portfolio Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
            const whatsappUrl = `https://wa.me/919725422306?text=${message}`;
            window.open(whatsappUrl, "_blank");
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            alert("Oops! There was a problem initiating WhatsApp. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative z-20 bg-white dark:bg-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden">
            
            {/* Background Visual Enhancements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] dark:bg-accent/[0.05] rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                    style={{
                        backgroundImage: `linear-gradient(rgba(129, 129, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 129, 129, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }} 
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase opacity-50 mb-12 block">
                    05 // CONTACT
                </span>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column — Text & Socials */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 
                                variants={itemVariants}
                                className="text-4xl md:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-8 leading-none"
                            >
                                Let's Build <br />
                                <span className="text-accent italic">Together.</span>
                            </motion.h2>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-black/60 dark:text-white/60 text-lg md:text-xl font-medium leading-relaxed mb-16 max-w-xl"
                            >
                                Whether you have a specific project in mind or just want to explore the possibilities, I'm here to help translate your vision into reality.
                            </motion.p>

                            <motion.div variants={itemVariants} className="space-y-12">
                                <div className="flex flex-col group cursor-pointer w-fit">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Email Address</span>
                                    <a href="mailto:bhaveshyennam76@gmail.com" className="text-2xl font-black text-black dark:text-white group-hover:text-accent transition-all duration-500 border-b border-black/10 dark:border-white/10 group-hover:border-accent pb-1">
                                        bhaveshyennam76@gmail.com
                                    </a>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Social Presence</span>
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, i) => (
                                            <Magnetic key={i} strength={0.3}>
                                                <motion.a 
                                                    href={social.href} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="w-14 h-14 flex items-center justify-center border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 shadow-sm rounded-xl"
                                                    title={social.name}
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            </Magnetic>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column — Professional Form Card */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative group lg:p-1"
                        >
                            {/* Animated Glow Border */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <form
                                onSubmit={handleSubmit}
                                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-3xl border border-black/5 dark:border-white/5 rounded-2xl shadow-2xl"
                            >
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent pl-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                                        className="w-full px-6 py-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white font-medium outline-none focus:border-accent transition-all duration-500 rounded-xl focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)]"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent pl-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                                        className="w-full px-6 py-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white font-medium outline-none focus:border-accent transition-all duration-500 rounded-xl focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)]"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent pl-1">Message</label>
                                    <textarea
                                        placeholder="Describe your vision or inquiry..."
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                                        className="w-full px-6 py-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white font-medium outline-none focus:border-accent transition-all duration-500 rounded-xl resize-none focus:shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)]"
                                    />
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <Magnetic strength={0.2}>
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="group relative w-full bg-black dark:bg-white text-white dark:text-black py-5 px-12 font-black uppercase tracking-[0.4em] overflow-hidden rounded-xl transition-all duration-500 shadow-xl disabled:opacity-50"
                                        >
                                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white dark:group-hover:text-black">
                                                {submitted ? "Nexus Established" : isSubmitting ? "Dispatching..." : "Initiate Connection"}
                                            </span>
                                            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />
                                        </motion.button>
                                    </Magnetic>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Simplified Footer */}
            <footer className="mt-32 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex gap-12">
                    <Magnetic>
                        <a href="#home" className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 dark:text-white/40 hover:text-accent transition-all duration-500">
                            Rise to Top
                        </a>
                    </Magnetic>
                </div>
            </footer>
        </section>
    );
}
