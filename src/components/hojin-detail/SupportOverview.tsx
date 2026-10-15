import SectionTitle from "./SectionTitle";
import { supportGroups } from "./data";
import styles from "./hojin-detail.module.css";

export default function SupportOverview() {
  return (
    <section className={styles.section}>
      <SectionTitle>プロジェクトホープがサポートできること</SectionTitle>
      <div className={styles.supportGrid}>
        {supportGroups.map((group, groupIndex) => (
          <article className={styles.supportCard} key={group.title}>
            <h3>{group.title}</h3>
            <div className={styles.supportItems}>
              {group.items.map((item, index) => (
                <div key={item}>
                  <span className={styles.supportIcon}>
                    {groupIndex === 0
                      ? ["⌂", "▣", "□"][index]
                      : groupIndex === 1
                        ? ["♧", "▥", "▤"][index]
                        : ["☎", "⌂", "♙"][index]}
                  </span>
                  <p>{item}</p>
                  {index < group.items.length - 1 && groupIndex < 2 && <b>›</b>}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
