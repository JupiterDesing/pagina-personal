/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F4881C',
				borderColor: '#767676',
			},
			backgroundImage: {
				backgroundDefault: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #1B1B1B 100%)',
				backgroundPrimary: "radial-gradient(50% 50% at 50% 50%, #F4881C 0%, rgba(244, 136, 28, 0.00) 100%);"
			},
			borderWidth: {
				small: '0.5px',
			},
			keyframes: {
				'fade-in-up': {
				  '0%': {
					opacity: '0',
					transform: 'translateY(20px)',
				  },
				  '100%': {
					opacity: '1',
					transform: 'translateY(0)',
				  },
				},
			  },
		},
	},
	plugins: [require("tailwindcss-animated")],
}
