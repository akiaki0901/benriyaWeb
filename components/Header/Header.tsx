"use client";

import { useState, type CSSProperties } from "react";
import { BIZ_UDMincho, Murecho } from "next/font/google";
import Link from "next/link";
import styles from "./Header.module.css";

const fontBiz = BIZ_UDMincho({ subsets: ["latin"], weight: ["400"] });
const fontMurecho = Murecho({ subsets: ["latin"], weight: ["500", "700"] });

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderProps = {
  /** 下線位置。先頭を0として指定し、-1で非表示 */
  activeIndex?: number;
  /** アクティブリンク下線の色 */
  underlineColor?: string;
  /** お問い合わせボタンの背景色 */
  contactButtonColor?: string;
  /** お問い合わせボタンのホバー色 */
  contactButtonHoverColor?: string;
  /** ヘッダーを画面上部に固定するか */
  fixed?: boolean;
  navItems?: HeaderNavItem[];
  logoSrc?: string | null;
  contactHref?: string;
};

const defaultNavItems: HeaderNavItem[] = [
  { label: "トップ", href: "/" },
  { label: "個人・ご家族の方へ", href: "/personal" },
  { label: "法人・福祉関係者の方へ", href: "/hojin" },
  { label: "サービス内容", href: "/service" },
  { label: "活用事例", href: "/case" },
  { label: "選ばれる理由", href: "/reason" },
  { label: "ご依頼の流れ", href: "/flow" },
];

export default function Header({
  activeIndex = -1,
  underlineColor = "#0b326f",
  contactButtonColor = "#0b326f",
  contactButtonHoverColor = "#174a87",
  fixed = true,
  navItems = defaultNavItems,
  logoSrc = "/Icons/Header.svg",
  contactHref = "/contact",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const customColors = {
    "--underline-color": underlineColor,
    "--contact-color": contactButtonColor,
    "--contact-hover-color": contactButtonHoverColor,
  } as CSSProperties;

  return (
    <header
      className={[
        styles.header,
        fixed ? styles.fixed : "",
        fontBiz.className,
      ].join(" ")}
      style={customColors}
    >
      <div className={styles.inner}>
        <Link
          className={styles.brand}
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          {logoSrc && (
            <img
              className={styles.logo}
              src={logoSrc}
              alt=""
              width={52}
              height={52}
            />
          )}
          <span className={styles.brandText}>
            <strong>株式会社プロジェクトホープ</strong>
            <small>住まいと暮らしの工務店</small>
          </span>
        </Link>

        <nav
          className={[
            styles.navigation,
            isMenuOpen ? styles.navigationOpen : "",
          ].join(" ")}
          aria-label="メインナビゲーション"
        >
          <div className={styles.navLinks}>
            {navItems.map((item, index) => (
              <Link
                className={[
                  styles.navLink,
                  index === activeIndex ? styles.active : "",
                ].join(" ")}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                key={item.href + item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            className={[styles.desktopPhone, fontMurecho.className].join(" ")}
          >
            <div>
              <PhoneIcon />
              <a href="tel:0120123456">0120-123-456</a>
            </div>
            <small>受付時間 9:00〜18:00（年中無休）</small>
          </div>

          <Link
            className={styles.contactButton}
            href={contactHref}
            onClick={() => setIsMenuOpen(false)}
          >
            <MailIcon />
            <span>お問い合わせ</span>
          </Link>
        </nav>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={[styles.mobilePhone, fontMurecho.className].join(" ")}>
        <PhoneIcon />
        <a href="tel:0120123456">0120-123-456</a>
        <small>9:00〜18:00（年中無休）</small>
      </div>
    </header>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.6 2.8 9 7.5 6.9 9c1.5 3 3.9 5.4 6.9 6.9l1.5-2.1 4.7 2.4-.9 4.1c-.2.9-1 1.5-1.9 1.5C9 21.8 2.2 15 2.2 6.6c0-.9.6-1.7 1.5-1.9l2.9-.7Z" />
    </svg>
  );
}
