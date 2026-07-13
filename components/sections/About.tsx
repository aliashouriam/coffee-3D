"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-6 md:px-24 z-10 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto">
        {/* Left column empty or reserved to balance layout view tracking of 3D object positioning */}
        <div className="hidden md:block" />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center bg-[#171310]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#2c221e]"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-4 block font-semibold">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-[#f5f2eb] leading-tight">
            Obsessive Roasting. Impeccable Origin.
          </h2>
          <p className="text-[#a39682] text-base md:text-lg leading-relaxed font-light mb-6">
            At Noir, we view coffee extraction as an uncompromised fine art. Every batch is ethically sourced from small
            micro-lot farms perched along micro-climates above 1,800 meters.
          </p>
          <p className="text-[#a39682] text-base md:text-lg leading-relaxed font-light">
            Roasted dynamically in small shifts to maximize dark chocolate clarity, rich body density, and natural
            structural sweetness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
