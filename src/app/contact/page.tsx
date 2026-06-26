import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ParallaxSection } from "@/components/ParallaxSection";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mr Soul Bistro, reserve a table, book RedRoom VIP, or plan a private event.",
};

export default function ContactPage() {
  return (
    <>
      <ParallaxSection
        image="/images/afrobeats-crowd.webp"
        eyebrow="Contact"
        title="Reserve the Night"
        priority
      >
        <p className="text-xl leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
          Book dining, RedRoom VIP, private events, or ask the team what fits your night.
        </p>
      </ParallaxSection>

      <section className="px-5 py-20 sm:px-8" style={{ background: "#8B0000" }}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="glass-card rounded-3xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>
              Direct Line
            </p>
            <h2
              className="font-display mt-5 font-bold italic text-white"
              style={{ fontSize: "clamp(24px, 3vw, 44px)" }}
            >
              Visit Us at Buford Hwy
            </h2>
            <div className="mt-6 space-y-3 text-sm leading-7" style={{ color: "rgba(255,220,200,0.75)" }}>
              <p>{brand.address}</p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.hours}</p>
              <p style={{ color: "rgba(255,220,200,0.5)" }}>{brand.closed}</p>
            </div>
            <iframe
              className="mt-8 aspect-video w-full rounded-2xl border-0"
              loading="lazy"
              title="Map to Mr Soul Bistro"
              src="https://www.google.com/maps?q=4186%20Buford%20Hwy%20NE%20Ste%20C%2C%20Atlanta%2C%20GA%2030345&output=embed"
            />
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
