import styles from "./connect.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} />

      <div className={styles.heroCopy}>
        <h1>
          ケアマネジャーの皆さまと
          <br />
          つながり、支え合うパートナーに。
        </h1>

        <p>
          ケアプラン作成や介護保険の手続き、
          <br />
          地域資源との連携をサポートします。
        </p>
      </div>
    </section>
  );
}
