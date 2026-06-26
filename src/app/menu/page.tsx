import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "Menu",
  description: "Filter appetizers, mains, sides, drinks, and RedRoom bottle service at Mr Soul Bistro.",
};

export default function MenuPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-menu/1600/900" eyebrow="Menu" title="Nigerian Flavor, VIP Pour">
        <p className="text-xl leading-8 text-white/75">Filter the house favorites, open each plate, and move from dinner to RedRoom without losing the vibe.</p>
      </ParallaxSection>
      <section className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
