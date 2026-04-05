"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    text,
    subText,
    align = "center",
    start,
    end,
    scrollYProgress,
}: {
    text: string;
    subText?: string;
    align?: "left" | "center" | "right";
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.05, start, end, end + 0.05],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.05, end + 0.05],
        [60, -60]
    );

    const textScale = useTransform(
        scrollYProgress,
        [start - 0.05, start + 0.02, end - 0.02, end + 0.05],
        [0.92, 1, 1, 0.95]
    );

    const letterSpacing = useTransform(
        scrollYProgress,
        [start - 0.05, start + 0.03],
        [15, 0]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0.7, 0.85],
        ["#ffffff", "#000000"]
    );

    const subTextColor = useTransform(
        scrollYProgress,
        [0.7, 0.85],
        ["rgba(255,255,255,0.8)", "rgba(0,0,0,0.7)"]
    );

    const alignClass =
        align === "left"
            ? "items-start text-left"
            : align === "right"
                ? "items-end text-right"
                : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-8 md:px-20 ${alignClass}`}
        >
            <motion.h2
                style={{ scale: textScale, letterSpacing, color: textColor }}
                className="text-4xl md:text-7xl font-bold tracking-tighter"
            >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        className="inline-block"
                        style={{
                            opacity: useTransform(
                                scrollYProgress,
                                [start - 0.04 + i * 0.002, start - 0.02 + i * 0.002],
                                [0, 1]
                            ),
                            y: useTransform(
                                scrollYProgress,
                                [start - 0.04 + i * 0.002, start - 0.02 + i * 0.002],
                                [20, 0]
                            ),
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>
            {subText && (
                <motion.p
                    style={{
                        opacity: useTransform(
                            scrollYProgress,
                            [start, start + 0.03],
                            [0, 1]
                        ),
                        y: useTransform(
                            scrollYProgress,
                            [start, start + 0.03],
                            [15, 0]
                        ),
                        color: subTextColor,
                    }}
                    className="text-xl md:text-2xl mt-4 font-light tracking-wide max-w-2xl"
                >
                    {subText}
                </motion.p>
            )}
            {/* Decorative line under text - Dynamic B/W */}
            <motion.div
                style={{
                    scaleX: useTransform(
                        scrollYProgress,
                        [start, start + 0.04, end - 0.02, end + 0.05],
                        [0, 1, 1, 0]
                    ),
                    backgroundColor: textColor,
                    opacity: 0.2,
                }}
                className="h-[1px] w-32 mt-6 origin-center"
            />
        </motion.div>
    );
};

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <div className="z-20">
            <Section
                text="Bhavesh Yennam."
                subText="Flutter Developer"
                align="center"
                start={0.05}
                end={0.2}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="2+ Years Experience."
                subText="Specializing in Flutter, Dart, and Cross-Platform Apps."
                align="left"
                start={0.3}
                end={0.45}
                scrollYProgress={scrollYProgress}
            />
            <Section
                text="Building Smart Apps."
                subText="Firebase, REST APIs & Scalable Mobile Solutions."
                align="right"
                start={0.6}
                end={0.75}
                scrollYProgress={scrollYProgress}
            />
        </div>
    );
}
