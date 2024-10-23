/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx,vue}',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './index.vue',
        './error.vue',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}