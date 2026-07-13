"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";

export default function FloatingCTA() {
  const activeSection = useStore((state) => state.activeSection);

  return (
    <AnimatePresence>
      {activeSection > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#c5a880] text-[#110e0c] font-bold px-6 py-3.5 rounded-full shadow-2xl shadow-black/50 tracking-wider text-sm uppercase transition-all"
        >
          <ShoppingBag size={16} />
          Buy Coffee
        </motion.button>
      )}
    </AnimatePresence>
  );
}
