import styles from "./main-button.module.css"
import { MainButtonProps } from "../../types/types"
import classNames from "classnames"
import { Spinner } from "../Spinner/Spinner"

export const MainButton = ({ onClick, htmlType, type, content, width, padding, loading, disabled, fontSize }: MainButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={htmlType}
      className={classNames(styles.main, type === "contact" && styles.contact, type === "scrollTo" && styles.scrollTo, type === "form" && styles.form)}
      style={{ width: width ?? "", padding: padding ?? "", fontSize: fontSize ?? "" }}
    >{loading ? <Spinner size={20} /> : content}</button>
  )
}
