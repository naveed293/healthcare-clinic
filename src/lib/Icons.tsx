import type { SVGProps } from "react";

const P = {
  "heart-pulse": (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </>
  ),
  "heart-handshake": (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5" />
      <path d="M8.5 14H14l2.21 2.1a1.5 1.5 0 0 1-2.12 2.14L11 15.4a9.6 9.6 0 0 0-2.5.6 1.34 1.34 0 0 1-.5 2L5 20.5" />
    </>
  ),
  stomach: (
    <>
      <path d="M9 3v4.5c0 1.5.8 2.5 2.5 2.5" />
      <path d="M7.5 3h3M13.5 3v3" />
      <path d="M13.5 6c4.5-.5 7 2 7 5.5 0 5-3.5 9.5-9 9.5-3.5 0-6-2-6-5.5 0-2 1.5-3 3.5-3h2" />
    </>
  ),
  bandage: (
    <>
      <path d="M10 10.01h.01M10 14.01h.01M14 10.01h.01M14 14.01h.01" />
      <path d="M18 6v12M6 6v12" />
      <rect x="3.5" y="5" width="17" height="14" rx="3" />
    </>
  ),
  "plus-medical": (
    <>
      <path d="M5 12h4V8h6v4h4v6h-4v4H9v-4H5Z" />
    </>
  ),
  "calendar-check": (
    <>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M8 2v4M16 2v4M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  folder: (
    <>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M12 10v6M9 13h6" />
    </>
  ),
  "shield-plus": (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="M12 9v6M9 12h6" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M12 5v13" />
    </>
  ),
  baby: (
    <>
      <path d="M9 12h.01M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5S14.6 8 13.5 8c-.8 0-1.5-.4-1.5-1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 18h12M8 22h8" />
      <path d="M12 14a6 6 0 0 0 6-6l-4-4-6 6Z" />
      <path d="M11 7 8 10" />
      <path d="M15 14a5 5 0 0 0 5-5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M4 2v6a6 6 0 0 0 12 0V2" />
      <path d="M2 2h2M14 2h2" />
      <path d="M10 14v2a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-3" />
      <circle cx="22" cy="14" r="2" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  star: (
    <path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.48l1.1-6.47-4.7-4.58 6.51-.95L12 2.6Z" />
  ),
  "arrow-right": <path d="M5 12h14M13 5l7 7-7 7" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4.3-4.3" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M8 2v4M16 2v4M3 10h18" />
    </>
  ),
  video: (
    <>
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="13" height="12" rx="3" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.2a4 4 0 0 1 0 7.7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
    </>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
  ),
  "shield-check": (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  "play-filled": <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9.5a.5.5 0 0 1 .5-.5Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a5 5 0 0 1 5 5v7h-4v-7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7H9v-7a5 5 0 0 1 5-5h2Z" />
      <rect x="2" y="9" width="4" height="11" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  twitter: (
    <path d="M22 4.4c-.7.3-1.5.5-2.3.6a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.4 5a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5 4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A11.3 11.3 0 0 1 2 18.6a16 16 0 0 0 8.6 2.5c6.4 0 10-5.5 9.8-10.4.7-.6 1.3-1.3 1.6-2.1Z" />
  ),
  youtube: (
    <>
      <path d="M2.5 7.5c1-.9 5.4-1 9.5-1s8.5.1 9.5 1c.9 1 1 2.4 1 4.5s-.1 3.5-1 4.5c-1 .9-5.4 1-9.5 1a72 72 0 0 1-9.5-1c-.9-1-1-2.4-1-4.5s.1-3.5 1-4.5Z" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
  sparkles: (
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
  ),
  quote: (
    <path d="M10 11H6.5a2.5 2.5 0 0 1 0-5H8a2 2 0 0 1 2 2Zm0 0v1.5A5.5 5.5 0 0 1 4.5 18H4m16-7h-3.5a2.5 2.5 0 0 1 0-5H18a2 2 0 0 1 2 2Zm0 0v1.5A5.5 5.5 0 0 1 16.5 18H16" />
  ),
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
} as const;

export type IconName = keyof typeof P;

const FILLED = new Set(["star", "play-filled", "quote", "twitter", "facebook"]);

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
  ...rest
}: { name: IconName | string; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  const filled = FILLED.has(name);
  const content = (P as Record<string, React.ReactNode>)[name] ?? P["sparkles"];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  );
}
