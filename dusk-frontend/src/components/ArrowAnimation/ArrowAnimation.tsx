"use client"

import { motion, type Variants } from "framer-motion"
import styles from "./arrow-animation.module.css"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
}

const shaftVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const ArrowAnimation = ({ content }: { content: string }) => {
  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.arrow}>
        <motion.div
          className={styles.shaft}
          variants={shaftVariants}
          style={{ width: "100%" }}
        />
        <div className={styles.head} />
      </div>

      <motion.p className={styles.text} variants={textVariants}>
        {content}
      </motion.p>
    </motion.div>
  )
}

