import Image from "next/image"
import { CardRoulette } from "./CardRoulette"
import styles from "./form-display.module.css"

export const FormDisplay = () => {
  return (
    <div className={styles.container}>
      <CardRoulette />
      <div className={styles.image}>
        <Image
          src="/shared/formPlaceholder.svg"
          alt="placeholder"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.textbox}>
        <h1>
          CREATE YOUR <br /> ACCOUNT
        </h1>
        <p>
          Start managing your money with clarity and confidence.
        </p>
      </div>
    </div>
  )
}
