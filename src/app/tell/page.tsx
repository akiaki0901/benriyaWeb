import Image from "next/image";
import Header from "@/components/Header";
import Pagelayout from "@/components/Pagelayout";
import MailForm from "@/components/MailForm";
import styles from "./page.module.css"


export const metadata={
  title: "吉岡便利屋 | 連絡先",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout>
        <div style={{minHeight:"85vh"}}>
        <div className={styles.titlewrap}>
            <hr className={styles.hr} style={{marginBottom:"20"}}/>

            <h1 className={styles.pageTitle}>連絡先</h1>
            <hr className={styles.hr} style={{marginBottom:"20"}}/>
        </div>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>電話番号</h2>
          <p className={styles.adress}>0000-000-000</p>

          <hr className={styles.hr}/>

          <h2 className={styles.subtitle}>メールアドレス</h2>
          <p className={styles.adress}>benriyaYoshioka@gmail.com</p>

          <hr className={styles.hr}/>

          <MailForm/>
        </div>

        </div>
    </Pagelayout>
  );
}