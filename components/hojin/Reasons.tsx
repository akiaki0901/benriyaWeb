import Icon from "./Icon";
const reasons = [
  {
    icon: "clock" as const,
    title: "迅速対応",
    text: "急なご依頼にも柔軟に対応。\n最短即日での対応も可能です。",
  },
  {
    icon: "handshake" as const,
    title: "ワンストップ対応",
    text: "複数の業者に依頼する手間なく、\nまとめてお任せいただけます。",
  },
  {
    icon: "heart" as const,
    title: "福祉の現場への理解",
    text: "介護・福祉の現場を知るからこそ、\n寄り添ったサポートができます。",
  },
  {
    icon: "people" as const,
    title: "地域の専門家と連携",
    text: "専門的な工事も信頼できる\nパートナーと協力して対応。",
  },
  {
    icon: "building" as const,
    title: "法人単位での柔軟対応",
    text: "複数施設のご要望や定期対応も\n柔軟にご提案します。",
  },
];
export default function Reasons() {
  return (
    <section className="reasons">
      {reasons.map((r) => (
        <div className="reason" key={r.title}>
          <Icon name={r.icon} size={44} />
          <div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        </div>
      ))}
      <style jsx>{`
        .reasons {
          max-width: 1370px;
          margin: 26px auto 10px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border: 1px solid #dce1e6;
          background: #fff;
        }
        .reason {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #082f69;
          padding: 18px 12px;
          border-right: 1px solid #dce1e6;
        }
        .reason:last-child {
          border: 0;
        }
        h3 {
          font-family: serif;
          font-size: 15px;
          margin: 8px 0;
          color: #082f69;
        }
        p {
          white-space: pre-line;
          font-size: 10px;
          line-height: 1.65;
          color: #263849;
          margin: 0;
        }
        @media (max-width: 700px) {
          .reasons {
            grid-template-columns: 1fr 1fr;
            margin: 18px 14px;
          }
          .reason {
            border-bottom: 1px solid #dce1e6;
          }
          .reason:nth-child(2n) {
            border-right: 0;
          }
          .reason:last-child {
            grid-column: 1/-1;
          }
        }
      `}</style>
    </section>
  );
}
