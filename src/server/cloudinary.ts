import {
  v2 as cloudinary,
  type UploadApiResponse,
} from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function savePicturesToCloudinary(
  files: File[]
): Promise<string[]> {

  const results = await Promise.all(
    files.map(async (file) => {

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await new Promise<UploadApiResponse>(
        (resolve, reject) => {

          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "genbaPicture",
              resource_type: "image",
              unique_filename: true,
              overwrite: false,
              transformation: [
                {
                  width: 1200,
                  crop: "limit",
                },
              ],
            },
            (error, result) => {
              if (error || !result) {
                reject(error ?? new Error("画像のアップロードに失敗しました"));
                return;
              }

              resolve(result);
            }
          );

          stream.end(buffer);
        }
      );

      return result.secure_url;
    })
  );

  return results;
}