import ZireiCard from "./ZireiCard";
const cases = [
  {
    number: "01",
    title: "施設長・管理者の方へ",
    subTitle: "入退去・設備・緊急対応など施設運営をトータル支援",
    image: "/sisetu-tyo.png",
    color: "#0b326f",
    hover: "#315887",
    next: "/hojin-detail",
    items: [
      "急な退去で部屋を空けたい",
      "残置物の片付け・原状回復",
      "設備の修繕・清掃・メンテナンス",
      "ゴミ屋敷状態の片付け・緊急対応",
      "イベント・人手不足のサポート",
    ],
  },
  {
    number: "02",
    title: "ケアマネジャーの方へ",
    subTitle: "利用者様・ご家族からの相談に安心して対応",
    image: "/care-manager.png",
    color: "#397532",
    hover: "#5b9155",
    items: [
      "施設入居に伴う家財整理・引越し",
      "空き家の管理・片付け",
      "保険外サービス（付き添い・同行など）",
      "家族への現状説明・各種サポート",
      "相談先に困った時のパートナーとして",
    ],
  },
  {
    number: "03",
    title: "民生委員・自治体・士業の方へ",
    subTitle: "地域・相続・住まいに関する実際のお困りごとをお手伝い",
    image: "/minsei-iin.png",
    color: "#925218",
    hover: "#ad713b",
    items: [
      "独居高齢者の生活環境のお困りごと",
      "相続に伴う家財整理・遺品整理",
      "空き家の片付け・管理",
      "行政からの依頼・地域事業のサポート",
      "士業の案件に関する現場対応のサポート",
    ],
  },
];
export default function Zirei() {
  return (
    <section className="section">
      <h2>
        <span>＼</span> 活用事例 <small>（どんな場面でもご相談ください）</small>{" "}
        <span>／</span>
      </h2>
      <div className="cards">
        {cases.map((c) => (
          <ZireiCard
            key={c.number}
            number={c.number}
            title={c.title}
            subTitle={c.subTitle}
            image={c.image}
            color={c.color}
            hoverColor={c.hover}
            next={c.next}
          >
            {c.items.map((i) => (
              <div className="item" key={i}>
                ✓&nbsp; {i}
              </div>
            ))}
          </ZireiCard>
        ))}
      </div>
      <style jsx>{`
        .section {
          max-width: 1440px;
          margin: auto;
          padding: 18px clamp(14px, 3.5vw, 50px);
        }
        h2 {
          text-align: center;
          color: #082f69;
          font-family: serif;
          font-size: clamp(21px, 2.4vw, 34px);
          margin: 0 0 16px;
        }
        h2 span {
          font-weight: 400;
        }
        h2 small {
          font-size: 0.65em;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .item {
          font-size: 13px;
          line-height: 1.75;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .cards {
            gap: 10px;
          }
        }
        @media (max-width: 700px) {
          .section {
            padding-top: 24px;
          }
          h2 small {
            display: block;
            margin-top: 5px;
          }
          .cards {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
