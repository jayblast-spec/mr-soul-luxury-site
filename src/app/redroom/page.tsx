import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { redroomFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "RedRoom VIP",
  description: "RedRoom by Mr Soul is an Atlanta Afrobeats nightlife, VIP lounge, bottle service, hookah, celebrity-style entertainment, and private event experience.",
};

const galleryRows = [
  ["champagne parade", "afrobeats crowd", "birthday booth", "dj spotlight", "vip toast", "late night smiles"],
  ["hookah moment", "red light lounge", "celebrity arrival", "friends meetup", "dance floor joy", "private event"],
];

const moments = [
  ["Afrobeats Nights", "The room moves with Afrobeats, Amapiano, Caribbean heat, and Hip-Hop blends."],
  ["Celebrity-Style VIP", "Bottle service, premium tables, red light energy, and a room made for main-character entrances."],
  ["Meetups & Birthdays", "Perfect for friends linking up, birthdays, after-work hangs, launch nights, and big celebrations."],
  ["Late-Night Lounge", "Hookah, drinks, food, music, and smiles running deep into the night."],
];

const eventTypes = ["Birthdays", "VIP Tables", "Private Buyouts", "Artist Nights", "Afrobeats Parties", "Meetups", "After Dark Dining", "Hookah Lounge"];

const newsTicker = [
  "4.2★ on Google · 327 Reviews",
  "Open Mon – Sat · 4:30PM to 2:30AM",
  "Afrobeats Every Friday & Saturday",
  "15+ Years Serving Atlanta",
  "Free On-Site Parking · Buford Hwy NE",
  "Hookah Available Until 2AM",
  "RedRoom VIP · 21+ After 9PM",
  "Book a Table · +1 404-458-5714",
  "Atlanta's Premier Nigerian Restaurant",
  "Now Accepting Private Event Bookings",
  "Western & African Cuisine · FastFood & Grills",
];

