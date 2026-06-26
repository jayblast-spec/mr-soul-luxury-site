"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef } from "react";

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
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const parent = imgRef.current?.parentElement;
      if (!parent || !imgRef.current) return;
      const rect = parent.getBoundingClientRect();
      const pct = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      imgRef.current.style.transform = `translateY(${pct * 10}%)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`relative isolate min-h-[84svh] overflow-hidden ${
        dark ? "bg-black" : "bg-[#0E0208]"
      }`}
    >
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(0%)" }}
      >
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover scale-110"
        />
      </div>

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
          <p
            className="mb-5 text-xs font-bold uppercase tracking-[0.38em] animate-fade-in-up"
            style={{ color: "#D4AF37" }}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1
          className="font-display max-w-5xl text-balance text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        <div
          className="mt-7 max-w-3xl animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
