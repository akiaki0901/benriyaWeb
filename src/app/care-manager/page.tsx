import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Icon, { type IconName } from "@/components/hojin-detail/Icon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ケアマネジャーの方へ | プロジェクトホープ",
  description: "介護保険では対応できない暮らしのお困りごとを、ケアマネジャーの皆さまと連携してサポート。生活支援、家財整理、施設への引越し、専門家との連携までご相談ください。",
};

const services = [
  {
    title: "暮らしのサポート", tone: "orange", image: "/img-care-manager/daily-support.png",
    alt: "日々の暮らしを支える生活支援のイメージ",
    lead: "介護保険では対応できない、日常生活のお困りごとをサポートします。",
    items: ["通院・買い物同行", "外出支援・付き添い", "電球交換・家具の組み立て", "家具の移動・転倒防止", "草刈り・庭のお手入れ", "お部屋の清掃・簡単な修繕"],
    detail: "ご本人の暮らし方やご家族のご希望を伺い、必要なお手伝いを一緒に整理します。単発のご相談から継続的なサポートまで、内容や頻度をご相談ください。",
  },
  {
    title: "住まいの整理", tone: "green", image: "/img-care-manager/home-organizing.png",
    alt: "室内の荷物を整理する作業スタッフ",
    lead: "ご自宅の片付けから、施設入居後の元住居の整理まで対応します。",
    items: ["家財整理・生前整理", "遺品整理", "不用品の整理・処分", "空き家管理（通風・簡易清掃など）", "退去後の清掃・原状回復など"],
    detail: "残すものやご家族に引き継ぐものを確認しながら、整理の進め方をご提案します。搬出・処分や専門的な作業は、内容に応じて専門業者と連携します。",
  },
  {
    title: "施設等の引っ越し", tone: "blue", image: "/img-care-manager/facility-moving.png",
    alt: "住み替えに伴う荷物の搬出作業のイメージ",
    lead: "施設入居や施設間の移動を、荷造りから設置までサポートします。",
    items: ["ご自宅から施設への引っ越し", "施設間の引っ越し", "荷造り・運搬・家具の設置", "必要に応じた一時保管", "退去時の片付け・清掃など"],
    detail: "入居・退去の日程や搬入先の条件を伺い、荷物の整理から新しいお部屋の準備まで調整します。一時保管などの対応可否は、荷物の量や期間を確認してご案内します。",
  },
  {
    title: "専門家・地域事業者との連携", tone: "rose", image: "/img-care-manager/community-partnership.png",
    alt: "関係者と相談内容を確認する打ち合わせのイメージ",
    lead: "自社で対応できない専門的なお困りごとも、専門家・事業者と連携します。",
    items: ["後見人等の紹介についてのご相談", "各種行政手続きのサポート", "専門工事の手配（設備修繕など）", "老人ホームや紹介センターとの連携など"],
    detail: "まずはお困りごとを伺い、必要な専門家や地域の相談先との連携を検討します。専門的な判断や手続きは、それぞれの専門家・関係機関が対応します。",
  },
] as const;

const concerns: { icon: IconName; text: string }[] = [
  { icon: "heart", text: "介護保険では対応できない生活の困りごとを、誰に頼めばいい？" },
  { icon: "bed", text: "施設入居が決まったが、引っ越しや片付けが進まない…" },
  { icon: "people", text: "身寄りのない利用者様の生活や手続き、どうすればよい？" },
  { icon: "key", text: "住環境に問題があり、このままの生活が心配…" },
];

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "phone", title: "ご相談・お問い合わせ", text: "お電話・フォームより、お気軽にご相談ください。" },
  { icon: "clipboard", title: "状況の確認", text: "内容を伺い、現地確認や写真で状況を確認します。" },
  { icon: "document", title: "ご提案・お見積り", text: "状況に合ったプランとお見積りをご提案します。" },
  { icon: "tools", title: "作業の実施", text: "自社または専門業者と連携し、作業を行います。" },
  { icon: "heart", title: "完了・アフターフォロー", text: "作業完了後も安心のサポート。継続的なご相談も可能です。" },
];

