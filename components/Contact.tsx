"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
    {
        title: "Electronic Mail",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "bhaveshyennam76@gmail.com",
        href: "mailto:bhaveshyennam76@gmail.com",
    },
    {
        title: "Contact Number",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "+91 9725422306",
        href: "tel:+919725422306",
    },
    {
        title: "Location",
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
        <section className="relative z-20 bg-white py-32 px-4 md:px-12 border-t border-black overflow-hidden">
            {/* Background ambient - Professional Grey */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-50"
                style={{ background: "radial-gradient(circle, rgba(0, 0, 0, 0.01), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-black inline-block uppercase"
                    >
                        {"Contact".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
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
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-[2px] w-24 mx-auto mt-8 bg-black"
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring" as const, stiffness: 70, damping: 15 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-black text-xl leading-relaxed mb-16 font-bold uppercase tracking-tight">
                            Ready to transform your vision into a digital masterpiece? Let's connect.
                        </p>

                        <div className="space-y-10 mb-16">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex items-center gap-8"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                        {info.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] mb-2 font-black">{info.title}</span>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-black font-black text-lg md:text-xl uppercase tracking-tighter hover:tracking-normal transition-all duration-300"
                                            >
                                                {info.label}
                                            </a>
                                        ) : (
                                            <span className="text-black font-black text-lg md:text-xl uppercase tracking-tighter">{info.label}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, scale: 1.1 }}
                                    className="w-14 h-14 rounded-2xl bg-white border-2 border-black flex items-center justify-center text-black hover:text-white hover:bg-black transition-all duration-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                                    title={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring" as const, stiffness: 70, damping: 15, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative group">
                            <form 
                                onSubmit={handleSubmit} 
                                className="relative bg-white border-2 border-black rounded-3xl p-10 md:p-14 space-y-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
                            >
                                {[
                                    { name: "name", label: "Identity", placeholder: "Your Name", type: "text" },
                                    { name: "email", label: "Email Address", placeholder: "Your Email", type: "email" },
                                ].map((field, index) => (
                                    <div key={field.name} className="space-y-3">
                                        <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] pl-1">{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            required
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={(e) =>
                                                setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                                            }
                                            className="w-full px-8 py-5 bg-white border-2 border-black rounded-2xl text-black font-bold placeholder-black/30 outline-none transition-all duration-300 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px]"
                                        />
                                    </div>
                                ))}

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] pl-1">Inquiry</label>
                                    <textarea
                                        name="message"
                                        placeholder="Describe your vision..."
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, message: e.target.value }))
                                        }
                                        className="w-full px-8 py-5 bg-white border-2 border-black rounded-2xl text-black font-bold placeholder-black/30 outline-none resize-none transition-all duration-300 focus:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[-2px] focus:translate-y-[-2px]"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ y: -5, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-black text-white py-6 rounded-2xl font-black tracking-[0.3em] uppercase shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-500 disabled:opacity-50"
                                >
                                    {submitted ? "✓ Dispatched" : isSubmitting ? "Processing..." : "Initiate Contact"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
