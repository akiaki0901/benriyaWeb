import SectionTitle from "./SectionTitle";
import { cases } from "./data";
import styles from "./kojin.module.css";

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <SectionTitle>解決事例</SectionTitle>

      <div className={styles.caseGrid}>
        {cases.map((item) => (
          <article className={styles.caseCard} key={item.number}>
            <div className={styles.caseHeading}>
              <strong>
                <small>CASE</small>
                {item.number}
              </strong>
              <h3>{item.title}</h3>
            </div>

            <img src={item.image} alt="" />

            <ul>
              {item.points.map((point) => (
                <li key={point}>✓ {point}</li>
              ))}
            </ul>

            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <button className={styles.moreButton} type="button">
        他の事例も見る →
      </button>
    </section>
  );
}
