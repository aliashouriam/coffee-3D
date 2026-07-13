"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useStore } from "@/lib/store";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";

// Dynamically import the Canvas container to keep bundle sizes minimal and prevent hydration mismatches
const CoffeeScene = dynamic(() => import("@/components/3d/CoffeeScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#110e0c] z-0" />,
});

export default function Home() {
  const setActiveSection = useStore((state) => state.setActiveSection);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      // Calculate current prominent section index math
      const currentSection = Math.round(scrollY / height);
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <main
      ref={containerRef}
      className="relative bg-[#110e0c] text-[#f5f2eb] min-h-screen selection:bg-[#c5a880]/30 selection:text-[#f5f2eb]"
    >
      {/* 3D Immersive Dynamic Background Viewport */}
      <CoffeeScene />

      {/* Floating UX Elements */}
      <div className="fixed top-6 left-6 z-50">
        <span className="font-serif text-xl font-bold tracking-wider text-[#f5f2eb]">N°</span>
      </div>

      {/* Interactive Sections Staging */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Products />
      </div>
    </main>
  );
}
