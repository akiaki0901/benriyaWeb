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
       
        <div> 
            {/*{isRock && 
            <div>
                <h1>DevelopeMode Input Password</h1>
                <input
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e)=>{if(e.key==="Enter")passcheck();}}
                //onBlur={()=>setMail({name:input,tell:mail.tell,mail:mail.mail,address:mail.address,content:mail.content,})}
                />
            </div>}*/}
            {/*{!isRock &&*/} 
            <div>
                <Header/>
                <div>{children}</div>
                <Footer/>
            </div>{/*}*/}

        </div>
    );
}