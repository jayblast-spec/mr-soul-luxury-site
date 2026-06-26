"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const reviews = [
  { text: "Best Nigerian vibe in Atlanta.", author: "Dining Guest", stars: 5 },
  { text: "The jollof is unmatched. Period.", author: "Menu Review", stars: 5 },
  { text: "RedRoom had the whole place moving.", author: "VIP Night", stars: 5 },
  { text: "Authentic. Elevated. Unforgettable.", author: "Event Guest", stars: 5 },
];

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };

export function CinematicHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate flex h-screen min-h-[600px] items-center justify-center overflow-hidden text-center"
      >
        {/* Animated GIF background — plain img to preserve animation */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-bg.gif"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(60,0,0,0.15) 0%, rgba(60,0,0,0.60) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center px-5"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-8 text-xs font-bold uppercase tracking-[0.52em]"
            style={{ color: "#F2C85A" }}
          >
            Atlanta · Lagos · RedRoom
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            style={{
              height: 1,
              width: 200,
              margin: "2rem auto",
              background:
                "linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)",
              transformOrigin: "center",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link href="/menu" className="btn-gold">
              View Our Menu
            </Link>
            <Link href="/redroom" className="btn-glass-red">
              Book RedRoom VIP
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <div
              style={{
                width: 1,
                height: 64,
                margin: "0 auto",
                background:
                  "linear-gradient(to bottom, rgba(212,175,55,0.85), rgba(212,175,55,0))",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── EDITORIAL QUOTE ──────────────────────────── */}
      <section className="px-6 py-28 text-center md:py-40" style={{ background: "#8B0000" }}>
        <motion.blockquote
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="mx-auto max-w-5xl"
        >
          <p
            className="font-display font-bold italic leading-[1.08] text-white"
            style={{ fontSize: "clamp(30px, 5vw, 78px)" }}
          >
            Where Nigerian flavor meets Atlanta energy.
            <em className="text-gold-metallic not-italic">
              {" "}Where tradition becomes unforgettable.
            </em>
          </p>
          <footer
            className="mt-10 text-xs font-bold uppercase tracking-[0.42em]"
            style={{ color: "rgba(255,220,200,0.45)" }}
          >
            Est. Atlanta, GA
          </footer>
        </motion.blockquote>
      </section>

      {/* ─── THE FOOD ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#700000", minHeight: "90vh" }}
      >
        <div className="grid min-h-[90vh] grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0 }}
            className="relative"
            style={{ minHeight: "70vw" }}
          >
            <Image
              src="/images/food-jollof.webp"
              alt="Nigerian fine dining"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 65%, #700000 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.12 }}
            className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16"
          >
            <span
              className="mb-5 text-xs font-bold uppercase tracking-[0.44em]"
              style={{ color: "#F2C85A" }}
            >
              The Food
            </span>
            <h2
              className="font-display font-bold italic leading-[1.04] text-white"
              style={{ fontSize: "clamp(36px, 4.5vw, 80px)" }}
            >
              Flavors that carry a whole culture.
            </h2>
            <p
              className="mt-7 max-w-sm text-base leading-8"
              style={{ color: "rgba(255,220,200,0.82)" }}
            >
              Legendary jollof, peppered goat stew, suya, egusi soup, and platter
              spreads that turn a table into a ceremony. Every dish is
              handcrafted from scratch.
            </p>
            <Link href="/menu" className="btn-gold mt-10 self-start">
              Explore Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── THE ROOM — full bleed ────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/vip-lounge.webp"
          alt="RedRoom VIP lounge"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(50,0,0,0.92) 0%, rgba(50,0,0,0.22) 55%, transparent 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-8 px-8 pb-16 md:flex-row md:items-end md:justify-between md:px-20 md:pb-20"
        >
          <div>
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.44em]"
              style={{ color: "#F2C85A" }}
            >
              The Room
            </p>
            <h2
              className="font-display font-bold italic leading-[0.9] text-white"
              style={{ fontSize: "clamp(48px, 7vw, 120px)" }}
            >
              RedRoom.
              <br />
              Atlanta&apos;s finest
              <br />
              VIP experience.
            </h2>
          </div>
          <div className="flex max-w-xs flex-col gap-5 pb-2">
            <p className="text-sm leading-7" style={{ color: "rgba(255,220,200,0.75)" }}>
              Celebrity-style bottle service. Premium hookah. Afrobeats that
              move the room. Private tables for birthdays, artist nights, and
              buyouts.
            </p>
            <Link href="/redroom" className="btn-gold self-start">
              Book VIP Table
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── THE NIGHT — split ───────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "80vh" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative"
          style={{ minHeight: "60vw", background: "#5A0000" }}
        >
          <Image
            src="/images/afrobeats-crowd.webp"
            alt="Afrobeats nightlife"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(50,0,0,0.38)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.38em]"
              style={{ color: "#F2C85A" }}
            >
              The Night
            </p>
            <h3
              className="font-display font-bold italic text-white"
              style={{ fontSize: "clamp(26px, 3vw, 56px)" }}
            >
              Afrobeats. Every weekend.
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
          style={{ minHeight: "60vw", background: "#6B0000" }}
        >
          <Image
            src="/images/hookah-luxury.webp"
            alt="Premium hookah"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(50,0,0,0.38)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-10">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.38em]"
              style={{ color: "#F2C85A" }}
            >
              The Experience
            </p>
            <h3
              className="font-display font-bold italic text-white"
              style={{ fontSize: "clamp(26px, 3vw, 56px)" }}
            >
              Premium hookah. VIP only.
            </h3>
          </div>
        </motion.div>
      </section>

      {/* ─── REVIEWS ─────────────────────────────────── */}
      <section className="px-6 py-20 md:px-16 md:py-28" style={{ background: "#8B0000" }}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="mb-14 flex items-end justify-between gap-8"
          >
            <h2
              className="font-display font-bold italic leading-none text-white"
              style={{ fontSize: "clamp(40px, 5.5vw, 88px)" }}
            >
              Real{" "}
              <em className="text-gold-metallic not-italic">vibes.</em>
            </h2>
            <p
              className="hidden text-xs font-bold uppercase tracking-[0.3em] md:block"
              style={{ color: "rgba(255,220,200,0.4)", paddingBottom: "0.5rem" }}
            >
              Guest Reviews
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {reviews.map((r) => (
              <motion.div
                key={r.author}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: spring },
                }}
                className="glass-card rounded-3xl p-8"
              >
                <p className="text-[#D4AF37] text-lg mb-4">
                  {"★".repeat(r.stars)}
                </p>
                <p
                  className="font-display italic text-white font-semibold leading-snug"
                  style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <p
                  className="mt-4 text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: "rgba(255,220,200,0.5)" }}
                >
                  — {r.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────── */}
      <section className="px-6 py-20 md:px-16 md:py-24" style={{ background: "#750000" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mx-auto grid max-w-[1100px] grid-cols-3 overflow-hidden rounded-3xl"
          style={{ border: "1px solid rgba(212,175,55,0.18)" }}
        >
          {[
            ["15+", "Years of Flavor"],
            ["500+", "Dishes Daily"],
            ["4.8★", "Average Rating"],
          ].map(([value, label], i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: spring },
              }}
              className="glass-card border-0 px-6 py-10 text-center md:px-10 md:py-14"
              style={{
                borderRadius: 0,
                borderRight: i < 2 ? "1px solid rgba(212,175,55,0.14)" : "none",
              }}
            >
              <p
                className="font-display font-bold italic text-gold-metallic"
                style={{ fontSize: "clamp(40px, 6vw, 90px)" }}
              >
                {value}
              </p>
              <p
                className="mt-3 text-xs font-bold uppercase tracking-[0.28em]"
                style={{ color: "rgba(255,220,200,0.65)" }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── MARQUEE CTA ─────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden pb-24 pt-28 text-center md:pt-36"
        style={{ background: "#6B0000" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,70,0,0.14) 0%, transparent 58%)",
          }}
        />

        <div className="mb-8 overflow-hidden" aria-hidden>
          <div
            className="animate-marquee-left font-display whitespace-nowrap font-bold italic"
            style={{
              fontSize: "clamp(56px, 10vw, 150px)",
              lineHeight: 1,
              color: "rgba(255,255,255,0.05)",
            }}
          >
            <span>MR SOUL · ATLANTA · REDROOM · AFROBEATS · LAGOS · FINE DINING · </span>
            <span>MR SOUL · ATLANTA · REDROOM · AFROBEATS · LAGOS · FINE DINING · </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11 } },
          }}
          className="relative mx-auto max-w-3xl px-6"
        >
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: "rgba(242,200,90,0.55)" }}
          >
            Ready for the room?
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 74, damping: 16 },
              },
            }}
            className="font-display mt-5 font-bold italic leading-[0.95] text-white"
            style={{ fontSize: "clamp(42px, 6vw, 100px)" }}
          >
            Discover the{" "}
            <em
              className="animate-neon-pulse not-italic"
              style={{ color: "#FF4466" }}
            >
              Soulful
            </em>{" "}
            Experience.
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            className="mx-auto mt-6 max-w-lg text-sm leading-8 md:text-base"
            style={{ color: "rgba(255,220,200,0.7)" }}
          >
            Exquisite flavors, rhythmic beats, shared joy. Mr Soul is not just a
            dining experience — it&apos;s a celebration of authentic taste and
            vibrant togetherness.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/menu" className="btn-gold">
              Explore Our Menu
            </Link>
            <Link href="/redroom" className="btn-glass-red">
              Book RedRoom VIP
            </Link>
          </motion.div>
        </motion.div>

        <div
          className="mx-auto mt-20 flex max-w-[1100px] flex-col items-center justify-between gap-4 border-t px-6 pt-6 text-xs uppercase tracking-[0.18em] md:flex-row"
          style={{
            borderColor: "rgba(212,175,55,0.14)",
            color: "rgba(255,220,200,0.38)",
          }}
        >
          <div className="flex gap-6">
            <Link href="/menu" className="transition hover:text-[#F2C85A]">Menu</Link>
            <Link href="/redroom" className="transition hover:text-[#F2C85A]">RedRoom</Link>
            <Link href="/contact" className="transition hover:text-[#F2C85A]">Contact</Link>
          </div>
          <p>
            <span
              className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full"
              style={{ background: "#4ade80" }}
            />
            Available for private events
          </p>
        </div>
      </section>
    </div>
  );
}
