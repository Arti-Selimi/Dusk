
import { create } from "zustand"
import { persist, PersistStorage } from "zustand/middleware"

interface AuthState {
  token: string | null
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const clientStorage: PersistStorage<AuthState> = {
  getItem: (name) => {
    if (typeof window === "undefined") return null

    const item = localStorage.getItem(name)
    return item ? JSON.parse(item) : null
  },
  setItem: (name, value) => {
    if (typeof window === "undefined") return
    localStorage.setItem(name, JSON.stringify(value))
  },
  removeItem: (name) => {
    if (typeof window === "undefined") return
    localStorage.removeItem(name)
  },
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isLoggedIn: false,
      login: (token) => set({ token, isLoggedIn: true }),
      logout: () => set({ token: null, isLoggedIn: false }),
    }),
    {
      name: "auth-storage",
      storage: clientStorage,
    }
  )
)

