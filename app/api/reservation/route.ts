
import { NextResponse } from "next/server";

const appsScriptURL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function POST(request:Request){
    try{
        if(!appsScriptURL){
            throw new Error("環境変数 GOOGLE_APPS_SCRIPT_URL が設定されていません",);
        }

        const body = await request.json();

        const responce = await fetch(appsScriptURL,{
            method:"POST",
            headers:{
                "content-type":"text/plain; charset=utf-8"
            },
            body: JSON.stringify({
                ...body,
            }),
            cache:"no-store"
        });

        const text = await responce.text();

        let result:unknown;

        try{
            result = JSON.parse(text);
        }catch{
            console.error("Apps ScriptからJSON以外が返されました:", text);

            throw new Error(
                "Apps Scriptから正しいレスポンスが返されませんでした",
            );
        }

        return NextResponse.json(result);
    }catch(error){
        console.error("予約保存エラー:",error);

        return NextResponse.json(
            {
                success:false,
                message:
                    error instanceof Error?
                    error.message:"予約保存に失敗しました"
            },
            {
                status:500,
            }
        );
    }
}