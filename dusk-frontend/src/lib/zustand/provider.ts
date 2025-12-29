import { create } from 'zustand'

interface AuthState {
  token: string | null
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  isLoggedIn: false,
  login: (token) => set({ token, isLoggedIn: true }),
  logout: () => set({ token: null, isLoggedIn: false })
}))
