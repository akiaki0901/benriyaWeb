import Icon, { IconName } from "./Icon";
import SectionTitle from "./SectionTitle";
import { smallSupports } from "./data";
import styles from "./kojin.module.css";

export default function SmallSupportGrid() {
  return (
    <section className={styles.section}>
      <SectionTitle>こんなことも、お任せください！</SectionTitle>

      <div className={styles.smallSupportGrid}>
        {smallSupports.map(([icon, label]) => (
          <div className={styles.smallSupportCard} key={label}>
            <Icon name={icon as IconName} size={34} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <p className={styles.sectionNote}>
        「これって頼めるの？」ということも、まずはお気軽にご相談ください。
      </p>
    </section>
  );
}
