"use client";

import { useState } from "react";

const inputClass = [
  "w-full rounded-2xl px-5 py-3.5 text-white placeholder:text-white/35",
  "outline-none transition",
  "focus:ring-1 focus:ring-[rgba(212,175,55,0.5)]",
].join(" ");

const inputStyle = {
  background: "rgba(40,0,0,0.45)",
  border: "1px solid rgba(212,175,55,0.22)",
};

export function ContactForm({ redroom = false }: { redroom?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="glass-card rounded-3xl p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input required className={inputClass} style={inputStyle} placeholder="Name" aria-label="Name" />
        <input required type="email" className={inputClass} style={inputStyle} placeholder="Email" aria-label="Email" />
      </div>
      <input className={`${inputClass} mt-4`} style={inputStyle} placeholder="Phone" aria-label="Phone" />
      <select
        className={`${inputClass} mt-4`}
        style={inputStyle}
        defaultValue={redroom ? "RedRoom VIP" : "Restaurant Dining"}
        aria-label="Inquiry type"
      >
        <option style={{ background: "#6B0000" }}>Restaurant Dining</option>
        <option style={{ background: "#6B0000" }}>RedRoom VIP</option>
        <option style={{ background: "#6B0000" }}>Private Events</option>
        <option style={{ background: "#6B0000" }}>Bottle Service</option>
        <option style={{ background: "#6B0000" }}>Other</option>
      </select>
      {redroom ? (
        <select
          className={`${inputClass} mt-4`}
          style={inputStyle}
          defaultValue="Bottle Service"
          aria-label="Table type"
        >
          <option style={{ background: "#6B0000" }}>Bottle Service</option>
          <option style={{ background: "#6B0000" }}>Hookah</option>
          <option style={{ background: "#6B0000" }}>General Admission</option>
          <option style={{ background: "#6B0000" }}>Private Buyout</option>
        </select>
      ) : null}
      <textarea
        required
        className={`${inputClass} mt-4 min-h-36 resize-none`}
        style={inputStyle}
        placeholder="Message"
        aria-label="Message"
      />
      <button className="btn-gold mt-5 w-full" type="submit">
        {redroom ? "Book RedRoom VIP" : "Send Inquiry"}
      </button>
      {sent ? (
        <p className="mt-4 text-sm font-bold" style={{ color: "#F2C85A" }}>
          Request received — the team will be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
