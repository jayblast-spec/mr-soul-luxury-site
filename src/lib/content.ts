import type { LucideIcon } from "lucide-react";
import { CalendarDays, Disc3, Flame, MapPin, Martini, Music2, Sparkles, UtensilsCrossed } from "lucide-react";

export const brand = {
  name: "Mr Soul Bistro & Cafe",
  redroom: "RedRoom By Mr Soul",
  tagline: "Where Atlanta Meets Lagos",
  address: "4186 Buford Highway NE Suite C & D, Atlanta, GA 30345, United States",
  phone: "+1 404-458-5714",
  mobile: "+1-469-494-4177",
  email: "hello@mrsoul.my",
  secondaryEmail: "samomidele@mrsoul.my",
  hours: "Monday - Saturday: 4:30 PM - 2:30 AM",
  closed: "Tuesday & Sunday: Closed",
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
  { name: "Special Spicy Noodles", category: "Entrees", price: 20, spicy: true, popular: true, image: "https://picsum.photos/seed/spicy-noodles/800/700", description: "A bold, spicy entree built for late-night cravings." },
  { name: "Yam, Egg & Plantain", category: "Entrees", price: 25, spicy: false, popular: true, image: "https://picsum.photos/seed/yam-egg-plantain/800/700", description: "A hearty Nigerian plate with yam, egg, and sweet fried plantain." },
  { name: "Yam & Egg", category: "Entrees", price: 20, spicy: false, popular: false, image: "https://picsum.photos/seed/yam-egg/800/700", description: "Comforting yam and egg, prepared with care and flavor." },
  { name: "Efo Riro Vegetable Soup", category: "Soups", price: 7, spicy: true, popular: true, image: "https://picsum.photos/seed/efo-riro/800/700", description: "Classic vegetable soup rich with Nigerian flavor." },
  { name: "Egusi Soup", category: "Soups", price: 7, spicy: true, popular: true, image: "https://picsum.photos/seed/egusi/800/700", description: "Melon seed soup with heritage depth and soulful comfort." },
  { name: "Pepper Soup", category: "Soups", price: 25, spicy: true, popular: true, image: "https://picsum.photos/seed/pepper-soup/800/700", description: "Hot, aromatic pepper soup with a warming kick." },
  { name: "Suya", category: "Meats", price: 14, spicy: true, popular: true, image: "https://picsum.photos/seed/suya/800/700", description: "Chargrilled beef skewers dusted with yaji spice and served hot." },
  { name: "Turkey", category: "Meats", price: 17, spicy: false, popular: false, image: "https://picsum.photos/seed/turkey/800/700", description: "Turkey served fried, grilled, or stewed." },
  { name: "Goat Meat", category: "Meats", price: 14, spicy: true, popular: true, image: "https://picsum.photos/seed/goat-meat/800/700", description: "Goat meat served fried or stewed." },
  { name: "Grilled Goat Meat (Asun)", category: "Meats", price: 20, spicy: true, popular: true, image: "https://picsum.photos/seed/asun/800/700", description: "Grilled goat meat, also known as Asun, with smoky pepper flavor." },
  { name: "Assorted Meat", category: "Meats", price: 14, spicy: true, popular: false, image: "https://picsum.photos/seed/assorted-meat/800/700", description: "Includes tripe, beef, and cow feet." },
  { name: "Chicken Wings", category: "Meats", price: 12, spicy: false, popular: false, image: "https://picsum.photos/seed/chicken-wings/800/700", description: "Hot, BBQ, or lemon pepper wings." },
  { name: "Peppered Snail", category: "Meats", price: 20, spicy: true, popular: false, image: "https://picsum.photos/seed/peppered-snail/800/700", description: "Peppered snail with signature heat." },
  { name: "Spicy Ponmo", category: "Meats", price: 15, spicy: true, popular: false, image: "https://picsum.photos/seed/spicy-ponmo/800/700", description: "Spicy ponmo prepared with Nigerian seasoning." },
  { name: "Tilapia | Krocker | Whitning", category: "Sea Food", price: 17, spicy: false, popular: false, image: "https://picsum.photos/seed/fish/800/700", description: "Choose tilapia, krocker, or whitning." },
  { name: "Big Red Snapper", category: "Sea Food", price: 35, spicy: false, popular: true, image: "https://picsum.photos/seed/red-snapper/800/700", description: "Big red snapper prepared for a full-flavor seafood plate." },
  { name: "Extra Large Red Snapper", category: "Sea Food", price: 45, spicy: false, popular: true, image: "https://picsum.photos/seed/xl-red-snapper/800/700", description: "Extra large red snapper for serious seafood lovers." },
  { name: "Soul Shrimp", category: "Sea Food", price: 20, spicy: false, popular: true, image: "https://picsum.photos/seed/soul-shrimp/800/700", description: "Shrimp with Mr Soul flavor." },
  { name: "Jollof Rice", category: "Sides", price: 5, spicy: true, popular: true, image: "https://picsum.photos/seed/jollof-main/800/700", description: "Smoky tomato rice with layered pepper and party-table depth." },
  { name: "White Rice", category: "Sides", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/white-rice/800/700", description: "Classic white rice side." },
  { name: "French Fries", category: "Sides", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/fries/800/700", description: "Crisp fries for the table." },
  { name: "Fried Plantain (Dodo)", category: "Sides", price: 5, spicy: false, popular: true, image: "https://picsum.photos/seed/plantains/800/700", description: "Sweet fried plantain, also known as Dodo." },
  { name: "Pounded Yam", category: "Sides", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/pounded-yam/800/700", description: "Smooth pounded yam for soups and stews." },
  { name: "Pineapple Juice", category: "Drinks", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/pineapple-juice/800/700", description: "Fresh pineapple juice." },
  { name: "Coke", category: "Drinks", price: 3, spicy: false, popular: false, image: "https://picsum.photos/seed/coke/800/700", description: "Classic soda." },
  { name: "Redbull", category: "Drinks", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/redbull/800/700", description: "Energy drink for late nights." },
  { name: "Water", category: "Drinks", price: 2, spicy: false, popular: false, image: "https://picsum.photos/seed/water/800/700", description: "Bottled water." },
  { name: "Jedi Jedi Herbal Drink", category: "Drinks", price: 10, spicy: false, popular: false, image: "https://picsum.photos/seed/herbal-drink/800/700", description: "Herbal drink option." },
  { name: "Blueberry Hookah", category: "Hookah", price: 40, spicy: false, popular: true, image: "https://picsum.photos/seed/blueberry-hookah/800/700", description: "Blueberry hookah flavor, open to 2 AM. $45 from 2 AM to close." },
  { name: "Peach Hookah", category: "Hookah", price: 40, spicy: false, popular: false, image: "https://picsum.photos/seed/peach-hookah/800/700", description: "Peach hookah flavor, open to 2 AM. $45 from 2 AM to close." },
  { name: "Blue Mist Hookah", category: "Hookah", price: 40, spicy: false, popular: false, image: "https://picsum.photos/seed/blue-mist-hookah/800/700", description: "Blue Mist hookah flavor, open to 2 AM. $45 from 2 AM to close." },
  { name: "Love 66 Hookah", category: "Hookah", price: 40, spicy: false, popular: true, image: "https://picsum.photos/seed/love-66-hookah/800/700", description: "Love 66 hookah flavor, open to 2 AM. $45 from 2 AM to close." },
  { name: "Special Soul Mix Hookah", category: "Hookah", price: 40, spicy: false, popular: true, image: "https://picsum.photos/seed/soul-mix-hookah/800/700", description: "Special Soul Mix hookah, open to 2 AM. $45 from 2 AM to close." },
  { name: "Disposable Hose", category: "Hookah", price: 5, spicy: false, popular: false, image: "https://picsum.photos/seed/hookah-hose/800/700", description: "Optional disposable hose." },
];

export const testimonials = [
  "Best Nigerian vibe in Atlanta - closest you can get to Lagos.",
  "The jollof is unmatched, and the atmosphere is incredible.",
  "Amazing food and the DJ had the whole room moving. RedRoom is the spot.",
  "Great vibes, authentic food, and amazing staff. 10/10.",
];

export const faqs = [
  { q: "What type of cuisine does Mr Soul Bistro & Cafe offer?", a: "We offer authentic Nigerian and African cuisine with rich stews, grilled meats, seafood, sides, drinks, hookah, and RedRoom VIP nightlife." },
  { q: "Do you offer vegetarian or vegan options?", a: "Yes. Ask our team about vegetable soups, rice, plantain, yam, and other options that can fit your preferences." },
  { q: "How can I make a reservation at Mr Soul Bistro & Cafe?", a: "Use the Contact page, call us directly, or ask SoulBot to point you to booking." },
  { q: "Do you provide catering services for events?", a: "Yes. We offer catering and private event support for celebrations, gatherings, corporate events, and special occasions." },
  { q: "What sets Mr Soul Bistro & Cafe apart from other restaurants?", a: "Authentic Nigerian flavors, warm hospitality, Afrobeats energy, RedRoom nightlife, and a cultural atmosphere built around community." },
  { q: "Is there a dress code at Mr Soul Bistro & Cafe?", a: "Smart casual is a good standard, especially for RedRoom nights and VIP reservations." },
  { q: "Are there options for private events or special celebrations?", a: "Yes. We host birthdays, launch parties, private dinners, RedRoom buyouts, and special celebrations." },
  { q: "What safety measures are in place at Mr Soul Bistro & Cafe?", a: "Our team focuses on clean service, guest comfort, responsible nightlife operations, and a welcoming environment." },
  { q: "Can I order food for takeout or delivery?", a: "Yes. Takeout and delivery are available so you can enjoy Mr Soul from home." },
  { q: "How can I stay updated on special events and promotions?", a: "Follow our social channels and check the site for RedRoom nights, events, and updates." },
  { q: "Do you host live music or entertainment events?", a: "Yes. Expect Afrobeats, Caribbean, Amapiano, Hip-Hop, DJs, and RedRoom entertainment nights." },
  { q: "What payment methods do you accept?", a: "Contact the restaurant directly for the latest accepted payment methods." },
  { q: "If my question isn't answered here, how can I contact you?", a: "Call +1 404-458-5714, mobile +1-469-494-4177, or email hello@mrsoul.my." },
  { q: "What are your hours?", a: "Monday-Saturday from 4:30 PM to 2:30 AM. Closed Tuesday and Sunday." },
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
