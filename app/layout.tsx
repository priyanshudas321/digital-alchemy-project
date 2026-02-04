import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter for body, Outfit for headings
import { FluidBackground } from "@/components/ui/FluidBackground";
import { SmoothScrollRoot } from "@/components/ui/SmoothScrollRoot";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Alchemy | Engineering Digital Dominance",
  description: "A full-service digital agency blending data and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <CustomCursor />
        <SmoothScrollRoot />
        <FluidBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
