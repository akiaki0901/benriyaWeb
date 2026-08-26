
import Pagelayout from "@/components/Pagelayout";
import HomeClient from "@/components/Home/HomeClient";

export const metadata={
  title: "プロジェクトホープ | トップ",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout
      background="/background/home.png"
    >
      <div style={{minHeight:"85vh",
        display:"flex",
        justifyContent:"center"
      }}>
        <HomeClient/>
      </div>
    </Pagelayout>
  );
}
