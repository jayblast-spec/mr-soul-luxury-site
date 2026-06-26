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
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-menu/1600/900" eyebrow="Food Menu" title="Delight Your Taste Buds with a World of Flavors">
        <p className="text-xl leading-8 text-white/75">
          At Mr Soul Bistro & Cafe, our menu is filled with delicious dishes that promise to take your taste buds on a journey.
          From authentic Nigerian flavors to global favorites, each dish is prepared with care and quality ingredients.
        </p>
      </ParallaxSection>
      <section className="bg-bg px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
