import type React from "react";
import styles from "./kojin.module.css";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className={styles.sectionTitle}>
      <span>＼</span>
      {children}
      <span>／</span>
    </h2>
  );
}
