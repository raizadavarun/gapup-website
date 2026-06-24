import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    // TODO: confirm which icon variant to use once domain/branding is finalised
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
