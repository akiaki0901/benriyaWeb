"use client";
import SpritCard from "@/components/Home/SpritCard";
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

export default function HomeClient(){
  return(
    <>
      <div className="container">
        <h1 className={`${font_zen_old_mincho.className} slogan`}>
          住まいと暮らしの工務店
        </h1>
        <div className="sloganBox">
          <span className="subSlogan">「 誰に頼めばいいのかわからない。」</span>
          <span className="subSlogan">そんな困りごとに私たちが力を合わせます。</span>
        </div>
        <div className="splitInner">
          <SpritCard
              next="/personal"
              image="/sp_kojin2.png"
              title="個人・ご家族の方"
              subTitle="暮らしや住まいのお困りごとをサポート"
              descrption="
                片付け・引っ越し・生活支援・空き家管理など
                安心して暮らすためのお手伝いをします"
              color="rgb(3, 102, 3)"
              hover_color="rgb(92, 248, 92)"
          />
          <SpritCard
              image="/sp_hojin.png"
              title="法人・福祉関係者の方"
              subTitle="利用者様・ご家族への支援から、施設のお困りごとまで"
              descrption="
                介護、障害福祉、ケアマネジャー、地域包括支援センター、
                民生委員、相談支援専門員など"
              color="rgb(2, 38, 134)"
              hover_color="rgb(105, 105, 255)"
          />
          <SpritCard
              image="/sp_connect.png"
              title="居宅支援事業所コネクト"
              subTitle="介護保険・ケアプラン等のご相談"
              descrption="
                ケアプラン作成・介護保険の手続き・
                関係機関との連携をサポートします。"
              color="rgb(255, 150, 52)"
              hover_color="rgb(252, 188, 137)"
          />
        </div>
        <span className="subSlogan" style={{
          marginTop:"10px"
        }}>
          どんな小さなことでも、まずはご相談ください。
        </span>
      </div>
      <style jsx>{`
        .sloganBox {
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .slogan {
          font-size:clamp(30px,8vw,60px);
          white-space: nowrap;
        }
        .subSlogan {
          font-size:clamp(8px,4vw,22px);
          font-weight:500;
          white-space: nowrap;
        }
        .splitInner {
          display: grid;
          grid-template-columns: repeat(
            3,
            minmax(360px, 380px)
          );
          gap: 10px;
          margin-top:10px;
        }

        @media(
          max-width: 700px
        ){
          .splitInner {
            display:flex;
            flex-direction:column;
          }  
        }
        
        .container {
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        
        
        }
      `}
      </style>
    </>
  );
  }