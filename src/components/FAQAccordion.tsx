"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden divide-y divide-white/10 rounded-[8px] bg-surface/55 text-white shadow-xl shadow-black/10 ring-1 ring-white/10">
      {faqs.map((item, index) => (
        <div key={item.q}>
          <button
            className="flex w-full items-start justify-between gap-4 p-4 text-left sm:gap-5 sm:p-6"
            onClick={() => setOpen((current) => (current === index ? -1 : index))}
            type="button"
          >
            <span className="min-w-0 flex-1 break-words text-base font-black leading-6 sm:text-lg">{item.q}</span>
            <ChevronDown className={`mt-1 shrink-0 transition ${open === index ? "rotate-180 text-[#C8102E]" : ""}`} />
          </button>
          {open === index ? <p className="px-4 pb-5 text-sm leading-7 text-white/65 sm:px-6 sm:pb-6 sm:text-base">{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}
