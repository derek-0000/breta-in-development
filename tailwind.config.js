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
        'salonCarouselImage0':"url('/images/see-you-soon-cropped-shot-of-a-handsome-young-bar-2023-01-04-20-37-56-utc 1.png')",
        'salonCarouselImage1':"url('/images/hairdresser-checking-her-schedule-2022-04-27-01-52-24-utc 1.png')",
        'salonCarouselImage2':"url('/images/dyeing-hair-in-hairdressing-salon-2021-08-26-15-43-19-utc 1.png')",
        'salonCarouselImage3':"url('/images/asian-young-asian-woman-setting-open-sign-at-the-s-2022-12-16-03-21-34-utc 1.png')",
        'MobileCarouselImage0':"url('/images/MobileCarouselImage1.png')",
        'MobileCarouselImage1':"url('/images/MobileCarouselImage2.png')",
        'MobileCarouselImage2':"url('/images/MobileCarouselImage3.png')",
        'MobileCarouselImage3':"url('/images/MobileCarouselImage4.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
