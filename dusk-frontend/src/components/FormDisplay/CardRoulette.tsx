'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import ArtiSelimi from "@/assets/ArtiSelimi.svg"
import JaneDoe from "@/assets/JaneDoe.svg"
import KaneMat from "@/assets/KaneMat.svg"
import styles from "./form-display.module.css"

const imagesArray = [ArtiSelimi, JaneDoe, KaneMat]

export const CardRoulette = () => {
  const [images, setImages] = useState(imagesArray)

  useEffect(() => {
    const timer = setInterval(() => {
      setImages(prev => {
        const newOrder = [...prev]
        const first = newOrder.shift()
        newOrder.push(first ?? ArtiSelimi)
        return newOrder
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.roulette}>
      {images.map(ImageComponent => (
        <motion.div
          className={styles.cardWrapper} 
          key={ImageComponent.name} 
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ImageComponent />
        </motion.div>
      ))}
    </div>
  )
}

