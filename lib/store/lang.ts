// ─── Language Store ────────────────────────────────────────────────────────────
// Global language state using Zustand (lightweight, no Provider needed)
// Supports: "es" | "en" | "pt"

"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Locale = "es" | "en" | "pt"

interface LangStore {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLang = create<LangStore>()(
  persist(
    (set) => ({
      locale: "es",
      setLocale: (locale) => set({ locale }),
    }),
    { name: "obelisco-lang" }
  )
)
