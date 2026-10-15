import Icon from "./Icon";

export default function TopContent() {
  return (
    <section className="hero">
      <div className="photo" />

      <div className="content">
        <h1>
          福祉の現場を、
          <br />
          もっとスムーズに。
        </h1>

        <div className="lead">
          「誰に頼めばいいかわからない。」
          <br />
          そんな困りごとに、私たちが力を合わせます。
        </div>

        <p className="copy">
          施設・ケアマネジャー・民生委員・自治体・士業など、
          <br />
          福祉に携わる皆さまのパートナーとして、
          <br />
          住まいと暮らしのあらゆるお困りごとをサポートします。
        </p>

        <div className="features">
          <Feature
            icon="phone"
            title="迅速対応"
            text="最短即日対応"
          />

          <Feature
            icon="people"
            title="ワンストップ対応"
            text="まとめてお任せ"
          />

          <Feature
            icon="heart"
            title="福祉の現場に寄り添う"
            text="安心のサポート"
          />
        </div>
      </div>

      <div className="circle">
        <small>ご相談・お見積り</small>
        <strong>無料</strong>
        <span>迅速対応</span>
        <span>ワンストップ対応</span>
      </div>

      <div className="bottom">
        住まいと暮らしの工務店として、必要なサービスを組み合わせ、解決までサポートします。
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 520px;
          background: #f7f8f8;
          overflow: hidden;
          color: #082c61;
        }

        .photo {
          position: absolute;
          inset: 0;
          background: url("/hojin-top-image.png") center / cover no-repeat;
        }

        .photo::after {
          content: "";
          position: absolute;
          inset: 0;

          background: linear-gradient(
            90deg,
            #fff 0%,
            rgba(255, 255, 255, 0.97) 28%,
            rgba(255, 255, 255, 0.62) 48%,
            transparent 70%
          );
        }

        .content {
          position: relative;
          z-index: 1;

          width: min(680px, 62%);

          padding:
            42px
            clamp(28px, 5vw, 78px)
            88px;

          box-sizing: border-box;
        }

        .content h1 {
          margin: 0;

          font-family: serif;
          font-size: clamp(36px, 4.1vw, 60px);
          line-height: 1.3;
          letter-spacing: 0.04em;
        }

        .lead {
          margin-top: 18px;

          font-size: clamp(14px, 1.15vw, 18px);
          font-weight: 700;
          line-height: 1.75;
        }

        .copy {
          font-size: clamp(12px, 0.95vw, 15px);
          font-weight: 600;
          line-height: 1.8;

          color: #26384e;
        }

        .features {
          display: flex;
          align-items: flex-start;
          gap: clamp(12px, 1.5vw, 22px);

          margin-top: 22px;

          width: max-content;
          max-width: none;
        }

        .circle {
          position: absolute;
          z-index: 2;

          right: 6%;
          top: 51%;

          transform: translateY(-50%);

          width: 150px;
          aspect-ratio: 1;

          border-radius: 50%;

          background: #082f69;
          color: #fff;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          box-shadow: 0 5px 16px #001b3c30;
        }

        .circle strong {
          margin: 2px;

          font-family: serif;
          font-size: 29px;
        }

        .circle span,
        .circle small {
          font-size: 11px;
          font-weight: 700;
        }

        .bottom {
          position: absolute;
          z-index: 3;

          inset: auto 0 0;

          padding: 13px 20px;

          background: #072f68;
          color: white;

          text-align: center;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        @media (max-width: 700px) {
          .hero {
            display: flex;
            flex-direction: column;

            min-height: 0;
          }

          .photo {
            position: relative;

            height: 58vw;
            min-height: 210px;
            max-height: 320px;

            background-position: 62% center;
          }

          .photo::after {
            display: none;
          }

          .content {
            width: 100%;

            padding: 24px 18px;
          }

          .content h1 {
            font-size: clamp(30px, 9vw, 42px);
          }

          .lead {
            font-size: 14px;
          }

          .copy {
            font-size: 12px;
          }

          .copy br {
            display: none;
          }

          .features {
            display: grid;
            grid-template-columns: 1fr;

            width: 100%;

            gap: 10px;
          }

          .circle {
            position: relative;

            right: auto;
            top: auto;

            transform: none;

            width: 125px;

            margin: 0 auto 20px;
          }

          .bottom {
            position: relative;

            font-size: 12px;
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: "phone" | "people" | "heart";
  title: string;
  text: string;
}) {
  return (
    <div className="feature">
      <div className="icon">
        <Icon
          name={icon}
          size={35}
        />
      </div>

      <div className="featureText">
        <b>{title}</b>
        <small>{text}</small>
      </div>

      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;

          gap: 8px;

          color: #062b60;

          flex: 0 0 auto;
          min-width: max-content;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;

          flex: 0 0 auto;
        }

        .featureText {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          flex: 0 0 auto;
          min-width: max-content;
        }

        .featureText b {
          display: block;

          font-size: 12px;
          line-height: 1.4;

          white-space: nowrap;
          word-break: keep-all;
        }

        .featureText small {
          display: block;

          font-size: 10px;
          line-height: 1.4;

          color: #293b50;

          white-space: nowrap;
          word-break: keep-all;
        }

        @media (max-width: 700px) {
          .feature {
            min-width: 0;
          }

          .featureText {
            min-width: 0;
          }

          .featureText b {
            font-size: 13px;
          }

          .featureText small {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}

