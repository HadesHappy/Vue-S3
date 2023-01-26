/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				redPrimary: '#C21734',
				levisGray: '#B5B5B6',
				brandDarkGray: '#403E3F',
				lightGray: '#E5E5E5',
			},
			fontFamily: {
				Roboto: ['Roboto, sans-serif'],
			},
		},
	},
	plugins: [],
}