function SlidingPhotoRow({ labels, reverse = false }: { labels: string[]; reverse?: boolean }) {
  const doubled = [...labels, ...labels];
  return (
    <div className="overflow-hidden">
      <div className={reverse ? "redroom-slide-right gap-4 py-2" : "redroom-slide-left gap-4 py-2"}>
        {doubled.map((label, index) => (
          <div key={`${label}-${index}`} className="relative h-52 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-72 sm:w-56">
            <Image
              src={`https://picsum.photos/seed/${label.replaceAll(" ", "-")}/600/800`}
              alt={label}
              fill
              sizes="224px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 max-w-[80%] text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RedRoomPage() {
  return (
    <main className="overflow-hidden bg-[#080008] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="/images/afrobeats-crowd.webp"
          alt="RedRoom nightlife"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.85) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 60% 20%, rgba(180,0,30,0.45), transparent 40%)" }} />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/redroom-logo.png"
            alt="RedRoom Lounge by Mr Soul"
            className="mb-10"
            style={{ width: "min(220px, 48vw)", height: "auto" }}
          />
          <p className="text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#D4AF37" }}>RedRoom By Mr Soul</p>
          <h1
            className="mt-5 font-display font-bold italic leading-[0.88]"
            style={{ fontSize: "clamp(52px, 9vw, 140px)" }}
          >
            Afrobeats.<br />VIP.<br />Celebrity Energy.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8" style={{ color: "rgba(255,255,255,0.72)" }}>
            A nightlife destination for fun adults — meetups, birthdays, private events,
            hookah, bottle service, and unforgettable Atlanta nights.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+14044585714"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black uppercase tracking-[0.18em] transition bg-[#C8102E] text-white hover:bg-[#a80d27]"
            >
              Order Online
            </a>
            <ButtonLink href="#gallery" variant="secondary">See The Vibe</ButtonLink>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-white/8 bg-[#0A0010] py-4">
        <div className="redroom-slide-left gap-8 text-nowrap text-4xl font-black uppercase leading-none text-white/8 sm:text-6xl">
          {[...newsTicker, ...newsTicker, ...newsTicker].map((item, index) => (
            <span key={`${item}-${index}`}>{item} <span className="text-[#C41E3A]">/</span></span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#070010] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#D4AF37" }}>Own Website Energy</p>
              <h2
                className="font-display mt-4 font-bold italic leading-none"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
              >
                Not a back room.<br />A whole destination.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8" style={{ color: "rgba(255,255,255,0.62)" }}>
              RedRoom is where food, lounge culture, music, and nightlife meet. Guests come to
              celebrate, link up, dance, reserve premium tables, and feel like the night was
              designed around them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {moments.map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <p className="text-xl font-bold italic text-white">{title}</p>
                <p className="mt-4 text-sm leading-7" style={{ color: "rgba(255,255,255,0.58)" }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "70vh" }}>
        <div className="relative" style={{ minHeight: "50vw" }}>
          <Image src="/images/vip-lounge.webp" alt="VIP lounge" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#D4AF37" }}>The Room</p>
            <h3 className="font-display font-bold italic text-white" style={{ fontSize: "clamp(24px, 3vw, 48px)" }}>Bottle service. Premium tables.</h3>
          </div>
        </div>
        <div className="relative" style={{ minHeight: "50vw" }}>
          <Image src="/images/hookah-luxury.webp" alt="Premium hookah" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.38em]" style={{ color: "#D4AF37" }}>The Experience</p>
            <h3 className="font-display font-bold italic text-white" style={{ fontSize: "clamp(24px, 3vw, 48px)" }}>Premium hookah. VIP only.</h3>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#050008] py-16">
        <div className="px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#D4AF37" }}>Sliding Photo Wall</p>
            <h2 className="font-display mt-4 font-bold italic leading-none" style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>Fun, movement, happiness.</h2>
          </div>
        </div>
        <div className="space-y-4">
          <SlidingPhotoRow labels={galleryRows[0]} />
          <SlidingPhotoRow labels={galleryRows[1]} reverse />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#060010] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {redroomFeatures.slice(0, 4).map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group h-full rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <Icon style={{ color: "#D4AF37" }} size={32} />
                <h2 className="mt-6 text-xl font-bold italic" style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h2>
                <p className="mt-4 text-sm leading-7" style={{ color: "rgba(255,255,255,0.58)" }}>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRIVATE EVENTS */}
      <section className="relative isolate overflow-hidden bg-[#080012] px-5 py-20 sm:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#D4AF37" }}>Private Events</p>
              <h2
                className="font-display mt-4 font-bold italic leading-none"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
              >
                Bring your people.<br />We bring the movie.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "rgba(255,255,255,0.62)" }}>
                Birthdays, artist nights, brand launches, group meetups, VIP tables, and full
                private buyouts can all live here.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {eventTypes.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["/images/afrobeats-crowd.webp", "/images/vip-lounge.webp"].map((src, index) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 ${index === 1 ? "mt-14" : ""}`}
                  style={{ aspectRatio: "0.82" }}
                >
                  <Image src={src} alt="" fill sizes="(min-width:1024px) 300px, 45vw" className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="px-5 py-20 sm:px-8" style={{ background: "#0A0010" }}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: "#D4AF37" }}>VIP Reservations</p>
            <h2
              className="font-display mt-4 font-bold italic leading-none text-white"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              Own the room tonight
            </h2>
            <p className="mt-6 text-base leading-8" style={{ color: "rgba(255,255,255,0.58)" }}>
              Choose bottle service, hookah, general admission, birthday setup, private
              celebration, or a full buyout. RedRoom is 21+ after 9 PM.
            </p>
            <a
              href="tel:+14044585714"
              className="mt-6 inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-yellow-500/50"
            >
              Call to Reserve
            </a>
          </div>
          <ContactForm redroom />
        </div>
      </section>
    </main>
  );
}

