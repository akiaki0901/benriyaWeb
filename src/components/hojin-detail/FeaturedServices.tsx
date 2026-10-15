import SectionTitle from "./SectionTitle";
import { featuredServices } from "./data";
import styles from "./hojin-detail.module.css";

export default function FeaturedServices() {
  return (
    <section className={styles.section}>
      <SectionTitle>特にご依頼の多いサービス</SectionTitle>
      <div className={styles.featuredGrid}>
        {featuredServices.map((service) => (
          <article className={styles.featuredCard} key={service.number}>
            <h3>
              <b>{service.number}</b>
              {service.title}
            </h3>
            <p>{service.description}</p>
            <div className={styles.imageFlow}>
              {service.images.map((image, index) => (
                <div className={styles.flowImage} key={image}>
                  <img src={image} alt="" />
                  {index < service.images.length - 1 && <span>›</span>}
                </div>
              ))}
            </div>
            <ul>
              {service.points.map((point) => (
                <li key={point}>✓ {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
