"use client";
import SpritCard from "@/components/Home/SpritCard";

export default function HomeClient(){
  return(
    <>
      <div className="container">
        <div className="splitInner">
          <SpritCard
              next="/money"
              image="/sp_kojin.png"
              title="個人・ご家族の方"
              subTitle="暮らしや住まいのお困りごとをサポート"
              descrption="
                片付け・引っ越し・生活支援・空き家管理など
                安心して暮らすためのお手伝いをします"
              color="rgb(3, 102, 3)"
          />
          <SpritCard
              image="/sp_hojin.png"
              title="法人・福祉関係者の方"
              subTitle="利用者様・ご家族への支援から、施設のお困りごとまで"
              descrption="
                介護、障害福祉、ケアマネジャー、地域包括支援センター、
                民生委員、相談支援専門員など"
              color="rgb(2, 38, 134)"
          />
          <SpritCard
              image="/sp_connect.png"
              title="居宅支援事業所コネクト"
              subTitle="介護保険・ケアプラン等のご相談"
              descrption="
                ケアプラン作成・介護保険の手続き・
                関係機関との連携をサポートします。"
              color="rgb(255, 150, 52)"
          />
        </div>
      </div>
      <style jsx>{`
        .splitInner {
          display: grid;
          grid-template-columns: repeat(
            3,
            minmax(360px, 380px)
          );
          gap: 10px;
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
          justify-content:center;
        }
      `}
      </style>
    </>
  );
  }