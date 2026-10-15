import type { ReactNode } from "react";
import styles from "./reservation.module.css";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
};

export default function FormField({
  id,
  label,
  required = false,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>

        <span
          className={required ? styles.requiredBadge : styles.optionalBadge}
        >
          {required ? "必須" : "任意"}
        </span>
      </div>

      {hint && <p className={styles.hint}>{hint}</p>}
      {children}
    </div>
  );
}
