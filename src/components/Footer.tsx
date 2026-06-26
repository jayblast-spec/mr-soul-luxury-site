import Link from "next/link";
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
    <footer
      className="px-5 pb-10 pt-16 text-white sm:px-8"
      style={{ background: "#0C0208", borderTop: "1px solid rgba(212,175,55,0.12)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.75fr_0.85fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold italic" style={{ color: "#D4AF37" }}>
            {brand.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7" style={{ color: "rgba(255,255,255,0.55)" }}>
            Authentic Nigerian flavors, warm hospitality, RedRoom VIP nightlife, and a community
            celebration in Atlanta.
          </p>
          <p className="mt-6 text-sm leading-7" style={{ color: "rgba(255,255,255,0.45)" }}>
            {brand.address}
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Links</p>
          <div className="mt-5 grid gap-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Opening Hours</p>
          <div className="mt-5 space-y-4 text-sm leading-7" style={{ color: "rgba(255,255,255,0.55)" }}>
            <p>Monday – Saturday:<br />4:30 PM – 2:30 AM</p>
            <p>Tuesday & Sunday:<br />Closed</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Need Help?</p>
          <div className="mt-5 space-y-4 text-sm leading-7" style={{ color: "rgba(255,255,255,0.55)" }}>
            <p>Give us a call<br />Landline: {brand.phone}<br />Mobile: {brand.mobile}</p>
            <p>Send us an email<br />{brand.secondaryEmail}<br />{brand.email}</p>
            <p>We&apos;re Social<br />Facebook | Twitter | Snapchat | Instagram</p>
          </div>
        </div>
      </div>

      <p
        className="mx-auto mt-10 max-w-7xl pt-6 text-xs"
        style={{ borderTop: "1px solid rgba(212,175,55,0.1)", color: "rgba(255,255,255,0.3)" }}
      >
        Copyright © 2025 Mr Soul Bistro & Cafe. All rights reserved.
      </p>
    </footer>
  );
}
