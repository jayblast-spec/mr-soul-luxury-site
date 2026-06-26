import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "About",
  description: "Where Nigerian flavors and community unite at Mr Soul Bistro & Cafe.",
};

const apart = [
  ["Authentic Flavors", "Immerse yourself in the genuine taste of Nigeria with authentic dishes."],
  ["Cultural Atmosphere", "Experience a vibrant cultural setting that goes beyond a typical dining experience."],
  ["Warm Hospitality", "Our friendly staff is dedicated to providing a welcoming atmosphere, making you feel at home."],
  ["Community Connection", "Join a community that shares a passion for delicious food, lively music, and cultural connections."],
  ["Storytelling Through Food", "Every dish narrates a story, prepared with authentic ingredients and traditional recipes."],
  ["Memorable Moments", "Create lasting memories in our cozy and inviting space designed for special moments."],
];

export default function AboutPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-story/1600/900" eyebrow="About Mr Soul" title="Where Nigerian Flavors and Community Unite">
        <p className="text-xl leading-8 text-white/75">
          At Mr Soul Bistro & Cafe, we&apos;re more than just a restaurant; we&apos;re a celebration of Nigerian flavors and heartfelt hospitality.
        </p>
      </ParallaxSection>

      <section className="bg-bg px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl border border-stroke bg-surface/40 p-8">
            <p className="font-display text-8xl italic text-[#D4AF37]">15+</p>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted">Years of serving authentic Nigerian flavors</p>
          </aside>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">About Mr Soul Bistro & Cafe</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-none md:text-6xl">
              Experience Flavorful Moments That Go Beyond
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              <p>
                We are an authentic African restaurant offering the very best in Nigerian cuisine. Established in 2011,
                Mr Soul Bistro & Cafe has become a beloved destination for those seeking an immersive experience in Nigerian cuisine,
                a unique culinary adventure, and a vibrant cultural space.
              </p>
              <p>
                Our journey began with a vision to create a welcoming space where friends and families could come together
                to enjoy delicious meals and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-stroke bg-surface/35 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Our Mission</p>
            <p className="mt-5 text-lg leading-8 text-muted">
              Our mission is simple yet heartfelt. We bring the authentic flavors of Nigeria to your table, creating a cultural experience beyond food.
              Our goal is to share the rich blend of Nigerian culinary traditions, making every visit a unique journey into the heart of Africa.
            </p>
          </article>
          <article className="rounded-3xl border border-stroke bg-surface/35 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Community and Culture</p>
            <p className="mt-5 text-lg leading-8 text-muted">
              We&apos;re proud to be part of the community, creating a sense of belonging and sharing the joy of Nigerian cuisine and cultural richness.
              With every dish, we want to transport you to the heart of Nigeria.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-bg px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">What Sets Us Apart</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-none md:text-6xl">Unforgettable Experiences</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {apart.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-stroke bg-surface/35 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C8102E] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black uppercase">Discover the Soulful Experience</h2>
            <p className="mt-4 max-w-2xl text-white/80">Immerse yourself in exquisite flavors, rhythmic beats, and shared joy.</p>
          </div>
          <Link href="/menu" className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#170207]">
            Explore Our Menu
          </Link>
        </div>
      </section>
    </>
  );
}
