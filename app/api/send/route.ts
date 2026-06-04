import { Resend } from "resend";
import { NextResponse } from "next/server";
import {v2 as cloudinary, UploadApiResponse} from "cloudinary";


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    try{

        const body = await req.formData();

        const files = body.getAll("images[]") as File[];
        
        const results = await Promise.all(
            files.map(async(file)=>{
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const result:UploadApiResponse = await new Promise<UploadApiResponse>((resolve,reject)=>{
                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder:"genbaPicture",
                            resource_type:"image",
                            unique_filename:true,
                            overwrite:false,
                            transformation:[
                                {
                                    width:1200,
                                    crop:"limit"
                                }
                            ]
                        },
                        (error,result)=>{
                            if(error||!result){
                                reject(error);
                                console.log(error);
                            }else{
                                resolve(result);
                            }
                        }
                    );
                    stream.end(buffer);

                })
                return result;
            })
        );
        console.log(results);
        const imageHTML = results.map((result)=>{
            return `
                <div>
                    <img
                        src = "${result.secure_url}"
                        width = "300"
                    />
                    <p>
                    ${result.secure_url}
                    </p>
                </div>
            `;
        }).join("");
        

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "akiakiunco@gmail.com",
            subject: "ご依頼メール",
            html:`
                <h1>ご依頼メール</h1>
                <span><h2>名前</h2> ${body.get("name")}</span>
                <span><h2>電話番号</h2> ${body.get("tell")}</span>
                <span><h2>メールアドレス</h2> ${body.get("email")}</span>
                <span><h2>住所:</h2> ${body.get("address")}</span>
                <span><h2>依頼内容</h2> ${body.get("content")}</span>
                ${imageHTML}
            `,
        });

        return NextResponse.json(data);
    
    }catch(error){
        console.log(error);
        return NextResponse.json(
            {error},
            {status:500}
        );
    }

    
}