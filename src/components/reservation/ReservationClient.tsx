import MailForm from "./MailForm";
import styles from "./reservation.module.css";

export default function ReservationClient() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>CONTACT &amp; RESERVATION</p>
        <h1>メールでのご相談・ご予約</h1>
        <p>
          住まいと暮らしのお困りごとを、どんなことでもお気軽にご相談ください。
          <br />
          内容を確認後、担当者より折り返しご連絡いたします。
        </p>
      </section>

      <section className={styles.formSection} aria-labelledby="form-heading">
        <div className={styles.sectionHeading}>
          <span aria-hidden="true" />
          <div>
            <h2 id="form-heading">お問い合わせフォーム</h2>
            <p>
              <strong>必須</strong>の項目をご入力のうえ、送信してください。
            </p>
          </div>
          <span aria-hidden="true" />
        </div>

        <MailForm />
      </section>

      <aside className={styles.contactNote}>
        <div className={styles.noteIcon} aria-hidden="true">
          ✓
        </div>
        <div>
          <h2>送信前にご確認ください</h2>
          <p>
            迷惑メール対策をされている場合は、当社からの返信を受信できるよう設定をご確認ください。
          </p>
        </div>
      </aside>
    </main>
  );
}
