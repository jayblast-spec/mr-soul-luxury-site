"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Lagos", "Atlanta", "RedRoom"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / 2700, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onComplete, 400);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 900);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.p
        className="absolute left-5 top-5 text-xs uppercase tracking-[0.3em] text-muted md:left-8 md:top-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Mr Soul
      </motion.p>
      <div className="grid h-full place-items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={words[wordIndex]}
            className="font-display text-5xl italic text-text-primary/80 md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            {words[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="font-display absolute bottom-8 right-5 text-7xl tabular-nums text-text-primary md:right-8 md:text-9xl">
        {String(count).padStart(3, "0")}
      </p>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 12px rgba(212, 175, 55, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
