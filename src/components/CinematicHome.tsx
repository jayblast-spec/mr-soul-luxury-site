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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate flex h-screen min-h-[600px] items-center justify-center overflow-hidden text-center"
        style={{ background: "#6B0000" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(160,0,0,0.55) 0%, rgba(40,0,0,0.85) 100%)",
          }}
        />

        <motion.div
          className="relative z-10 flex w-full flex-col items-center px-5"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 text-xs font-bold uppercase tracking-[0.52em]"
            style={{ color: "#F2C85A" }}
          >
            Atlanta · Lagos · RedRoom
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            style={{
              width: "min(540px, 88vw)",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1.5px solid rgba(212,175,55,0.55)",
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.12), 0 0 60px rgba(212,175,55,0.12), 0 20px 80px rgba(0,0,0,0.7)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-bg.gif"
              alt="Mr Soul Bistro & Cafe"
              style={{ width: "100%", display: "block" }}
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              height: 1,
              width: 160,
              margin: "1.75rem auto",
              background:
                "linear-gradient(to right, transparent, rgba(212,175,55,0.7), transparent)",
              transformOrigin: "center",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link href="/menu" className="btn-gold">View Our Menu</Link>
            <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <div
              style={{
                width: 1,
                height: 56,
                margin: "0 auto",
                background: "linear-gradient(to bottom, rgba(212,175,55,0.85), rgba(212,175,55,0))",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── EDITORIAL QUOTE ──────────────────────────── */}
      <section className="px-6 py-20 text-center md:py-28" style={{ background: "#8B0000" }}>
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="mx-auto max-w-3xl"
        >
          <p
            className="font-display font-bold italic leading-[1.12] text-white"
            style={{ fontSize: "clamp(20px, 2.6vw, 38px)" }}
          >
            Where Nigerian flavor meets Atlanta energy.
            <em className="text-gold-metallic not-italic">
              {" "}Where tradition becomes unforgettable.
            </em>
          </p>
          <footer
            className="mt-8 text-xs font-bold uppercase tracking-[0.42em]"
            style={{ color: "rgba(255,220,200,0.45)" }}
          >
            Est. Atlanta, GA
          </footer>
        </motion.blockquote>
      </section>

      {/* ─── THE FOOD ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#700000", minHeight: "80vh" }}
      >
        <div className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0 }}
            className="relative"
            style={{ minHeight: "60vw" }}
          >
            <Image src="/images/food-jollof.webp" alt="Nigerian fine dining" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to right, transparent 65%, #700000 100%)" }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: 0.12 }}
            className="flex flex-col justify-center px-8 py-14 md:px-12 lg:px-16"
          >
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.44em]" style={{ color: "#F2C85A" }}>The Food</span>
            <h2 className="font-display font-bold italic leading-[1.06] text-white" style={{ fontSize: "clamp(24px, 2.8vw, 44px)" }}>Flavors that carry a whole culture.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7" style={{ color: "rgba(255,220,200,0.82)" }}>Legendary jollof, peppered goat stew, suya, egusi soup, and platter spreads that turn a table into a ceremony. Every dish is handcrafted from scratch.</p>
            <Link href="/menu" className="btn-gold mt-8 self-start">Explore Menu</Link>
          </motion.div>
        </div>
      </section>

      {/* ─── THE ROOM ──────────────────────────────────── */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image src="/images/vip-lounge.webp" alt="RedRoom VIP lounge" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(50,0,0,0.92) 0%, rgba(50,0,0,0.22) 55%, transparent 100%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring}
          className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-6 px-8 pb-12 md:flex-row md:items-end md:justify-between md:px-16 md:pb-16"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.44em]" style={{ color: "#F2C85A" }}>The Room</p>
            <h2 className="font-display font-bold italic leading-[0.95] text-white" style={{ fontSize: "clamp(30px, 3.8vw, 60px)" }}>RedRoom.<br />Atlanta&apos;s finest<br />VIP experience.</h2>
          </div>
          <div className="flex max-w-xs flex-col gap-4 pb-1">
            <p className="text-sm leading-7" style={{ color: "rgba(255,220,200,0.75)" }}>Celebrity-style bottle service. Premium hookah. Afrobeats that move the room. Private tables for birthdays, artist nights, and buyouts.</p>
            <Link href="/redroom" className="btn-gold self-start">Book VIP Table</Link>
          </div>
        </motion.div>
      </section>

      {/* ─── THE NIGHT ───────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "60vh" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }} className="relative" style={{ minHeight: "50vw", background: "#5A0000" }}>
          <Image src="/images/afrobeats-crowd.webp" alt="Afrobeats nightlife" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(50,0,0,0.38)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-9">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#F2C85A" }}>The Night</p>
            <h3 className="font-display font-bold italic text-white" style={{ fontSize: "clamp(18px, 2vw, 30px)" }}>Afrobeats. Every weekend.</h3>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.15 }} className="relative" style={{ minHeight: "50vw", background: "#6B0000" }}>
          <Image src="/images/hookah-luxury.webp" alt="Premium hookah" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(50,0,0,0.38)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-7 md:p-9">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#F2C85A" }}>The Experience</p>
            <h3 className="font-display font-bold italic text-white" style={{ fontSize: "clamp(18px, 2vw, 30px)" }}>Premium hookah. VIP only.</h3>
          </div>
        </motion.div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-16 md:py-24" style={{ background: "#8B0000" }}>
        <div className="mx-auto max-w-[1100px]">
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring} className="mb-10 flex items-end justify-between gap-8">
            <h2 className="font-display font-bold italic leading-none text-white" style={{ fontSize: "clamp(26px, 3vw, 44px)" }}>Real <em className="text-gold-metallic not-italic">vibes.</em></h2>
            <p className="hidden text-xs font-bold uppercase tracking-[0.3em] md:block" style={{ color: "rgba(255,220,200,0.4)", paddingBottom: "0.25rem" }}>Guest Reviews</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }} className="grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <motion.div key={r.author} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: spring } }} className="glass-card rounded-2xl p-6">
                <p className="text-[#D4AF37] text-base mb-3">{"★".repeat(r.stars)}</p>
                <p className="font-display italic text-white font-semibold leading-snug" style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}>&ldquo;{r.text}&rdquo;</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "rgba(255,220,200,0.5)" }}>— {r.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-16 md:py-20" style={{ background: "#750000" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="mx-auto grid max-w-[1100px] grid-cols-3 overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(212,175,55,0.18)" }}>
          {[["15+", "Years of Flavor"], ["500+", "Dishes Daily"], ["4.8★", "Average Rating"]].map(([value, label], i) => (
            <motion.div key={label} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: spring } }} className="glass-card border-0 px-4 py-8 text-center md:px-8 md:py-10" style={{ borderRadius: 0, borderRight: i < 2 ? "1px solid rgba(212,175,55,0.14)" : "none" }}>
              <p className="font-display font-bold italic text-gold-metallic" style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}>{value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: "rgba(255,220,200,0.65)" }}>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── MARQUEE CTA ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pb-20 pt-24 text-center" style={{ background: "#6B0000" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,70,0,0.12) 0%, transparent 58%)" }} />
        <div className="mb-6 overflow-hidden" aria-hidden>
          <div className="animate-marquee-left font-display whitespace-nowrap font-bold italic" style={{ fontSize: "clamp(40px, 7vw, 100px)", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}>
            <span>MR SOUL · ATLANTA · REDROOM · AFROBEATS · LAGOS · FINE DINING · </span>
            <span>MR SOUL · ATLANTA · REDROOM · AFROBEATS · LAGOS · FINE DINING · </span>
          </div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }} className="relative mx-auto max-w-2xl px-6">
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: "rgba(242,200,90,0.55)" }}>Ready for the room?</motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 74, damping: 16 } } }} className="font-display mt-4 font-bold italic leading-[1.02] text-white" style={{ fontSize: "clamp(26px, 3.2vw, 50px)" }}>Discover the <em className="animate-neon-pulse not-italic" style={{ color: "#FF4466" }}>Soulful</em> Experience.</motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mt-5 max-w-lg text-sm leading-7" style={{ color: "rgba(255,220,200,0.7)" }}>Exquisite flavors, rhythmic beats, shared joy. Mr Soul is not just a dining experience — it&apos;s a celebration of authentic taste and vibrant togetherness.</motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/menu" className="btn-gold">Explore Our Menu</Link>
            <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
          </motion.div>
        </motion.div>
        <div className="mx-auto mt-16 flex max-w-[1100px] flex-col items-center justify-between gap-4 border-t px-6 pt-6 text-xs uppercase tracking-[0.18em] md:flex-row" style={{ borderColor: "rgba(212,175,55,0.14)", color: "rgba(255,220,200,0.38)" }}>
          <div className="flex gap-6">
            <Link href="/menu" className="transition hover:text-[#F2C85A]">Menu</Link>
            <Link href="/redroom" className="transition hover:text-[#F2C85A]">RedRoom</Link>
            <Link href="/contact" className="transition hover:text-[#F2C85A]">Contact</Link>
          </div>
          <p><span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "#4ade80" }} />Available for private events</p>
        </div>
      </section>
    </div>
  );
}
