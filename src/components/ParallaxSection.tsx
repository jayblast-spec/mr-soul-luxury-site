"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

type ParallaxSectionProps = {
  image: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  priority?: boolean;
  dark?: boolean;
};

export function ParallaxSection({ image, eyebrow, title, children, priority = false, dark = false }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // The background moves less than the foreground and scales slightly.
  // This creates depth without requiring a heavy WebGL scene.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [2, 0, -2]);

  return (
    <section ref={ref} className={`relative isolate min-h-[84svh] overflow-hidden ${dark ? "bg-black" : "bg-[#140506]"}`}>
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-[#35070f]/70 to-black/85" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <motion.div
        className="relative z-10 mx-auto flex min-h-[84svh] w-full max-w-7xl flex-col justify-center px-5 py-28 text-white sm:px-8"
        style={{ y: contentY, rotateX, transformPerspective: 800 }}
      >
        {eyebrow ? <p className="mb-5 text-xs font-black uppercase tracking-[0.38em] text-[#D4AF37]">{eyebrow}</p> : null}
        <h1 className="max-w-5xl text-balance text-5xl font-black uppercase leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <motion.div
          className="mt-7 max-w-3xl"
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
