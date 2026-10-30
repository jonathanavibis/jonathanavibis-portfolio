import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { SITE_URL } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jonathan Avi - Portfolio",
  description:
    "This Is The Page Of Jonathan Avi Biswas. Full-Stack Web Developer portfolio.",
  openGraph: {
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative bg-[#0a0a0a] text-white min-h-screen">
        {/* Global Fixed Fullscreen Background Image */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <Image
            src="/bg2.jpg"
            alt="Full Screen Background"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Global Ambient Dark Vignette & Neon Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0a0a0a]/95" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00ffaa]/8 rounded-full blur-[200px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
