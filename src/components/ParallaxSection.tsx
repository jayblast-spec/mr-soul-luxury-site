"use client";

import Image from "next/image";
import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxSectionProps = {
  image: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  priority?: boolean;
  dark?: boolean;
};

export function ParallaxSection({
  image,
  eyebrow,
  title,
  children,
  priority = false,
  dark = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative isolate min-h-[84svh] overflow-hidden ${
        dark ? "bg-black" : "bg-[#0E0208]"
      }`}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover scale-[1.15]"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.86), rgba(92,14,26,0.55), rgba(0,0,0,0.86))" }}
      />
      <div className="red-vignette absolute inset-0" />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, #120308, transparent)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[84svh] w-full max-w-7xl flex-col justify-center px-5 py-28 text-white sm:px-8">
        {eyebrow ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.38em]"
            style={{ color: "#D4AF37" }}
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 56, skewY: 3 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.35 }}
          className="font-display max-w-5xl text-balance text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-7 max-w-3xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
