import "./globals.css";
import type { Metadata } from "next";
import FloatingCTA from "@/components/FloatingCTA";
import AmbientSound from "@/components/AmbientSound";

export const metadata: Metadata = {
  title: "Noir Coffee | Immersive Luxury Single-Origin Experience",
  description:
    "Premium single-origin coffee experience. Meticulously roasted and served through interactive high-fidelity 3D craft engineering layouts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AmbientSound />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
