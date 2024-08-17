const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./app/**/*.{ts,tsx,html}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
		flowbite.content(),
	],
	theme: {
		extend: {},
	},
	plugins: [flowbite.plugin(), require('daisyui')],
};
