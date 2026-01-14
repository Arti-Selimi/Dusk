import { Price } from "@/components/price/Price";
import StaffList from "@/assets/StaffList.svg";
import ExtraCard from "@/assets/ExtraCard.svg";
import Chart from "@/assets/Chart.svg";
import ManAvatar from "@/assets/manAvatar.svg";
import WomanAvatar from "@/assets/womanAvatar.svg";
import { MessageBubble } from "@/components/MessageBubble/MessageBubble";
import styles from "@/app/page.module.css";
import { MainButton } from "@/components/MainButton/MainButton";
import Link from "next/link";
import { ReactNode } from "react";

export const HomeInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.info}>
      <div className={styles.cardDetails}>
        <div className={styles.leftText}>
          <div className={styles.sector}>
            <h1>
              One card for all
              <br />
              your payments
            </h1>
            <p>
              Get 2% back on everything you buy with the Dusk card.
              <br />
              Register today and enjoy every
              <br />
              aspect of your business
            </p>
          </div>
          <div className={styles.sector}>
            <ExtraCard />
          </div>
        </div>
        <div className={styles.rightText}>
          <div className={styles.sector}>
            <div className={styles.boxContainer}>
              <Price title="Balance" value="2,500" />
              <Price title="Last Transaction" value="250" />
            </div>
            <Chart />
          </div>
          <div className={styles.sector}>
            <div className={styles.textContainer}>
              <h1>
                Manage yourfinances
                <br />
                like a pro in no time
              </h1>
              <p>
                With Dusk book keeping, banking, andinvoices
                <br />
                are all in one place.
                <br />
                You will alwaysknow where you stand
              </p>
              <Link href={"/Register"}>
                <MainButton
                  type="scrollTo"
                  content="Register Now"
                  htmlType="button"
                  fontSize="1.5em"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.leftText}>
          <div className={styles.sector}>
            <h1>
              We support you in
              <br />
              four different languages
            </h1>
            <p>
              Our team is here to help you in four
              <br />
              languages - Hindi, English, Spanish
              <br />
              andFrench.
            </p>
            <StaffList />
          </div>
          <div className={styles.messagesSector}>
            <div className={styles.message}>
              <WomanAvatar />
              <MessageBubble side="left" content="Hello, how can i help you?" />
            </div>
            <div className={styles.message}>
              <ManAvatar />
              <MessageBubble side="right" content="I lost my credit card." />
            </div>
            <div className={styles.message}>
              <WomanAvatar />
              <MessageBubble
                side="left"
                content="No problem, we’ll take care of it"
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
