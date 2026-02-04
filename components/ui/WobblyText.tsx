"use client";

import { motion } from "framer-motion";

export function WobblyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{
        scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
        rotate: [0, 1, -1, 0.5, -0.5, 0],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
