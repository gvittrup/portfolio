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
      width: {
        'w-20': '72px',
      },
      boxShadow: {
        innerXL: 'inset 4px 4px 4px 4px rgb(0 0 0 / 0.05)',
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
