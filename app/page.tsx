
import Pagelayout from "@/components/Pagelayout";
import HomeClient from "@/components/Home/HomeClient";

export const metadata={
  title: "吉岡便利屋 | 軽トラで向かいます!",
  description: "困ったときの吉岡便利屋!どんなことでも相談ください!!"
}

export default function Home() {
  return (
    <Pagelayout>
      <div style={{minHeight:"85vh"}}>
        <HomeClient/>
      </div>
    </Pagelayout>
  );
}
