/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"red-50": " #FF0000;",
				// "white": "#FFFFFF;",
			},
			fontFamily: {
				Inter: ["Inter-Light", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			height: {
				80: '80px',
				32: '32px',
				3: '370px',
			}
		},
	},
	plugins: [],
};
