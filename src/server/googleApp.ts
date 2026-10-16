import type { ReservationRecord } from "@/types/reservation";

export async function requestGoogleAppScript(
  body: ReservationRecord,
  url: string,
  apiToken:string
): Promise<void> {

  if (!url) {
    throw new Error(
      "GOOGLE_APPS_SCRIPT_URL が設定されていません"
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
    body: JSON.stringify({...body,apiToken:apiToken}),
    cache: "no-store",
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(
      `Apps Scriptへの送信に失敗しました: ${response.status}`
    );
  }

  const text = await response.text();

  let result: unknown;

  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(
      "Apps Scriptから正しいJSONが返されませんでした"
    );
  }

  if (
    typeof result !== "object" ||
    result === null ||
    !("success" in result) ||
    result.success !== true
  ) {
    console.log(result);
    throw new Error("Apps Scriptで予約保存に失敗しました");
  }
}