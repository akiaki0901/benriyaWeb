import type React from "react";

export type IconName =
  | "home"
  | "truck"
  | "heart"
  | "clean"
  | "vacant"
  | "people"
  | "sofa"
  | "bulb"
  | "door"
  | "window"
  | "curtain"
  | "garden"
  | "carry"
  | "building"
  | "tv"
  | "trash"
  | "escort"
  | "tools"
  | "water"
  | "question"
  | "phone"
  | "person"
  | "document"
  | "mail";

const paths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-7 9 7v10H3Z" />
      <path d="M9 21v-7h6v7" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v11H2ZM14 10h4l4 4v3h-8Z" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </>
  ),
  heart: (
    <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  clean: (
    <>
<svg width="24" height="24" version="1.1" viewBox="0 0 53.884 43.885" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(-75.791 -112.14)" fill="none" >
  <rect transform="matrix(.61473 .78874 -.73907 .67363 0 0)" x="162.85" y="6.6117" width="10.479" height="3.9664" strokeWidth="1.2748"/>
  <path d="m84.886 118.74c1.334-2.7364 1.4741-5.5208 1.4741-5.5208s-0.03506 1.3971 1.5503 6.2566c0.61925 1.8982 3.5001 2.3578 3.5001 2.3578s-3.0909 1.1416-3.7013 3.1273c-1.1707 3.8088-1.3909 4.7667-1.3909 4.7667s-0.28851-0.91565-1.592-4.7392c-0.67033-1.9663-3.5001-3.1548-3.5001-3.1548s2.6867-1.0975 3.6598-3.0936z" strokeWidth="1.2729"/>
  <path d="m90.867 136.88 6.124 7.6091s-6.1317 11.214-9.3733 13.003c-2.0974 1.1574-1.9145-0.96179-2.7201-2.0006-0.86599-1.1166-0.6937-3.1342-1.787-3.9856-1.0958-0.85332-2.1364-1.8613-3.0174-2.9216-0.91229-1.098-3.6242-1.9018-2.8847-3.1428 2.0194-3.3889 13.658-8.5613 13.658-8.5613z" strokeWidth="1.2729"/>
  <rect transform="matrix(.62144 .78346 -.73196 .68135 0 0)" x="165.64" y="-31.075" width="4.0858" height="38.466" strokeWidth="1.2748"/>
 </g>
</svg>
    </>
  ),
  vacant: (
    <>
      <path d="m3 11 9-7 9 7v10H3Z" />
      <path d="M8 21v-5h8v5M6 12h12" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 20v-2c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v2M14 14c.8-.7 1.8-1 3-1 2.5 0 4.5 2 4.5 4.5V20" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 12h16v7H4Z" />
      <path d="M2 14v-3a2 2 0 0 1 4 0v3M22 14v-3a2 2 0 0 0-4 0v3M6 8h12v4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1 .8-1 2-1 2H9s0-1.2-1-2Z" />
    </>
  ),
  door: (
    <>
      <path d="M5 22V3h14v19M9 22V7h7v15" />
      <circle cx="14" cy="14" r=".5" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M12 4v16M3 12h18" />
    </>
  ),
  curtain: (
    <>
      <path d="M4 3h16M6 3c0 7-2 9-2 18h7V3M18 3c0 7 2 9 2 18h-7V3" />
    </>
  ),
  garden: (
    <>
      <path d="M12 22v-8M12 16c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 13c0-5 3-7 7-7 0 5-3 7-7 7Z" />
    </>
  ),
  carry: (
    <>
      <path d="M5 9h14v12H5Z" />
      <path d="M9 9V6h6v3M3 13h2M19 13h2" />
    </>
  ),
  building: (
    <>
      <path d="M5 22V3h14v19M2 22h20" />
      <path d="M9 7h2M14 7h2M9 11h2M14 11h2M10 22v-5h4v5" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="1" />
      <path d="m8 3 4 3 4-3M9 22h6" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M9 7V4h6v3M6 7l1 15h10l1-15M10 11v7M14 11v7" />
    </>
  ),
  escort: (
    <>
      <circle cx="9" cy="6" r="3" />
      <path d="M3 21v-4c0-3 2.7-5 6-5s6 2 6 5v4M17 8h4M19 6v4" />
    </>
  ),
  tools: (
    <>
      <path d="m14 6 4-4 4 4-4 4M13 7 3 17l4 4 10-10" />
      <path d="m3 3 5 5" />
    </>
  ),
  water: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />,
  question: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 9a2.8 2.8 0 1 1 4 2.5c-1 .5-1.5 1-1.5 2M12 17h.01" />
    </>
  ),
  phone: (
    <path d="M6.6 2.8 9 7.5 6.9 9c1.5 3 3.9 5.4 6.9 6.9l1.5-2.1 4.7 2.4-.9 4.1c-.2.9-1 1.5-1.9 1.5C9 21.8 2.2 15 2.2 6.6c0-.9.6-1.7 1.5-1.9l2.9-.7Z" />
  ),
  person: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M4 22v-2c0-5 3.5-8 8-8s8 3 8 8v2" />
    </>
  ),
  document: (
    <>
      <path d="M5 2h10l4 4v16H5Z" />
      <path d="M15 2v5h5M8 12h8M8 16h6" />
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
