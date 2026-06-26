import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxSection } from "@/components/ParallaxSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Dine in, take out, catering, delivery, reservations, and special event hosting at Mr Soul Bistro.",
};

const services = [
  ["Dine In", "Immerse yourself in the vibrant atmosphere of Mr Soul Bistro & Cafe. Enjoy the rich flavors of Nigeria in a cozy and welcoming environment."],
  ["Take Out", "Experience our authentic cuisine from the comfort of your home. Quick, convenient, and packed with the same delightful flavors."],
  ["Catering", "Elevate your events with the soulful touch of Nigerian cuisine. Our catering services bring exceptional flavors to your special occasions."],
  ["Delivery", "Can't make it to us? We'll bring the flavors to you without compromising on taste."],
  ["Reservations", "Ensure a seamless dining experience by reserving your spot. Skip the wait and savor the moment with guaranteed seating."],
  ["Special Event Hosting", "Host your special occasions with us. Our venue is perfect for celebrations, gatherings, and creating lasting memories."],
];

export default function ServicesPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/redroom-service/1600/900" eyebrow="Services" title="Exceptional Services, Unforgettable Moments">
        <p className="text-xl leading-8 text-white/75">
          Savor the rich offerings of Mr Soul Bistro & Cafe, where culinary excellence meets the heart of community.
          Whether dining in, grabbing take-out, or exploring catering, every moment is a celebration of Nigerian flavors.
        </p>
      </ParallaxSection>

      <section className="bg-bg px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description]) => (
            <article key={title} className="rounded-3xl border border-stroke bg-surface/40 p-7">
              <p className="font-display text-5xl italic text-[#D4AF37]">{title.slice(0, 1)}</p>
              <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#C8102E] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black uppercase">Discover the Soulful Experience</h2>
            <p className="mt-4 max-w-2xl text-white/80">Authentic tastes, rhythmic beats, and vibrant togetherness.</p>
          </div>
          <Link href="/menu" className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#170207]">
            Explore Our Menu
          </Link>
        </div>
      </section>
    </>
  );
}
