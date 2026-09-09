import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { testimonials } from "./data";
import styles from "./kojin.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <SectionTitle>お客様の声</SectionTitle>

      <div className={styles.voiceGrid}>
        {testimonials.map(([title, text]) => (
          <article className={styles.voiceCard} key={title}>
            <div className={styles.voiceIcon}>
              <Icon name="person" size={46} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.moreLink}>もっと見る →</div>
    </section>
  );
}
