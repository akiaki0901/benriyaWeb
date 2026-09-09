import styles from "./kojin.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} />

      <div className={styles.heroCopy}>
        <p className={styles.heroLead}>「誰に頼めばいいかわからない。」</p>
        <h1>
          そんなお困りごとに、
          <br />
          <strong>私たちが力を合わせます。</strong>
        </h1>
        <p className={styles.heroDescription}>
          片付け・引越し・介護・お掃除・空き家管理まで、
          <br />
          住まいと暮らしをトータルでサポートします。
        </p>
      </div>
    </section>
  );
}
