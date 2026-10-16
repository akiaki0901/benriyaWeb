
import { requestGoogleAppScript } from "@/server/googleApp";
import { savePicturesToCloudinary } from "@/server/cloudinary";

import type { CloudinaryEnv } from "@/server/cloudinary";

import type {
  ReservationBody,
  ReservationRecord,
} from "@/types/reservation";

type Env = CloudinaryEnv & {
  GOOGLE_APPS_SCRIPT_URL: string;
  GOOGLE_APPS_SCRIPT_SECRET : string;
};

type ReservationContext = {
  request: Request;
  env: Env;
};

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILE_COUNT = 5;

export async function onRequestPost({
  request,
  env,
}: ReservationContext): Promise<Response> {
  try {
    const formData = await request.formData();


    // 文字列データを取り出す
    const getString = (key: string): string => {
      const value = formData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const body: ReservationBody = {
      name: getString("name"),
      phone: getString("phone"),
      email: getString("email"),
      address: getString("address"),
      requestContent: getString("requestContent"),
      preferredDate: getString("preferredDate"),
    };

    // 必須項目の確認
    if (
      !body.name ||
      !body.phone ||
      !body.email ||
      !body.requestContent
    ) {
      return Response.json(
        {
          success: false,
          message: "必須項目が入力されていません",
        },
        { status: 400 }
      );
    }

    // 画像を取り出す
    const files = formData.getAll("images[]");

    if (files.length > MAX_FILE_COUNT) {
      return Response.json(
        {
          success: false,
          message: "画像は5枚までです",
        },
        { status: 400 }
      );
    }

    // Fileであることを確認
    const images: File[] = [];

    for (const file of files) {
      if (!(file instanceof File)) {
        return Response.json(
          {
            success: false,
            message: "画像データが不正です",
          },
          { status: 400 }
        );
      }

      if (
        !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
        file.size > MAX_FILE_SIZE ||
        file.size === 0
      ) {
        return Response.json(
          {
            success: false,
            message: "画像形式またはサイズが不正です",
          },
          { status: 400 }
        );
      }

      images.push(file);
    }
    

    // Cloudinaryに画像を保存
    const imageUrls = await savePicturesToCloudinary(images,env);

    // Apps Scriptに送るデータを作成
    const reservation: ReservationRecord = {
      ...body,
      imageUrls,
    };

    // スプレッドシートへ保存
    await requestGoogleAppScript(reservation,env.GOOGLE_APPS_SCRIPT_URL,env.GOOGLE_APPS_SCRIPT_SECRET);

    return Response.json({
      success: true,
      message: "予約を受け付けました",
    });

  } catch (error) {
    console.error("予約エラー:", error);

    return Response.json(
      {
        success: false,
        message: "予約処理に失敗しました",
      },
      { status: 500 }
    );
  }
}