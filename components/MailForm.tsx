"use client";
import { useState } from "react";
import styles from "./mail.module.css";


export default function MailForm(){
    type Mail ={name:string,tell:string,email:string,address:string,content:string,preferredDate:string};
    type idfile ={id:number,src:File|null};
    const [mail,setMail] = useState<Mail>({name:"",tell:"",email:"",address:"",content:"",preferredDate:""});
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
            if(res.ok){
                saveReservation({
                    name:mail.name,
                    phone:mail.tell,
                    email:mail.email,
                    address:mail.address,
                    requestContent:mail.content,
                    preferredData:mail.preferredDate
                });
                alert("成功");
            }
                
        }catch(error){
            console.error(error);
            alert("送信に失敗しました");
        }finally{
            setLoading(false)
        }
        
        
    }

    async function saveReservation(data:{
        name:string;
        phone:string;
        email:string;
        address:string;
        requestContent:string;
        preferredData:string;
    }) {
        alert("スプレッドシート")
        const responce = await fetch(
            "api/reservation",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)
            },
        );

        const result = await responce.json();

        if(!result.success){
            alert("スプレッドシートに保存失敗")
            throw new Error(
                result.message ?? "スプレッドシートへの保存に失敗しました"
            );
            
        }
        if(result.success){
            alert("スプレッドシートに保存")
        }
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>ご依頼メール送信フォーム</h1>
            <p className={styles.subtitle}>お名前</p>
            <input
            className={styles.input}
            value={mail.name}
            onChange={(e)=>setMail({name:e.target.value,tell:mail.tell,email:mail.email,address:mail.address,content:mail.content,preferredDate:mail.preferredDate})}
            /*onBlur={()=>setMail({name:input,tell:mail.tell,mail:mail.mail,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>電話番号</p>
            <input
            className={styles.input}
            value={mail.tell}
            onChange={(e)=>setMail({name:mail.name,tell:e.target.value,email:mail.email,address:mail.address,content:mail.content,preferredDate:mail.preferredDate})}
            /*onBlur={()=>setMail({name:mail.name,tell:input,mail:mail.mail,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>メールアドレス</p>
            <input
            className={styles.input}
            value={mail.email}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:e.target.value,address:mail.address,content:mail.content,preferredDate:mail.preferredDate})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:input,address:mail.address,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>ご住所 (市町区村までお願いします)</p>
            <input
            className={styles.input}
            value={mail.address}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:mail.email,address:e.target.value,content:mail.content,preferredDate:mail.preferredDate})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:mail.mail,address:input,content:mail.content,})}*/
            />
            <p className={styles.subtitle}>依頼内容 (どんなことでも気軽にどうぞ!)</p>
            <textarea
            className={styles.textarea}
            value={mail.content}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:mail.email,address:mail.address,content:e.target.value,preferredDate:mail.preferredDate})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:mail.mail,address:mail.address,content:input,})}*/
            />
            <p className={styles.subtitle}>希望の日時</p>
            <input
            type="date"
            id="start"
            name="preferredDate"
            max="2026-12-31"
            min="2026-7-21"
            className={styles.input}
            value={mail.preferredDate}
            onChange={(e)=>setMail({name:mail.name,tell:mail.tell,email:mail.email,address:mail.address,content:mail.content,preferredDate:e.target.value})}
            /*onBlur={()=>setMail({name:mail.name,tell:mail.tell,mail:mail.mail,address:input,content:mail.content,})}*/
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
                (file.src&&<img key={file.id} className={styles.image} src={URL.createObjectURL(file.src)} alt="" width={100} height={100}/>)
            )}</div>
            <span className={styles.btns}>
                <button className={styles.btn}
                onClick={()=>submit()}
                >
                    送信
                </button>
                <button className={styles.btn}
                onClick={()=>{setMail({name:"",tell:"",email:"",address:"",content:"",preferredDate:""});setImages([]);setImgsize(0);}}
                >
                    クリア
                </button>
            </span>
        </div>
    );
}