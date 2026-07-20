"use client";
import { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useStore } from "@/lib/store";

export default function AmbientSound() {
  const { ambientPlaying, setAmbientPlaying } = useStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/coffee-shop.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (ambientPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("خطا در پخش صدا:", error);
          setAmbientPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [ambientPlaying, setAmbientPlaying]);

  const togglePlayback = () => {
    setAmbientPlaying(!ambientPlaying);
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
