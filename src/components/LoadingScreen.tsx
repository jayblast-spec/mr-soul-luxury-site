"use client";

import { useEffect, useRef, useState } from "react";

const words = ["Lagos", "Atlanta", "RedRoom"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / 2700, 1);
      setCount(Math.round(progress * 100));
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(onComplete, 700);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 900);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #3E0A15 0%, #120308 100%)",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      <p
        className="absolute left-5 top-5 text-xs font-bold uppercase tracking-[0.3em] animate-fade-in-up md:left-8 md:top-8"
        style={{ color: "#D4AF37" }}
      >
        Mr Soul
      </p>

      <div className="grid flex-1 place-items-center">
        <p
          key={wordIndex}
          className="font-display text-5xl italic text-white/80 animate-fade-in-up md:text-7xl lg:text-8xl"
        >
          {words[wordIndex]}
        </p>
      </div>

      <p className="font-display absolute bottom-8 right-5 text-7xl tabular-nums text-white/25 md:right-8 md:text-9xl">
        {String(count).padStart(3, "0")}
      </p>

      <div
        className="absolute inset-x-0 bottom-0 h-[3px]"
        style={{ background: "rgba(212,175,55,0.2)" }}
      >
        <div
          ref={barRef}
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #C41E3A, #D4AF37, #F2C85A)",
            transform: "scaleX(0)",
            boxShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        />
      </div>
    </div>
  );
}
