<script lang="ts" context="module">
	import { Particle } from 'pixi-svelte';

	import fountainCoinsConfig from './assets/fountainCoinsConfig.json';

  export const meta = {
    title: "pixi-svelte/Particle",
    component: Particle,
			args: {
			rotation: 0,
			skew: 0,
			visible: true,
			x: 400,
			y: 400,
			width: 100,
			height: 100,
			zIndex: 1,
			alpha: 1,
			emit: true,
			emitSpeed: 0.00234,
			key: 'coins',
			config: fountainCoinsConfig,
			artOptions: { framerate: 8 },
		}
  }
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';

	import StoryPixi from './StoryPixi.svelte';

	const assets = {
		coins: { type: 'spriteSheet', src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/coins/coins.json' },
	};
</script>

<Story let:args name="Preview" >
	<StoryPixi {assets}>
		<Particle {...args} />
	</StoryPixi>
</Story>
