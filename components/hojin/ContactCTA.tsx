import Icon from "./Icon";
export default function ContactCTA() {
  return (
    <section className="cta">
      <div className="photo" />
      <div className="message">
        <h2>困ったら、まずプロジェクトホープ。</h2>
        <p>どんな小さなことでも、まずはご相談ください。</p>
        <div className="mini">
          <span>ご相談・お見積り無料</span>
          <span>最短即日対応</span>
          <span>まとめてお任せ</span>
          <span>秘密厳守</span>
        </div>
      </div>
      <div className="contact">
        <div className="tel">
          <Icon name="phone" size={31} />
          <strong>0120-123-456</strong>
        </div>
        <small>受付時間 9:00〜18:00（年中無休）</small>
        <button>
          <Icon name="mail" size={21} />
          お問い合わせはこちら
        </button>
      </div>
      <style jsx>{`
        .cta {
          min-height: 170px;
          display: grid;
          grid-template-columns: 25% 1fr auto;
          align-items: center;
          background: #f3f6f5;
          color: #082f69;
          border-top: 1px solid #dce1e6;
        }
        .photo {
          align-self: stretch;
          background: url("/hojin-contact.png") center/cover no-repeat;
        }
        .message {
          padding: 18px 30px;
        }
        .message h2 {
          font-family: serif;
          font-size: clamp(22px, 2.3vw, 34px);
          margin: 0 0 7px;
        }
        .message p {
          font-size: 12px;
        }
        .mini {
          display: flex;
          gap: 20px;
          font-size: 10px;
          font-weight: 700;
          margin-top: 16px;
        }
        .contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 40px 18px 10px;
        }
        .tel {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tel strong {
          font-family: serif;
          font-size: clamp(24px, 2.5vw, 36px);
          white-space: nowrap;
        }
        .contact small {
          font-size: 9px;
        }
        .contact button {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          border: 0;
          border-radius: 5px;
          background: #39752d;
          color: white;
          padding: 12px 24px;
          font-weight: 700;
        }
        @media (max-width: 800px) {
          .cta {
            grid-template-columns: 1fr;
          }
          .photo {
            height: 200px;
          }
          .message {
            text-align: center;
            padding: 22px 16px;
          }
          .mini {
            flex-wrap: wrap;
            justify-content: center;
          }
          .contact {
            padding: 10px 18px 26px;
          }
        }
      `}</style>
    </section>
  );
}
