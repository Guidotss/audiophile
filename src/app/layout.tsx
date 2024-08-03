import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Phile",
  description: "Bringing you the best audio gear",
  authors: [
    {
      name: "Guido Olguin",
    }
  ], 
  keywords: ["audio", "gear", "headphones", "speakers", "earphones"],
  category: "audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
