import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
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
    images: ["https://picsum.photos/1200/630?random=16"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <LenisProvider />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
