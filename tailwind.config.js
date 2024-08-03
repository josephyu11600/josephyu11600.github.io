const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: ['./app/**/*.{ts,tsx,html}', flowbite.content()],
	theme: {
		extend: {},
	},
	plugins: [flowbite.plugin()],
};
