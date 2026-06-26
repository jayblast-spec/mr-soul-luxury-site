import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/content";

const links = [
  ["Home", "/"],
  ["About Mr Soul", "/about"],
  ["Our Menu", "/menu"],
  ["Our Services", "/services"],
  ["FAQs", "/faqs"],
  ["Contact Us", "/contact"],
];

export function Footer() {
  return (
    <footer className="bg-[#170207] px-5 pb-10 pt-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.75fr_0.85fr_1fr]">
        <div>
          <div className="relative h-20 w-64 overflow-hidden rounded-full border border-white/10 bg-black/35 p-3">
            <Image src="/images/mr-soul-logo.png" alt={brand.name} fill sizes="256px" className="object-contain p-1" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Authentic Nigerian flavors, warm hospitality, RedRoom VIP nightlife, and a community celebration in Atlanta.
          </p>
          <p className="mt-6 text-sm leading-7 text-white/65">{brand.address}</p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Links</p>
          <div className="mt-5 grid gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-white/70 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Opening Hours</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
            <p>Monday - Saturday:<br />4:30 PM - 2:30 AM</p>
            <p>Tuesday & Sunday:<br />Closed</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">Need Help?</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
            <p>Give us a call<br />Landline: {brand.phone}<br />Mobile: {brand.mobile}</p>
            <p>Send us an email<br />{brand.secondaryEmail}<br />{brand.email}</p>
            <p>We&apos;re Social<br />Facebook | Twitter | Snapchat | Instagram</p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/45">
        Copyright © 2025 Mr Soul Bistro & Cafe. All rights reserved.
      </p>
    </footer>
  );
}
