"use client";

import { Bot, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "You" | "SoulBot";
  text: string;
};

const starterPrompts = ["Hours?", "Best food?", "RedRoom VIP?", "Book a table"];

export function AIBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "SoulBot",
      text: "Hey, I am SoulBot. Ask me about the menu, hours, RedRoom VIP, hookah, events, or how to pull up.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(messageText = input) {
    const clean = messageText.trim();
    if (!clean || loading) return;

    const nextMessages: Message[] = [...messages, { role: "You", text: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/soulbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: clean, messages: nextMessages }),
      });
      const data = (await response.json()) as { reply?: string };
      setMessages((current) => [
        ...current,
        {
          role: "SoulBot",
          text: data.reply || "My bad, I missed that. Ask me again about menu, hours, RedRoom, or booking.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "SoulBot",
          text: "The chat signal blinked for a second. Try me again, or call +1 404-458-5714 for fast help.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      {open ? (
        <div className="mb-3 w-[min(calc(100vw-2rem),410px)] overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-[#170207]/95 text-white shadow-2xl shadow-[#C8102E]/35 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#C8102E] via-[#7a0618] to-[#D4AF37] px-4 py-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">SoulBot</p>
              <p className="text-xs text-white/80">Mr Soul smart host</p>
            </div>
            <button type="button" aria-label="Close SoulBot" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div ref={listRef} className="max-h-[52vh] space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl border p-3 text-sm leading-6 ${
                  message.role === "You"
                    ? "ml-8 border-[#D4AF37]/25 bg-[#D4AF37]/15 text-white"
                    : "mr-5 border-white/10 bg-white/10 text-white/85"
                }`}
              >
                <span className="font-black text-[#D4AF37]">{message.role}: </span>
                {message.text}
              </div>
            ))}
            {loading ? (
              <div className="mr-10 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-white/70">
                <span className="font-black text-[#D4AF37]">SoulBot: </span>
                cooking up the answer...
              </div>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-3 pt-3">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75 transition hover:border-[#D4AF37]/50 hover:text-white"
                onClick={() => sendMessage(prompt)}
                disabled={loading}
              >
                {prompt}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about menu, hours, VIP..."
              aria-label="Message SoulBot"
              disabled={loading}
            />
            <button
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-black disabled:opacity-60"
              type="submit"
              aria-label="Send message"
              disabled={loading}
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        className="relative inline-flex size-16 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#C8102E] text-white shadow-2xl shadow-[#C8102E]/45 transition hover:scale-105"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open SoulBot"
      >
        <span className="absolute -top-1 right-0 rounded-full bg-[#D4AF37] px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-black">AI</span>
        <Bot size={28} />
      </button>
    </div>
  );
}
