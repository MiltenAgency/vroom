"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff5a22] via-[#f3440f] to-[#ffa024] origin-left z-[100] pointer-events-none shadow-[0_0_12px_rgba(243,68,15,0.6)] ${className}`}
    />
  );
}
