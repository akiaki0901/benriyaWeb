"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./mail.module.css";


export default function MailForm(){
    type Mail ={name:string,tell:string,email:string,address:string,content:string};
    type idfile ={id:number,src:File|null};
    const [mail,setMail] = useState<Mail>({name:"",tell:"",email:"",address:"",content:""});
    const [images,setImages] = useState<idfile[]>([]);
    const MAX_SIZE = 5 * 1024* 1024;
    const [imgsize,setImgsize] = useState(0);

    const[loading,setLoading] = useState(false);


    const submit = async()=>{
        if(loading)return;
        
        if(!mail.name){alert("名前を入力してください");return;}
        if(!mail.email){alert("メールアドレスを入力してください");return;}
        if(!mail.content){alert("依頼内容を入力してください");return;}
        if(mail.content.length>1000){alert("1000文字以下にしてください");return;}
        setLoading(true);
        try{
            const formData = new FormData();
            formData.append("name",mail.name);
            formData.append("tell",mail.tell);
            formData.append("email",mail.email);
            formData.append("address",mail.address);
            formData.append("content",mail.content);
            for(let i=0;i<images.length;i++){
                formData.append("images[]",images[i].src as File);
            }
            const res = await fetch("/api/send",{
            method:"POST",
            /*formdataを送る形式にしたので消す
            headers:{
                "Content-Type":"application/json"
            },*/
            body:formData
             });
            if(!res.ok)throw new Error("送信失敗");
            if(res.ok)alert("成功");
                
        }catch(error){
            alert("送信に失敗しました");
        }finally{
            setLoading(false)
        }
        
        
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ご依頼メール送信フォーム</h1>
            <p className={styles.subtitle}>お名前</p>
            <input
            className={styles.input}
            value={mail.name}
            onChange={(e)=>setMail({name:e.target.value,tell:mail.tell,email:mail.email,address:mail.address,content:mail.content,})}
            /*onBlur={()=>setMail({name:input,tell:mail.tell,mail:mail.mail,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>電話番号</p>
            <input
            className={styles.input}
            value={mail.tell}
            onChange={(e)=>setMail({name:mail.name,tell:e.target.value,email:mail.email,address:mail.address,content:mail.content,})}
            /*onBlur={()=>setMail({name:mail.name,tell:input,mail:mail.mail,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>メールアドレス</p>
            <input
            className={styles.input}
            value={mail.email}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:e.target.value,address:mail.address,content:mail.content,})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:input,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>ご住所 (市町区村までお願いします)</p>
            <input
            className={styles.input}
            value={mail.address}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:mail.email,address:e.target.value,content:mail.content,})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:mail.mail,address:input,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>依頼内容 (どんなことでも気軽にどうぞ!)</p>
            <textarea
            className={styles.textarea}
            value={mail.content}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:mail.email,address:mail.address,content:e.target.value,})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:mail.mail,address:mail.address,content:input,})}*/
            />
            <p className={styles.subtitle}>写真 ()</p>
            <input
                id="file"
                type="file"
                accept="image/"
                capture="environment"
                hidden
                onChange={(e)=>{

                    const file = e.target.files?.[0] as File;
                    const size = file?.size;
                    if(imgsize+size>MAX_SIZE)alert("容量を超えてます")
                    const id = Date.now();
                    const i_f:idfile = {id:id,src:file};
                    if(file){
                        setImages([...images,i_f]);
                    }

                }}
            />
            <label htmlFor="file">

                +画像を追加

            </label>
            <div className={styles.images}>{images.map((file)=>
                (<img key={file.id} className={styles.image} src={URL.createObjectURL(file.src)} alt="" width={100} height={100}/>)
            )}</div>
            <span className={styles.btns}>
                <button className={styles.btn}
                onClick={()=>submit()}
                >
                    送信
                </button>
                <button className={styles.btn}
                onClick={()=>{setMail({name:"",tell:"",email:"",address:"",content:"",});setImages([]);setImgsize(0);}}
                >
                    クリア
                </button>
            </span>
        </div>
    );
}