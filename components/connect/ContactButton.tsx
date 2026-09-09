import Icon from "./Icon";
import styles from "./connect.module.css";

export default function ContactButton() {
  return (
    <button className={styles.contactButton} type="button">
      <Icon name="mail" size={21} />
      お問い合わせ・ご相談はこちら
      <span>›</span>
    </button>
  );
}
