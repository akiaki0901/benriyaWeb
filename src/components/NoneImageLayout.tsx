"use client";

import Header from "./Header/Header";
import Footer from "./Footer";

export default function NoneImageLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="page">
        <Header/>

        <main className="main">
          {children}
        </main>

        <Footer/>
      </div>

      <style jsx>{`
        .page {
          width: 100vw;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: white;
        }

        .main {
          width: 100vw;
          max-width: none;
          margin: 0;
          padding-top: 80px;

          display: block;
        }
      `}</style>
    </>
  );
}