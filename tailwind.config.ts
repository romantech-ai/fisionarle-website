import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta Nexum Fisioterapia - Beige/Taupe/Gris
        primary: {
          50: '#FAF8F5',
          100: '#F5F1EC',
          200: '#E8E2D9',
          300: '#D4CFC7',
          400: '#BDB5A8',
          500: '#A89F91',
          600: '#918779',
          700: '#7A6F61',
          800: '#635849',
          900: '#4C4131',
        },
        secondary: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#8F8F8F',
          500: '#6B6B6B',
          600: '#565656',
          700: '#414141',
          800: '#2C2C2C',
          900: '#171717',
        },
        accent: {
          50: '#FDF8F3',
          100: '#F9EFE3',
          200: '#F2DCC4',
          300: '#E6C69E',
          400: '#D4AD78',
          500: '#C4A77D',
          600: '#A88A5E',
          700: '#8B7355',
          800: '#6E5A42',
          900: '#51412F',
        },
        // Colores para especialidades
        suelopelvico: '#C4A77D',
        invasiva: '#8B7355',
        manual: '#A89F91',
        pilates: '#6B6B6B',
        atm: '#918779',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
