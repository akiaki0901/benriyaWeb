"use client"
import { useEffect, useState } from "react";
const mobile = 900;

export default function ServiceCard(){
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${mobile}px)`);

    const update = () => {
      setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return(
    <>
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      }}>
        <div className="card">
          <Icon
            img="/Icons/kazai-seiri.svg"
            title="家財整理"
            isMobile={isMobile}
          />
          {!isMobile&&<div className="line"></div>}
          <Icon
              img="/Icons/seizen-seiri.svg"
              title="生前整理"
              isMobile={isMobile}
          />
          {!isMobile&&<div className="line"></div>}
          <Icon
              img="/Icons/hikkoshi-unpan.svg"
              title="引っ越し・運搬"
              isMobile={isMobile}
          />
          {!isMobile&&<div className="line"></div>}
          <Icon
              img="/Icons/kaigo-hokengai.svg"
              title="介護保険外サービス"
              isMobile={isMobile}
          />
          {!isMobile&&<div className="line"></div>}
          <Icon
              img="/Icons/akiya.svg"
              title="空き家管理"
              isMobile={isMobile}
          />
          {isMobile&&<div style={{
            backgroundColor:"rgb(3, 102, 3)",
            borderRadius:"999px",
            fontSize:14,
            color:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",

            height:"40px"
          }}>
            全てのサービスを見る ▶
          </div>}
        </div>
        {!isMobile&&<div className="all">
          全てのサービスを見る ▶
        </div>}
      </div>

      <style jsx>{`
        .card{
          display:flex;
          
          border:1px solid rgb(221, 221, 221);
          border-radius:10px;
          background-color:rgba(255, 255, 255, 0.7);
          box-shadow:0 4px 5px rgba(0,0,0,0.15);

          justify-content:space-between;
          align-items:center;

          margin:15px 5px 5px 5px;
          padding:5px 10px;
        }
        @media(max-width:${mobile}px){
          .card {
            display:grid;
            grid-template-columns: repeat(
              2,
              minmax(150px, 200px)
            );
            gap:3px 0px;
            margin:5px;
            border-radius:10px;
            background-color:rgba(255, 255, 255, 0.62);
            box-shadow:0 4px 5px rgba(0,0,0,0.15);
          }
        }
        .line {
          width: 1px;              
          height: 110px;           
          background-color: #b1b0b0;  
          border-radius:999px
        }

        .all {
          background-color:rgb(3, 102, 3);
          border-radius:999px;

          display:flex;
          width:270px;
          height:45px;

          justify-content:center;
          align-items:center;

          color:white;
        }
      `}</style>
    </>
  );
}

function Icon({
  img,
  title,
  isMobile
}:{
  img?:string;
  title:string;
  isMobile:boolean;
}){
  return(
    <>
      <div className="container">
         {img && <img 
            alt="icon"
            src={img}
            width={isMobile? 50:80}
          />}
        <h2 className="title">{title}</h2>
      </div>

      <style jsx>{`
        .container {
          display:flex;
          flex-direction:column;
          align-items:center;
          padding:5px 10px 5px 10px;
          width:260px;

          justify-self:center;
        }
        .title {
          font-weight:500;
          font-size:clamp(12px,8vw,20px);
          white-space: nowrap;
        }
        @media(max-width:${mobile}px){
          .container {
            display:flex;
            flex-direction:column;
            align-items:center;
            padding:3px 10px 3px 10px;

            max-width:120px;
          }
          
          
        }
        @media(max-width:${mobile}px){
          .title {
            font-weight:500;
            font-size:clamp(8px,5vw,14px);
            white-space: nowrap;
          }
        }
        
      `}</style>
    </>
  );
}