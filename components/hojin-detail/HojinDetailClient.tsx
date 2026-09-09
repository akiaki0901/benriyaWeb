"use client";

import Concerns from "./Concerns";
import ConsultationBanner from "./ConsultationBanner";
import ContactCta from "./ContactCta";
import FeaturedServices from "./FeaturedServices";
import Hero from "./Hero";
import RequestFlow from "./RequestFlow";
import SupportOverview from "./SupportOverview";
import styles from "./hojin-detail.module.css";

export default function HojinDetailClient() {
  return (
    <main className={styles.page}>
      <Hero />
      <FeaturedServices />
      <ConsultationBanner />
      <Concerns />
      <SupportOverview />
      <RequestFlow />
      <ContactCta />
    </main>
  );
}
