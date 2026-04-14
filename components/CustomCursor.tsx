"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const TRAIL_COUNT = 12;

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Array of springs for the trail with direct physics assignment
  const trailX = Array.from({ length: TRAIL_COUNT }, (_, i) => 
    useSpring(mouseX, { stiffness: 120 - i * 8, damping: 30 + i * 2 })
  );
  const trailY = Array.from({ length: TRAIL_COUNT }, (_, i) => 
    useSpring(mouseY, { stiffness: 120 - i * 8, damping: 30 + i * 2 })
  );

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

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
    
    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] mix-blend-difference">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Trail Segments */}
            {trailX.map((tx, i) => (
              <motion.div
                key={i}
                className="fixed top-0 left-0 rounded-full bg-white/20 pointer-events-none"
                style={{
                  x: tx,
                  y: trailY[i],
                  width: 12 - i,
                  height: 12 - i,
                  translateX: "-50%",
                  translateY: "-50%",
                  opacity: (TRAIL_COUNT - i) / TRAIL_COUNT * 0.5,
                }}
              />
            ))}

            {/* Main Precision Dot */}
            <motion.div
              className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[1000000]"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isClicked ? 0.6 : isHovered ? 4 : 1,
                opacity: isHovered ? 0.3 : 1,
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
