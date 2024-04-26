import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#ffdbc4',
        'secondary': '#022235',
        'gray-special': '#e3e3e3'
      },
      backgroundImage: {
        main: "url('/img/patrones/2.webp')",
        patron: 'url(/img/patrones/fondo1.webp)',
        patron2: 'url(/img/patrones/fondo2.png)',

        radio1: 'url(/img/programas/radio1.webp)',
        radio2: 'url(/img/programas/radio2.webp)',
        radio3: 'url(/img/programas/radio3.webp)',

       

        manuel: 'url(/img/manuel-vera.jpeg)',
        kikis: 'url(/img/kikis.jpeg)',
        secret: 'url(/img/secrete.jpeg)'
      },
    },
  },
  plugins: [],
} satisfies Config;

