"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Text3DFlipProps {
  children: string;
  className?: string;
  textClassName?: string;
  flipTextClassName?: string;
  rotateDirection?: "top" | "bottom" | "left" | "right";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
  transition?: {
    type: string;
    damping?: number;
    stiffness?: number;
  };
}

export const Text3DFlip = ({
  children,
  className,
  textClassName,
  flipTextClassName,
  rotateDirection = "top",
  staggerDuration = 0.05,
  staggerFrom = "first",
  transition = { type: "spring", damping: 25, stiffness: 160 },
}: Text3DFlipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const words = children.split(" ");

  const getStaggerIndex = (index: number, total: number) => {
    switch (staggerFrom) {
      case "first":
        return index;
      case "last":
        return total - 1 - index;
      case "center":
        return Math.abs(index - Math.floor(total / 2));
      default:
        return index;
    }
  };

  return (
    <div
      className={cn("inline-block cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cn("inline-block mr-2", isHovered ? flipTextClassName : textClassName)}
          initial={false}
          animate={isHovered ? { y: -10, opacity: 0.8 } : { y: 0, opacity: 1 }}
          transition={{
            ...transition,
            delay: getStaggerIndex(index, words.length) * staggerDuration,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
