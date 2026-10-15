"use client";

import Link from "next/link";

type Props = {
  image:string;
  title:string;
  subTitle:string;

  descrption:string;

  color:string;
  hover_color:string;
  next?:string;
}

export default function SpritCard({
  image,
  title,
  subTitle,
  descrption,
  color,
  hover_color,
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
                <NextButton color={color} hover_color={hover_color} />
              </Link>
            ) : (
              <NextButton color={color} hover_color={hover_color} />
            )}
         </div>
          
        </div>
        <style jsx>{`
          .card{
            display:flex;
            flex-direction:column;
            align-items:center;
            max-width:380px;

            background-color:white;
            border:2px solid rgba(224, 220, 220,0.7);
            border-radius:10px;

            margin:10px;

            box-shadow:0 4px 5px rgba(0,0,0,0.15);
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
            margin:5px 16px;
            color:${color};
          }

          p {
            padding:10px;
            font-size:16px;
            font-weight:500;
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
    hover_color
  }:{
    color:string;
    hover_color:string;
  }
){
  return(
  <>
    <button
      className="btn"
     style={{
      display:"flex",
      height:"45px",
      padding:"4px 30px",
      alignSelf:"center",
      alignItems:"center",
      borderRadius:"999px",
      color:"white"
     }}
    >
      <span>詳しくはこちら ▶</span>
    </button>
    <style jsx>{`
      .btn {
        background-color:${color};
        margin-bottom:5px;
      }

      .btn:hover {
        background-color:${hover_color};
      }
    `}</style>
  </>);
}