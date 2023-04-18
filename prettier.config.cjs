const prettierSvelte = import('prettier-plugin-svelte');
const prettierTailwind = import('prettier-plugin-tailwindcss');

module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [prettierSvelte, prettierTailwind],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
