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

const heroPhotos = [
  "redroom-crowd-happy",
  "redroom-afrobeats-dance",
  "redroom-vip-bottles",
  "redroom-dj-booth",
  "redroom-hookah-lounge",
  "redroom-celebration",
];

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

function SlidingPhotoRow({ labels, reverse = false }: { labels: string[]; reverse?: boolean }) {
  const doubled = [...labels, ...labels];
  return (
    <div className="overflow-hidden">
      <div className={reverse ? "redroom-slide-right gap-4 py-2" : "redroom-slide-left gap-4 py-2"}>
        {doubled.map((label, index) => (
          <div key={`${label}-${index}`} className="relative h-52 w-40 shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:h-72 sm:w-56">
            <Image
              src={`https://picsum.photos/seed/${label.replaceAll(" ", "-")}/600/800`}
              alt={label}
              fill
              sizes="224px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 max-w-[80%] text-[10px] font-black uppercase tracking-[0.16em] text-white sm:text-xs">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RedRoomPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative isolate min-h-screen overflow-hidden px-4 pt-28 sm:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/redroom-hero-celebrity-night/1800/1100"
            alt="RedRoom VIP lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_20%,rgba(200,16,46,0.55),transparent_34%),radial-gradient(circle_at_16%_78%,rgba(212,175,55,0.14),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.3),#000_88%)]" />
        <div className="absolute bottom-10 left-0 right-0 hidden rotate-[-5deg] opacity-50 md:block">
          <SlidingPhotoRow labels={heroPhotos} />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-4xl">
            {/* RedRoom Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/redroom-logo.svg"
              alt="RedRoom Lounge by Mr Soul"
              className="mb-8"
              style={{ width: "min(180px, 46vw)", height: "auto" }}
            />

            <p className="text-xs font-black uppercase tracking-[0.38em] text-[#D4AF37]">RedRoom By Mr Soul</p>
            <h1 className="mt-5 text-balance text-5xl font-black uppercase leading-[0.86] sm:text-7xl lg:text-8xl">
              Afrobeats. VIP. Celebrity Energy.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              A nightlife destination for fun adults, meetups, birthdays, private events, hookah, bottle service, and unforgettable Atlanta nights.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#book">Book VIP Table</ButtonLink>
              <ButtonLink href="#gallery" variant="secondary">See The Vibe</ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pb-10 lg:pb-0">
            {heroPhotos.slice(0, 4).map((photo, index) => (
              <div
                key={photo}
                className={`float-frame relative overflow-hidden rounded-[8px] border border-white/10 bg-white/10 ${
                  index % 2 === 0 ? "aspect-[0.82]" : "mt-10 aspect-[0.82]"
                }`}
              >
                <Image src={`https://picsum.photos/seed/${photo}/700/900`} alt="" fill sizes="(min-width:1024px) 260px, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TICKER ───────────────────────────────── */}
      <section className="border-y border-white/10 bg-[#100206] py-4">
        <div className="redroom-slide-left gap-8 text-nowrap text-4xl font-black uppercase leading-none text-white/10 sm:text-6xl">
          {[...eventTypes, ...eventTypes, ...eventTypes].map((item, index) => (
            <span key={`${item}-${index}`}>{item} <span className="text-[#C8102E]">/</span></span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────── */}
      <section className="bg-black px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#D4AF37]">Own Website Energy</p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
                Not a back room. A whole destination.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/65">
              RedRoom is where food, lounge culture, music, and nightlife meet. Guests come to celebrate, link up, dance, reserve premium tables, and feel like the night was designed around them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {moments.map(([title, text]) => (
              <article key={title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-2xl font-black uppercase">{title}</p>
                <p className="mt-4 leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────── */}
      <section id="gallery" className="bg-[#0E0305] py-16 text-white">
        <div className="px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#D4AF37]">Sliding Photo Wall</p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-none sm:text-6xl">Fun, movement, happiness.</h2>
          </div>
        </div>
        <div className="space-y-4">
          <SlidingPhotoRow labels={galleryRows[0]} />
          <SlidingPhotoRow labels={galleryRows[1]} reverse />
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────── */}
      <section className="bg-black px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {redroomFeatures.slice(0, 4).map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="group h-full rounded-[8px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#C8102E]/10">
                <Icon className="text-[#D4AF37]" size={34} />
                <h2 className="mt-6 text-2xl font-black uppercase">{feature.title}</h2>
                <p className="mt-4 leading-7 text-white/62">{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ─── PRIVATE EVENTS ───────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#120208] px-5 py-20 sm:px-8">
        <div className="absolute inset-x-0 top-10 opacity-15">
          <SlidingPhotoRow labels={["luxury table", "bottle girls", "redroom dance", "hookah smiles", "atlanta nightlife", "afrobeats dj"]} />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#D4AF37]">Private Events</p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-none sm:text-6xl">
              Bring your people. We bring the movie.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Birthdays, artist nights, brand launches, group meetups, VIP tables, and full private buyouts can all live here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {eventTypes.slice(0, 6).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/72">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["redroom-smiles", "redroom-vip-table"].map((photo, index) => (
              <div key={photo} className={`float-frame relative overflow-hidden rounded-[8px] border border-white/10 ${index === 1 ? "mt-14 aspect-[0.82]" : "aspect-[0.82]"}`}>
                <Image src={`https://picsum.photos/seed/${photo}/700/900`} alt="" fill sizes="(min-width:1024px) 300px, 45vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING ──────────────────────────────── */}
      <section id="book" className="bg-[#FAFAFA] px-5 py-20 text-black sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8102E]">VIP Reservations</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">Own the room tonight</h2>
            <p className="mt-6 text-lg leading-8 text-black/62">
              Choose bottle service, hookah, general admission, birthday setup, private celebration, or a full buyout. RedRoom is 21+ after 9 PM.
            </p>
            <Link href="/menu" className="mt-6 inline-flex min-h-12 items-center rounded-full border border-black/10 px-6 text-sm font-black uppercase tracking-[0.16em]">
              View Mr Soul Menu
            </Link>
          </div>
          <ContactForm redroom />
        </div>
      </section>
    </main>
  );
}
