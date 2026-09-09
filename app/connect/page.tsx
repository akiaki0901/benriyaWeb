
import NoneImageLayout from "@/components/NoneImageLayout";
import ConnectClient from "@/components/connect";
export const metadata={
  title: "個人・ご家族の方ページ",
  description: "個人・家族のお客様へ提供できるサービスを紹介。"
}

export default function Home() {
  return (
    <NoneImageLayout>
      <ConnectClient/>
    </NoneImageLayout>
  );
}