function Benefits() {
  return <ul className={styles.benefits}>
    {([
      ["phone", "相談・見積り", "無料"],
      ["people", "ワンストップ対応", "まとめてお任せ"],
      ["heart", "福祉の現場に寄り添う", "安心のサポート"],
      ["clipboard", "迅速対応", "スムーズに解決"],
    ] as const).map(([icon, title, text]) => <li key={title}>
      <Icon name={icon} size={30} /><span>{title}<strong>{text}</strong></span>
    </li>)}
  </ul>;
}

export default function CareManagerPage() {
  return <>
    <Header activeIndex={2} />
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="パンくずリスト">
        <Link href="/">トップ</Link><span aria-hidden="true">›</span>
        <Link href="/hojin">法人・福祉関係者の方へ</Link><span aria-hidden="true">›</span>
        <span aria-current="page">ケアマネジャーの方へ</span>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroPhoto}>
          <Image unoptimized src="/img-care-manager/hero-consultation.png" alt="利用者様の相談に耳を傾けるケアマネジャーのイメージ" fill sizes="(max-width: 700px) 100vw, 65vw" priority />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ケアマネジャーの方へ</p>
          <h1>利用者様とご家族の<br /><strong>暮らしの困りごと</strong>を<br /><em>一緒に</em>解決します。</h1>
          <p className={styles.intro}>介護保険では対応できないお困りごとを、<br className={styles.desktopBreak} />ケアマネジャーの皆さまと連携し、住まいと暮らしの両方から<br className={styles.desktopBreak} />利用者様・ご家族が安心して生活できるようサポートします。</p>
          <Benefits />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="concerns-heading">
        <h2 id="concerns-heading" className={styles.heading}>こんなお悩みはありませんか？</h2>
        <ul className={styles.concerns}>
          {concerns.map(({ icon, text }, index) => <li key={text} className={styles[services[index].tone]}>
            <span className={styles.concernIcon}><Icon name={icon} size={34} /></span><p>{text}</p>
          </li>)}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="services-heading">
        <h2 id="services-heading" className={styles.heading}>プロジェクトホープができること</h2>
        <p className={styles.sectionLead}>「暮らし」と「住まい」に関するお困りごとを、4つのサービスでサポートします。</p>
        <div className={styles.services}>
          {services.map((service, index) => <article key={service.title} className={`${styles.service} ${styles[service.tone]}`}>
            <h3><span>{String(index + 1).padStart(2, "0")}</span>{service.title}</h3>
            <p className={styles.serviceLead}>{service.lead}</p>
            <div className={styles.servicePhoto}><Image unoptimized src={service.image} alt={service.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1100px) 45vw, 23vw" /></div>
            <ul className={styles.checklist}>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
            <details className={styles.details}>
              <summary aria-label={`${service.title}について詳しく見る`}>詳しく見る<span aria-hidden="true">＋</span></summary>
              <p>{service.detail}</p>
              <Link href="/reservation">このサービスについて相談する →</Link>
            </details>
          </article>)}
        </div>
      </section>

      <section className={styles.flowSection} aria-labelledby="flow-heading">
        <div className={styles.section}>
          <h2 id="flow-heading" className={styles.heading}>ご依頼の流れ</h2>
          <p className={styles.sectionLead}>ご相談から作業完了まで、ケアマネジャー様・ご利用者様のご負担を最小限に、スムーズに対応いたします。</p>
          <ol className={styles.steps}>{steps.map((step, index) => <li key={step.title}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
            <Icon name={step.icon} size={34} /><h3>{step.title}</h3><p>{step.text}</p>
          </li>)}</ol>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-heading">
        <div className={styles.contactPhoto}><Image unoptimized src="/img-care-manager/hero-consultation.png" alt="" fill sizes="(max-width: 900px) 100vw, 25vw" /></div>
        <div className={styles.contactCopy}>
          <p className={styles.contactKicker}>ケアマネジャーの皆さまと一緒に。</p>
          <h2 id="contact-heading">困ったら、まずプロジェクトホープ。</h2>
          <p>どんな小さなお困りごとも、まずはお気軽にご相談ください。</p>
          <Benefits />
        </div>
        <div className={styles.contactAction}>
          <Link href="/reservation" className={styles.contactButton}><Icon name="mail" size={23} />お問い合わせはこちら<span aria-hidden="true">→</span></Link>
          <p>フォームから24時間受付中</p>
        </div>
      </section>
      <div className={styles.back}><Link href="/hojin">← 法人・福祉関係者向けページへ戻る</Link></div>
    </main>
    <Footer />
  </>;
}
