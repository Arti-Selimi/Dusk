import { MainButton } from "@/components/MainButton/MainButton";
import { Navbar } from "@/components/Navbar/Navbar"
import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";

const About = () => {
  return (
    <div className="container">
      <Navbar active="about" row={false} />
      <div className={styles.hero}>,
        <div className={styles.textBox}>
          <div className={styles.info}>
            <h1>Managing your money <br /> should be simple</h1>
            <p>
              We built this app to give you clarity, control and confidence
            </p>
          </div>
          <div className={styles.info}>
            <p>Our goal is to make financial tracking effortless, so you always know where your money goes and what decisions will move you forward.</p>
            <Link href={"/Register"}><MainButton content="Register Now" type="scrollTo" htmlType="button" /></Link>
          </div>
          <div>
            <MainButton content="Learn More" type="scrollTo" htmlType="button" />
          </div>
        </div>
        <div className={styles.placeHolderContainer}>
          <Image
            src={"/shared/AboutPlaceholder.svg"}
            alt="about placeholder"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About;
