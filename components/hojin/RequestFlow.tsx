const steps = [
  {
    n: "01",
    title: "ご相談・お問い合わせ",
    text: "お電話・フォームより\nお気軽にご連絡ください。",
  },
  {
    n: "02",
    title: "状況の確認",
    text: "内容をお伺いし、現場や\n写真で状況を確認します。",
  },
  {
    n: "03",
    title: "ご提案・お見積り",
    text: "最適なプランとお見積りを\nご提案します。",
  },
  {
    n: "04",
    title: "作業・専門家手配",
    text: "自社または専門家と連携し、\n作業を実施します。",
  },
  {
    n: "05",
    title: "完了・アフターサポート",
    text: "完了後も安心のサポート。\n継続的なご相談も可能です。",
  },
];
export default function RequestFlow() {
  return (
    <section className="wrap">
      <h2>ご依頼の流れ</h2>
      <div className="flow">
        {steps.map((s, i) => (
          <div className="step" key={s.n}>
            <div className="head">
              <b>{s.n}</b>
              <h3>{s.title}</h3>
            </div>
            <p>{s.text}</p>
            {i < steps.length - 1 && <span className="arrow">›</span>}
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrap {
          max-width: 1370px;
          margin: 0 auto;
          padding: 0 14px 22px;
          color: #082f69;
        }
        h2 {
          text-align: center;
          font-family: serif;
          font-size: 27px;
          margin: 5px 0 12px;
        }
        .flow {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }
        .step {
          position: relative;
          border: 1px solid #dce1e6;
          border-radius: 6px;
          padding: 14px;
          background: #fff;
          min-height: 100px;
          box-sizing: border-box;
        }
        .head {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .head b {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #082f69;
          color: #fff;
          font-size: 12px;
        }
        .head h3 {
          font-size: 13px;
          margin: 0;
        }
        .step p {
          white-space: pre-line;
          font-size: 10px;
          line-height: 1.6;
          color: #354457;
          margin: 8px 0 0;
          padding-left: 43px;
        }
        .arrow {
          position: absolute;
          right: -13px;
          top: 38%;
          z-index: 2;
          font-size: 30px;
        }
        @media (max-width: 700px) {
          .flow {
            grid-template-columns: 1fr;
          }
          .step {
            min-height: 0;
          }
          .arrow {
            right: 50%;
            top: auto;
            bottom: -23px;
            transform: rotate(90deg);
          }
          .step p {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
