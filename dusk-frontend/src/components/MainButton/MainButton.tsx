import styles from "./main-button.module.css"
import { MainButtonProps } from "../../types/types"
import classNames from "classnames"
import { Spinner } from "../Spinner/Spinner"

export const MainButton = ({ onClick, type, content, width, padding, loading, disabled }: MainButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.main, type === "contact" && styles.contact, type === "scrollTo", type === "form" && styles.form)}
      style={{ width: width ?? "", padding: padding ?? "" }}
    >{loading ? <Spinner size={20} /> : content}</button>
  )
}
