import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { AIBubble } from "@/components/AIBubble";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrsoulatlanta.com"),
  title: {
    default: "Mr Soul Bistro & Cafe | Where Atlanta Meets Lagos",
    template: "%s | Mr Soul Bistro & RedRoom",
  },
  description: "Authentic Nigerian fine dining, RedRoom VIP nightlife, hookah, bottle service, and Afrobeats in Atlanta.",
  openGraph: {
    title: "Mr Soul Bistro & Cafe",
    description: "Where Atlanta Meets Lagos - authentic Nigerian cuisine and Atlanta's RedRoom VIP experience.",
    images: ["/images/mr-soul-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Soul Bistro & Cafe",
    description: "Authentic Nigerian cuisine, RedRoom VIP nightlife, hookah, bottle service, and Afrobeats in Atlanta.",
    images: ["/images/mr-soul-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <a href="#primary-navigation" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black">
          Skip to primary navigation
        </a>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-black">
          Skip to content
        </a>
        <LenisProvider />
        <CursorGlow />
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <AIBubble />
      </body>
    </html>
  );
}
