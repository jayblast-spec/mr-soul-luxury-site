"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronLeft } from "lucide-react";

export function NavigationControls() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Back button — interior pages only, appears after scroll */}
      <AnimatePresence>
        {!isHome && scrolled && (
          <motion.button
            key="back"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={() => router.back()}
            aria-label="Go back"
            className="fixed bottom-24 left-5 z-50 flex h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:scale-105 active:scale-95"
            style={{
              background: "rgba(30,0,0,0.78)",
              border: "1px solid rgba(212,175,55,0.28)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            <ChevronLeft size={14} strokeWidth={2.5} />
            Back
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll-to-top button — all pages, appears after scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="scrolltop"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(155deg, #C41E3A 0%, #8B0000 100%)",
              border: "1px solid rgba(212,175,55,0.38)",
              boxShadow: "0 4px 28px rgba(139,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.2)",
            }}
          >
            <ChevronUp size={22} color="#fff" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
