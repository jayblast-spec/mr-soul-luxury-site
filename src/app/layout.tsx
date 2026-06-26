import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AIBubble } from "@/components/AIBubble";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";
import { NavigationControls } from "@/components/NavigationControls";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrsoulatlanta.com"),
  title: {
    default: "Mr Soul Bistro & Cafe | Where Atlanta Meets Lagos",
    template: "%s | Mr Soul Bistro & RedRoom",
  },
  description:
    "Authentic Nigerian fine dining, RedRoom VIP nightlife, hookah, bottle service, and Afrobeats in Atlanta.",
  openGraph: {
    title: "Mr Soul Bistro & Cafe",
    description:
      "Where Atlanta Meets Lagos — authentic Nigerian cuisine and Atlanta's RedRoom VIP experience.",
    images: ["/images/hero-restaurant.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#primary-navigation"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
        >
          Skip to primary navigation
        </a>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black"
        >
          Skip to content
        </a>
        <LenisProvider />
        <CursorGlow />
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <NavigationControls />
        <AIBubble />
      </body>
    </html>
  );
}
