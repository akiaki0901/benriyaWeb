"use client";

import Link from "next/link";

type Props = {
  image:string;
  title:string;
  subTitle:string;

  descrption:string;

  color:string;
  next?:string;
}

export default function SpritCard({
  image,
  title,
  subTitle,
  descrption,
  color,
  next
}:Props){
    return(
      <>
        <div className="card">

          {image&&<img 
            alt="image"
            src={image}
            width={380}
          />}
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>{descrption}</p>
          <div className="buttonArea">
            {next ? (
              <Link href={next}>
                <NextButton color={color} />
              </Link>
            ) : (
              <NextButton color={color} />
            )}
         </div>
          
        </div>
        <style jsx>{`
          .card{
            display:flex;
            flex-direction:column;

            max-width:380px;

            border:2px solid rgb(224, 220, 220);
            border-radius:10px;

            padding:px;
            margin:10px;

            
          }
          
          .buttonArea {
            margin-top: auto;
            margin-bottom:8px;
            display: flex;
            justify-content: center;
          }

          h1{
            font-size:28px;
            font-weight:600;
            padding:3px 0px 0px 3px;
            color:${color};
          }

          h2{
            font-size:17px;
            font-weight:500;
            margin-left:16px;
            color:${color};
          }

          p {
            padding:10px;
            font-size:16px;
            color:black;
          }
          
          img {
            border-radius:10px;
            padding:2px;
          }
        `}</style>
      </>
    );
}

function NextButton({
    color,
  }:{
    color:string;
  }
){
  return(
  <>
    <div 
     style={{
      display:"flex",
      height:"40px",
      backgroundColor:color,
      color:"white",
      padding:"4px 15px",
      alignSelf:"center",
      alignItems:"center",
      borderRadius:"999px",
     }}
    >
      <span>詳しくはこちら</span>
    </div>
  </>);
}