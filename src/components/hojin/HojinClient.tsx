"use client";
import { Zen_Old_Mincho } from "next/font/google";
import TopContent from "./TopContent";
import Zirei from "./Zirei";
import CanDo from "./CanDo";
import Reasons from "./Reasons";
import RequestFlow from "./RequestFlow";
import ContactCTA from "./ContactCTA";
const mincho = Zen_Old_Mincho({ subsets: ["latin"], weight: ["700", "900"] });
export default function HojinClient() {
  return (
    <main className="page">
      <TopContent />
      <Zirei />
      <CanDo />
      <section className="about">
        <div className="koumutenPc">
          <img src="/koumuten.png" alt="私たちは住まいと暮らしの工務店です" />
        </div>
        <div className="koumutenMobile">
          <img src="/koumuten_L.png" alt="私たちについて" />
          <img src="/koumuten_R.png" alt="サポート体制" />
        </div>
      </section>
      <Reasons />
      <RequestFlow />
      <ContactCTA />
      <style jsx>{`
        .page {
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: #102b4f;
        }
        .page :global(*) {
          box-sizing: border-box;
        }
        .page :global(h1),
        .page :global(h2),
        .page :global(h3) {
          font-family: ${mincho.style.fontFamily}, serif;
        }
        .about {
          max-width: 1370px;
          margin: 0 auto;
        }
        .koumutenPc {
          display: flex;
          justify-content: center;
        }
        .koumutenPc img {
          display: block;
          width: 100%;
          height: auto;
        }
        .koumutenMobile {
          display: none;
        }
        @media (max-width: 600px) {
          .koumutenPc {
            display: none;
          }
          .koumutenMobile {
            display: flex;
            flex-direction: column;
          }
          .koumutenMobile img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}
