export type CloudinaryEnv = {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
};

// パラメータを名前順に並べ、API Secretを末尾に付けて署名する
async function createSignature(
  params: Record<string, string>,
  apiSecret: string,
): Promise<string> {
  const payload = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(payload + apiSecret),
  );

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function savePicturesToCloudinary(
  files: File[],
  env: CloudinaryEnv,
): Promise<string[]> {
  if (files.length === 0) {
    return [];
  }

  const {
    CLOUDINARY_CLOUD_NAME: cloudName,
    CLOUDINARY_API_KEY: apiKey,
    CLOUDINARY_API_SECRET: apiSecret,
  } = env;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinaryの環境変数が設定されていません");
  }

  const endpoint =
    `https://api.cloudinary.com/v1_1/` +
    `${encodeURIComponent(cloudName)}/image/upload`;

  const imageUrls: string[] = [];

  // 同時アップロードによるメモリ使用量を抑えるため、順番に送信する
  for (const file of files) {
    const params: Record<string, string> = {
      folder: "genbaPicture",
      overwrite: "false",
      timestamp: Math.floor(Date.now() / 1000).toString(),
      transformation: "c_limit,w_1200",
      unique_filename: "true",
    };

    const signature = await createSignature(params, apiSecret);

    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("api_key", apiKey);
    formData.append("signature", signature);

    for (const [key, value] of Object.entries(params)) {
      formData.append(key, value);
    }

    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      signal: AbortSignal.timeout(30_000),
    });

    // Content-TypeはFormDataに応じて自動設定されるため指定しない
    if (!response.ok) {
      throw new Error(
        `Cloudinaryへのアップロードに失敗しました: ${response.status}`,
      );
    }

    const result: unknown = await response.json();

    if (
      typeof result !== "object" ||
      result === null ||
      !("secure_url" in result) ||
      typeof result.secure_url !== "string" ||
      !result.secure_url.startsWith("https://")
    ) {
      throw new Error("Cloudinaryから有効な画像URLが返されませんでした");
    }

    imageUrls.push(result.secure_url);
  }

  return imageUrls;
}