"use client";
import { useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useStore } from "@/lib/store";

export default function AmbientSound() {
  const { ambientPlaying, setAmbientPlaying } = useStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayback = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/coffee/audio/coffee-shop.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (ambientPlaying) {
      audioRef.current.pause();
      setAmbientPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setAmbientPlaying(true);
    }
  };

  return (
    <button
      onClick={togglePlayback}
      className="fixed top-6 right-6 z-50 p-3 rounded-full border border-[#2c221e] bg-[#110e0c]/60 backdrop-blur-md text-[#a39682] hover:text-[#f5f2eb] transition-colors"
      aria-label="Toggle Atmosphere Sound"
    >
      {ambientPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
