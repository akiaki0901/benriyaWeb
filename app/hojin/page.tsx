import HojinClient from "@/components/Hojin/HojinClient";
import Pagelayout from "@/components/Pagelayout";

export const metadata={
  title: "プロジェクトホープ | トップ",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout
      background="/background/home.png"
    >
      <div style={{minHeight:"85vh"}}>
        <HojinClient/>
      </div>
    </Pagelayout>
  );
}
