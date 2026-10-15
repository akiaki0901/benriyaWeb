import Icon, { IconName } from "./Icon";
import SectionTitle from "./SectionTitle";
import { steps } from "./data";
import styles from "./hojin-detail.module.css";

export default function RequestFlow() {
  return (
    <section className={styles.section}>
      <SectionTitle>ご依頼の流れ</SectionTitle>
      <div className={styles.steps}>
        {steps.map(([icon, title, text], index) => (
          <article className={styles.step} key={title}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <Icon name={icon as IconName} size={38} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            {index < steps.length - 1 && <span>›</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
