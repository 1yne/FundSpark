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
				input: '#1c1c25'
			}
		}
	},
	plugins: []
};
