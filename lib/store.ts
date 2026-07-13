import { create } from 'zustand';

interface AppState {
  activeSection: number;
  setActiveSection: (section: number) => void;
  ambientPlaying: boolean;
  setAmbientPlaying: (playing: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: 0,
  setActiveSection: (section) => set({ activeSection: section }),
  ambientPlaying: false,
  setAmbientPlaying: (playing) => set({ ambientPlaying: playing }),
}));