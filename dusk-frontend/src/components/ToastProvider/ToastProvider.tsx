"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Notification } from "../Notification/Notification"

interface Toast {
  id: string
  type: "success" | "error" | "warning"
  message: string
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, "id">) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) throw new Error("useToast must be used within ToastProvider")
  return context
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = crypto.randomUUID()
    setToasts(prev => [...prev, { ...toast, id }])

    setTimeout(() => removeToast(id), 5500)
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  console.log("getting called")
  console.log(toasts)
  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div>
        {toasts.map(t => (
          <Notification
            key={t.id}
            type={t.type}
            message={t.message}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
