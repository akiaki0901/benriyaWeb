import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import styles from "./kojin.module.css";

const reasons = [
  {
    icon: "home" as const,
    title: "自分たちで動ける",
    text: "片付け・引越し・清掃・生活支援など、自社で対応できることは自分たちで責任をもって対応します。",
    image: "/img-kojin/service-declutter.png",
  },
  {
    icon: "people" as const,
    title: "介護・福祉を理解している",
    text: "介護の現場を知るスタッフが、ご家族や施設の状況に寄り添ったサポートを行います。",
    image: "/img-kojin/service-care.png",
  },
  {
    icon: "heart" as const,
    title: "専門家とも力を合わせる",
    text: "自社だけでなく、地域の専門家や士業などと連携し、解決までご提案いたします。",
    image: "/img-kojin/service-moving.png",
  },
  {
    icon: "person" as const,
    title: "一つの相談から幅広く対応",
    text: "どこに頼めばよいかわからないお困りごとも、まとめてワンストップでサポートします。",
    image: "/img-kojin/service-cleaning.png",
  },
];

export default function Reasons() {
  return (
    <section className={[styles.section, styles.softSection].join(" ")}>
      <SectionTitle>私たちが選ばれる理由</SectionTitle>

      <div className={styles.reasonGrid}>
        {reasons.map((reason) => (
          <article className={styles.reasonCard} key={reason.title}>
            <h3>
              <Icon name={reason.icon} size={28} />
              {reason.title}
            </h3>
            <div className={styles.reasonBody}>
              <img src={reason.image} alt="" />
              <p>{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
