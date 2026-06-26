"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HlsBackground } from "./HlsBackground";

const stories = [
  {
    label: "The Food",
    heading: "Flavors that carry a whole culture.",
    body: "Legendary jollof, peppered goat stew, suya, egusi soup, and platter spreads that turn a table into a ceremony. Every dish is handcrafted from scratch, every plate is a homecoming.",
    image: "https://picsum.photos/seed/luxury-jollof/1200/900",
    cta: { label: "View Menu", href: "/menu" },
    reverse: false,
  },
  {
    label: "The Room",
    heading: "An atmosphere built for the night.",
    body: "RedRoom is Atlanta’s most talked-about VIP lounge. Celebrity-style bottle service, premium hookah, Afrobeats that move the room, and red-light energy built for big nights.",
    image: "https://picsum.photos/seed/red-bottle-service/900/1100",
    cta: { label: "Book VIP", href: "/redroom" },
    reverse: true,
  },
  {
    label: "The Night",
    heading: "Afrobeats. Private tables. Unforgettable.",
    body: "Birthdays, celebrations, artist nights, private buyouts — every event at RedRoom is curated to feel like the night was designed specifically for you.",
    image: "https://picsum.photos/seed/afrobeats-after-dark/1200/900",
    cta: { label: "See Events", href: "/redroom" },
    reverse: false,
  },
];

const reviews = [
  ["Best Nigerian vibe in Atlanta", "Closest you can get to Lagos.", "★★★★★", "Dining"],
  ["The jollof is unmatched", "The atmosphere is incredible.", "★★★★★", "Menu"],
  ["RedRoom is the spot", "Amazing food and the DJ had the whole room moving.", "★★★★★", "Nightlife"],
  ["Great vibes", "Authentic food and amazing staff. 10/10.", "★★★★★", "Guest"],
];

const gallery = [
  "https://picsum.photos/seed/soul-gallery-1/700/700",
  "https://picsum.photos/seed/soul-gallery-2/700/700",
  "https://picsum.photos/seed/soul-gallery-3/700/700",
  "https://picsum.photos/seed/soul-gallery-4/700/700",
  "https://picsum.photos/seed/soul-gallery-5/700/700",
  "https://picsum.photos/seed/soul-gallery-6/700/700",
];

const spring = { type: "spring" as const, stiffness: 88, damping: 20 };

