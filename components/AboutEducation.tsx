"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "C.B. Patel Computer College, Vesu, Surat",
        batch: "Batch of 2026",
        grade: "CGPA: 7.6 / 10",
        description: "Affiliated with Veer Narmada South Gujarat University. Focusing on mobile app development and modern software engineering practices."
    },
    {
        degree: "H.S.C (12th Grade)",
        institution: "Gyanjyot Vidhyalaya",
        batch: "Commerce Stream",
        grade: "60%",
        description: "Foundational studies in commerce and business mathematics."
    }
];

export default function AboutEducation() {
    return (
        <section id="about" className="relative z-20 bg-white py-32 px-4 md:px-12 border-t border-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-black/[0.01] -skew-x-12 transform origin-top" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Left Column - About Me */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-black uppercase">
                                About <span className="text-black/20">Me</span>
                            </h2>
                            
                            <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed font-medium">
                                <p>
                                    Hi, I'm <span className="font-black underline decoration-2 underline-offset-4">Bhavesh Yennam</span>, a passionate BCA (Bachelor of Computer Applications) student from C.B. Patel Computer College (VNSGU, Batch of 2026, 7.6 CGPA). I am a detail-oriented developer with hands-on experience building mobile applications using Flutter and integrating backend services like Firebase.
                                </p>
                                <p>
                                    With a strong interest in mobile application development, I have hands-on experience as a <span className="text-black font-bold">Flutter Developer Intern</span>, where I’ve worked on building cross-platform applications using Flutter and Dart.
                                </p>
                                <p>
                                    I have a solid foundation in modern development practices, continuously enhancing my skills in <span className="bg-black text-white px-2 py-0.5">UI/UX design</span>, app performance optimization, and scalable application development.
                                </p>
                                <p>
                                    Currently based in Gujarat, I am open to relocation and ready to take on new opportunities where I can grow professionally, strengthen my technical expertise, and contribute effectively as a developer.
                                </p>
                            </div>

                            {/* Resume CTA */}
                            <motion.div 
                                className="mt-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-6 px-10 py-5 bg-black text-white rounded-2xl group hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-500"
                                >
                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-1">Professional Profile</span>
                                        <span className="text-lg font-black uppercase tracking-wider">View My Resume</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Education */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-black uppercase text-right lg:text-left">
                                <span className="text-black/20">Edu</span>cation
                            </h2>

                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="relative p-8 rounded-3xl border-2 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                                                {edu.batch}
                                            </span>
                                            <span className="text-black font-black text-sm">
                                                {edu.grade}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black text-black uppercase mb-2 leading-tight">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-black/60 font-bold uppercase text-xs tracking-wider mb-6">
                                            {edu.institution}
                                        </p>
                                        <p className="text-black font-medium leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
