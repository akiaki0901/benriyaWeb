"use client";

import Benefits from "./Benefits";
import CommonConsultations from "./CommonConsultations";
import ContactButton from "./ContactButton";
import Hero from "./Hero";
import SupportServices from "./SupportServices";
import styles from "./connect.module.css";

export default function ConnectClient() {
  return (
    <main className={styles.page}>
      <Hero />
      <SupportServices />

      <div className={styles.bottomArea}>
        <Benefits />
        <CommonConsultations />
        <ContactButton />
      </div>
    </main>
  );
}
