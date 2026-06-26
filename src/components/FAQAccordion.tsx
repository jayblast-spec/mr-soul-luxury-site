"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div
      className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl"
      style={{
        background: "rgba(40,0,0,0.45)",
        border: "1px solid rgba(212,175,55,0.18)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
        backdropFilter: "blur(20px)",
      }}
    >
      {faqs.map((item, index) => (
        <div
          key={item.q}
          style={{ borderBottom: index < faqs.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
        >
          <button
            className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left sm:gap-6 sm:px-8"
            onClick={() => setOpen((current) => (current === index ? -1 : index))}
            type="button"
          >
            <span className="min-w-0 flex-1 break-words text-base font-semibold leading-7 text-white sm:text-lg">
              {item.q}
            </span>
            <ChevronDown
              className={`mt-1 shrink-0 transition-transform duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
              style={{ color: open === index ? "#D4AF37" : "rgba(255,220,200,0.5)" }}
            />
          </button>
          {open === index ? (
            <p
              className="px-6 pb-6 text-sm leading-8 sm:px-8 sm:text-base"
              style={{ color: "rgba(255,220,200,0.78)" }}
            >
              {item.a}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
