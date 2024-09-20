/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F4881C',
				borderColor: '#767676',
			},
			borderWidth: {
				small: '0.5px',
			}
			
		},
	},
	plugins: [],
}
