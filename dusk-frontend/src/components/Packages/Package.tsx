import Link from "next/link"
import { MainButton } from "../MainButton/MainButton"
import styles from "./package.module.css"
import { useAuth } from "@/lib/zustand/provider"
import ExtraCard from "@/assets/ExtraCard.svg"
import { PackageProps } from "@/types/types"
import CheckMark from "@/assets/CheckMark.svg"
import CheckMarkHollow from "@/assets/CheckMarkHollow.svg"
import classNames from "classnames"

const points = ["6 free local transfers", "Free ATM withdrawals up to $200 per month", "Prepaid debit cards", "Priority 24/7 support"]

export const Package = ({ title, price }: PackageProps) => {
  return (
    <div className={styles.package}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.price}>
        ${price}/m
      </div>
      <Link href={useAuth.getState().isLoggedIn ? "/Memberships" : "/Login"}><MainButton type="main" htmlType="button" content="Try Out" /></Link>
      <ExtraCard />
      <div className={styles.points}>
        {points.map((point, index) => (
          <div key={point} className={styles.point}>
            {title === "Free" && index > 1 ? <CheckMarkHollow /> : <CheckMark />}
            <p className={classNames(styles.pointText, title === "Free" && index > 1 && styles.hollowText)}>{point}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
