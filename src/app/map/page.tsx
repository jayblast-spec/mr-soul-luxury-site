import type { Metadata } from "next";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Map",
  description: "Full-page map and location details for Mr Soul Bistro & Cafe in Atlanta.",
};

export default function MapPage() {
  return (
    <section className="relative min-h-screen bg-black pt-20 text-white">
      <iframe
        className="absolute inset-0 h-full w-full border-0 opacity-80"
        loading="lazy"
        title="Mr Soul Bistro map"
        src="https://www.google.com/maps?q=4186%20Buford%20Hwy%20NE%20Ste%20C%2C%20Atlanta%2C%20GA%2030345&output=embed"
      />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-end px-5 py-10 sm:px-8">
        <div className="max-w-lg rounded-[8px] border border-[#D4AF37]/30 bg-black/85 p-6 shadow-2xl backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Styled Pin</p>
          <h1 className="mt-3 text-4xl font-black uppercase">Visit Us</h1>
          <p className="mt-4 text-white/72">{brand.address}</p>
        </div>
      </div>
    </section>
  );
}
