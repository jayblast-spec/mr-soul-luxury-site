"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems } from "@/lib/content";
import { TiltCard } from "./TiltCard";

const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category)))];

export function MenuExplorer() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof menuItems)[number] | null>(null);
  const filtered = useMemo(() => (category === "All" ? menuItems : menuItems.filter((item) => item.category === category)), [category]);

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`min-h-11 rounded-full px-5 text-xs font-black uppercase tracking-[0.16em] transition ${
              category === item ? "bg-[#C8102E] text-white" : "border border-black/10 bg-white text-black hover:border-[#C8102E]"
            }`}
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
              className="group h-full overflow-hidden rounded-[8px] bg-white text-left shadow-xl shadow-black/5 ring-1 ring-black/5"
            >
              <div className="relative aspect-[1.15] overflow-hidden">
                <Image src={item.image} alt={item.name} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-3 top-3 flex gap-2">
                  {item.popular ? <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-black">Popular</span> : null}
                  {item.spicy ? <span className="rounded-full bg-[#C8102E] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">Spicy</span> : null}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-black uppercase">{item.name}</h2>
                  <p className="font-black text-[#C8102E]">${item.price}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.description}</p>
              </div>
            </button>
          </TiltCard>
        ))}
      </div>
      {selected ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-5 backdrop-blur" onClick={() => setSelected(null)}>
          <div className="w-full max-w-xl overflow-hidden rounded-[8px] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-video">
              <Image src={selected.image} alt={selected.name} fill sizes="576px" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C8102E]">{selected.category}</p>
              <h2 className="mt-2 text-3xl font-black uppercase">{selected.name}</h2>
              <p className="mt-3 text-black/65">{selected.description}</p>
              <button className="mt-6 min-h-12 rounded-full bg-black px-6 text-sm font-black uppercase tracking-[0.18em] text-white" type="button" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
