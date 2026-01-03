import { SpinnerProps } from "@/types/types";
import styles from "./spinner.module.css"

export function Spinner({ size = 24, color = '#555' }: SpinnerProps) {
  return (
    <div
      className={styles.spinner}
      style={{
        width: size,
        height: size,
        borderWidth: size / 8,
        ['--spinner-color' as string]: color,
      }}
    />
  );
}
