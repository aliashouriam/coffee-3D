"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between items-center px-6 py-12 z-10 text-center select-none">
      <div /> {/* Spacer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight bg-gradient-to-b from-[#f5f2eb] to-[#a39682] bg-clip-text text-transparent">
          NOIR COFFEE
        </h1>
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mt-6 text-[#c5a880] font-medium">
          Crafted beans. Perfect moments.
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 cursor-pointer text-[#a39682] hover:text-[#f5f2eb] transition-colors"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-light">Explore Heritage</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
