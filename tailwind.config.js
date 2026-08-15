/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E2226',
          raised: '#152C30',
          rule: '#23403F',
        },
        bone: {
          DEFAULT: '#E8E4DA',
          raised: '#F1EEE7',
          rule: '#D2CCBE',
        },
        // Secondary text. Values chosen to clear 4.5:1 against their own
        // ground for small mono type — see the contrast note in README.
        slate: {
          ink: '#8CA3A1', // 6.17 on ink
          bone: '#4C5D5E', // 5.45 on bone
        },
        cobalt: {
          DEFAULT: '#2E5BFF', // accent + button ground (white text: 5.18)
          soft: '#6E8FFF', // 5.52 on ink — accent text on the dark ground
          'on-bone': '#2445C9', // 5.97 on bone — accent text on the light ground
          deep: '#1B3BAE', // button hover
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Display scale — tight tracking is applied per-use, not globally.
        'display-xl': ['clamp(1.875rem, 4vw, 3.25rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(1.625rem, 3.2vw, 2.5rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.375rem, 2.4vw, 1.875rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'entry': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'stamp': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
        'stamp-lg': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      maxWidth: {
        register: '78rem',
        prose: '38rem',
      },
      keyframes: {
        'stamp-in': {
          '0%': { opacity: '0', transform: 'translateY(0.9rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'rule-draw': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'stamp-in': 'stamp-in 0.62s cubic-bezier(0.16, 1, 0.3, 1) both',
        'rule-draw': 'rule-draw 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
