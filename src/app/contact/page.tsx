import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ParallaxSection } from "@/components/ParallaxSection";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mr Soul Bistro, reserve a table, book RedRoom VIP, or plan a private event.",
};

export default function ContactPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/mr-soul-contact/1600/900" eyebrow="Contact" title="Reserve the Night">
        <p className="text-xl leading-8 text-white/75">Book dining, RedRoom VIP, private events, or ask the team what fits your night.</p>
      </ParallaxSection>
      <section className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[8px] bg-black p-6 text-white sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Direct Line</p>
            <h2 className="mt-4 text-4xl font-black uppercase">Visit Us at Buford Hwy</h2>
            <div className="mt-6 space-y-4 text-white/70">
              <p>{brand.address}</p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
              <p>{brand.hours}</p>
            </div>
            <iframe
              className="mt-8 aspect-video w-full rounded-[8px] border-0"
              loading="lazy"
              title="Map to Mr Soul Bistro"
              src="https://www.google.com/maps?q=4186%20Buford%20Hwy%20NE%20Ste%20C%2C%20Atlanta%2C%20GA%2030345&output=embed"
            />
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
