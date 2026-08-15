import type React from 'react';

import type { SystemEntry } from '@/content/profile';

type GlyphProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

/* Neutral, drawn for this site. No department or state emblems. */

const Tray = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M3 15.5h18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z" />
    <circle cx="12" cy="9" r="4.5" />
    <path d="M12 4.5v-1" />
  </svg>
);

const Grid = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
    <path d="M14 17h6.5M17.25 13.75v6.5" />
  </svg>
);

const Cycle = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20.5 3.5V7h-3.5" />
    <circle cx="12" cy="12" r="3.25" />
  </svg>
);

const CaseFile = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M3.5 6.5a1 1 0 0 1 1-1H9l1.75 2h8.75a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
    <path d="M8 12.5h8M8 15.75h5" />
  </svg>
);

const Clipboard = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M8.5 4.5H6.75a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H15.5" />
    <rect x="8.5" y="2.75" width="7" height="3.5" rx="1" />
    <path d="M9 13.25l1.75 1.75L15 10.75" />
  </svg>
);

const Layers = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M12 3.25 21 8l-9 4.75L3 8Z" />
    <path d="m4.75 11.5-1.75.9L12 17l9-4.6-1.75-.9" />
    <path d="m4.75 15.6-1.75.9L12 21l9-4.5-1.75-.9" />
  </svg>
);

const glyphs: Record<SystemEntry['icon'], React.ComponentType<GlyphProps>> = {
  tray: Tray,
  grid: Grid,
  cycle: Cycle,
  case: CaseFile,
  clipboard: Clipboard,
  layers: Layers,
};

export function SystemGlyph({ name, className }: { name: SystemEntry['icon']; className?: string }) {
  const Glyph = glyphs[name];
  return <Glyph className={className} />;
}

export const MailIcon = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <rect x="2.75" y="5" width="18.5" height="14" rx="1.5" />
    <path d="m3.5 6.5 8.5 6.25L20.5 6.5" />
  </svg>
);

export const LinkedInIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const GitHubIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className={className}>
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.57v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.08-.75.09-.73.09-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.68.82.57A12 12 0 0 0 12 .3Z" />
  </svg>
);

export const ArrowIcon = ({ className }: GlyphProps) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
