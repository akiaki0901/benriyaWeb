import Icon from "./Icon";
import styles from "./kojin.module.css";

export default function ContactCta() {
  return (
    <section className={styles.contactCta}>
      <div className={styles.contactPhoto} />

      <h2>
        「これって、どこに頼めばいいんだろう？」
        <br />
        と思ったら、まずはご相談ください。
      </h2>

      <div className={styles.contactActions}>
        <div className={styles.phone}>
          <Icon name="phone" size={30} />
          <div>
            <strong>0120-123-456</strong>
            <small>受付時間 9:00〜18:00（年中無休）</small>
          </div>
        </div>

        <button className={styles.lineButton} type="button">
          LINEで相談する
        </button>

        <button className={styles.mailButton} type="button">
          <Icon name="mail" size={20} />
          お問い合わせフォーム
        </button>
      </div>
    </section>
  );
}
