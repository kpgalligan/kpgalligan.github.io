const defaultTheme = require('tailwindcss/defaultTheme');

const round = (num) =>
  num
  .toFixed(7)
  .replace(/(\.[0-9]+?)0+$/, '$1')
  .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const disabledCss = {
  // 'code::before': false,
  // 'code::after': false,
  // 'blockquote p:first-of-type::before': false,
  // 'blockquote p:last-of-type::after': false,
  // pre: false,
  code: false,
  p: {
    marginTop: em(16, 16),
    marginBottom: em(16, 16),
  },
  h1: {
    marginBottom: em(18, 36),
  },
  h2: {
    marginTop: em(24, 24),
    marginBottom: em(12, 24),
  },
  h3: {
    marginTop: em(16, 20),
    marginBottom: em(8, 20),
  },
  h4: {
    marginTop: em(16, 20),
    marginBottom: em(8, 20),
  }
  // 'pre code': false,
  // 'code::before': false,
  // 'code::after': false,
}


module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
