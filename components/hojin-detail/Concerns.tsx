import Icon, { IconName } from "./Icon";
import SectionTitle from "./SectionTitle";
import { concerns } from "./data";
import styles from "./hojin-detail.module.css";

export default function Concerns() {
  return (
    <section className={styles.section}>
      <SectionTitle>このようなお困りごと、ありませんか？</SectionTitle>
      <div className={styles.concernGrid}>
        {concerns.map(([icon, text]) => (
          <article className={styles.concernCard} key={text}>
            <Icon name={icon as IconName} size={46} />
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
