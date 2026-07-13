"use client";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Roast",
    origin: "Ethiopia Yirgacheffe",
    price: "$26.00",
    notes: "Dark Chocolate, Blueberry, Jasmine",
  },
  { id: 2, name: "Monarch Reserve", origin: "Geisha Panama", price: "$42.00", notes: "Bergamot, Peach Blossom, Honey" },
  {
    id: 3,
    name: "Velvet Espresso",
    origin: "Sumatra Mandheling",
    price: "$24.00",
    notes: "Cedar, Earthy Cocoa, Molasses",
  },
];

export default function Products() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] mb-3 block font-semibold">
          Curated Collections
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#f5f2eb]">The Single-Origin Menu</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col justify-between p-8 rounded-2xl bg-[#171310]/60 backdrop-blur-md border border-[#2c221e] hover:border-[#c5a880]/40 transition-all duration-300"
          >
            <div>
              <span className="text-xs text-[#a39682] font-mono tracking-wider">{prod.origin}</span>
              <h3 className="font-serif text-2xl font-medium mt-1 mb-3 text-[#f5f2eb]">{prod.name}</h3>
              <p className="text-xs text-[#c5a880] tracking-wide uppercase bg-[#241c19] inline-block px-3 py-1 rounded-full mb-6">
                {prod.notes}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#2c221e] pt-4 mt-4">
              <span className="font-serif text-xl font-semibold text-[#f5f2eb]">{prod.price}</span>
              <button className="flex items-center gap-2 text-xs bg-[#c5a880] hover:bg-[#b0936b] text-[#110e0c] font-bold px-4 py-2.5 rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-[#c5a880]/10">
                <ShoppingBag size={14} /> Add To Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
