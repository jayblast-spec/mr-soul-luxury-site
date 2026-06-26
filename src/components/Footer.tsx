import Link from "next/link";
import { brand, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-black px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black uppercase tracking-normal">{brand.name}</p>
          <p className="mt-3 max-w-md text-white/65">{brand.tagline}. Authentic Nigerian cuisine, RedRoom VIP, and Atlanta nightlife in one destination.</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Visit</p>
          <p className="mt-4 text-sm text-white/70">{brand.address}</p>
          <p className="mt-2 text-sm text-white/70">{brand.hours}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Pages</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
