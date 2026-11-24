"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { SPRING_SNAPPY } from "./variants";

export interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  yOffset?: number;
  scale?: number;
  tapScale?: number;
  className?: string;
}

export function HoverLift({
  children,
  yOffset = -4,
  scale = 1.01,
  tapScale = 0.98,
  className = "",
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: yOffset, scale }}
      whileTap={{ scale: tapScale }}
      transition={SPRING_SNAPPY}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
