"use client";

import Header from "./Header";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import React from "react";

export default function Pagelayout({
  children,
  background,
  mobile_background,
  imgPos,
}: {
  children: React.ReactNode;
  background?: string;
  mobile_background?: string;
  imgPos?: {
    pc?: string;
    mobile?: string;
  };
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 700px)`);

    const update = () => {
      setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      <div className="page">
        <Header />

        <main className="main">
          {children}
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .page {
          width: 100%;
          min-height: 100vh;

          margin: 0;
          padding: 0;

          overflow-x: hidden;

          background: white;
        }

        .main {
          width: 100%;
          max-width: none;

          margin: 0;

          /*
            fixedヘッダーの高さ分だけ
            コンテンツを下にずらす
          */
          padding-top: var(--header-height);

          display: block;
        }

        @media (max-width: 700px) {
          .main {
            padding-top: var(--header-height-mobile);
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --header-height: 80px;
          --header-height-mobile: 68px;
        }
      `}</style>
    </>
  );
}