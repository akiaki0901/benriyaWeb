import Icon, { IconName } from "./Icon";
import SectionTitle from "./SectionTitle";
import { services } from "./data";
import styles from "./kojin.module.css";

export default function ServiceGrid() {
  return (
    <section className={styles.section}>
      <SectionTitle>こんなお困りごとをサポートします</SectionTitle>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <article
            className={[styles.serviceCard, styles[service.accent]].join(" ")}
            key={service.title}
          >
            <h3>
              <Icon name={service.icon as IconName} size={30} />
              {service.title}
            </h3>

            <img src={service.image} alt="" />
            <p>{service.text}</p>

            <button type="button">
              詳しく見る
              <span>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
