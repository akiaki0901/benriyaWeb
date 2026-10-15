"use client";

export default function ServiceCard() {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <Icon
            img="/Icons/kazai-seiri.svg"
            title="家財整理"
          />

          <div className="line" />

          <Icon
            img="/Icons/seizen-seiri.svg"
            title="生前整理"
          />

          <div className="line" />

          <Icon
            img="/Icons/hikkoshi-unpan.svg"
            title="引っ越し・運搬"
          />

          <div className="line" />

          <Icon
            img="/Icons/kaigo-hokengai.svg"
            title="介護保険外サービス"
          />

          <div className="line" />

          <Icon
            img="/Icons/akiya.svg"
            title="空き家管理"
          />

          <div className="all mobileAll">
            全てのサービスを見る ▶
          </div>
        </div>

        <div className="all pcAll">
          全てのサービスを見る ▶
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          width: 100%;
        }

        .card {
          display: flex;
          align-items: center;
          justify-content: space-between;

          border: 1px solid rgb(221, 221, 221);
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.7);
          box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);

          margin: 15px 5px 5px;
          padding: 5px 10px;
        }

        .line {
          width: 1px;
          height: 110px;
          background-color: #b1b0b0;
          border-radius: 999px;
        }

        .all {
          background-color: rgb(3, 102, 3);
          border-radius: 999px;
          color: white;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
        }

        .pcAll {
          width: 270px;
          height: 45px;
        }

        .mobileAll {
          display: none;
        }

        /* =========================
           タブレット
           ========================= */
        @media (max-width: 1100px) {
          .card {
            display: grid;

            grid-template-columns: repeat(
              3,
              minmax(180px, 1fr)
            );

            width: min(92vw, 760px);

            gap: 15px 10px;

            padding: 15px;
          }

          .line {
            display: none;
          }
        }

        /* =========================
           スマホ
           ========================= */
        @media (max-width: 700px) {
          .card {
            grid-template-columns: repeat(
              2,
              minmax(130px, 1fr)
            );

            width: auto;
            max-width: calc(100vw - 20px);

            gap: 5px 0;

            margin: 5px;
            padding: 8px;

            background-color: rgba(
              255,
              255,
              255,
              0.62
            );
          }

          .pcAll {
            display: none;
          }

          .mobileAll {
            display: flex;

            height: 40px;

            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

function Icon({
  img,
  title,
}: {
  img?: string;
  title: string;
}) {
  return (
    <>
      <div className="container">
        {img && (
          <img
            className="icon"
            alt={title}
            src={img}
          />
        )}

        <h2 className="title">
          {title}
        </h2>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 5px 10px;

          width: 220px;

          justify-self: center;
        }

        .icon {
          width: 80px;
          height: 80px;

          object-fit: contain;
        }

        .title {
          margin: 5px 0 0;

          font-weight: 500;

          font-size: clamp(
            16px,
            1.6vw,
            24px
          );

          white-space: nowrap;
        }

        /* =========================
           タブレット
           ========================= */
        @media (max-width: 1100px) {
          .container {
            width: 180px;

            padding: 5px;
          }

          .icon {
            width: 65px;
            height: 65px;
          }

          .title {
            font-size: clamp(
              15px,
              2vw,
              20px
            );
          }
        }

        /* =========================
           スマホ
           ========================= */
        @media (max-width: 700px) {
          .container {
            width: 120px;

            padding: 3px 10px;
          }

          .icon {
            width: 50px;
            height: 50px;
          }

          .title {
            font-size: clamp(
              11px,
              3.5vw,
              14px
            );
          }
        }
      `}</style>
    </>
  );
}