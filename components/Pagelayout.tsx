"use client";

import Header from "./Header";
import Footer from "./Footer";

import { useState,useEffect } from "react";

export default function Pagelayout({
  children,
  background,
  mobile_background,
  imgPos
}:{
  children:any;
  background?:string;
  mobile_background?:string;
  imgPos?:{
    pc?:string;
    mobile?:string
  }
}){
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
    const media = window.matchMedia(`(max-width: 700px)`);

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
        <div className="hero">
          <Header/>
          <div style={{
            marginTop:`${isMobile?"80px":"120px"}`,
          }}>
            {children}
          </div>
          <Footer/>
        </div>
        <style jsx>{`
          .hero {
            background-image: url("${(isMobile&&mobile_background)?mobile_background:background}");
            background-repeat: no-repeat;
            background-position: ${imgPos?.pc??"center center"};
            background-size: auto 100%;
            background-color: #fff;
          }
          
          .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background: rgba(255, 255, 255, 0.12);
          }

          .hero-content {
            position: relative;
            z-index: 1;
          }

          @media (max-width: 768px) {
            .hero {
              background-size: cover;
              background-position: ${imgPos?.mobile??"26% center"};
          }
        
        `}</style>
      </>
  );
}