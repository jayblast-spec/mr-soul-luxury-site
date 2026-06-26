import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Hours, RedRoom age rules, parking, reservations, delivery, events, and music questions.",
};

export default function FAQsPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-faq/1600/900" eyebrow="FAQs" title="Know Before You Pull Up">
        <p className="text-xl leading-8 text-white/75">Fast answers for hours, reservations, RedRoom rules, parking, takeout, and private events.</p>
      </ParallaxSection>
      <section className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <FAQAccordion />
      </section>
    </>
  );
}
