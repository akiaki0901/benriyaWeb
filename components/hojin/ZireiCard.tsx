import Link from "next/link";
import React from "react";

type Props = {
  number: string;
  title: string;
  subTitle: string;
  image: string;
  children: React.ReactNode;
  color: string;
  hoverColor: string;
  next?: string;
};
export default function ZireiCard({
  number,
  title,
  subTitle,
  image,
  children,
  color,
  hoverColor,
  next,
}: Props) {
  const button = (
    <button>
      詳しく見る <span>→</span>
    </button>
  );
  return (
    <article className="card">
      <h2>
        <em>{number}</em>
        {title}
      </h2>
      <h3>{subTitle}</h3>
      <img src={image} alt="" />
      <div className="items">{children}</div>
      <div className="button">
        {next ? <Link href={next}>{button}</Link> : button}
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 16px;
          border: 1px solid #e1e4e7;
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 3px 12px #092a5120;
          box-sizing: border-box;
        }
        .card h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: ${color};
          font-family: serif;
          font-size: clamp(17px, 1.55vw, 24px);
        }
        em {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: ${color};
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-style: normal;
        }
        .card h3 {
          margin: 8px 0 12px;
          color: #202b38;
          font-size: 12px;
          line-height: 1.5;
        }
        .card img {
          display: block;
          width: 100%;
          height: 145px;
          object-fit: cover;
          border-radius: 6px;
        }
        .items {
          font-size: 13px;
          line-height: 1.75;
          font-weight: 600;
          color: #263443;
          padding: 8px 2px;
        }
        .button {
          display: flex;
          justify-content: center;
          margin-top: auto;
        }
        .button :global(a) {
          text-decoration: none;
        }
        .button :global(button) {
          min-width: 190px;
          border: 0;
          border-radius: 999px;
          padding: 10px 26px;
          background: ${color};
          color: white;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }
        .button :global(button:hover) {
          background: ${hoverColor};
          transform: translateY(-1px);
        }
        .button :global(span) {
          padding-left: 16px;
        }
        @media (max-width: 700px) {
          .card {
            padding: 14px;
          }
          .card img {
            height: auto;
          }
          .card h2 {
            font-size: 19px;
          }
        }
      `}</style>
    </article>
  );
}
