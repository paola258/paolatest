module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,json,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};