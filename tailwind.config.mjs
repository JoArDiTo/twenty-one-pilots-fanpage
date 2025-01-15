/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#e03d2e',
				contrast: '#ffd800',
				'top-black': '#231f20'
			},
			backgroundImage: {
        "top-found": "url(/images/background-2.webp)",
      },
			fontFamily: {
				'primary': ['"font-atomic"', 'system-ui'],
			},
		},
	},
	plugins: [],
}
