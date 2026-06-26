"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/faqs", label: "FAQs" },
  { href: "/redroom", label: "RedRoom" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:pt-6">
      <nav
        id="primary-navigation"
        className={`relative inline-flex w-full max-w-[calc(100vw-1.5rem)] items-center justify-between rounded-full border border-white/10 bg-surface/88 px-2 py-2 text-text-primary backdrop-blur-md transition md:w-auto md:justify-start ${
          scrolled ? "shadow-2xl shadow-black/30" : ""
        }`}
      >
        <Link href="/" className="accent-gradient group grid size-9 shrink-0 place-items-center rounded-full p-[1px] transition hover:scale-110" onClick={() => setOpen(false)}>
          <span className="grid size-full place-items-center rounded-full bg-bg text-[11px] font-black">SOUL</span>
        </Link>
        <span className="mx-2 hidden h-5 w-px bg-stroke md:block" />
        <div className="hidden min-w-0 items-center md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-2 text-xs font-semibold text-muted transition hover:bg-stroke/60 hover:text-text-primary sm:px-3 sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="mx-2 hidden h-5 w-px bg-stroke md:block" />
        <Link href="/contact" className="luxury-border relative hidden rounded-full bg-surface text-xs font-semibold text-text-primary sm:text-sm md:block">
          <span className="block rounded-full bg-surface px-3 py-2 sm:px-4">Book VIP</span>
        </Link>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        {open ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl border border-white/10 bg-[#170207]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-2xl bg-[#C8102E] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-white"
              onClick={() => setOpen(false)}
            >
              Book VIP
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
