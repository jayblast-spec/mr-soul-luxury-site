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

const PHONE = "tel:+14044585714";

// Warm cream backing so black Mr text is visible, white text stays on its own circle elements
const logoBg = "rgba(245, 238, 225, 0.97)";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoStyle: React.CSSProperties = {
    height: "40px",
    width: "auto",
    background: logoBg,
    borderRadius: "8px",
    padding: "4px 10px",
  };

  const logoStyleMobile: React.CSSProperties = {
    height: "34px",
    width: "auto",
    background: logoBg,
    borderRadius: "6px",
    padding: "3px 7px",
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 md:pt-5">
      <nav
        id="primary-navigation"
        className="relative flex w-full max-w-7xl items-center justify-between rounded-[18px] px-3 py-2.5 transition-all md:rounded-full md:px-4 md:py-2.5"
        style={{
          background: scrolled ? "rgba(10, 2, 8, 0.98)" : "rgba(10, 2, 8, 0.88)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: scrolled
            ? "1px solid rgba(212, 175, 55, 0.38)"
            : "1px solid rgba(212, 175, 55, 0.18)",
          boxShadow: scrolled
            ? "inset 0 0 0 0.5px rgba(255,77,109,0.18), 0 8px 32px rgba(0,0,0,0.8)"
            : "0 4px 24px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-85"
          onClick={handleLogoClick}
          aria-label="Mr Soul home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mr-soul-logo.png"
            alt="Mr Soul"
            className="block md:hidden"
            style={logoStyleMobile}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mr-soul-logo.png"
            alt="Mr Soul Bistro &amp; Cafe"
            className="hidden md:block"
            style={logoStyle}
          />
        </Link>

        <span
          className="mx-4 hidden h-7 w-px md:block"
          style={{ background: "rgba(212,175,55,0.15)" }}
        />

        {/* Desktop nav links */}
        <div className="hidden min-w-0 items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2.5 text-sm font-bold transition hover:text-white"
              style={
                pathname === link.href
                  ? {
                      background: "rgba(212,175,55,0.14)",
                      color: "#D4AF37",
                      border: "1px solid rgba(212,175,55,0.3)",
                    }
                  : { color: "rgba(255,255,255,0.75)" }
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <span
          className="mx-4 hidden h-7 w-px md:block"
          style={{ background: "rgba(212,175,55,0.15)" }}
        />

        <a
          href={PHONE}
          className="btn-gold hidden md:inline-flex"
          style={{ borderRadius: "999px", padding: "0.6rem 1.25rem", fontSize: "0.78rem" }}
        >
          Order Online
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full text-white md:hidden"
          style={{
            border: "1px solid rgba(212,175,55,0.28)",
            background: "rgba(255,255,255,0.06)",
          }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile dropdown */}
        {open ? (
          <div
            className="absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-[22px] p-2"
            style={{
              background: "rgba(8, 1, 8, 0.98)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(212,175,55,0.2)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.8)",
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3.5 text-base font-bold transition"
                style={
                  pathname === link.href
                    ? { background: "rgba(212,175,55,0.13)", color: "#D4AF37" }
                    : { color: "rgba(255,255,255,0.85)" }
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE}
              className="btn-gold mt-2 block text-center"
              style={{ borderRadius: "16px", padding: "1rem" }}
              onClick={() => setOpen(false)}
            >
              Order Online
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
