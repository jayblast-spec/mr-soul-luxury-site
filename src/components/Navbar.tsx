"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 md:pt-5">
      <nav
        id="primary-navigation"
        className={`relative flex w-full max-w-7xl items-center justify-between rounded-[18px] border border-white/18 bg-[#120206]/94 px-3 py-3 text-text-primary shadow-2xl shadow-black/25 backdrop-blur-xl transition md:rounded-full md:px-4 md:py-3 ${
          scrolled ? "border-[#D4AF37]/28 bg-[#120206]/98 shadow-[#C8102E]/18" : ""
        }`}
      >
        <Link
          href="/"
          className="accent-gradient group grid size-12 shrink-0 place-items-center rounded-full p-[1px] shadow-lg shadow-[#C8102E]/25 transition hover:scale-105 md:size-11"
          onClick={() => setOpen(false)}
          aria-label="Mr Soul home"
        >
          <span className="grid size-full place-items-center rounded-full bg-[#170207] text-[11px] font-black tracking-[0.12em] text-white md:text-[10px]">
            SOUL
          </span>
        </Link>
        <div className="ml-3 min-w-0 flex-1 md:hidden">
          <p className="truncate text-sm font-black uppercase tracking-[0.12em] text-white">Mr Soul</p>
          <p className="truncate text-[11px] font-semibold text-[#D4AF37]">Bistro, Cafe & RedRoom</p>
        </div>
        <span className="mx-4 hidden h-7 w-px bg-white/14 md:block" />
        <div className="hidden min-w-0 items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`rounded-full px-3.5 py-2.5 text-sm font-extrabold transition ${
              pathname === link.href
                ? "bg-white text-[#170207] shadow-md shadow-white/10"
                : "text-white/82 hover:bg-white/12 hover:text-white"
            }`}>
              {link.label}
            </Link>
          ))}
        </div>
        <span className="mx-4 hidden h-7 w-px bg-white/14 md:block" />
        <Link href="/contact" className="relative hidden rounded-full bg-[#D4AF37] text-sm font-black uppercase tracking-[0.12em] text-[#170207] shadow-lg shadow-[#D4AF37]/20 transition hover:scale-105 hover:bg-white md:block">
          <span className="block rounded-full px-5 py-3">Book VIP</span>
        </Link>
        <button
          type="button"
          className="grid size-12 shrink-0 place-items-center rounded-full border border-[#D4AF37]/35 bg-white/12 text-white shadow-lg shadow-black/20 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        {open ? (
          <div className="absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-[22px] border border-[#D4AF37]/22 bg-[#130205]/98 p-2 shadow-2xl shadow-black/45 backdrop-blur-xl md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-4 py-3.5 text-base font-black transition ${
                  pathname === link.href ? "bg-white text-[#170207]" : "text-white/88 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-2xl bg-[#D4AF37] px-4 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#170207]"
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
