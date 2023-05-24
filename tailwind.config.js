/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				mint: '#02c39a',
				mintHover: '#029e7c',
				mintHoverHover: '#008064',
				blackBackground: '#13121a',
				input: '#1c1c25',
				inputHover: '#17171f',
				accent: '#577EF2',
				accentHover: '#4f73e0',
				navbarBG: '#1d1f21',
				search: '#111117',
				searchHover: '#09090d'
			}
		}
	},
	plugins: []
};
