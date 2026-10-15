"use client";

import CaseStudies from "./CaseStudies";
import Concept from "./Concept";
import ContactCta from "./ContactCta";
import Hero from "./Hero";
import Process from "./Process";
import Reasons from "./Reasons";
import ServiceGrid from "./ServiceGrid";
import SmallSupportGrid from "./SmallSupportGrid";
import Testimonials from "./Testimonials";
import styles from "./kojin.module.css";

export default function KojinClient() {
  return (
    <main className={styles.page}>
      <Hero />
      <ServiceGrid />
      <SmallSupportGrid />
      <Reasons />
      <Concept />
      <CaseStudies />
      <Process />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
