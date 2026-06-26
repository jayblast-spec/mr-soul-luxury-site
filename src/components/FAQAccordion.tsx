"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-black/10 rounded-[8px] bg-white shadow-xl shadow-black/5 ring-1 ring-black/5">
      {faqs.map((item, index) => (
        <div key={item.q}>
          <button
            className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
            onClick={() => setOpen((current) => (current === index ? -1 : index))}
            type="button"
          >
            <span className="text-lg font-black uppercase">{item.q}</span>
            <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180 text-[#C8102E]" : ""}`} />
          </button>
          {open === index ? <p className="px-5 pb-6 text-black/65 sm:px-6">{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}
