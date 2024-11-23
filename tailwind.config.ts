import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#F0F1F1',
        tertiary: '#2E2E2E',
        muted: '#434343',
        info: '#EFF0F5'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '4rem'
      }
    }
  },
  plugins: []
} satisfies Config;