export function CinematicHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center"
        style={{ background: "#080108" }}
      >
        <HlsBackground />

        {/* Deep overlay */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0" style={{ background: "rgba(8,1,8,0.8)" }} />
        </motion.div>

        {/* Crimson glow orb — top center */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(500px,80vw,1000px)",
            height: "clamp(500px,80vw,1000px)",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(196,30,58,0.28) 0%, rgba(138,28,44,0.12) 45%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Gold accent glow — bottom right */}
        <div
          className="pointer-events-none absolute"
          style={{
            bottom: "10%",
            right: "8%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: "linear-gradient(to top, #080108, transparent)" }} />

        <motion.div className="relative z-10 mx-auto w-full max-w-6xl pt-24" style={{ opacity: heroOpacity }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-6 text-xs font-bold uppercase tracking-[0.48em]"
            style={{ color: "#D4AF37" }}
          >
            Atlanta · Lagos · RedRoom
          </motion.p>

          {/* Giant display headline */}
          <h1
            className="font-display font-bold italic leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(72px, 13vw, 196px)" }}
          >
            {["Mr", "Soul"].map((word, i) => (
              <motion.span
                key={word}
                className="hero-title inline-block"
                style={{ marginRight: "0.15em" }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.42 + i * 0.13 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub-title */}
          <div style={{ marginTop: "0.15em" }}>
            {["Bistro", "&", "Cafe"].map((word, i) => (
              <motion.span
                key={word}
                className="font-display inline-block font-bold leading-[0.92] tracking-tight text-white/55"
                style={{ fontSize: "clamp(36px,6.5vw,96px)", marginRight: "0.14em" }}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.7 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.05, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto origin-center"
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              height: "1px",
              maxWidth: "280px",
              background: "linear-gradient(to right, transparent, rgba(212,175,55,0.55), transparent)",
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mx-auto max-w-lg text-base leading-8 text-white/68 md:text-lg"
          >
            Authentic Nigerian fine dining, celebrity-style VIP, hookah & Afrobeats — all in Atlanta.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/menu" className="btn-gold">View Our Menu</Link>
            <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
            className="mx-auto h-10 w-px overflow-hidden"
            style={{ background: "rgba(212,175,55,0.18)" }}
          >
            <div className="h-5 w-px" style={{ background: "#D4AF37" }} />
          </motion.div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ───────────────────── */}
      <section
        className="px-6 py-28 text-center md:py-44"
        style={{ background: "#080108" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={spring}
          className="mx-auto max-w-5xl"
        >
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.42em]" style={{ color: "rgba(212,175,55,0.5)" }}>
            Est. Atlanta, GA
          </p>
          <h2
            className="font-display font-bold italic leading-[1.08] text-white"
            style={{ fontSize: "clamp(32px,5vw,76px)" }}
          >
            Where Nigerian flavor meets Atlanta energy.{" "}
            <br className="hidden md:block" />
            Where tradition becomes{" "}
            <em className="text-gold-metallic not-italic">unforgettable.</em>
          </h2>
        </motion.div>
      </section>

      {/* ─── STORY SECTIONS ────────────────────── */}
      {stories.map((story, i) => (
        <section
          key={story.label}
          className="overflow-hidden px-6 py-20 md:px-12 md:py-32 lg:px-16"
          style={{ background: i % 2 === 0 ? "#0D0212" : "#080108" }}
        >
          <div
            className={`mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-20 ${
              story.reverse ? "" : ""
            }`}
          >
            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, x: story.reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={spring}
              className={story.reverse ? "md:order-2" : ""}
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em]" style={{ color: "#D4AF37" }}>
                {story.label}
              </p>
              <h3
                className="font-display font-bold italic leading-[1.04] text-white"
                style={{ fontSize: "clamp(32px, 4vw, 64px)" }}
              >
                {story.heading}
              </h3>
              <p className="mt-6 max-w-sm text-base leading-8" style={{ color: "rgba(232,213,196,0.82)" }}>
                {story.body}
              </p>
              <Link href={story.cta.href} className="btn-gold mt-9 inline-flex">
                {story.cta.label}
              </Link>
            </motion.div>

            {/* Image block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, x: story.reverse ? -60 : 60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...spring, delay: 0.1 }}
              className={`relative overflow-hidden rounded-[28px] ${
                story.reverse ? "md:order-1" : ""
              }`}
              style={{
                aspectRatio: "4/5",
                border: "1px solid rgba(212,175,55,0.14)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src={story.image}
                alt={story.heading}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,1,8,0.65) 0%, transparent 55%)" }}
              />
              <div
                className="absolute bottom-5 left-5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur"
                style={{
                  background: "rgba(8,1,8,0.68)",
                  border: "1px solid rgba(212,175,55,0.28)",
                  color: "#D4AF37",
                }}
              >
                {story.label}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── REVIEWS ──────────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-36" style={{ background: "#080108" }}>
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="mb-16"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8" style={{ background: "rgba(212,175,55,0.4)" }} />
              <p className="text-xs font-bold uppercase tracking-[0.32em]" style={{ color: "#E8D5C4" }}>Guest Reviews</p>
            </div>
            <h2
              className="font-display font-bold italic leading-none text-white"
              style={{ fontSize: "clamp(44px,6vw,88px)" }}
            >
              Real <em className="text-gold-metallic not-italic">vibes.</em>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4"
          >
            {reviews.map(([title, text, rating, tag], index) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
                  visible: { opacity: 1, x: 0, transition: spring },
                }}
                className="glass-card flex flex-col gap-4 rounded-[40px] p-4 sm:flex-row sm:items-center sm:rounded-full"
              >
                <div
                  className="relative size-20 shrink-0 overflow-hidden rounded-full"
                  style={{ boxShadow: "0 0 0 1px rgba(212,175,55,0.28)" }}
                >
                  <Image
                    src={`https://picsum.photos/seed/journal-${index}/220/220`}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm" style={{ color: "#E8D5C4" }}>{text}</p>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#D4AF37" }}>
                  <span>{rating}</span>
                  <span className="h-px w-8" style={{ background: "rgba(212,175,55,0.35)" }} />
                  <span>{tag}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32" style={{ background: "#0D0212" }}>
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#D4AF37" }}>Explorations</p>
            <h2
              className="font-display font-bold italic leading-none text-white"
              style={{ fontSize: "clamp(44px,6vw,88px)" }}
            >
              Taste the <em className="text-gold-metallic not-italic">night.</em>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                variants={{
                  hidden: { opacity: 0, scale: 0.87 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 22 } },
                }}
                whileHover={{ scale: 1.035, transition: { type: "spring", stiffness: 300 } }}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: i % 3 === 1 ? "3/4" : "1",
                  border: "1px solid rgba(212,175,55,0.12)",
                  background: "#12040A",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width:640px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,1,8,0.6), transparent 55%)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32" style={{ background: "#080108" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[28px] md:grid-cols-3"
          style={{ border: "1px solid rgba(212,175,55,0.14)" }}
        >
          {[
            ["15+", "Years of Flavor"],
            ["500+", "Dishes Daily"],
            ["4.8★", "Average Rating"],
          ].map(([value, label], i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: spring },
              }}
              className="glass-card border-0 p-10 text-center"
              style={{
                borderRadius: 0,
                borderRight: i < 2 ? "1px solid rgba(212,175,55,0.12)" : "none",
              }}
            >
              <p
                className="font-display font-bold italic text-gold-metallic"
                style={{ fontSize: "clamp(56px,7vw,100px)" }}
              >
                {value}
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#E8D5C4" }}>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── MARQUEE CTA ──────────────────────────── */}
      <section
        className="relative isolate overflow-hidden pb-20 pt-28 text-center md:pt-40"
        style={{ background: "#0D0212" }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(196,30,58,0.14) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          {/* Marquee background text */}
          <div className="mb-6 overflow-hidden" aria-hidden="true">
            <div
              className="animate-marquee-left font-display whitespace-nowrap font-bold italic leading-none"
              style={{
                fontSize: "clamp(56px,11vw,152px)",
                color: "rgba(255,255,255,0.035)",
              }}
            >
              <span>MR SOUL · ATLANTA · REDROOM VIP · AFROBEATS · LAGOS · </span>
              <span>MR SOUL · ATLANTA · REDROOM VIP · AFROBEATS · LAGOS · </span>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
            className="mx-auto max-w-3xl px-5"
          >
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-xs font-bold uppercase tracking-[0.38em]"
              style={{ color: "rgba(212,175,55,0.5)" }}
            >
              Ready for the room?
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 64 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 78, damping: 16 } },
              }}
              className="font-display mt-5 text-balance font-bold italic leading-[0.95] text-white"
              style={{ fontSize: "clamp(40px,5.5vw,92px)" }}
            >
              Discover the{" "}
              <em className="animate-neon-pulse not-italic" style={{ color: "#FF4D6D" }}>Soulful</em>{" "}
              Experience.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mx-auto mt-6 max-w-lg text-sm leading-8 md:text-base"
              style={{ color: "rgba(232,213,196,0.72)" }}
            >
              Immerse yourself in exquisite flavors, rhythmic beats, and shared joy.
              Mr Soul is not just a dining experience — it&apos;s a celebration of authentic taste and vibrant togetherness.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/menu" className="btn-gold">Explore Our Menu</Link>
              <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
            </motion.div>
          </motion.div>

          <div
            className="mx-auto mt-20 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t px-6 pt-6 text-xs uppercase tracking-[0.18em] md:flex-row"
            style={{ borderColor: "rgba(212,175,55,0.1)", color: "rgba(232,213,196,0.38)" }}
          >
            <div className="flex gap-6">
              <Link href="/menu" className="transition hover:text-[#D4AF37]">Menu</Link>
              <Link href="/redroom" className="transition hover:text-[#D4AF37]">RedRoom</Link>
              <Link href="/contact" className="transition hover:text-[#D4AF37]">Contact</Link>
            </div>
            <p>
              <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-emerald-400" />
              Available for private events
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
