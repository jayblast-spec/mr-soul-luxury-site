import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxSection } from "@/components/ParallaxSection";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Dine in, take out, catering, delivery, reservations, and special event hosting at Mr Soul Bistro.",
};

export default function ServicesPage() {
  return (
    <>
      <ParallaxSection
        image="/images/vip-lounge.webp"
        eyebrow="Services"
        title="Exceptional Services, Unforgettable Moments"
        priority
      >
        <p className="text-xl leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
          Whether dining in, grabbing take-out, or booking RedRoom VIP — every experience
          at Mr Soul is a celebration of Nigerian flavors and culture.
        </p>
      </ParallaxSection>

      <section className="px-5 py-20 text-white sm:px-8" style={{ background: "#8B0000" }}>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description, icon: Icon, features }) => (
            <article key={title} className="glass-card rounded-3xl p-8">
              <Icon className="mb-6" size={36} style={{ color: "#D4AF37" }} />
              <h2
                className="font-display font-bold italic text-white"
                style={{ fontSize: "clamp(22px, 2.5vw, 36px)" }}
              >
                {title}
              </h2>
              <p className="mt-4 text-sm leading-7" style={{ color: "rgba(255,220,200,0.78)" }}>
                {description}
              </p>
              <ul className="mt-5 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs uppercase tracking-[0.16em]" style={{ color: "rgba(255,220,200,0.6)" }}>
                    <span className="h-px w-4 shrink-0" style={{ background: "rgba(212,175,55,0.5)" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "#6B0000" }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              className="font-display font-bold italic text-white"
              style={{ fontSize: "clamp(32px,4vw,60px)" }}
            >
              Discover the Soulful Experience
            </h2>
            <p className="mt-4 max-w-2xl text-base" style={{ color: "rgba(255,220,200,0.75)" }}>
              Authentic tastes, rhythmic beats, and vibrant togetherness.
            </p>
          </div>
          <Link href="/menu" className="btn-gold shrink-0">Explore Our Menu</Link>
        </div>
      </section>
    </>
  );
}
