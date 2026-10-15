"use client";

import { useEffect, useRef,useState } from "react";
import Image from "next/image";
import styles from "./card.module.css"

export default function SwipCard(){

    type article ={
        title:string,
        src :string,
        children :string
    };
    

    /*現在ページ*/
    const [nowPage,setNowpage] = useState(0); 

    const articles:article[] = [
        {
            title: "引っ越しの手伝い",
            src: "/hikkoshi.png",
            children: "荷物を運びトラックに乗せ新居まで運びました"
        },
        {
            title: "配管の詰まりの修理",
            src: "/haikan.png",
            children: "異臭を放つ厄介な配管つまりを直しました。"
        },
        {
            title: "草刈り",
            src: "/kusakari.png",
            children: "5年程手が付けられていなかった敷地の草抜きをしました。"
        }


    ];

    const startX = useRef(0);
    const startY = useRef(0);

    const touchStart = (e :React.TouchEvent)=>{
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
    };
    const touchEnd=(e:React.TouchEvent)=>{
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const distanceX = endX-startX.current;
        const distanceY = endY-startY.current;
        if(Math.abs(distanceX)<Math.abs(distanceY))return;
        if(distanceX>50)
        {
            let next = nowPage+1;
            if(next>=articles.length)next = 0;
            setNowpage(next);
        }
        if(distanceX<-50)
        {
            let next = nowPage-1;
            if(next<0)next = articles.length-1;
            setNowpage(next);
        }
    };

    return(
        <div className={styles.wrap}>
            <span 
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
            className={styles.container}>
                <span className={styles.pic_btn}>
                    <button className={styles.btn} onClick={()=>{setNowpage((prev)=>prev===0?articles.length-1:prev-1)}}>←</button>
                    {articles.length>0 && <Image
                    src={articles[nowPage].src}
                    alt = ""
                    width={120}
                    height={120}
                    />}
                    
                
                    {articles.length>0 && 
                    <div className={styles.props}>
                        <h1 style={{fontSize:"20px",fontWeight:"500",color:"black"}}>{articles[nowPage].title}</h1>
                        <p style={{fontSize:"16px",fontWeight:"400",color:"black"}}>{articles[nowPage].children}</p>
                    </div>}
                    <button className={styles.btn} onClick={()=>{setNowpage((prev)=>prev===articles.length-1?0:prev+1)}}>→</button>
                </span>
            </span>
        </div>
    );



}