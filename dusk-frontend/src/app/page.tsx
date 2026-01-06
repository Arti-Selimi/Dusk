import { Navbar } from "@/components/Navbar/Navbar"
import styles from "./page.module.css"
import { PhoneMockup } from "@/components/PhoneMockup/PhoneMockup"
import { MainButton } from "@/components/MainButton/MainButton"
import Link from "next/link";
import { HomeInfo } from "@/components/HomeInfoSection/HomeInfo";
import { Packages } from "@/components/Packages/Packages"


export default function Home() {
  return (
    <div className="container">
      <Navbar active="home" />
      <div className={styles.hero}>
        <div className={styles.textbox}>
          <h1>Smart Banking For Freelancers</h1>
          <p>
            Track every transaction in one place,
            <br />
            spot trends before they grow,
            <br />
            and make confident financial decisions.
          </p>
          <Link href={"/Register"} >
            <MainButton type="scrollTo" content="Register Now" htmlType="button" fontSize="1.5em" />

          </Link>
        </div>
        <div className={styles.phoneContainer} >
          <PhoneMockup />
        </div>
      </div>
      <HomeInfo>
        <Packages />
      </HomeInfo>
   </div>
  );
}

