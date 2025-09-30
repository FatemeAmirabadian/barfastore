/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // مسیر فایل‌های پروژه
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Shabnam', 'Tahoma', 'sans-serif'], // فونت پیش‌فرض
        },
      },
    },
    plugins: [],
  };
  