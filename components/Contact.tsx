"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "bhaveshyennam76@gmail.com",
        href: "mailto:bhaveshyennam76@gmail.com",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "+91 9725422306",
        href: "tel:+919725422306",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        label: "Surat, Gujarat, India",
        href: null,
    },
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bhavesh-yennam-891b312a6/",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/BhaveshYennam76",
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://formspree.io/f/bhaveshyennam76@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0, 210, 190, 0.04), transparent 70%)" }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white inline-block"
                    >
                        {"Get In Touch".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 30, rotateX: -60 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{
                                    type: "spring" as const,
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
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-[2px] w-40 mx-auto mt-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring" as const, stiffness: 70, damping: 15 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            Have a question or want to collaborate? Feel free to reach out!
                        </p>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                        >
                                            {info.label}
                                        </a>
                                    ) : (
                                        <span className="text-gray-300">{info.label}</span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: "spring" as const,
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.4 + index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -4,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/25 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                                    title={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring" as const, stiffness: 70, damping: 15, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {[
                            { name: "name", placeholder: "Your Name", type: "text" },
                            { name: "email", placeholder: "Your Email", type: "email" },
                        ].map((field, index) => (
                            <motion.div
                                key={field.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                                    }
                                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,210,190,0.08)] hover:border-white/20"
                                />
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                                }
                                className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none resize-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(0,210,190,0.08)] hover:border-white/20"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative px-8 py-4 rounded-xl font-semibold text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 disabled:opacity-50 group"
                                style={{
                                    background: "linear-gradient(135deg, #00d2be, #00b4d8)",
                                    boxShadow: "0 4px 25px rgba(0, 210, 190, 0.25)",
                                }}
                            >
                                {/* Shimmer */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)",
                                    backgroundSize: "200% 100%",
                                    animation: "shimmer 2s linear infinite",
                                }} />
                                <span className="relative z-10 text-[#0a0a0a]">
                                    {submitted ? "✓ Message Sent!" : isSubmitting ? "Sending..." : "Send Message"}
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
