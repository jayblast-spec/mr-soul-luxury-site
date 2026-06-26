"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HlsBackground } from "./HlsBackground";

const bento = [
  {
    title: "Nigerian Fine Dining",
    label: "Dinner",
    image: "https://picsum.photos/seed/luxury-jollof/1200/900",
    span: "md:col-span-7",
    ratio: "aspect-[1.18]",
  },
  {
    title: "RedRoom Bottle Service",
    label: "VIP",
    image: "https://picsum.photos/seed/red-bottle-service/900/1100",
    span: "md:col-span-5",
    ratio: "aspect-[0.9]",
  },
  {
    title: "Private Celebrations",
    label: "Events",
    image: "https://picsum.photos/seed/private-lounge-event/900/1100",
    span: "md:col-span-5",
    ratio: "aspect-[0.9]",
  },
  {
    title: "Afrobeats After Dark",
    label: "Nightlife",
    image: "https://picsum.photos/seed/afrobeats-after-dark/1200/900",
    span: "md:col-span-7",
    ratio: "aspect-[1.18]",
  },
];

const reviews = [
  ["Best Nigerian vibe in Atlanta", "Closest you can get to Lagos.", "★★★★★", "Dining"],
  ["The jollof is unmatched", "The atmosphere is incredible.", "★★★★★", "Menu"],
  ["RedRoom is the spot", "Amazing food and the DJ had the whole room moving.", "★★★★★", "Nightlife"],
  ["Great vibes", "Authentic food and amazing staff. 10/10.", "★★★★★", "Guest"],
];

const flavorPillars = [
  ["Irresistible Flavors", "Embark on a journey through Nigeria with authentic dishes, rich stews, mouthwatering grills, and soulful sides."],
  ["Vibrant Atmosphere", "More than a meal, cold drinks, and good music — enjoy the lively vibe that creates special memories."],
  ["Community Celebration", "Join a community passionate about food, Afrobeats, cultural connection, and togetherness."],
  ["Afrobeats Bliss", "Feel the rhythm of Afrobeats and sounds from the motherland, from curated playlists to live performances."],
];

const gallery = [
  "https://picsum.photos/seed/soul-gallery-1/700/700",
  "https://picsum.photos/seed/soul-gallery-2/700/700",
  "https://picsum.photos/seed/soul-gallery-3/700/700",
  "https://picsum.photos/seed/soul-gallery-4/700/700",
  "https://picsum.photos/seed/soul-gallery-5/700/700",
  "https://picsum.photos/seed/soul-gallery-6/700/700",
];

const heroWords = ["Mr", "Soul", "Bistro", "&", "Cafe"];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const springItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
};

function SectionHeader({
  eyebrow,
  title,
  italic,
  text,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  text: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <motion.div variants={springItem}>
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-8" style={{ background: "rgba(212,175,55,0.4)" }} />
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#E8D5C4" }}>
            {eyebrow}
          </p>
        </div>
        <h2 className="text-balance text-4xl font-bold leading-none text-white md:text-6xl">
          {title}{" "}
          <em className="font-display not-italic text-gold-metallic">{italic}</em>
        </h2>
      </motion.div>
      <motion.p variants={springItem} className="max-w-sm text-sm leading-7 md:text-base" style={{ color: "#E8D5C4" }}>
        {text}
      </motion.p>
    </motion.div>
  );
}

