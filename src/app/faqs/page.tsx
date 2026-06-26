import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Mr Soul Bistro & Cafe cuisine, services, reservations, events, and contact options.",
};

export default function FAQsPage() {
  return (
    <>
      <ParallaxSection
        image="/images/hookah-luxury.webp"
        eyebrow="FAQs"
        title="Answers to Your Questions"
        priority
      >
        <p className="text-xl leading-8" style={{ color: "rgba(255,220,200,0.82)" }}>
          From our menu to RedRoom VIP reservations — everything you need to know
          about Mr Soul Bistro &amp; Cafe.
        </p>
      </ParallaxSection>
      <section className="px-5 py-20 sm:px-8" style={{ background: "#8B0000" }}>
        <FAQAccordion />
      </section>
    </>
  );
}
