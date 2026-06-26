"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems } from "@/lib/content";
import { TiltCard } from "./TiltCard";

const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];

export function MenuExplorer() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof menuItems)[number] | null>(null);
  const filtered = useMemo(
    () =>
      category === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === category),
    [category]
  );

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className="min-h-11 rounded-full px-5 text-xs font-bold uppercase tracking-[0.16em] transition"
            style={
              category === item
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
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <TiltCard key={item.name}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group h-full w-full overflow-hidden rounded-2xl text-left text-white"
              style={{
                background: "rgba(40, 8, 16, 0.65)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(212,175,55,0.2)",
                boxShadow: "inset 0 0 0 0.5px rgba(255,77,109,0.18), 0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <div className="relative aspect-[1.15] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  {item.popular ? (
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em]"
                      style={{ background: "#D4AF37", color: "#120308" }}
                    >
                      Popular
                    </span>
                  ) : null}
                  {item.spicy ? (
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em]"
                      style={{ background: "#C41E3A", color: "#ffffff" }}
                    >
                      Spicy
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold uppercase text-white">{item.name}</h2>
                  <p className="font-black" style={{ color: "#D4AF37" }}>${item.price}</p>
                </div>
                <p className="mt-2 text-sm leading-6" style={{ color: "rgba(232,213,196,0.8)" }}>
                  {item.description}
                </p>
              </div>
            </button>
          </TiltCard>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center p-5"
          style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl"
            style={{
              background: "#1A0610",
              border: "1px solid rgba(212,175,55,0.32)",
              boxShadow: "0 16px 64px rgba(0,0,0,0.85)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image src={selected.image} alt={selected.name} fill sizes="576px" className="object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,6,16,0.92), transparent)" }}
              />
            </div>
            <div className="p-6">
              <p
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: "#C41E3A" }}
              >
                {selected.category}
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold text-white">{selected.name}</h2>
              <p className="mt-3 text-sm leading-7" style={{ color: "#E8D5C4" }}>
                {selected.description}
              </p>
              <button
                className="btn-gold mt-6"
                type="button"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