export function CinematicHome() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate grid min-h-screen place-items-center overflow-hidden px-5 text-center specular-sweep"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #3E0A15 0%, #1A0408 58%, #0E0208 100%)" }}
      >
        <HlsBackground />
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0" style={{ background: "rgba(18, 3, 8, 0.72)" }} />
        </motion.div>
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          style={{ background: "linear-gradient(to top, #120308, transparent)" }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-5xl pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 text-xs font-bold uppercase tracking-[0.38em]"
            style={{ color: "#D4AF37" }}
          >
            Where Atlanta Meets Lagos
          </motion.p>

          <h1 className="hero-title font-display text-balance text-5xl font-bold uppercase leading-[0.88] tracking-tight md:text-8xl lg:text-9xl">
            {heroWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-[0.15em] last:mr-0"
                initial={{ opacity: 0, y: 80, skewY: 6 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  delay: 0.55 + i * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs"
            style={{ color: "rgba(212,175,55,0.8)" }}
          >
            <span className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.45))" }} />
            Lagos Flavor
            <span className="inline-block size-1.5 rounded-full" style={{ background: "#C41E3A" }} />
            Atlanta Nights
            <span className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.45))" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/90 md:text-2xl"
          >
            Authentic Nigerian cuisine and Atlanta&apos;s ultimate celebrity playground.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mx-auto mt-4 max-w-md text-sm leading-7 md:text-base"
            style={{ color: "#E8D5C4" }}
          >
            Legendary jollof, peppered goat stew, hookah, bottle service, Afrobeats, and the RedRoom VIP experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/menu" className="btn-gold">View Our Menu</Link>
            <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(232,213,196,0.5)" }}>Scroll</p>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="relative mx-auto h-10 w-px overflow-hidden"
            style={{ background: "rgba(212,175,55,0.2)" }}
          >
            <div className="absolute h-5 w-px" style={{ background: "#D4AF37" }} />
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT + HOURS ────────────────────────── */}
      <section className="px-6 py-16 md:px-10 lg:px-16" style={{ background: "#120308" }}>
        <div className="mx-auto mb-16 grid max-w-[1200px] gap-6 md:grid-cols-[1fr_0.72fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>
              About Mr Soul Bistro & Cafe
            </p>
            <h2 className="font-display mt-5 text-balance text-4xl font-bold leading-none text-white md:text-5xl">
              Journey Into Nigerian Flavor Wonderland
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8" style={{ color: "#E8D5C4" }}>
              At Mr Soul Bistro & Cafe, we&apos;re not just serving food; we&apos;re crafting experiences.
              Step into a world where every bite tells a story of flavor and tradition.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: "#E8D5C4" }}>
              We&apos;re more than a restaurant; we&apos;re a celebration of taste, tradition, and community.
              Join us for an experience that goes beyond the plate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="glass-card rounded-3xl p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>Hours of Operation</p>
            <div className="mt-6 space-y-5 text-sm leading-7" style={{ color: "#E8D5C4" }}>
              <p><span className="font-bold text-white">Monday – Saturday</span><br />4:30 PM – 2:30 AM</p>
              <p><span className="font-bold text-white">Tuesday & Sunday</span><br />Closed</p>
            </div>
            <Link href="/menu" className="btn-gold mt-8 block w-full text-center">
              Explore Our Flavor-Packed Menu
            </Link>
          </motion.div>
        </div>

        {/* Flavor Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto mb-20 grid max-w-[1200px] gap-5 md:grid-cols-4"
        >
          {flavorPillars.map(([title, text]) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 20 } },
              }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="glass-card rounded-3xl p-6"
            >
              <p className="text-lg font-bold text-white">{title}</p>
              <p className="mt-4 text-sm leading-7" style={{ color: "#E8D5C4" }}>{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Signature Experiences"
            title="Food, music,"
            italic="and the room"
            text="From authentic Nigerian mains to RedRoom bottle service, every section is built around what guests actually come for."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6"
          >
            {bento.map((item) => (
              <motion.article
                key={item.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
                }}
                whileHover={{ scale: 1.025, transition: { type: "spring", stiffness: 300 } }}
                className={`group relative overflow-hidden rounded-3xl ${item.span} ${item.ratio}`}
                style={{ border: "1px solid rgba(212,175,55,0.18)", background: "#1E0610" }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="halftone absolute inset-0 opacity-20 mix-blend-soft-light" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(18,3,8,0.92) 0%, rgba(92,14,26,0.2) 50%, transparent 100%)" }}
                  />
                </div>
                <div
                  className="absolute left-5 top-5 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] backdrop-blur"
                  style={{ border: "1px solid rgba(212,175,55,0.28)", background: "rgba(18,3,8,0.6)", color: "#D4AF37" }}
                >
                  {item.label}
                </div>
                <h3 className="font-display absolute bottom-5 left-5 max-w-[70%] text-2xl font-bold leading-tight text-white md:text-4xl">
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────── */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16" style={{ background: "#120308" }}>
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Guest Reviews"
            title="Real"
            italic="vibes"
            text="Clear social proof for food, atmosphere, staff, and the RedRoom nightlife pull."
          />
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
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
                }}
                className="glass-card flex flex-col gap-4 rounded-[40px] p-4 sm:flex-row sm:items-center sm:rounded-full"
              >
                <div
                  className="relative size-20 shrink-0 overflow-hidden rounded-full"
                  style={{ boxShadow: "0 0 0 1px rgba(212,175,55,0.3)" }}
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
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em]" style={{ color: "#D4AF37" }}>
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
      <section className="px-6 py-20 md:px-10 md:py-32" style={{ background: "#120308" }}>
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>Explorations</p>
            <h2 className="font-display text-balance text-5xl font-bold leading-none text-white md:text-7xl">
              Taste the <em className="text-gold-metallic">night</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-7" style={{ color: "#E8D5C4" }}>
              Food, cocktails, lounge seating, RedRoom lights, and private table energy.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-5 sm:grid-cols-3"
          >
            {gallery.map((src) => (
              <motion.div
                key={src}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 22 } },
                }}
                whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 300 } }}
                className="group relative overflow-hidden rounded-3xl"
                style={{ aspectRatio: "1", border: "1px solid rgba(212,175,55,0.18)", background: "#1E0610" }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(18,3,8,0.55), transparent)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────── */}
      <section className="px-6 py-16 md:px-10 md:py-20" style={{ background: "#120308" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3"
        >
          {[
            ["15+", "Years of Flavor"],
            ["500+", "Dishes Served Daily"],
            ["4.8★", "Average Rating"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 18 } },
              }}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <p className="font-display text-7xl italic text-gold-metallic">{value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "#E8D5C4" }}>
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── MARQUEE CTA ──────────────────────────── */}
      <section
        className="relative isolate overflow-hidden pb-12 pt-20 text-center md:pt-28"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #3E0A15 0%, #120308 65%)" }}
      >
        <HlsBackground flipped />
        <div className="absolute inset-0" style={{ background: "rgba(18,3,8,0.82)" }} />
        <div className="relative z-10">
          <div className="overflow-hidden" aria-hidden="true">
            <div
              className="animate-marquee-left font-display whitespace-nowrap text-[18vw] font-bold leading-none"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              <span>WHERE ATLANTA MEETS LAGOS — REDROOM VIP — </span>
              <span>WHERE ATLANTA MEETS LAGOS — REDROOM VIP — </span>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="mx-auto -mt-10 max-w-3xl px-5 md:-mt-20"
          >
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "rgba(232,213,196,0.55)" }}
            >
              Ready for the room?
            </motion.p>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } },
              }}
              className="font-display mt-5 text-balance text-5xl font-bold leading-none text-white md:text-7xl"
            >
              Discover the{" "}
              <em className="animate-neon-pulse" style={{ color: "#FF4D6D" }}>Soulful Experience</em>.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mx-auto mt-5 max-w-xl text-sm leading-7"
              style={{ color: "#E8D5C4" }}
            >
              Immerse yourself in a world of exquisite flavors, rhythmic beats, and shared joy.
              Mr Soul Bistro & Cafe is not just a dining experience; it&apos;s a celebration of authentic
              tastes and vibrant togetherness.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/menu" className="btn-gold">Explore Our Menu</Link>
              <Link href="/redroom" className="btn-glass-red">Book RedRoom VIP</Link>
            </motion.div>
          </motion.div>

          <div
            className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t px-6 pt-6 text-xs uppercase tracking-[0.18em] md:flex-row"
            style={{ borderColor: "rgba(212,175,55,0.18)", color: "rgba(232,213,196,0.55)" }}
          >
            <div className="flex gap-5">
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
