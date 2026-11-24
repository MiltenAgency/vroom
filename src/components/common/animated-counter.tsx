"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    // Keep still captures and reduced-motion views at the final value.
    if (
      window.location.search.includes("og=true") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const stillFrame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(stillFrame);
    }

    if (!isInView) return;

    const duration = 1400; // ms
    const startTime = performance.now();
    let animationFrame = 0;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {count}{suffix}
    </span>
  );
}
