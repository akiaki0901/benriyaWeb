import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Pagelayout from "@/components/Pagelayout";
import styles from "./page.module.css"


export const metadata={
  title: "吉岡便利屋 | 軽トラで向かいます!",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout>
      <div style={{minHeight:"85vh"}}>
        <div className={styles.container}>
          <hr className={styles.hr} style={{marginBottom:"20"}}/>

          <h1 className={styles.message}>どんなことでも気軽にご相談ください!<br/>吉岡便利屋が駆けつけます!</h1>
          <hr className={styles.hr} style={{marginBottom:"20"}}/>
          <h1 className={styles.message}>主にこんなことができます! ↓↓</h1>
          <ul className={styles.ul}>
            <li className={styles.li}>引越の手伝い・引越の荷造りの手伝い</li>
            <li className={styles.li}>部屋の模様替えを手伝い・家具の移動</li>
            <li className={styles.li}>部屋の片付け</li>
            <li className={styles.li}>組み立て式家具・棚・ベッドなどの組み立ての手伝い</li>
            <li className={styles.li}>ハウスクリーニング</li>
            <li className={styles.li}>鍵の取り替え</li>
            <li className={styles.li}>粗大ゴミの処理</li>
            <li className={styles.li}>キッチンの排水口の掃除（クリーニング)<br/>...など</li>
          </ul>
          <Link href={"/service"}><h1 style={{fontSize:"16px",fontWeight:"400",color:"blue",marginBottom:"30px"}}>サービスについて詳しくはこちら☚</h1></Link>
          <h1 className={styles.message}>その他なんでも気軽にご相談ください!</h1>

        </div>

      </div>
    </Pagelayout>
  );
}
