import type { Metadata } from "next";
import { Fraunces, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-text",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MoNor — Disciplined research. Systematic models. Automated execution.",
  description:
    "MoNor is a research-and-automation firm. We research a problem, build a systematic model around it, and automates the execution — We partner with our clients to help them create this system.",
  keywords: [
    "quantitative research",
    "algorithmic models",
    "research automation",
    "systematic execution",
    "model risk",
    "data analytics",
  ],
  openGraph: {
    title: "MoNor — Disciplined research. Systematic models. Automated execution.",
    description:
      "MoNor is a research-and-automation firm. We research a problem, build a systematic model around it, and automates the execution — We partner with our clients to help them create this system.",
    type: "website",
  },
  icons: {
    icon: "/monor_icon_navy.svg",
    shortcut: "/monor_icon_navy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
