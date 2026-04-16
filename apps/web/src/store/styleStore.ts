import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface StyleState {
  text: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  fontFamily: string;
  
  setText: (text: string) => void;
  setColor: (color: string) => void;
  setFontSize: (fontSize: string) => void;
  setFontWeight: (fontWeight: string) => void;
  setTextAlign: (textAlign: string) => void;
  setFontFamily: (fontFamily: string) => void;
  resetStyles: () => void;
}

const defaultState = {
  text: 'Hello World!',
  color: '#0f172a',
  fontSize: 'text-6xl',
  fontWeight: 'font-extrabold',
  textAlign: 'text-center',
  fontFamily: 'font-sans',
};

export const useStyleStore = create<StyleState>()(
  persist(
    (set) => ({
      ...defaultState,
      setText: (text: string) => set({ text }),
      setColor: (color: string) => set({ color }),
      setFontSize: (fontSize: string) => set({ fontSize }),
      setFontWeight: (fontWeight: string) => set({ fontWeight }),
      setTextAlign: (textAlign: string) => set({ textAlign }),
      setFontFamily: (fontFamily: string) => set({ fontFamily }),
      resetStyles: () => set(defaultState),
    }),
    {
      name: 'hello-world-style-storage',
    }
  )
);