import Icon from "./Icon";
import styles from "./hojin-detail.module.css";

export default function ContactCta() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaPhoto} />
      <div className={styles.ctaMessage}>
        <h2>困ったら、まずプロジェクトホープ。</h2>
        <p>どこに頼めばいいかわからない。を、私たちが引き受けます。</p>
        <div>
          <span>✓ ご相談・お見積り無料</span>
          <span>✓ 迅速対応でスピーディーに解決</span>
          <span>✓ ワンストップ対応で手間なく安心</span>
        </div>
      </div>
      <div className={styles.ctaContact}>
        <strong>
          <Icon name="phone" size={31} />
          0120-123-456
        </strong>
        <small>受付時間 9:00〜18:00（年中無休）</small>
        <button type="button">
          <Icon name="mail" size={21} />
          お問い合わせはこちら
        </button>
        <span>フォームから24時間受付中</span>
      </div>
    </section>
  );
}
