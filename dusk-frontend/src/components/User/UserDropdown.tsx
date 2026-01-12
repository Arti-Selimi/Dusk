"use client"

import { useState, useRef, useEffect } from "react"
import {
  User,
  Settings,
  CreditCard,
  Wallet,
  LogOut,
} from "lucide-react"
import styles from "./user-dropdown.module.css"
import Link from "next/link"
import { useMeQuery } from "@/generated/graphql"
import { Spinner } from "../Spinner/Spinner"

export const UserDropdown = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const { data, loading } = useMeQuery()

  if (loading) return <Spinner size={25} />

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <User size={20} />
      </button>

      {open && (
        <div className={styles.menu} role="menu">
          <Link
            href={`/user/${data?.me?.id ?? ''}/`}
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <User size={16} />
            Account details
          </Link>

          <Link
            href="/settings"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <Settings size={16} />
            Settings
          </Link>

          <Link
            href="/accounts"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <Wallet size={16} />
            Accounts
          </Link>

          <Link
            href="/cards"
            className={styles.menuItem}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <CreditCard size={16} />
            Cards
          </Link>

          <div className={styles.divider} />

          <Link
            href="/login"
            className={`${styles.menuItem} ${styles.danger}`}
            role="menuitem"
            onClick={() => localStorage.clear()}
          >
            <LogOut size={16} />
            Log out
          </Link>
        </div>
      )}
    </div>
  )
}

