import Image from "next/image";
import Header from "@/components/Header";
import SwipCard from "@/components/SwipCard"
import styles from "./page.module.css"
import Pagelayout from "@/components/Pagelayout";

export const metadata={
  title: "吉岡便利屋 | サービス内容",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout>
        <div style={{minHeight:"85vh"}}>
        <div className={styles.container}>
            <hr className={styles.hr} style={{marginBottom:"20"}}/>

            <h1 className={styles.pageTitle}>サービス一覧</h1>
            <hr className={styles.hr} style={{marginBottom:"20"}}/>
            <ul className={styles.ul}>
            <li className={styles.li}>引越の手伝い・引越の荷造りの手伝い</li>
            <li className={styles.li}>部屋の模様替えを手伝い・家具の移動</li>
            <li className={styles.li}>部屋の片付け</li>
            <li className={styles.li}>組み立て式家具・棚・ベッドなどの組み立ての手伝い</li>
            <li className={styles.li}>ハウスクリーニング</li>
            <li className={styles.li}>鍵の取り替え</li>
            <li className={styles.li}>粗大ゴミの処理</li>
            <li className={styles.li}>トイレ・タンク内修理</li>
            <li className={styles.li}>排水管の詰まり</li>
            <li className={styles.li}>パッキン交換</li>
            <li className={styles.li}>庭の草むしり</li>
            <li className={styles.li}>網戸の張り替え</li>
            <li className={styles.li}>キッチンの排水口の掃除（クリーニング)<br/>...など</li>
            </ul>

            <h1 className={styles.message}>その他なんでも気軽にご相談ください!</h1>
            
            <hr className={styles.hr} style={{marginBottom:"20"}}/>

            <h1 className={styles.pageTitle}>実際に行ったサービス</h1>

            <hr className={styles.hr} style={{marginBottom:"20"}}/>

            <SwipCard/>
        </div>

        </div>
    </Pagelayout>
  );
}