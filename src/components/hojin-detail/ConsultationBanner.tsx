import styles from "./hojin-detail.module.css";

export default function ConsultationBanner() {
  return (
    <section className={styles.consultationBanner}>
      <div className={styles.questionIcon}>?</div>
      <div>
        <h2>清掃業者？内装業者？引っ越し業者？不用品回収業者？</h2>
        <strong>その判断から、私たちにご相談ください。</strong>
      </div>
      <p>
        必要に応じて自社で対応、または信頼できる専門業者と連携し、最適な方法で解決までサポートします。
      </p>
    </section>
  );
}
