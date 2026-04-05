"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const TRAIL_COUNT = 8;

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Faster spring for the center dot
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    setMounted(true);
    
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      }
    };

    const handleHoverEnd = () => setIsHovered(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] mix-blend-difference">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Outer Ring - High Contrast Minimalist */}
            <motion.div
              className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full z-[999999]"
              style={{
                x: ringX,
                y: ringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isClicked ? 0.8 : isHovered ? 2.5 : 1,
                opacity: isHovered ? 0.3 : 1,
                borderWidth: isHovered ? "2px" : "1px",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            />

            {/* Center Pointer - Precision Dot */}
            <motion.div
              className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full z-[1000000]"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isClicked ? 0.5 : isHovered ? 0 : 1,
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
