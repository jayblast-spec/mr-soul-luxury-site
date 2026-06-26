"use client";

import { Bot, Send, X } from "lucide-react";
import { useMemo, useState } from "react";

const systemPrompt =
  "You are 'SoulBot' - the Gen Z host of Mr Soul & RedRoom. Answer questions about the restaurant, menu, RedRoom VIP, and hours. Be sassy, short (under 20 words), and always offer to book a table if they seem interested. If you don't know, tell them to check the FAQs or hit the contact page.";

function replyTo(message: string) {
  const text = message.toLowerCase();
  if (text.includes("redroom") || text.includes("vip")) return "redroom? 21+, afrobeats, 360 dj, bottle service. you in or nah?";
  if (text.includes("hour") || text.includes("open")) return "mon and wed-sat, 4:30pm to 2:30am. late-night greatness, bestie.";
  if (text.includes("jollof") || text.includes("menu") || text.includes("food")) return "the jollof? obviously elite. no cap. want us to save you a plate?";
  if (text.includes("book") || text.includes("reserve")) return "bet. hit the contact form and book before the good tables vanish.";
  if (text.includes("age") || text.includes("21")) return "redroom is 21+ after 9pm. bring ID and main-character energy.";
  return "i'd check the faqs or contact page, bestie. want a table while you're here?";
}

export function AIBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "SoulBot", text: "need menu, redroom, or hours? ask me, bestie." }]);
  const promptPreview = useMemo(() => systemPrompt, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 w-[min(calc(100vw-2.5rem),380px)] overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-black text-white shadow-2xl shadow-[#C8102E]/30">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#C8102E] px-4 py-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">SoulBot</p>
              <p className="text-xs text-white/75">sassy host mode</p>
            </div>
            <button type="button" aria-label="Close SoulBot" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className="rounded-2xl bg-white/10 p-3 text-sm text-white/85">
                <span className="font-black text-[#D4AF37]">{message.role}: </span>
                {message.text}
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (!input.trim()) return;
              setMessages((current) => [...current, { role: "You", text: input }, { role: "SoulBot", text: replyTo(input) }]);
              setInput("");
            }}
          >
            <input
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 text-sm outline-none focus:border-[#D4AF37]"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="ask about RedRoom..."
              aria-label="Message SoulBot"
              title={promptPreview}
            />
            <button className="inline-flex size-11 items-center justify-center rounded-full bg-[#D4AF37] text-black" type="submit" aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        className="inline-flex size-16 items-center justify-center rounded-full bg-[#C8102E] text-white shadow-2xl shadow-[#C8102E]/40"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open SoulBot"
      >
        <Bot size={28} />
      </button>
    </div>
  );
}
