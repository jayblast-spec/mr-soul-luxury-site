import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore entrees, soups, meats, seafood, sides, drinks, and hookah at Mr Soul Bistro.",
};

export default function MenuPage() {
  return (
    <>
      <ParallaxSection
        image="/images/food-jollof.webp"
        eyebrow="Food Menu"
        title="Delight Your Taste Buds with a World of Flavors"
        priority
      >
        <p className="text-xl leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
          Authentic Nigerian flavors, prepared with care and quality ingredients — from
          classic jollof to premium hookah and late-night bites.
        </p>
      </ParallaxSection>
      <section className="px-5 py-20 sm:px-8" style={{ background: "#8B0000" }}>
        <div className="mx-auto max-w-7xl">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
