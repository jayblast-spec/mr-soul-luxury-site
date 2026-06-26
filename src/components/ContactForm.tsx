"use client";

import { useState } from "react";

export function ContactForm({ redroom = false }: { redroom?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-[8px] bg-white p-5 shadow-2xl shadow-black/10 ring-1 ring-black/5 sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required className="min-h-12 rounded-[8px] border border-black/10 px-4" placeholder="Name" aria-label="Name" />
        <input required type="email" className="min-h-12 rounded-[8px] border border-black/10 px-4" placeholder="Email" aria-label="Email" />
      </div>
      <input className="min-h-12 rounded-[8px] border border-black/10 px-4" placeholder="Phone" aria-label="Phone" />
      <select className="min-h-12 rounded-[8px] border border-black/10 px-4" defaultValue={redroom ? "RedRoom VIP" : "Restaurant Dining"} aria-label="Inquiry type">
        <option>Restaurant Dining</option>
        <option>RedRoom VIP</option>
        <option>Private Events</option>
        <option>Bottle Service</option>
        <option>Other</option>
      </select>
      {redroom ? (
        <select className="min-h-12 rounded-[8px] border border-black/10 px-4" defaultValue="Bottle Service" aria-label="Table type">
          <option>Bottle Service</option>
          <option>Hookah</option>
          <option>General Admission</option>
          <option>Private Buyout</option>
        </select>
      ) : null}
      <textarea required className="min-h-36 rounded-[8px] border border-black/10 p-4" placeholder="Message" aria-label="Message" />
      <button className="min-h-12 rounded-full bg-[#C8102E] px-6 text-sm font-black uppercase tracking-[0.18em] text-white" type="submit">
        {redroom ? "Book RedRoom VIP" : "Send Inquiry"}
      </button>
      {sent ? <p className="text-sm font-bold text-[#C8102E]">Request captured for demo. Connect this to booking, email, or Supabase next.</p> : null}
    </form>
  );
}
