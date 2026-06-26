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

const SYSTEM_PROMPT = `You are SoulBot — the smart, witty Gen Z AI concierge for Mr Soul Bistro & Cafe and RedRoom in Atlanta.
You are the friend at the party who's always on their phone, entertaining everyone, knows exactly what to order.

YOUR VIBE:
- Gen Z energy: "bet", "no cap", "fr fr", "the vibe", "pull up", "lowkey", "ngl", "bussin" — naturally, not forced
- Funny, warm, real — like texting a friend who works there
- Short punchy replies under 70 words. No essays. Use 1-3 emojis max per reply.

YOUR THREE MODES:
1. ENTERTAINER (guest seems tipsy/lit/hype): Match energy. Keep them entertained. Casually slip in a food reminder — "real ones eat between rounds" or suggest a specific dish. Food keeps them having a better night and staying at Mr Soul.
2. INTROVERT COMPANION (guest seems shy/alone/bored/phone-scrolling at the party): Be their digital bestie. Make them feel seen. Suggest great food, give fun facts about Mr Soul, be the vibe they came for.
3. RESTAURANT GUIDE (menu, hours, RedRoom, booking, hookah): Answer from the knowledge below only. Never invent info. If unsure → direct to the phone number.

FOOD NUDGE: Whenever it fits naturally, mention a dish. Great food is the heart of Mr Soul.

NEVER invent prices, policies, or availability. If genuinely unsure → "call the team" + give the number.

KNOWLEDGE:
${knowledge}`;

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
  "the kitchen is calling your name. Peppered Snail or Chicken Wings? 🫵",
];
const introvertLines = [
  "being the one on your phone at a party is actually the move ngl 😭 what's good?",
  "real ones stay in their corner and eat good. What can I get you? 🍽️",
  "introvert at a Nigerian party? you're in the right place — the food alone makes it worth it 😂",
  "your corner = my corner. what are we ordering? 🫶",
];

function fallbackReply(input: string): string {
  const text = input.toLowerCase();
  if (isDrunkSignal(text)) return `okay the vibe is immaculate 🤣 ${eatNudges[Math.floor(Math.random() * eatNudges.length)]}`;
  if (isIntrovertSignal(text)) return introvertLines[Math.floor(Math.random() * introvertLines.length)];
  if (/hour|open|close/.test(text)) return `Mr Soul is open ${brand.hours}. Closed Tuesdays & Sundays 🌙`;
  if (/address|location|where/.test(text)) return `Pull up to ${brand.address} — free parking 🚗`;
  if (/redroom|vip|bottle/.test(text)) return "RedRoom = Afrobeats, bottle service, hookah, 360° DJ booth. 21+ after 9 PM. Book ahead 🥂";
  if (/hookah/.test(text)) return "Hookah: Blueberry, Peach, Blue Mist, Love 66, Mighty Freeze, Mint, Orange Mint, Watermelon Mint, Special Soul Mix. $40 open-2am / $45 after 💨";
  if (/jollof|egusi|suya|menu|food/.test(text)) return "Menu goes crazy — Suya, Asun, Jollof, Egusi, Pepper Soup, Big Red Snapper, Peppered Snail... want the breakdown? 👑";
  if (/reserve|book|table/.test(text)) return `Call ${brand.phone} or ${brand.mobile} — VIP tables go fast on weekends 🔥`;
  if (/cater|event|party/.test(text)) return "Mr Soul does private events, birthdays, corporate nights, catering. Hit the Contact page 🎉";
  if (/bored|nothing|idk/.test(text)) return "you're at one of Atlanta's best Nigerian spots and bored?? Order Suya and let Afrobeats fix that 😭🔥";
  return `I'm your Mr Soul plug — menu, hours, RedRoom, VIP, or just vibing. What's the move? 👀`;
}

async function callGroq(systemPrompt: string, messages: { role: string; content: string }[]): Promise<string> {
  const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      max_tokens: 180,
      temperature: 0.85,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Groq error ${resp.status}: ${err}`);
  }

  const data = (await resp.json()) as { choices: { message: { content: string } }[] };
  return data.choices[0]?.message?.content?.trim() ?? "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[]; message?: string };
    const history = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
    const latest = body.message ?? history.at(-1)?.text ?? "";

    if (!latest.trim()) {
      return Response.json({ reply: "Hey! I'm SoulBot 🤖 Ask me about the menu, RedRoom, hours, or just vibe 😎" });
    }

    try {
      const groqMessages = history.slice(0, -1).map((m) => ({
        role: m.role === "SoulBot" ? "assistant" : "user",
        content: m.text ?? "",
      }));
      groqMessages.push({ role: "user", content: latest });

      const reply = await callGroq(SYSTEM_PROMPT, groqMessages);
      return Response.json({ reply: reply || fallbackReply(latest) });
    } catch (error) {
      console.error("SoulBot Groq call failed:", error);
      return Response.json({ reply: fallbackReply(latest), fallback: true });
    }
  } catch {
    return Response.json(
      { reply: "My bad, glitched for a sec 😅 Ask me about the menu, RedRoom, or what's good tonight." },
      { status: 400 }
    );
  }
}
