"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      className={className}
      variants={fadeInUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
