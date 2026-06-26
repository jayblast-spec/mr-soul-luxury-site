"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/lib/content";

const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];

const spring = { type: "spring" as const, stiffness: 80, damping: 20 };

export function MenuExplorer() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === category),
    [category]
  );

  // Group by category for section headers
  const grouped = useMemo(() => {
    const map: Record<string, typeof menuItems> = {};
    for (const item of filtered) {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    }
    return map;
  }, [filtered]);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className="min-h-11 rounded-full px-5 text-xs font-bold uppercase tracking-[0.16em] transition whitespace-nowrap"
            style={
              category === cat
                ? {
                    background: "linear-gradient(160deg, #C41E3A, #8A1C2C)",
                    color: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(196,30,58,0.4)",
                    border: "1px solid rgba(255,77,109,0.4)",
                  }
                : {
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    color: "rgba(255,255,255,0.78)",
                  }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={spring}
          className="mt-8 space-y-12"
        >
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat}>
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <h2
                  className="font-display font-bold italic uppercase tracking-[0.12em]"
                  style={{ color: "#D4AF37", fontSize: "clamp(13px, 1.4vw, 17px)" }}
                >
                  {cat}
                </h2>
                <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.22)" }} />
              </div>

              {/* Items */}
              <ul className="space-y-0">
                {items.map((item, idx) => (
                  <li key={item.name} className="group">
                    <div className="flex items-baseline justify-between gap-4 py-4 transition-colors group-hover:bg-white/[0.03] px-2 -mx-2 rounded-lg">
                      {/* Left: name + description */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="font-display font-semibold text-white leading-tight"
                            style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
                          >
                            {item.name}
                          </span>
                          {item.popular && (
                            <span
                              className="rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.1em]"
                              style={{ background: "rgba(212,175,55,0.18)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.35)" }}
                            >
                              Popular
                            </span>
                          )}
                          {item.spicy && (
                            <span
                              className="rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.1em]"
                              style={{ background: "rgba(196,30,58,0.18)", color: "#FF6B6B", border: "1px solid rgba(196,30,58,0.35)" }}
                            >
                              Spicy
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p
                            className="mt-1 leading-relaxed"
                            style={{ color: "rgba(232,213,196,0.55)", fontSize: "clamp(11px, 1.1vw, 13px)" }}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Right: price */}
                      <div className="flex-shrink-0 flex items-center gap-2">
                        <span
                          className="font-display font-bold"
                          style={{ color: "#D4AF37", fontSize: "clamp(14px, 1.5vw, 18px)", minWidth: "2.8rem", textAlign: "right" }}
                        >
                          ${item.price}
                        </span>
                      </div>
                    </div>
                    {idx < items.length - 1 && (
                      <div className="h-px mx-2" style={{ background: "rgba(212,175,55,0.08)" }} />
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
