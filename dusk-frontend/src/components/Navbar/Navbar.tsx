"use client"

import Logo from "@/assets/Logo.svg"
import { MainButton } from "../MainButton/MainButton"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from "./navbar.module.css"
import { useAuth } from "@/lib/zustand/provider"
import { User } from "lucide-react"

export const Navbar = ({ active }: { active: string }) => {
  const router = useRouter()
  console.log(useAuth.getState().isLoggedIn)
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <Link className={active === "home" ? "active" : ""} href={"/"}> Home </Link>
        <Link className={active === "about" ? "active" : ""} href={"/About"}> About </Link>
        <Link className={active === "contact" ? "active" : ""} href={"/Contact"}> Contact </Link>
      </div>
      {useAuth.getState().isLoggedIn ? <User style={{color: "var(--accent)"}}/> : <MainButton type="main" onClick={() => router.push("/Register")} content="Sign up" htmlType="button" />}
    </div>
  )
}
