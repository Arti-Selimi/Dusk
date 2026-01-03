'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styles from "./form-display.module.css"

const imagesArray = ["ArtiSelimi", "JaneDoe", "KaneMat"]

export const CardRoulette = () => {
  const [images, setImages] = useState(imagesArray)

  useEffect(() => {
    const timer = setInterval(() => {
      setImages((prev) => {
        const newOrder = [...prev];
        const first = newOrder.shift();
        newOrder.push(first ?? '');
        return newOrder;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.roulette}>
      {images.map((image, index) => (
        <motion.div
          className={index === 0 ? styles.firstCard : ""}
          key={image}
          layout
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <Image
            src={`/shared/${image}.svg`}
            alt={image}
            width={150}
            height={150}
          />
        </motion.div>
      ))}
    </div>
  )
}
