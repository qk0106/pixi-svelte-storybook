/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
