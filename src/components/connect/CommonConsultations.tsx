import { consultations } from "./data";
import styles from "./connect.module.css";

export default function CommonConsultations() {
  return (
    <section className={styles.consultations}>
      <h2>よくあるご相談</h2>

      <ul>
        {consultations.map((consultation) => (
          <li key={consultation}>✓ {consultation}</li>
        ))}
      </ul>

      <button type="button">
        詳しく見る
        <span>›</span>
      </button>
    </section>
  );
}
