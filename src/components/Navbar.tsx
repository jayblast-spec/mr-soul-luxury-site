"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/redroom", label: "RedRoom" },
  { href: "/services", label: "Events" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:pt-6">
      <nav
        className={`inline-flex max-w-[calc(100vw-1.5rem)] items-center rounded-full border border-white/10 bg-surface/88 px-2 py-2 text-text-primary backdrop-blur-md transition ${
          scrolled ? "shadow-2xl shadow-black/30" : ""
        }`}
      >
        <Link href="/" className="accent-gradient group grid size-9 shrink-0 place-items-center rounded-full p-[1px] transition hover:scale-110">
          <span className="grid size-full place-items-center rounded-full bg-bg text-[11px] font-black">SOUL</span>
        </Link>
        <span className="mx-2 hidden h-5 w-px bg-stroke sm:block" />
        <div className="flex min-w-0 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-muted transition hover:bg-stroke/60 hover:text-text-primary sm:px-4 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="mx-2 hidden h-5 w-px bg-stroke sm:block" />
        <Link href="/contact" className="luxury-border relative rounded-full bg-surface text-xs font-semibold text-text-primary sm:text-sm">
          <span className="block rounded-full bg-surface px-3 py-2 sm:px-4">Book VIP</span>
        </Link>
      </nav>
    </header>
  );
}
