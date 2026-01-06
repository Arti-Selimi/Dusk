import classNames from "classnames"
import styles from "./message-bubble.module.css"
import { MessageBubbleProps } from "@/types/types"

export const MessageBubble = ({side, content}: MessageBubbleProps) => {
  return (
      <div className={classNames(styles.bubble, side === "right" && styles.rightBubble)}>
        {content}
      </div>
  )
}
