"use client";

import Logo from "@/assets/Logo.svg";
import { MainButton } from "../MainButton/MainButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useAuth } from "@/lib/zustand/provider";
import { CreateSelect } from "../CreateSelect/CreateSelect";
import { UserDropdown } from "../User/UserDropdown";

export const Navbar = ({ active, row }: { active: string; row: boolean }) => {
  const router = useRouter();
  return (
    <div className={row ? styles.horizontalNav : styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <Link className={active === "home" ? "active" : ""} href={"/"}>
          {" "}
          Home{" "}
        </Link>
        <Link className={active === "about" ? "active" : ""} href={"/About"}>
          {" "}
          About{" "}
        </Link>
        <Link
          className={active === "contact" ? "active" : ""}
          href={"/Contact"}
        >
          {" "}
          Contact{" "}
        </Link>
        {useAuth.getState().isLoggedIn && (
          <Link
            className={active === "memberships" ? "active" : ""}
            href={"/Memberships"}
          >
            {" "}
            Memberships{" "}
          </Link>
        )}
        {useAuth.getState().isLoggedIn && (
          <CreateSelect row={row} active={active} />
        )}
      </div>
      {row ? (
        ""
      ) : useAuth.getState().isLoggedIn ? (
        <UserDropdown />
      ) : (
        <MainButton
          type="main"
          onClick={() => router.push("/Register")}
          content="Sign up"
          htmlType="button"
        />
      )}
    </div>
  );
};
