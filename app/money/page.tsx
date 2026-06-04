import Image from "next/image";
import Header from "@/components/Header";
import Pagelayout from "@/components/Pagelayout"

import styles from "./page.module.css"


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

            <h1 className={styles.pageTitle}>料金</h1>
            <hr className={styles.hr} style={{marginBottom:"20"}}/>
            <p className={styles.tableName}>基本料金</p>
            <table className={styles.table}><tbody>
                <tr>
                    <td className={styles.td}>1時間</td><td className={styles.td}>3000円</td>
                </tr>
                <tr>
                    <td className={styles.td}>4時間</td><td className={styles.td}>11000円</td>
                </tr>
                <tr>
                    <td className={styles.td}>12時間</td><td className={styles.td}>30000円</td>
                </tr>
            </tbody></table>
            
            <h1 style={{fontSize:50,fontWeight:800,padding:5}}>+</h1>

            <p className={styles.tableName}>出張費</p>
            <table className={styles.table}><tbody>
                <tr>
                    <td className={styles.td}>出張費</td><td className={styles.td}>要相談</td>
                </tr>
            </tbody></table>
            <p className={styles.message}>※お近くの場合ほとんどかかりません</p>

            <h1 style={{fontSize:50,fontWeight:800,padding:5}}>+</h1>

            <p className={styles.tableName}>内容ごとの料金</p>
            <table className={styles.table}><tbody>

                <tr>
                    <td className={styles.td}>家の掃除</td><td className={styles.td}>3000円</td><td className={styles.td}>広大な範囲の場合お値段が変わることがあります</td>
                </tr>
                <tr>
                    <td className={styles.td}>排水管の詰まり</td><td className={styles.td}>6000円</td><td className={styles.td}>程度によりお値段が変わることがあります</td>
                </tr>
                <tr>
                    <td className={styles.td}>トイレ修理</td><td className={styles.td}>9000円</td><td className={styles.td}>程度によりお値段が変わることがあります</td>
                </tr>
                <tr>
                    <td className={styles.td}>引っ越し</td><td className={styles.td}>8000円</td><td className={styles.td}>家具や部屋の様子によりお値段が変わることがあります</td>
                </tr>
            </tbody></table>
        </div>
        </div>
    </Pagelayout>
  );
}