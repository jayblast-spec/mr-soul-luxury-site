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
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-faq/1600/900" eyebrow="FAQs" title="Discover Answers to Your Frequently Asked Questions">
        <p className="text-xl leading-8 text-white/75">
          Explore our FAQs to unravel the details of Mr Soul Bistro & Cafe. From our mouthwatering menu to outstanding services,
          find answers to your questions and understand the essence of Mr Soul.
        </p>
      </ParallaxSection>
      <section className="bg-bg px-5 py-20 sm:px-8">
        <FAQAccordion />
      </section>
    </>
  );
}
