import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],
  docs: {
    // autodocs: true
  }
};
export default config;
