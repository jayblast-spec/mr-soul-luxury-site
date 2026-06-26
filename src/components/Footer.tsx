import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { brand } from "@/lib/content";

const links = [
  ["Home", "/"],
  ["About Mr Soul", "/about"],
  ["Our Menu", "/menu"],
  ["Our Services", "/services"],
  ["FAQs", "/faqs"],
  ["Contact Us", "/contact"],
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mrsoulbistro/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mrsoulbistro/",
    icon: Facebook,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/mrsoulbistro",
    icon: Twitter,
  },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/mrsoulbistro",
    icon: null,
  },
];

function SnapchatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.166 2C9.38 2 7 4.38 7 7.167v1.25c-.417.208-.625.625-.792 1.083-.166.5-.208.875-.208 1.167 0 .375.083.708.25 1.041-.25.667-.542 1.375-.875 1.917-.542.875-1.209 1.542-2 2-.167.083-.25.25-.25.458 0 .917 1.625 1.584 2.625 1.75.167.75.667 1.25 1.375 1.25.208 0 .458-.042.708-.167.542-.208 1.083-.333 1.667-.333.583 0 1.125.125 1.666.333.25.125.5.167.709.167.708 0 1.208-.5 1.375-1.25 1-.166 2.625-.833 2.625-1.75 0-.208-.084-.375-.25-.458-.792-.458-1.459-1.125-2-2-.334-.542-.625-1.25-.875-1.917.166-.333.25-.666.25-1.041 0-.292-.042-.667-.209-1.167-.166-.458-.375-.875-.791-1.083V7.167C17 4.379 14.62 2 11.834 2h.332z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="px-5 pb-10 pt-16 text-white sm:px-8"
      style={{ background: "#0D0000", borderTop: "1px solid rgba(212,175,55,0.12)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.75fr_0.85fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold italic" style={{ color: "#D4AF37" }}>
            {brand.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7" style={{ color: "rgba(255,220,200,0.55)" }}>
            Authentic Nigerian flavors, warm hospitality, RedRoom VIP nightlife, and a community
            celebration in Atlanta.
          </p>
          <p className="mt-6 text-sm leading-7" style={{ color: "rgba(255,220,200,0.4)" }}>
            {brand.address}
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                style={{ color: "rgba(255,220,200,0.55)", background: "rgba(255,255,255,0.05)" }}
              >
                {Icon ? <Icon size={16} /> : <SnapchatIcon size={16} />}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Links</p>
          <div className="mt-5 grid gap-3">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition hover:text-white"
                style={{ color: "rgba(255,220,200,0.55)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Opening Hours</p>
          <div className="mt-5 space-y-4 text-sm leading-7" style={{ color: "rgba(255,220,200,0.55)" }}>
            <p>Monday – Saturday:<br />4:30 PM – 2:30 AM</p>
            <p>Tuesday &amp; Sunday:<br />Closed</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#D4AF37" }}>Need Help?</p>
          <div className="mt-5 space-y-4 text-sm leading-7" style={{ color: "rgba(255,220,200,0.55)" }}>
            <div>
              <p className="mb-1" style={{ color: "rgba(255,220,200,0.35)" }}>Phone</p>
              <p>{brand.phone}</p>
              <p>{brand.mobile}</p>
            </div>
            <div>
              <p className="mb-1" style={{ color: "rgba(255,220,200,0.35)" }}>Email</p>
              <p>{brand.email}</p>
              <p>{brand.secondaryEmail}</p>
            </div>
            <div>
              <p className="mb-1" style={{ color: "rgba(255,220,200,0.35)" }}>Follow Us</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.12em] transition hover:text-white"
                    style={{ color: "rgba(255,220,200,0.55)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className="mx-auto mt-10 max-w-7xl pt-6 text-xs"
        style={{ borderTop: "1px solid rgba(212,175,55,0.1)", color: "rgba(255,255,255,0.25)" }}
      >
        Copyright © 2025 Mr Soul Bistro &amp; Cafe. All rights reserved.
      </p>
    </footer>
  );
}
