"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 150, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 18 });

  // Pointer position is mapped to shallow rotation, so cards feel dimensional
  // while still staying readable on mobile and low-power devices.
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  return (
    <motion.div
      className={`will-change-transform ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 56, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
