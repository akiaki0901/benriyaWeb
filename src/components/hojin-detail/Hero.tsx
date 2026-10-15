import Icon from "./Icon";
import styles from "./hojin-detail.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} />
      <div className={styles.heroCopy}>
        <h1>「これ、誰に頼めばいい？」</h1>
        <h2>
          その困りごと、私たちが<strong>引き受けます。</strong>
        </h2>
        <p>
          施設運営で発生する「片付け」「引っ越し」「居室クリーニング（壁紙張り替え）」など、住まいに関するお困りごとを、まとめてサポートします。
        </p>
        <div className={styles.heroFeatures}>
          <article>
            <Icon name="phone" size={36} />
            <div>
              <b>相談・お見積り無料</b>
              <small>迅速対応</small>
            </div>
          </article>
          <article>
            <Icon name="people" size={36} />
            <div>
              <b>ワンストップ対応</b>
              <small>まとめてお任せ</small>
            </div>
          </article>
          <article>
            <Icon name="heart" size={36} />
            <div>
              <b>福祉の現場に寄り添う</b>
              <small>安心のサポート</small>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.heroBadge}>
        <span>ご相談・お見積り</span>
        <strong>無料</strong>
        <span>迅速対応</span>
        <span>ワンストップ対応</span>
      </div>
    </section>
  );
}
