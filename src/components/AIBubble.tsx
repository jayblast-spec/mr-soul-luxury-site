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
        <div
          className="mb-3 w-[min(calc(100vw-2rem),410px)] overflow-hidden rounded-3xl"
          style={{
            background: "rgba(28, 6, 14, 0.97)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            border: "1px solid rgba(212, 175, 55, 0.32)",
            boxShadow: "inset 0 0 0 0.5px rgba(255, 77, 109, 0.3), 0 8px 48px rgba(0,0,0,0.75)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: "linear-gradient(135deg, #5C0E1A 0%, #8A1C2C 50%, #3E0A15 100%)",
              borderBottom: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white">SoulBot</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>Mr Soul smart host</p>
            </div>
            <button
              type="button"
              aria-label="Close SoulBot"
              onClick={() => setOpen(false)}
              className="text-white/70 transition hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="max-h-[52vh] space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl p-3 text-sm leading-6 ${
                  message.role === "You" ? "ml-8 text-white" : "mr-5 text-white/85"
                }`}
                style={
                  message.role === "You"
                    ? { background: "rgba(212,175,55,0.18)", border: "1px solid rgba(212,175,55,0.28)" }
                    : { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }
                }
              >
                <span className="font-black" style={{ color: "#D4AF37" }}>{message.role}: </span>
                {message.text}
              </div>
            ))}
            {loading ? (
              <div
                className="mr-10 rounded-2xl p-3 text-sm text-white/70"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="font-black" style={{ color: "#D4AF37" }}>SoulBot: </span>
                cooking up the answer...
              </div>
            ) : null}
          </div>

          {/* Quick prompts */}
          <div
            className="flex flex-wrap gap-2 px-3 pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="rounded-full px-3 py-1.5 text-xs font-bold transition hover:border-[rgba(212,175,55,0.4)] hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onClick={() => sendMessage(prompt)}
                disabled={loading}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            className="flex gap-2 p-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              className="min-w-0 flex-1 rounded-full px-4 py-3 text-sm text-white outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about menu, hours, VIP..."
              aria-label="Message SoulBot"
              disabled={loading}
            />
            <button
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full disabled:opacity-60"
              style={{ background: "linear-gradient(160deg, #F2C85A 0%, #D4AF37 100%)", color: "#120308" }}
              type="submit"
              aria-label="Send message"
              disabled={loading}
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      ) : null}

      {/* Trigger */}
      <button
        type="button"
        className="relative inline-flex size-16 items-center justify-center rounded-full text-white transition hover:scale-105"
        style={{
          background: "linear-gradient(160deg, #8A1C2C, #C41E3A)",
          border: "1px solid rgba(212,175,55,0.4)",
          boxShadow: "0 4px 24px rgba(196,30,58,0.55)",
        }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open SoulBot"
      >
        <span
          className="absolute -top-1 right-0 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.12em]"
          style={{ background: "#D4AF37", color: "#120308" }}
        >
          AI
        </span>
        <Bot size={28} />
      </button>
    </div>
  );
}
