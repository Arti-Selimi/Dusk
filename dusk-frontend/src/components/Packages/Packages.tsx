import { Package } from "./Package"
import styles from "./package.module.css"

const packages = [
  {
    title: "Free",
    price: "0"
  },
  {
    title: "Basic",
    price: "8"
  }
]
export const Packages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
       <h1>
       An exceptional service, at the
       <br />
       best price
       </h1>
       <p>
       Start with our free plan and switch to premium as you grow
       </p>
      </div>
    <div className={styles.packagesContainer}>
      
      {packages.map(packageElement => (
        <Package key={packageElement.title} title={packageElement.title} price={packageElement.price} />
      ))}
    </div>
    </div>
  )
}
