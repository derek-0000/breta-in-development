/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'breta-blue':'#365C72',
        'breta-dark-blue':'#1C2F3B',
        'breta-gray':'#B2C0C9',
        'breta-light-gray':'#E6EBED',
        'breta-dark-gray':'#668393',
        'breta-green':'#29CC00',
        'breta-light-green':'#A5D2BF',
        'breta-dark-green':'#5A948A',
        'breta-yellow':'#E0D81F',
        'breta-orange':'#FF7A00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
