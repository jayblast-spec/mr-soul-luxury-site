import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "About",
  description: "Where Nigerian flavors and community unite at Mr Soul Bistro & Cafe.",
};

const apart = [
  ["Authentic Flavors", "Immerse yourself in the genuine taste of Nigeria — dishes built from heritage, not shortcuts."],
  ["Cultural Atmosphere", "A vibrant cultural space that goes far beyond a typical dining experience."],
  ["Warm Hospitality", "Our team is dedicated to making every guest feel at home from the moment they arrive."],
  ["Community Connection", "Food, music, and cultural connections that bring people together."],
  ["Storytelling Through Food", "Every dish narrates a story, prepared with authentic ingredients and traditional recipes."],
  ["Memorable Moments", "Create lasting memories in a space designed for celebration, connection, and joy."],
];

export default function AboutPage() {
  return (
    <>
      <ParallaxSection
        image="/images/hero-restaurant.webp"
        eyebrow="About Mr Soul"
        title="Where Nigerian Flavors and Community Unite"
        priority
      >
        <p className="text-xl leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
          At Mr Soul Bistro &amp; Cafe, we&apos;re more than just a restaurant — we&apos;re a celebration
          of Nigerian flavors and heartfelt hospitality.
        </p>
      </ParallaxSection>

      {/* Story section */}
      <section className="px-5 py-20 text-white sm:px-8" style={{ background: "#8B0000" }}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside
            className="glass-card rounded-3xl p-8"
            style={{ alignSelf: "start" }}
          >
            <p
              className="font-display font-bold italic"
              style={{ fontSize: "clamp(64px,9vw,120px)", color: "#D4AF37" }}
            >
              15+
            </p>
            <p
              className="mt-3 text-sm uppercase tracking-[0.24em]"
              style={{ color: "rgba(255,220,200,0.7)" }}
            >
              Years of serving authentic Nigerian flavors
            </p>
          </aside>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>
              About Mr Soul Bistro &amp; Cafe
            </p>
            <h2
              className="font-display mt-5 font-bold italic leading-none text-white"
              style={{ fontSize: "clamp(32px,4.5vw,64px)" }}
            >
              Experience Flavors That Go Beyond
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
              <p>
                We are an authentic African restaurant offering the very best in Nigerian cuisine.
                Established in 2011, Mr Soul Bistro &amp; Cafe has become a beloved destination for
                those seeking an immersive experience in Nigerian cuisine, a unique culinary
                adventure, and a vibrant cultural space.
              </p>
              <p>
                Our journey began with a vision to create a welcoming space where friends and
                families could come together to enjoy delicious meals and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Culture */}
      <section className="px-5 py-20 text-white sm:px-8" style={{ background: "#750000" }}>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>Our Mission</p>
            <p className="mt-5 text-base leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
              We bring the authentic flavors of Nigeria to your table, creating a cultural experience
              beyond food. Our goal is to share the rich blend of Nigerian culinary traditions,
              making every visit a unique journey into the heart of Africa.
            </p>
          </article>
          <article className="glass-card rounded-3xl p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>Community &amp; Culture</p>
            <p className="mt-5 text-base leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
              We&apos;re proud to be part of the community, creating a sense of belonging and sharing
              the joy of Nigerian cuisine and cultural richness. With every dish, we transport you
              to the heart of Nigeria.
            </p>
          </article>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="px-5 py-20 text-white sm:px-8" style={{ background: "#8B0000" }}>
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4AF37" }}>What Sets Us Apart</p>
          <h2
            className="font-display mt-5 font-bold italic leading-none text-white"
            style={{ fontSize: "clamp(36px,5vw,72px)" }}
          >
            Unforgettable Experiences
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {apart.map(([title, text]) => (
              <article key={title} className="glass-card rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7" style={{ color: "rgba(255,220,200,0.78)" }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Immerse yourself in exquisite flavors, rhythmic beats, and shared joy.
            </p>
          </div>
          <Link href="/menu" className="btn-gold shrink-0">Explore Our Menu</Link>
        </div>
      </section>
    </>
  );
}
