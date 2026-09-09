import type React from "react";

export type IconName =
  | "phone"
  | "people"
  | "heart"
  | "bed"
  | "list"
  | "wall"
  | "key"
  | "clipboard"
  | "document"
  | "tools"
  | "mail";

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M6.6 2.8 9 7.5 6.9 9c1.5 3 3.9 5.4 6.9 6.9l1.5-2.1 4.7 2.4-.9 4.1c-.2.9-1 1.5-1.9 1.5C9 21.8 2.2 15 2.2 6.6c0-.9.6-1.7 1.5-1.9l2.9-.7Z" />
  ),
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 20v-2c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v2M14 14c.8-.7 1.8-1 3-1 2.5 0 4.5 2 4.5 4.5V20" />
    </>
  ),
  heart: (
    <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  bed: (
    <>
      <path d="M3 18v-7h18v7M3 15h18M6 11V7h6a4 4 0 0 1 4 4" />
      <path d="M3 21v-3M21 21v-3" />
    </>
  ),
  list: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  wall: (
    <>
      <path d="M4 3h16v18H4Z" />
      <path d="m14 5-3 5 3 2-4 7M17 16l4 4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="5" />
      <path d="m12 12 8-8M16 8l3 3M18 6l2 2" />
    </>
  ),
  clipboard: (
    <>
      <path d="M7 4H5v18h14V4h-2" />
      <rect x="8" y="2" width="8" height="5" rx="1" />
      <path d="M8 12h8M8 16h6" />
    </>
  ),
  document: (
    <>
      <path d="M5 2h10l4 4v16H5Z" />
      <path d="M15 2v5h5M8 12h8M8 16h6" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4-4 4 4-4 4M13 7 3 17l4 4 10-10" />
      <path d="m3 3 5 5" />
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
