import type { Metadata } from "next";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Dine-in, RedRoom VIP lounge, SOL Lounge, takeout, delivery, catering, and private events.",
};

export default function ServicesPage() {
  return (
    <>
      <ParallaxSection image="https://picsum.photos/seed/redroom-service/1600/900" eyebrow="Services" title="Dinner, VIP, Events, Takeout">
        <p className="text-xl leading-8 text-white/75">One destination for Nigerian dining, late-night RedRoom energy, private celebrations, and premium table service.</p>
      </ParallaxSection>
      <section className="bg-[#FAFAFA] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard key={service.title}>
                <article className="h-full rounded-[8px] bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 sm:p-8">
                  <Icon className="text-[#C8102E]" size={34} />
                  <h2 className="mt-6 text-3xl font-black uppercase">{service.title}</h2>
                  <p className="mt-4 leading-7 text-black/65">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-black px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">{feature}</span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </section>
    </>
  );
}
