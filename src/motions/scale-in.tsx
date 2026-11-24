"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { EASING_EMIL } from "./variants";

export interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.96,
  className = "",
  viewportOnce = true,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: viewportOnce, margin: "-40px" as any }}
      transition={{
        duration,
        delay,
        ease: EASING_EMIL,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
