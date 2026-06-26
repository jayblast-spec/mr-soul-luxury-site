import { generateText } from "ai";
import { brand, faqs, menuItems, redroomFeatures, services } from "@/lib/content";

type ChatMessage = {
  role?: string;
  text?: string;
};

const menuByCategory = menuItems.reduce<Record<string, string[]>>((groups, item) => {
  groups[item.category] = groups[item.category] ?? [];
  groups[item.category].push(`${item.name} - $${item.price}${item.spicy ? " spicy" : ""}${item.popular ? " popular" : ""}`);
  return groups;
}, {});

const knowledge = `
Restaurant: ${brand.name}
Tagline: ${brand.tagline}
Address: ${brand.address}
Hours: ${brand.hours}. ${brand.closed}
Phone: ${brand.phone}
Mobile: ${brand.mobile}
Emails: ${brand.email}, ${brand.secondaryEmail}

Services: ${services.map((s) => `${s.title}: ${s.description}`).join(" | ")}
RedRoom: ${redroomFeatures.map((f) => `${f.title}: ${f.text}`).join(" | ")}
RedRoom policy: Strictly 21+ after 9 PM. Reservations essential for VIP tables.
Parking: Free on-site parking.
Music: Afrobeats, Caribbean, Amapiano, Hip-Hop, DJs.

Menu:
${Object.entries(menuByCategory)
  .map(([cat, items]) => `${cat}: ${items.join("; ")}`)
  .join("\n")}

FAQs:
${faqs.map((f) => `${f.q} ${f.a}`).join("\n")}
`;

function isDrunkSignal(text: string) {
  return /drunk|lit|tipsy|shots|wasted|faded|vibin|turn(ed)? up|drinking|bar|cup|wine/i.test(text);
}

function isIntrovertSignal(text: string) {
  return /bored|alone|shy|quiet|just me|on my phone|introvert|awkward|crowd|don'?t know anyone/i.test(text);
}

const eatNudges = [
  "lowkey you should order something — Suya and Asun hit different at night 👀",
  "real talk, eating between drinks is a W move. Jollof Rice or Pounded Yam? 🍛",
  "pro tip: grab the Egusi or Pepper Soup — Nigerian food + your vibe = unbeatable 🔥",
  "if you're feeling it, the kitchen is calling. Peppered Snail or Chicken Wings? 🫵",
];

const introvertLines = [
  "being the one on your phone at a party is actually the move ngl 😭 what's good?",
  "real ones stay in their corner and eat good. What can I get you? 🍽️",
  "introvert at a Nigerian party? you're in the right place — the food alone makes it worth it 😂",
  "your corner = my corner. what are we ordering? 🫶",
];

function fallbackReply(input: string): string {
  const text = input.toLowerCase();

  if (isDrunkSignal(text)) {
    const nudge = eatNudges[Math.floor(Math.random() * eatNudges.length)];
    return `okay the vibe is immaculate 🤣 ${nudge}`;
  }
  if (isIntrovertSignal(text)) {
    return introvertLines[Math.floor(Math.random() * introvertLines.length)];
  }
  if (text.includes("hour") || text.includes("open") || text.includes("close")) {
    return `Mr Soul is open ${brand.hours}. Closed Tuesdays & Sundays. Late-night runs are the move 🌙`;
  }
  if (text.includes("address") || text.includes("location") || text.includes("where")) {
    return `Pull up to ${brand.address} — free parking on-site 🚗`;
  }
  if (text.includes("redroom") || text.includes("vip") || text.includes("bottle")) {
    return "RedRoom = Afrobeats, bottle service, hookah, 360° DJ booth. 21+ after 9 PM. Book ahead or miss out 🥂";
  }
  if (text.includes("hookah")) {
    return "Hookah: Blueberry, Peach, Blue Mist, Love 66, Mighty Freeze, Mint, Orange Mint, Watermelon Mint, Special Soul Mix. $40 open-2am / $45 after 💨";
  }
  if (text.includes("jollof") || text.includes("egusi") || text.includes("suya") || text.includes("menu") || text.includes("food")) {
    return "Menu goes crazy — Suya, Asun, Jollof, Egusi, Pepper Soup, Big Red Snapper, Peppered Snail... want the full breakdown? 👑";
  }
  if (text.includes("reserve") || text.includes("book") || text.includes("table")) {
    return `Call ${brand.phone} or ${brand.mobile} for reservations. VIP tables go fast on weekends 🔥`;
  }
  if (text.includes("cater") || text.includes("event") || text.includes("party")) {
    return "Mr Soul does private events, birthdays, corporate nights, full catering. Hit the Contact page 🎉";
  }
  if (text.includes("bored") || text.includes("nothing") || text.includes("idk")) {
    return "you're at one of the best Nigerian spots in Atlanta and you're bored?? Order Suya and let the Afrobeats fix that 😭🔥";
  }
  return `I'm your Mr Soul plug — menu, hours, RedRoom, VIP, or just vibing. What's the move? 👀`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[]; message?: string };
    const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
    const latest = body.message ?? messages.at(-1)?.text ?? "";

    if (!latest.trim()) {
      return Response.json({ reply: "Hey! I'm SoulBot 🤖 Ask me about the menu, RedRoom, hours, or just vibe 😎" });
    }

    try {
      const conversation = messages
        .map((m) => `${m.role === "SoulBot" ? "SoulBot" : "Guest"}: ${m.text ?? ""}`)
        .join("\n");

      const result = await generateText({
        model: process.env.SOULBOT_MODEL ?? "openai/gpt-5.4",
        system: `You are SoulBot — the smart, witty Gen Z AI concierge for Mr Soul Bistro & Cafe and RedRoom in Atlanta.
You are the friend at the party who's always on their phone, entertaining everyone, and knows exactly what to order.

YOUR VIBE:
- Gen Z energy: "bet", "no cap", "fr fr", "the vibe", "pull up", "lowkey", "ngl", "bussin" — naturally, not forced
- Funny, warm, real — like texting a friend who works there
- Short punchy replies under 70 words. No essays. Use 1-3 emojis max per reply.

YOUR THREE MODES:
1. ENTERTAINER (when guest seems tipsy/lit/hype): Match energy. Keep them entertained. Slip in a casual "you should eat something" recommendation. Eating = better night for them, and it keeps them at Mr Soul longer.
2. INTROVERT COMPANION (when guest is shy/alone/bored/phone-scrolling at the party): Be their digital bestie. Make them feel seen. Give fun Mr Soul facts, suggest great food picks, be the vibe they came for.
3. RESTAURANT GUIDE (menu, hours, RedRoom, booking, hookah, pricing): Answer from the knowledge base only. Never invent info. If unsure → "call the team" with the phone number.

FOOD NUDGE: Whenever natural, mention food. Great food is why Mr Soul exists. Eating keeps guests happy and present.

NEVER make up prices, policies, or availability. If genuinely unsure → direct to phone.

KNOWLEDGE BASE:
${knowledge}`,
        prompt: `${conversation}\nGuest: ${latest}\nSoulBot:`,
        maxOutputTokens: 180,
      });

      return Response.json({ reply: result.text.trim() || fallbackReply(latest) });
    } catch (error) {
      console.error("SoulBot AI generation failed", error);
      return Response.json({ reply: fallbackReply(latest), fallback: true });
    }
  } catch {
    return Response.json(
      { reply: "My bad, glitched for a sec 😅 Ask me about the menu, RedRoom, or what's good tonight." },
      { status: 400 }
    );
  }
}
