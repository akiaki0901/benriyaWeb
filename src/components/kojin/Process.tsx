import Icon, { IconName } from "./Icon";
import SectionTitle from "./SectionTitle";
import { steps } from "./data";
import styles from "./kojin.module.css";

export default function Process() {
  return (
    <section className={styles.section}>
      <SectionTitle>ご利用の流れ</SectionTitle>

      <div className={styles.processGrid}>
        {steps.map(([icon, title, text], index) => (
          <article className={styles.processCard} key={title}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <Icon name={icon as IconName} size={40} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            {index < steps.length - 1 && (
              <span className={styles.processArrow}>→</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
