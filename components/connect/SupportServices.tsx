import Icon, { IconName } from "./Icon";
import { supportItems } from "./data";
import styles from "./connect.module.css";

export default function SupportServices() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>コネクトのサポート内容</h2>

      <div className={styles.supportGrid}>
        {supportItems.map((item) => (
          <article className={styles.supportCard} key={item.title}>
            <Icon name={item.icon as IconName} size={48} />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
