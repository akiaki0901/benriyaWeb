import type React from "react";

type IconName =
  | "phone"
  | "people"
  | "heart"
  | "home"
  | "truck"
  | "clean"
  | "tools"
  | "document"
  | "handshake"
  | "building"
  | "mail"
  | "clock";

const paths: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M6.6 2.8 9 7.5 6.9 9c1.5 3 3.9 5.4 6.9 6.9l1.5-2.1 4.7 2.4-.9 4.1c-.2.9-1 1.5-1.9 1.5C9 21.8 2.2 15 2.2 6.6c0-.9.6-1.7 1.5-1.9l2.9-.7Z" />
  ),
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 20v-2.2c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5V20M14 14.2c.8-.8 1.8-1.2 3-1.2 2.5 0 4.5 2 4.5 4.5V20" />
    </>
  ),
  heart: (
    <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7v10H3Z" />
      <path d="M9 21v-7h6v7M8 9h.01M16 9h.01" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v11H2ZM14 10h4l4 4v3h-8Z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </>
  ),
  clean: (
    <>
      <path d="m4 21 5-5M8 17l9-14 3 2-8 14Z" />
      <path d="M3 8h5M5.5 5.5v5M16 15h5M18.5 12.5v5" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4-4 4 4-4 4M13 7 3 17l4 4 10-10" />
      <path d="m3 3 5 5M5 1l4 4" />
    </>
  ),
  document: (
    <>
      <path d="M5 2h10l4 4v16H5Z" />
      <path d="M15 2v5h5M8 12h8M8 16h8" />
    </>
  ),
  handshake: (
    <>
      <path d="m8 12 3 3c1 1 2.5-.5 1.5-1.5l-2-2M3 8l4-3 4 3 2-1 4 4" />
      <path d="m3 8-2 5 4 2 2-3M21 8l2 5-4 2-2-3M8 16l2 2M6 17l2 2" />
    </>
  ),
  building: (
    <>
      <path d="M5 22V3h14v19M2 22h20" />
      <path d="M9 7h2M14 7h2M9 11h2M14 11h2M10 22v-5h4v5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
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
