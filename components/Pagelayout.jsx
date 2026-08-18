"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import styles from "./mail.module.css";

export default function Pagelayout({children}){
    /*const [isRock, setIsRock] = useState(localStorage.getItem("develope-pass-broken")!=="true");
    const [input, setInput] = useState("");
   

    const passcheck = ()=>{
        if(input==="0901-develope-mode"){
            localStorage.setItem("develope-pass-broken","true");
            setIsRock(false);
        }
        else{
            alert("passwordが違います。");
        }
    }*/

    return(
        <> 
        <Header/>
        <div style={{marginTop:"130px"}}>{children}</div>
        <Footer/>
        </>
    );
}