import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { TiltCard } from "@/components/TiltCard";
import { redroomFeatures } from "@/lib/content";

export const metadata: Metadata = {
  title: "RedRoom VIP",
  description: "Atlanta's ultimate celebrity playground with 360 degree DJ booth, bottle service, hookah, and Afrobeats nights.",
};

export default function RedRoomPage() {
  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-black px-5 pt-28 text-white sm:px-8">
        <Image
          src="https://picsum.photos/seed/redroom-hero/1600/1000"
          alt="RedRoom VIP lounge"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,16,46,0.45),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.4),#000_88%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#D4AF37]">RedRoom By Mr Soul</p>
          <h1 className="neon-flicker mt-5 max-w-6xl text-5xl font-black uppercase leading-[0.86] sm:text-7xl lg:text-8xl">
            Atlanta&apos;s Ultimate Celebrity Playground
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-white/75">
            Dark lounge energy, red neon, bottle service, hookah, and a 360 degree rotating DJ booth built for Afrobeats nights.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#book">Book RedRoom VIP</ButtonLink>
            <ButtonLink href="/menu" variant="secondary">View Bottle Service</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {redroomFeatures.slice(0, 4).map((feature) => {
            const Icon = feature.icon;
            return (
              <TiltCard key={feature.title}>
                <article className="h-full rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="text-[#D4AF37]" size={34} />
                  <h2 className="mt-6 text-2xl font-black uppercase">{feature.title}</h2>
                  <p className="mt-4 leading-7 text-white/65">{feature.text}</p>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section className="bg-[#130305] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["lounge seating", "crowd energy", "cocktail service", "vip table"].map((label) => (
              <div key={label} className="relative aspect-[0.8] overflow-hidden rounded-[8px]">
                <Image src={`https://picsum.photos/seed/${label.replaceAll(" ", "-")}/700/900`} alt={label} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-black uppercase tracking-[0.16em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#C8102E]">VIP Reservations</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">Own the Room Tonight</h2>
            <p className="mt-6 text-lg leading-8 text-black/65">Choose bottle service, hookah, general admission, or a full private buyout. The form is ready to connect to your booking system.</p>
          </div>
          <ContactForm redroom />
        </div>
      </section>
    </>
  );
}
