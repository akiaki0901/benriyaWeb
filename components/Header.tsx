import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.shorts} style={{background:"pink"}}>
          <p className={styles.short}>いつでも駆けつけます!!なんでも相談してください!!</p>
      </div>

      <span className={styles.container}>
          <Image src="/trackkun.png" 
          alt=""
          width={90}
          height={80}
          style={{paddingBottom:"10"}}
          />
          <Link href="/"><h1 className={styles.title}>吉岡便利屋</h1></Link>
          <span className={styles.tellbox}>
            <h2 style={{color:"black"}}>気軽にお電話ください</h2>
            <p style={{fontWeight:"700",fontSize:"20",color:"black"}}>☎0000-000-000</p>
          </span>
      </span>

      <span className={styles.btns}>
          <Link href="/" className={styles.btn}>Topページ</Link>
          <Link href="/service" className={styles.btn}>サービス</Link>
          <Link href="/money" className={styles.btn}> 料金</Link>
          <Link href="/tell" className={styles.btn}>連絡先</Link>
      </span>

      
    </div>        
  );
}