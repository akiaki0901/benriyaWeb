"use client";

import ServiceCard from "./ServiceCard";

import { Kaisei_Decol } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";

const font_kaisai_decol = Kaisei_Decol({
  subsets:["latin"],
  weight:["500"]
})

const font_zen_old_mincho = Zen_Old_Mincho({
  subsets:["latin"],
  weight:["700"]
})

export default function PersonalClient(){
  return(
    <>
      <div className="container">

        <div className="heroArea">
          <div
            className="sloganArea"
            style={{
              marginLeft:"10px",
            }}
          >
            <div style={{
              display:"flex",
              flexDirection:"column",
              alignItems:"flex-start",
            }}> 
              <h1 className={`${font_zen_old_mincho.className} slogan`}>
                ご家族の「困った」を
              </h1>

              <h1 className={`${font_zen_old_mincho.className} slogan`}>
                まるごとサポートします。
              </h1>
            </div>

            <div className="sloganBox">
              <span className="subSlogan">
                住まいの片付けから引っ越し、生活支援、
              </span>
              <span className="subSlogan">
                空き家の管理まで、
              </span>
              <span className="subSlogan">
                暮らしの変化に寄り添います。
              </span>
            </div>
          </div>

          <ServiceCard/>
        </div>

        <div className="underContents">
          <div className="under_box" style={{
              padding:"8px 0px 0px 15px"
          }}>
            <h1
              className={`${font_zen_old_mincho.className} under_title`}
            >
              料金の目安
            </h1>

            <h1 className="subSlogan">
              安心の明朗会計で、事前にお見積りします。
            </h1>
            <div className="money_box_inner">
              <div className="money_box">
                <h1 className="fee_title">家財整理</h1>
                <h2 className="fee">30,000円~</h2>
              </div>
              <div className="money_box">
                <h1 className="fee_title">引っ越し(軽トラック)</h1>
                <h2 className="fee">20,000円~</h2>
              </div>
              <div className="money_box">
                <h1 className="fee_title">空き家管理(巡回)</h1>
                <h2 className="fee">5,500円/月~</h2>
              </div>
            </div>
            <div style={{alignSelf:"center",marginTop: "auto",}} className="detail">詳しく見る ▶</div>
          </div>

          <div className="under_box" style={{
              padding:"8px 0px 0px 15px"
            }}>
            <h1
              className={`${font_zen_old_mincho.className} under_title`}
            >
              お客様の声
            </h1>
            <div style={{display:"flex",justifyContent:"center"}}>
              <div style={{padding:"20px"}}>
                  <h1 className="subSlogan">ご利用いただいた方の</h1>
                  <h1 className="subSlogan">声をご紹介します。</h1>
              </div>
            </div>
              
            <div style={{alignSelf:"center",marginTop: "auto",}} className="detail_white">詳しく見る ▶</div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .container {
          display: flex;

          width: 100vw;
          max-width: none;

          margin: 0;
          padding: 0;

          flex-direction: column;
          align-items: center;

          background: white;
        }

        .heroArea {
          position: relative;

          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;

          padding-bottom: 80px;

          overflow: hidden;

          isolation: isolate;
        }

        @media(max-width:700px) {
          .heroArea {
            position: relative;

            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;

            padding-bottom: 40px;

            overflow: hidden;

            isolation: isolate;
          }
        }
      
        .heroArea::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image: url("/background/personal2.png");
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;

          z-index: -2;
        }

        .heroArea::after {
          content: "";
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 220px;

          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.35) 35%,
            rgba(255,255,255,0.8) 70%,
            #fff 100%
          );

          z-index: -1;
          pointer-events: none;
        }
        .sloganArea {
          width: min(1160px, 95%);
        }

        .sloganBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .slogan {
          font-size: clamp(16px, 8vw, 45px);
          white-space: nowrap;
        }

        .subSlogan {
          font-size: clamp(8px, 4vw, 22px);
          font-weight: 500;
          white-space: nowrap;
        }

        .underContents {
          position: relative;
          width: 100%;
          background: white;

          display:flex;
          justify-content:center;
        }

        @media(max-width:700px) {
          .underContents {
            position: relative;
            width: 100%;
            background: white;

            display:flex;
            flex-direction:column;
          }
        }

        .under_title {
          font-size: clamp(20px, 8vw, 40px);
          font-weight: 500;
          white-space: nowrap;

          margin:4px;
        }

        .under_box {
          display: flex;
          flex-direction: column;
          background-color: rgb(235, 238, 218);
          border-radius: 8px;
          margin:3px;
          min-width:370px;
        }
        
        .money_box_inner {
          display:flex;
          padding:3px;
        }

        @media(max-width:700px){
          .money_box_inner {
            display:grid;
            grid-template-columns: repeat(
              2,
              minmax(150px, 220px)
            );
          }
        }

        .money_box {
          display:flex;
          flex-direction:column;

          background-color: rgb(247, 248, 245);
          border-radius: 8px;
          margin: 3px;

          padding:6px;
        }

        .fee_title {
          font-size:clamp(16px,3vw,20px);
          font-weight:600;
          white-space: nowrap;
        }
        .fee {
          font-size:clamp(20px,4vw,32px);
          font-weight:600;
          white-space: nowrap;
        }

        .detail {
          background-color:rgb(3, 102, 3);
          border-radius:999px;

          display:flex;
          width:270px;
          height:45px;

          justify-content:center;
          align-items:center;

          color:white;

          margin-bottom:5px;
        }
        .detail_white {
          background-color:rgb(247, 252, 247);
          border:1px solid black;
          border-radius:999px;

          display:flex;
          width:270px;
          height:45px;

          justify-content:center;
          align-items:center;

          color:black;

          margin-bottom:5px;
        }
      `}</style>
    </>
  );
}