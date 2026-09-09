import { benefits } from "./data";
import styles from "./connect.module.css";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitText}>
        <h2>連携のメリット</h2>

        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>✓ {benefit}</li>
          ))}
        </ul>
      </div>

      <img src="/img-connect/connect-team.png" alt="" />
    </section>
  );
}
