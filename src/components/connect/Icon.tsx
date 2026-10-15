import type React from "react";

export type IconName =
  | "document"
  | "heart"
  | "people"
  | "chat"
  | "chart"
  | "mail";

const paths: Record<IconName, React.ReactNode> = {
  document: (
    <>
      <path d="M5 2h10l4 4v16H5Z" />
      <path d="M15 2v5h5M8 11h8M8 15h8M8 19h5" />
    </>
  ),
  heart: (
    <>
      <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />
      <path d="M8 12h8" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 20v-2c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v2M14 14c.8-.7 1.8-1 3-1 2.5 0 4.5 2 4.5 4.5V20" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4A8 8 0 1 1 21 12Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  chart: (
    <>
      <path d="M4 21V11M10 21V6M16 21V9M22 21V3" />
      <path d="m3 8 6-4 6 2 7-5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
};

export default function Icon({
  name,
  size = 36,
}: {
  name: IconName;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
