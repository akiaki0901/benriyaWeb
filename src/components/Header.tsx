import { BIZ_UDMincho } from "next/font/google";
import { Murecho } from "next/font/google";

import Link from "next/link";

const font_biz = BIZ_UDMincho({
  subsets: ["latin"],
  weight: ["400"],
});

const font_murecho = Murecho({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Header() {
  return (
    <>
      <header className={`back ${font_biz.className}`}>
        <div className="nameBox">
          <Link href="/">
            <h1 className="name">
              (株)プロジェクトホープ
            </h1>
          </Link>

          <h2 className="subTitle">
            住まいと暮らしの工務店
          </h2>
        </div>

        <div className="numberMailInner">
          <div className="callBox">
            <h1 className={`callNumber ${font_murecho.className}`}>
              📞0123-4567-8910
            </h1>

            <h2>
              受付時間9:00~18:00(年中無休)
            </h2>
          </div>

          <div className="mailButton">
            ✉お問い合わせ
          </div>
        </div>
      </header>

      <style jsx>{`
        .back {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          z-index: 1000;

          height: var(--header-height);

          display: flex;
          align-items: center;

          box-sizing: border-box;

          padding: 4px 8px;

          background-color: rgba(255, 255, 255, 0.93);

          /*
            下のコンテンツとの境界が少し見やすくなる
          */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .nameBox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          min-width: 0;
        }

        .name {
          margin: 0;

          font-size: clamp(17px, 3vw, 32px);
          font-weight: 500;

          white-space: nowrap;
        }

        .subTitle {
          margin: 0;
        }

        .callNumber {
          margin: 0;

          font-size: clamp(14px, 2vw, 28px);
          font-weight: 500;

          white-space: nowrap;
        }

        h2 {
          margin: 0;

          font-size: clamp(11px, 1.5vw, 18px);
          font-weight: 500;

          white-space: nowrap;
        }

        .numberMailInner {
          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 10px;
        }

        .callBox {
          display: flex;
          flex-direction: column;

          align-items: flex-start;
        }

        .mailButton {
          display: flex;
          justify-content: center;
          align-items: center;

          padding: 7px 20px;

          border-radius: 999px;

          background-color: rgb(3, 102, 3);

          color: white;

          font-size: clamp(12px, 1.4vw, 20px);

          white-space: nowrap;
        }

        @media (max-width: 700px) {
          .back {
            height: var(--header-height-mobile);

            padding: 4px 6px;
          }

          .name {
            font-size: clamp(15px, 4.3vw, 19px);
          }

          .subTitle {
            font-size: clamp(10px, 2.8vw, 12px);
          }

          .numberMailInner {
            gap: 4px;

            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
          }

          .callNumber {
            font-size: clamp(11px, 3vw, 14px);
          }

          .callBox h2 {
            font-size: clamp(8px, 2.1vw, 10px);
          }

          .mailButton {
            padding: 4px 12px;

            font-size: clamp(10px, 2.7vw, 12px);
          }
        }

        @media (max-width: 430px) {
          .back {
            padding: 3px 5px;
          }

          .name {
            font-size: 15px;
          }

          .subTitle {
            font-size: 9px;
          }

          .callNumber {
            font-size: 11px;
          }

          .callBox h2 {
            font-size: 8px;
          }

          .mailButton {
            padding: 3px 9px;
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}