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

Services: ${services.map((service) => `${service.title}: ${service.description}`).join(" | ")}
RedRoom: ${redroomFeatures.map((feature) => `${feature.title}: ${feature.text}`).join(" | ")}
RedRoom policy: Strictly 21+ after 9 PM. Reservations are highly recommended for dining and essential for VIP tables.
Parking: Free on-site parking lot.
Music: Afrobeats, Caribbean, Amapiano, Hip-Hop, DJs, and RedRoom entertainment nights.

Menu:
${Object.entries(menuByCategory)
  .map(([category, items]) => `${category}: ${items.join("; ")}`)
  .join("\n")}

FAQs:
${faqs.map((item) => `${item.q} ${item.a}`).join("\n")}
`;

function fallbackReply(input: string) {
  const text = input.toLowerCase();
  if (text.includes("hour") || text.includes("open") || text.includes("close")) {
    return `We are open ${brand.hours}, and closed Tuesday & Sunday. Late-night Mr Soul run? That is the move.`;
  }
  if (text.includes("address") || text.includes("location") || text.includes("where")) {
    return `Pull up to ${brand.address}. Free on-site parking is available, so the arrival is easy.`;
  }
  if (text.includes("redroom") || text.includes("vip") || text.includes("bottle")) {
    return "RedRoom is the VIP lounge energy: Afrobeats, bottle service, hookah, and 21+ after 9 PM. Book ahead for the good tables.";
  }
  if (text.includes("hookah")) {
    return "Hookah flavors include Blueberry, Peach, Blue Mist, Love 66, Mighty Freeze, Mint, Orange Mint, Water Melon Mint, and Special Soul Mix.";
  }
  if (text.includes("jollof") || text.includes("egusi") || text.includes("suya") || text.includes("menu") || text.includes("food")) {
    return "Menu highlights: Jollof Rice, Egusi Soup, Efo Riro, Suya, Asun, Pepper Soup, Red Snapper, plantain, and late-night plates.";
  }
  if (text.includes("reserve") || text.includes("book") || text.includes("table")) {
    return `For reservations, call ${brand.phone} or ${brand.mobile}. VIP tables should be booked early.`;
  }
  if (text.includes("cater") || text.includes("event") || text.includes("party")) {
    return "Yes, Mr Soul supports catering, private events, birthdays, celebrations, and RedRoom-style special nights.";
  }
  return `I can help with menu, hours, RedRoom, VIP tables, events, or directions. For anything urgent, call ${brand.phone}.`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[]; message?: string };
    const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
    const latest = body.message ?? messages.at(-1)?.text ?? "";

    if (!latest.trim()) {
      return Response.json({ reply: "Ask me about menu, hours, RedRoom, VIP tables, or how to pull up." });
    }

    try {
      const conversation = messages.map((message) => `${message.role === "SoulBot" ? "SoulBot" : "Guest"}: ${message.text ?? ""}`).join("\n");
      const result = await generateText({
        model: process.env.SOULBOT_MODEL ?? "openai/gpt-5.4",
        system: `You are SoulBot, the friendly Gen Z concierge for Mr Soul Bistro & Cafe and RedRoom.
Use only the knowledge below. Be warm, specific, and helpful. Keep replies under 65 words.
Use light Gen Z language naturally: "bet", "the vibe", "pull up", "no stress", but do not overdo slang.
Never invent prices, policies, or availability. If unsure, tell guests to call the restaurant.
Always guide booking/reservation interest to the phone numbers or Contact page.

${knowledge}`,
        prompt: `${conversation}\nGuest: ${latest}\nSoulBot:`,
        maxOutputTokens: 160,
      });

      return Response.json({ reply: result.text.trim() || fallbackReply(latest) });
    } catch {
      return Response.json({ reply: fallbackReply(latest), fallback: true });
    }
  } catch {
    return Response.json({ reply: "My bad, the chat glitched for a second. Ask me again about menu, hours, RedRoom, or booking." }, { status: 400 });
  }
}
