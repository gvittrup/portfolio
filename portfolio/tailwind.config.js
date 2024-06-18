/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/5': '960 / 300',
      },
      spacing: {
        20: '72px',
        128: '32rem',
        144: '36rem',
        240: '240px',
        360: '360px',
        426: '426px',
        480: '480px',
        540: '540px',
        720: '720px',
        854: '512px',
        1280: '1280px',
        56.5: '56.5%',
      },
      boxShadow: {
        innerXL: 'inset 4px 4px 4px 4px rgb(0 0 0 / 0.05)',
      },
      fontFamily: {
        mokeText: ['extraBold'],
        hpText: ['mediumItalic'],
        aquasauriousTextBold: ['semiBold'],
        aquasauriousTextThin: ['thin'],
        aquasauriousTextRegular: ['regular'],
        hpDuneText: ['outline'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    plugin(
      function ({ addVariant }) {
        addVariant('glow', '.glow-capture .glow-overlay &');
      },
      {
        theme: {
          extend: {
            colors: {
              glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)',
            },
          },
        },
      }
    ),
  ],
};
