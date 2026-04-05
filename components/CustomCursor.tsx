"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const TRAIL_COUNT = 8;

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Main cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
    <div className="fixed inset-0 pointer-events-none z-[999999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Trail Dots */}
            {[...Array(TRAIL_COUNT)].map((_, i) => (
              <TrailDot 
                key={i} 
                index={i} 
                total={TRAIL_COUNT} 
                mouseX={mouseX} 
                mouseY={mouseY} 
                isHovered={isHovered} 
                isClicked={isClicked}
              />
            ))}

            {/* Main Head - Bold White Dot */}
            <motion.div
              className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-[1000000] shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
                backgroundColor: isClicked ? "rgba(255,255,255,0.8)" : "#ffffff",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const TrailDot = ({ 
  index, 
  total, 
  mouseX, 
  mouseY, 
  isHovered,
  isClicked
}: { 
  index: number; 
  total: number; 
  mouseX: any; 
  mouseY: any; 
  isHovered: boolean;
  isClicked: boolean;
}) => {
  // Each dot has a different spring setting to create the 'snake' effect
  const stiffness = 280 - (index * 25);
  const damping = 30 + (index * 3);
  
  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });

  const size = 14 - (index * 1.4); 
  const opacity = (1 - (index / total)) * 0.4; 

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-white/40 backdrop-blur-[1px]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        opacity: isClicked ? opacity * 0.5 : isHovered ? opacity * 2 : opacity,
      }}
      animate={{
        scale: isClicked ? 0.9 : isHovered ? 1.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
