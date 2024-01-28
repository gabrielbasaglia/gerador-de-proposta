/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',

    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
      margin: {
        a4: 'auto',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
