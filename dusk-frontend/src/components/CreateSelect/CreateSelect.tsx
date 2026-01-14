"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./create-select.module.css"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

const options = ["Account", "Card"]

export const CreateSelect = ({ row, active = "Account" }: { row?: boolean, active: string }) => {
  console.log(active)
  console.log(options.some(option => option === active))
  const isClosable = !options.includes(active)
  const [open, setOpen] = useState(options.some(option => option === active))
  const router = useRouter()

  return (
    <div
      onMouseLeave={() => isClosable && setOpen(false)}
      className={classNames(styles.container, row && styles.rowMenu)}>
      <div
        className={styles.select}
      >
        <button
          type="button"
          onMouseEnter={() => isClosable && setOpen(true)}
          onClick={() => isClosable && setOpen(!!open)}
          className={styles.trigger}
        >
          Create
        </button>

      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={classNames(styles.menu, row && styles.rowMenu)}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={row ? styles.verticalLine : styles.horizontalLine} />
            {options.map(option => (
              <button
                key={option}
                type="button"
                className={classNames(styles.item, active === option && styles.active)}
                onClick={() => router.push(`/Create/${option}`)}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
