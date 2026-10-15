import Icon from "./Icon";
const services = [
  {
    icon: "home" as const,
    title: "家財整理・遺品整理",
    sub: "生前整理・残置物対応",
  },
  { icon: "truck" as const, title: "引越し・運搬", sub: "搬出・運搬・設置" },
  {
    icon: "clean" as const,
    title: "清掃・クリーニング",
    sub: "ハウスクリーニング",
  },
  {
    icon: "tools" as const,
    title: "修繕・原状回復",
    sub: "壁紙・床・設備など",
  },
  { icon: "home" as const, title: "空き家管理", sub: "草刈り・清掃・見回り" },
  {
    icon: "people" as const,
    title: "介護保険外サービス",
    sub: "生活支援・見守り等",
  },
  {
    icon: "document" as const,
    title: "各種手続き・士業紹介",
    sub: "専門家との連携",
  },
];
export default function CanDo() {
  return (
    <section className="section">
      <h2>プロジェクトホープができること</h2>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <Icon name={s.icon} size={44} />
            <h3>{s.title}</h3>
            <p>{s.sub}</p>
          </div>
        ))}
      </div>
      <p className="note">
        その他、住まいと暮らしに関するあらゆるお困りごとに対応します。
      </p>
      <style jsx>{`
        .section {
          max-width: 1440px;
          margin: auto;
          padding: 0 clamp(14px, 3.5vw, 50px) 16px;
          color: #082f69;
        }
        h2 {
          text-align: center;
          font-family: serif;
          font-size: clamp(22px, 2.4vw, 34px);
          margin: 0 0 12px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          min-height: 120px;
          padding: 10px 4px;
          border: 1px solid #d9dfe5;
          border-radius: 7px;
          background: #fff;
          text-align: center;
        }
        .card h3 {
          font-size: clamp(10px, 1.05vw, 15px);
          margin: 6px 0 0;
          white-space: nowrap;
        }
        .card p {
          font-size: clamp(9px, 0.78vw, 11px);
          color: #33404e;
          margin: 5px 0 0;
          white-space: nowrap;
        }
        .note {
          text-align: center;
          color: #24364c;
          font-weight: 600;
          font-size: 14px;
          margin: 12px 0 0;
        }
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .card h3 {
            font-size: 13px;
          }
          .card p {
            font-size: 10px;
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .card h3,
          .card p {
            white-space: normal;
          }
          .note {
            font-size: 11px;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
