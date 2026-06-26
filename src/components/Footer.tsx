"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/content";

const links = [
  ["Home", "/"],
  ["About Mr Soul", "/about"],
  ["Our Menu", "/menu"],
  ["Our Services", "/services"],
  ["FAQs", "/faqs"],
  ["Contact Us", "/contact"],
];

const instagramIcon = (
  <svg viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const baseSocials = [
  {
    label: "Instagram",
    hrefs: {
      default: "https://www.instagram.com/mrsoulbistro/",
      redroom: "https://www.instagram.com/redroom_atl/",
    },
    bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: instagramIcon,
  },
  {
    label: "Facebook",
    hrefs: { default: "https://www.facebook.com/mrsoulbistro/", redroom: "https://www.facebook.com/mrsoulbistro/" },
    bg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    hrefs: { default: "https://x.com/mrsoulbistro", redroom: "https://x.com/mrsoulbistro" },
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="16" height="16" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Snapchat",
    hrefs: { default: "https://www.snapchat.com/mrsoulbistro", redroom: "https://www.snapchat.com/mrsoulbistro" },
    bg: "#FFFC00",
    icon: (
      <svg viewBox="0 0 24 24" fill="black" width="16" height="16" aria-hidden="true">
        <path d="M12.166 2C9.38 2 7 4.38 7 7.167v1.25c-.417.208-.625.625-.792 1.083-.166.5-.208.875-.208 1.167 0 .375.083.708.25 1.041-.25.667-.542 1.375-.875 1.917-.542.875-1.209 1.542-2 2-.167.083-.25.25-.25.458 0 .917 1.625 1.584 2.625 1.75.167.75.667 1.25 1.375 1.25.208 0 .458-.042.708-.167.542-.208 1.083-.333 1.667-.333.583 0 1.125.125 1.666.333.25.125.5.167.709.167.708 0 1.208-.5 1.375-1.25 1-.166 2.625-.833 2.625-1.75 0-.208-.084-.375-.208-.458-.792-.458-1.459-1.125-2-2-.334-.542-.625-1.25-.875-1.917.166-.333.25-.666.25-1.041 0-.292-.042-.667-.209-1.167-.166-.458-.375-.875-.791-1.083V7.167C17 4.379 14.62 2 11.834 2h.332z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const pathname = usePathname();
  const isRedroom = pathname === "/redroom";

  const socials = baseSocials.map((s) => ({
    ...s,
    href: isRedroom ? s.hrefs.redroom : s.hrefs.default,
  }));

  return (
    <footer
      className="px-5 pb-10 pt-16 text-white sm:px-8"
      style={{ background: "#0D0000", borderTop: "1px solid rgba(212,175,55,0.12)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.75fr_0.85fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold italic" style={{ color: "#D4AF37" }}>
            {isRedroom ? "RedRoom By Mr Soul" : brand.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7" style={{ color: "rgba(255,220,200,0.55)" }}>
            {isRedroom
              ? "Atlanta’s premier Afrobeats nightlife destination. VIP tables, bottle service, hookah, and unforgettable nights."
              : "Authentic Nigerian flavors, warm hospitality, RedRoom VIP nightlife, and a community celebration in Atlanta."}
          </p>
          <p className="mt-4 text-sm leading-7" style={{ color: "rgba(255,220,200,0.38)" }}>
            {brand.address}
          </p>

          {/* Real colored social icons */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, bg, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110 hover:shadow-lg active:scale-95"
                style={{ background: bg, flexShrink: 0 }}
              >
                {icon}
              </a>
            ))}
          </div>

          {isRedroom && (
            <p className="mt-3 text-xs" style={{ color: "rgba(255,220,200,0.35)" }}>
              Instagram: <span style={{ color: "rgba(255,220,200,0.6)" }}>@redroom_atl</span>
            </p>
          )}
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
              <p className="mb-1 text-xs uppercase tracking-[0.16em]" style={{ color: "rgba(255,220,200,0.3)" }}>Phone</p>
              <p>{brand.phone}</p>
              <p>{brand.mobile}</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.16em]" style={{ color: "rgba(255,220,200,0.3)" }}>Email</p>
              <p>{brand.email}</p>
              <p>{brand.secondaryEmail}</p>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.16em]" style={{ color: "rgba(255,220,200,0.3)" }}>Follow Us</p>
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
        Copyright © 2025 {isRedroom ? "RedRoom By Mr Soul" : "Mr Soul Bistro & Cafe"}. All rights reserved.
      </p>
    </footer>
  );
}
