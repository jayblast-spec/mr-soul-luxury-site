"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HlsBackground } from "./HlsBackground";

gsap.registerPlugin(ScrollTrigger);

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
  ["Best Nigerian vibe in Atlanta", "Closest you can get to Lagos.", "5 stars", "Dining"],
  ["The jollof is unmatched", "The atmosphere is incredible.", "5 stars", "Menu"],
  ["RedRoom is the spot", "Amazing food and the DJ had the whole room moving.", "5 stars", "Nightlife"],
  ["Great vibes", "Authentic food and amazing staff. 10/10.", "5 stars", "Guest"],
];

const flavorPillars = [
  ["Irresistible Flavors", "Embark on a journey through Nigeria with authentic dishes, rich stews, mouthwatering grills, and soulful sides."],
  ["Vibrant Atmosphere", "More than a meal, cold drinks, and good music - enjoy the lively vibe that creates special memories."],
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

function SectionHeader({ eyebrow, title, italic, text }: { eyebrow: string; title: string; italic: string; text: string }) {
  return (
    <motion.div
      className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div>
        <div className="mb-5 flex items-center gap-4">
          <span className="h-px w-8 bg-stroke" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</p>
        </div>
        <h2 className="text-balance text-4xl font-semibold leading-none text-text-primary md:text-6xl">
          {title} <span className="font-display italic">{italic}</span>
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-7 text-muted md:text-base">{text}</p>
    </motion.div>
  );
}

export function CinematicHome() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 })
        .fromTo(".blur-in", { opacity: 0, filter: "blur(10px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 }, 0.25);

      if (centerRef.current && galleryRef.current) {
        ScrollTrigger.create({
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: centerRef.current,
          pinSpacing: false,
        });

        gsap.utils.toArray<HTMLElement>(".gallery-card").forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -130 : 130,
            rotate: index % 2 === 0 ? -4 : 4,
            ease: "none",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-bg px-5 text-center">
        <HlsBackground source="/videos/mr-soul-landing-hero.mp4" />
        <div className="absolute inset-0 bg-[#170207]/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(200,16,46,0.22),transparent_34%),linear-gradient(180deg,rgba(23,2,7,0.28),rgba(23,2,7,0.9))]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-bg to-transparent" />
        <div className="relative z-10 mx-auto max-w-5xl pt-16">
          <div className="blur-in mx-auto mb-7 h-24 w-[min(78vw,430px)] rounded-full border border-white/10 bg-black/24 p-3 shadow-2xl shadow-[#C8102E]/18 backdrop-blur-sm">
            <Image src="/images/mr-soul-logo.png" alt="Mr Soul Bistro & Cafe logo" width={720} height={300} priority className="h-full w-full object-contain" />
          </div>
          <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Where Atlanta Meets Lagos</p>
          <div className="name-reveal relative mx-auto max-w-6xl">
            <div className="absolute -inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-40 w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/18 blur-3xl" />
            <h1 className="soul-title-wrap soul-title text-balance text-5xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl lg:text-9xl">
              Mr Soul Bistro & Cafe
            </h1>
            <div className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#D4AF37]/85 sm:text-xs">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/45" />
              Lagos Flavor
              <span className="size-1.5 rounded-full bg-[#C8102E]" />
              Atlanta Nights
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/45" />
            </div>
          </div>
          <p className="blur-in mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-text-primary/85 md:text-2xl">
            Authentic Nigerian cuisine and Atlanta&apos;s ultimate celebrity playground.
          </p>
          <p className="blur-in mx-auto mt-5 max-w-md text-sm leading-7 text-muted md:text-base">
            Legendary jollof, peppered goat stew, hookah, bottle service, Afrobeats, and the RedRoom VIP experience.
          </p>
          <div className="blur-in mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/menu" className="luxury-border relative rounded-full bg-text-primary text-sm font-semibold text-bg transition hover:scale-105">
              <span className="block rounded-full bg-text-primary px-7 py-3.5">View Our Menu</span>
            </Link>
            <Link href="/redroom" className="luxury-border relative rounded-full border border-stroke bg-bg text-sm font-semibold text-text-primary transition hover:scale-105">
              <span className="block rounded-full bg-bg px-7 py-3.5">Book RedRoom VIP</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Scroll</p>
          <div className="relative mx-auto h-10 w-px overflow-hidden bg-stroke">
            <div className="animate-scroll-down absolute h-5 w-px bg-text-primary" />
          </div>
        </div>
      </section>

      <section className="bg-bg px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto mb-16 grid max-w-[1200px] gap-8 rounded-3xl border border-stroke bg-surface/35 p-6 md:grid-cols-[1fr_0.75fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">About Mr Soul Bistro & Cafe</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-none text-text-primary md:text-6xl">
              Journey Into Nigerian Flavor Wonderland
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              At Mr Soul Bistro & Cafe, we&apos;re not just serving food; we&apos;re crafting experiences.
              Step into a world where every bite tells a story of flavor and tradition.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              We&apos;re more than a restaurant; we&apos;re a celebration of taste, tradition, and community.
              Join us for an experience that goes beyond the plate.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#170207]/70 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Hours of Operation</p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-white/75">
              <p><span className="font-bold text-white">Monday - Saturday</span><br />4:30 PM - 2:30 AM</p>
              <p><span className="font-bold text-white">Tuesday and Sunday</span><br />Closed</p>
            </div>
            <Link href="/menu" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#170207]">
              Explore Our Flavor-Packed Menu
            </Link>
          </div>
        </div>

        <div className="mx-auto mb-20 grid max-w-[1200px] gap-5 md:grid-cols-4">
          {flavorPillars.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-stroke bg-surface/40 p-6">
              <p className="text-xl font-semibold text-text-primary">{title}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Signature Experiences"
            title="Food, music,"
            italic="and the room"
            text="From authentic Nigerian mains to RedRoom bottle service, every section is built around what guests actually come for."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {bento.map((item) => (
              <motion.article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${item.span} ${item.ratio}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="float-frame absolute inset-0">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="halftone absolute inset-0 opacity-20 mix-blend-soft-light" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170207]/88 via-[#4d0715]/24 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#170207]/45 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                  {item.label}
                </div>
                <div className="absolute inset-0 grid place-items-center bg-bg/70 opacity-0 backdrop-blur-lg transition duration-300 group-hover:opacity-100">
                  <div className="luxury-border rounded-full bg-white p-[1px]">
                    <span className="block rounded-full bg-white px-5 py-3 text-sm font-semibold text-bg">
                      View - <span className="font-display italic">{item.title}</span>
                    </span>
                  </div>
                </div>
                <h3 className="absolute bottom-5 left-5 max-w-[70%] text-2xl font-semibold leading-tight text-white md:text-4xl">
                  {item.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            eyebrow="Guest Reviews"
            title="Real"
            italic="vibes"
            text="Clear social proof for food, atmosphere, staff, and the RedRoom nightlife pull."
          />
          <div className="space-y-4">
            {reviews.map(([title, text, rating, tag], index) => (
              <motion.article
                key={title}
                className="group flex flex-col gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition hover:bg-surface sm:flex-row sm:items-center sm:rounded-full"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="float-frame relative size-20 shrink-0 overflow-hidden rounded-full">
                  <Image src={`https://picsum.photos/seed/journal-${index}/220/220`} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xl font-semibold text-text-primary">{title}</p>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
                  <span>{rating}</span>
                  <span className="h-px w-8 bg-stroke" />
                  <span>{tag}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="relative min-h-[300vh] overflow-hidden bg-bg px-6">
        <div ref={centerRef} className="z-10 flex h-screen items-center justify-center text-center">
          <div className="mx-auto max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">Explorations</p>
            <h2 className="text-balance text-5xl font-semibold leading-none md:text-7xl">
              Taste the <span className="font-display italic">night</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
              Food, cocktails, lounge seating, RedRoom lights, and private table energy in one scroll.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-48 z-20 mx-auto grid max-w-[1400px] grid-cols-2 gap-12 md:gap-40">
          <div className="flex flex-col items-end gap-40 pt-24">
            {gallery.slice(0, 3).map((src) => (
              <div key={src} className="gallery-card float-frame relative aspect-square w-[42vw] max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface">
                <Image src={src} alt="" fill sizes="320px" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-40 pt-72">
            {gallery.slice(3).map((src) => (
              <div key={src} className="gallery-card float-frame relative aspect-square w-[42vw] max-w-[320px] overflow-hidden rounded-3xl border border-stroke bg-surface">
                <Image src={src} alt="" fill sizes="320px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3">
          {[
            ["15+", "Years of Flavor"],
            ["500+", "Dishes Served Daily"],
            ["4.8", "Average Rating"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-stroke bg-surface/40 p-8 text-center">
              <p className="font-display text-7xl italic text-text-primary">{value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-bg px-6 pb-10 pt-20 text-center md:pt-28">
        <HlsBackground flipped />
        <div className="absolute inset-0 bg-[#170207]/78" />
        <div className="relative z-10">
          <div className="flex whitespace-nowrap text-[18vw] font-semibold leading-none text-white/10" ref={marqueeRef}>
            <span>WHERE ATLANTA MEETS LAGOS - REDROOM VIP - </span>
            <span>WHERE ATLANTA MEETS LAGOS - REDROOM VIP - </span>
          </div>
          <div className="mx-auto -mt-8 max-w-3xl md:-mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Ready for the room?</p>
            <h2 className="mt-5 text-balance text-5xl font-semibold leading-none md:text-7xl">
              Discover the <span className="font-display italic">Soulful Experience</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
              Immerse yourself in a world of exquisite flavors, rhythmic beats, and shared joy. Mr Soul Bistro & Cafe is not just a dining experience; it&apos;s a celebration of authentic tastes and vibrant togetherness.
            </p>
            <Link href="/menu" className="luxury-border relative mt-8 inline-flex rounded-full bg-text-primary text-sm font-semibold text-bg">
              <span className="block rounded-full bg-text-primary px-8 py-4">Explore Our Menu</span>
            </Link>
          </div>
          <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-stroke pt-6 text-xs uppercase tracking-[0.18em] text-muted md:flex-row">
            <div className="flex gap-5">
              <Link href="/menu">Menu</Link>
              <Link href="/redroom">RedRoom</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p><span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-emerald-400" />Available for private events</p>
          </div>
        </div>
      </section>
    </>
  );
}
