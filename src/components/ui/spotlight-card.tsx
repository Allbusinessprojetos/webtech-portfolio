"use client";

import { cn } from "@/lib/utils";
import type { MouseEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "spotlight-card rounded-2xl border border-white/10 bg-graphite/60 p-7 transition-colors duration-300 hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
