import type { Metadata } from "next";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "About",
  description: "The story, culinary philosophy, and RedRoom origin behind Mr Soul Bistro & Cafe in Atlanta.",
};

export default function AboutPage() {
  const sections = [
    ["The Story", "Mr Soul Bistro & Cafe was born from a vision to bring the authentic, soulful flavors of Nigeria to the heart of Atlanta. What started as a dream has grown into a cultural hub - a place where the aroma of pepper soup fills the air and the rhythm of Afrobeats moves the crowd."],
    ["Culinary Philosophy", "We cook with heart. Every spice, every simmer, every flame is a tribute to our heritage. From our signature jollof rice to slow-cooked oxtails, every dish tells a story of home, family, and celebration."],
    ["RedRoom Origin", "The RedRoom wasn't just built - it was curated. Designed to be Atlanta's ultimate celebrity playground, it features a state-of-the-art 360 degree rotating DJ booth, immersive lighting, and a vibe that feels like a Lagos rooftop party."],
    ["Team", "General Manager: Taiwo Kehinde. Chef's note and deeper culinary bio can be added when the final team profile is approved."],
  ];

  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-story/1600/900" eyebrow="About Mr Soul" title="Built for Flavor, Family, and Celebration">
        <p className="text-xl leading-8 text-white/75">A cultural hub where chefs become friends and guests become family.</p>
      </ParallaxSection>
      <section className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-[8px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C8102E]">{title}</p>
              <p className="mt-4 text-lg leading-8 text-black/68">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
