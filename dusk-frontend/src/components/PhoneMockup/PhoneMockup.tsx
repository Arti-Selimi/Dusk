import { CardRoulette } from "../FormDisplay/CardRoulette"
import styles from "./phone-mockup.module.css"

const stats = ["81%", "42%", "24% ", "12%"]
export const PhoneMockup = () => {
  return (
    <div className={styles.phoneMockup}>
      <h1>Credit Cards</h1>
      <CardRoulette />
      <h1>Overview</h1>
      <div className={styles.statsContainer}>{stats.map(stat => (
        <div
          key={stat}
          className={styles.statCard}
        >
          <h3>{stat}</h3>
        </div>
      ))}
      </div>
      <div className={styles.mockedDock} />
    </div>
  )
}
