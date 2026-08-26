import { Noto_Serif_JP } from "next/font/google";
import { BIZ_UDMincho } from "next/font/google";
import { Murecho } from "next/font/google";

import Link from "next/link";

 const font_noto_jp = Noto_Serif_JP({
    subsets:["latin"],
    weight:["500"]
  });
const font_biz = BIZ_UDMincho({
  subsets:["latin"],
  weight:["400"]
  })
const font_murecho = Murecho({
  subsets:["latin"],
  weight:["500"]
  })
export default function Header() {
 

  return (
    <>
      <div className={`back ${font_biz.className}`}>
        {
        //アイコンをつけるときに社名と一緒に入れるボックス
        /*<div style={{display:"flex", marginLeft:"10px"}}>
          <img 
            alt="image"
            src="/Icons/Header.svg"
            width={60}
          /> 
        </div>*/}
        <div className="nameBox">
          <Link href="/"><h1 className="name">(株)プロジェクトホープ</h1></Link>
          <h2 className="subTitle">住まいと暮らしの工務店</h2>
        </div>
        <div className="numberMailInner">
          <div className="callBox">
            <h1 className={`callNumber ${font_murecho.className}`}>📞0123-4567-8910</h1>
            <h2>受付時間9:00~18:00(年中無休)</h2>
          </div>
          <div className="mailButton">
            ✉お問い合わせ
          </div>
       </div>
        
      </div>
      <style jsx>{`
        .name {
          font-size:clamp(17px,3vw,32px);
          white-space: nowrap;
          font-weight:500;
        }
        .callNumber {
          font-size:clamp(14px,2vw,28px);
          white-space: nowrap;
          font-weight:500;
        }
        h2{
          font-size:clamp(12px,2vw,18px);
          white-space: nowrap;
          font-weight:500;
        }
        .back {
          display:flex;
          background-color:rgba(255, 255, 255, 0.9);
          align-items:center;

          position:fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index:1000;
        }
        .nameBox {
          display:flex;
          flex-direction:column;
          align-items:flex-start;

          margin-left:3px;
        }
        .name{
          display:flex;
        }
        .callBox {
          margin-left:auto;
          margin-right:3px;
        }
        .numberMailInner {
          margin:4px;
          margin-left:auto;
          display:flex;
          align-items:center;
        }
        @media(max-width:700px){
          .numberMailInner {
            margin:5px;
            margin-left:auto;
            display:flex;
            flex-direction:column;
            justify-content:center;
          }
        }

        .mailButton {
          background-color:rgb(3, 102, 3);
          border-radius:999px;

          display:flex;

          padding:5px 20px;

          justify-content:center;
          align-items:center;

          color:white;
          font-size:20px;
        }
        @media(max-width:700px){
          .mailButton {
            background-color:rgb(3, 102, 3);
            border-radius:999px;

            display:flex;

            padding:5px 20px;

            justify-content:center;
            align-items:center;

            color:white;
            font-size:12px;
          }
        }
      `}</style>
    </>        
  );
}