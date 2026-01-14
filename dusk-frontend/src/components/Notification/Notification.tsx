"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./notification.module.css";
import { Ban, BookAlert, CircleCheckBig, CircleX } from "lucide-react";

interface Props {
  type: "success" | "error" | "warning";
  message: string;
  onClose: () => void;
}

export const Notification = ({ type, message, onClose }: Props) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 5000);
    const removeTimer = setTimeout(onClose, 5500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  return (
    <div
      className={classNames(
        styles.container,
        type === "error" && styles.error,
        type === "warning" && styles.warning,
        isFading && styles.fadeOut
      )}
    >
      <div className={styles.iconContainer}>
        {type === "error" ? (
          <Ban />
        ) : type === "warning" ? (
          <BookAlert />
        ) : (
          <CircleCheckBig />
        )}
      </div>
      <div className={styles.messageContainer}>{message}</div>
      <div className={styles.closeContainer}>
        <CircleX
          onClick={() => {
            setIsFading(true);
            setTimeout(onClose, 500);
          }}
        />
      </div>
    </div>
  );
};
