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
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 md:pt-5">
      <nav
        id="primary-navigation"
        className="relative flex w-full max-w-7xl items-center justify-between rounded-[18px] px-3 py-3 transition-all md:rounded-full md:px-4 md:py-3"
        style={{
          background: scrolled ? "rgba(22, 4, 12, 0.98)" : "rgba(22, 4, 12, 0.88)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: scrolled
            ? "1px solid rgba(212, 175, 55, 0.38)"
            : "1px solid rgba(212, 175, 55, 0.18)",
          boxShadow: scrolled
            ? "inset 0 0 0 0.5px rgba(255,77,109,0.2), 0 8px 32px rgba(0,0,0,0.75)"
            : "0 4px 24px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group grid size-12 shrink-0 place-items-center rounded-full p-[1px] transition hover:scale-105 md:size-11"
          style={{
            background: "linear-gradient(135deg, #C41E3A, #D4AF37, #F2C85A)",
            boxShadow: "0 4px 16px rgba(196,30,58,0.4)",
          }}
          onClick={() => setOpen(false)}
          aria-label="Mr Soul home"
        >
          <span
            className="grid size-full place-items-center rounded-full text-[11px] font-black tracking-[0.12em] text-white md:text-[10px]"
            style={{ background: "#120308" }}
          >
            SOUL
          </span>
        </Link>

        <div className="ml-3 min-w-0 flex-1 md:hidden">
          <p className="truncate text-sm font-black uppercase tracking-[0.12em] text-white">Mr Soul</p>
          <p className="truncate text-[11px] font-semibold" style={{ color: "#D4AF37" }}>
            Bistro, Cafe & RedRoom
          </p>
        </div>

        <span
          className="mx-4 hidden h-7 w-px md:block"
          style={{ background: "rgba(212,175,55,0.18)" }}
        />

        <div className="hidden min-w-0 items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2.5 text-sm font-bold transition hover:text-white"
              style={
                pathname === link.href
                  ? {
                      background: "rgba(212,175,55,0.15)",
                      color: "#D4AF37",
                      border: "1px solid rgba(212,175,55,0.32)",
                    }
                  : { color: "rgba(255,255,255,0.78)" }
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span
          className="mx-4 hidden h-7 w-px md:block"
          style={{ background: "rgba(212,175,55,0.18)" }}
        />

        <Link
          href="/contact"
          className="btn-gold hidden md:inline-flex"
          style={{ borderRadius: "999px", padding: "0.65rem 1.35rem", fontSize: "0.8rem" }}
        >
          Book VIP
        </Link>

        <button
          type="button"
          className="grid size-12 shrink-0 place-items-center rounded-full text-white md:hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(255,255,255,0.07)",
          }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {open ? (
          <div
            className="absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-[22px] p-2"
            style={{
              background: "rgba(16, 3, 10, 0.98)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(212,175,55,0.22)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.75)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3.5 text-base font-bold transition"
                style={
                  pathname === link.href
                    ? { background: "rgba(212,175,55,0.14)", color: "#D4AF37" }
                    : { color: "rgba(255,255,255,0.85)" }
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold mt-2 block text-center"
              style={{ borderRadius: "16px", padding: "1rem" }}
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
