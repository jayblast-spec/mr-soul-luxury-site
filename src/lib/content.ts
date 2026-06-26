import type { LucideIcon } from "lucide-react";
import { CalendarDays, Disc3, Flame, MapPin, Martini, Music2, Sparkles, UtensilsCrossed } from "lucide-react";

export const brand = {
  name: "Mr Soul Bistro & Cafe",
  redroom: "RedRoom By Mr Soul",
  tagline: "Where Atlanta Meets Lagos",
  address: "4186 Buford Hwy NE Ste C, Atlanta, GA 30345",
  phone: "+1 (404) 555-0199",
  email: "info@mrsoul.my",
  hours: "Mon, Wed-Sat 4:30 PM - 2:30 AM",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/redroom", label: "RedRoom" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "15+", label: "Years of Flavor" },
  { value: "500+", label: "Dishes Served Daily" },
  { value: "4.8", label: "Average Rating" },
];

export const dishes = [
  {
    name: "Jollof Rice",
    image: "https://picsum.photos/seed/jollof/900/700",
    note: "Smoky party rice, pepper heat, Lagos energy.",
  },
  {
    name: "Peppered Goat Stew",
    image: "https://picsum.photos/seed/goat-stew/900/700",
    note: "Slow simmered, unapologetically bold.",
  },
  {
    name: "Oxtails",
    image: "https://picsum.photos/seed/oxtails/900/700",
    note: "Rich, glossy, fall-off-the-bone comfort.",
  },
  {
    name: "Grilled Fish",
    image: "https://picsum.photos/seed/grilled-fish/900/700",
    note: "Charred, spiced, finished for the table.",
  },
  {
    name: "Small Plates",
    image: "https://picsum.photos/seed/small-chops/900/700",
    note: "Suya, puff puff, and pre-party bites.",
  },
];

export const services: Array<{ title: string; description: string; icon: LucideIcon; features: string[] }> = [
  {
    title: "Dine-In Experience",
    description: "Full restaurant service with Nigerian mains, dinner plates, small chops, and late-night flavor.",
    icon: UtensilsCrossed,
    features: ["Dinner service", brand.hours, "Authentic Nigerian mains"],
  },
  {
    title: "RedRoom VIP Lounge",
    description: "Atlanta's ultimate celebrity playground with Afrobeats, Caribbean tunes, bottle service, and hookah.",
    icon: Disc3,
    features: ["360 degree DJ booth", "VIP bottle service", "Private tables"],
  },
  {
    title: "SOL Lounge",
    description: "Private event space for corporate gatherings, birthdays, launch parties, and celebrations.",
    icon: Sparkles,
    features: ["Private events", "Catering available", "Celebration packages"],
  },
  {
    title: "Takeout & Delivery",
    description: "Order directly, by phone, or through delivery partners when the craving hits.",
    icon: Flame,
    features: ["Direct ordering", "Uber Eats", "Postmates"],
  },
];

export const menuItems = [
  { name: "Suya", category: "Appetizers", price: 18, spicy: true, popular: true, image: "https://picsum.photos/seed/suya/800/700", description: "Chargrilled beef skewers dusted with yaji spice and served hot." },
  { name: "Puff Puff", category: "Appetizers", price: 10, spicy: false, popular: false, image: "https://picsum.photos/seed/puffpuff/800/700", description: "Golden Nigerian sweet dough bites, soft inside with a crisp finish." },
  { name: "Jollof Rice", category: "Mains", price: 24, spicy: true, popular: true, image: "https://picsum.photos/seed/jollof-main/800/700", description: "Smoky tomato rice with layered pepper, herbs, and party-table depth." },
  { name: "Peppered Goat Stew", category: "Mains", price: 28, spicy: true, popular: true, image: "https://picsum.photos/seed/peppered-goat/800/700", description: "Tender goat simmered in a bold pepper sauce with deep savory heat." },
  { name: "Oxtails", category: "Mains", price: 32, spicy: false, popular: true, image: "https://picsum.photos/seed/oxtail-main/800/700", description: "Slow-cooked oxtails in a rich sauce made for rice and plantains." },
  { name: "Egusi Soup", category: "Mains", price: 26, spicy: true, popular: false, image: "https://picsum.photos/seed/egusi/800/700", description: "Melon seed stew with leafy greens, palm oil richness, and heritage flavor." },
  { name: "Fried Plantains", category: "Sides", price: 8, spicy: false, popular: true, image: "https://picsum.photos/seed/plantains/800/700", description: "Sweet golden plantains with caramel edges." },
  { name: "Lagos Royale", category: "Drinks", price: 16, spicy: false, popular: true, image: "https://picsum.photos/seed/cocktail-red/800/700", description: "A red citrus cocktail built for dinner, photos, and the first toast." },
  { name: "Champagne Parade", category: "RedRoom Bottle Service", price: 350, spicy: false, popular: true, image: "https://picsum.photos/seed/champagne/800/700", description: "Premium champagne service with RedRoom presentation." },
  { name: "Vodka Table Set", category: "RedRoom Bottle Service", price: 275, spicy: false, popular: false, image: "https://picsum.photos/seed/vodka/800/700", description: "Vodka bottle service for VIP tables and private lounge energy." },
];

export const testimonials = [
  "Best Nigerian vibe in Atlanta - closest you can get to Lagos.",
  "The jollof is unmatched, and the atmosphere is incredible.",
  "Amazing food and the DJ had the whole room moving. RedRoom is the spot.",
  "Great vibes, authentic food, and amazing staff. 10/10.",
];

export const faqs = [
  { q: "What are your hours?", a: "Monday and Wednesday-Saturday from 4:30 PM to 2:30 AM. Closed Tuesday and Sunday." },
  { q: "Is RedRoom 18+ or 21+?", a: "RedRoom is strictly 21+ after 9 PM." },
  { q: "Do I need a reservation?", a: "Reservations are highly recommended for dining and essential for RedRoom VIP tables." },
  { q: "Is there parking?", a: "Yes, we have a free on-site parking lot." },
  { q: "Do you offer takeout and delivery?", a: "Absolutely. Order via Uber Eats, Postmates, or call us directly." },
  { q: "Can I book RedRoom for a private event?", a: "Yes. Contact our events team through the Contact page." },
  { q: "What type of music plays at RedRoom?", a: "Afrobeats, Caribbean, Amapiano, and Hip-Hop spun live on our 360 degree DJ booth." },
];

export const redroomFeatures = [
  { title: "360 Degree DJ Booth", icon: Music2, text: "A rotating centerpiece that makes the room feel alive from every table." },
  { title: "Bottle Service", icon: Martini, text: "Champagne, vodka, whiskey, and VIP presentation for premium nights." },
  { title: "Hookah Lounge", icon: Flame, text: "Late-night lounge pacing with private table service and RedRoom lighting." },
  { title: "Afrobeats Nights", icon: CalendarDays, text: "Afrobeats, Amapiano, Caribbean, and Hip-Hop until the room lifts." },
  { title: "Atlanta Location", icon: MapPin, text: brand.address },
];
