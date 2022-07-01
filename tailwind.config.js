/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['monospace','ui-monospace'],
      },
    },
    screens: {
      //@media (min-width: 640px){...}
      sm: '640px',
      //@media (min-width: 768px 960){...}
      md: '768px',
      //@media (min-width: 1024px){...}
      lg: '1024px',
      //@media (min-width: 1280px){...}
      xl: '1280px',
      //@media (min-width: 1536px){...}
      '2xl': '1536px'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
